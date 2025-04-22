import { products } from "../data/products";
import ProductCard from "../Components/ProductCard";
import '../Styles/Products.css'
import { useState } from "react";

const Product =()=>{

    const [selectedCategory, setSelectedCategory] = useState("all")


  

    const filteredProducts = products.filter((product) => {
        if(selectedCategory == "all")
            return true;
        return product.category.toLowerCase() === selectedCategory.toLowerCase();
      });



    return( <div  >
            
            <select className="category-dropdown" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                <option value="electronics" >Electronics</option>
                <option value="gaming" >Gaming</option>
                <option value="home">Home</option>
                <option value="fitness">Fitness</option>
                <option value="all" >All</option>
            </select>
           <div className="card product-container">
           {filteredProducts.map((product)=>{
           return <ProductCard
             key={product.id}
             id ={product.id}
             image={product.image}
             title={product.title}
             price={product.price}

            />  
        })}
           </div>
        
        
    </div>
)}

export default Product;