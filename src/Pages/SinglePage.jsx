import { useNavigate, useParams } from "react-router-dom"
import { products } from "../data/products";
import '../Styles/SinglePage.css';
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const SinglePage = ()=>{

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();
    const productId = parseInt(id);
    const showProduct = products.find((product)=> product.id ===productId)

    const handleAddToCart = () => {
      console.log("Clicked!", showProduct);
      dispatch(addToCart(showProduct))
    }
  




    return (
        <div className="products" >
            {
                showProduct ? (
                    <div className="product-detail card" >
                        <img src={showProduct.image} alter={showProduct.title}/>
                        <h2>Title:{showProduct.title}</h2>
                        <p>Price: <span className="highlight-price">${showProduct.price}</span></p>
                        <button className="btn" onClick={handleAddToCart} >Add To Cart</button>
                    </div>
                ) : (
                    <p className="not-found animate-pop" style={{color:'red'}} >not found</p>
                )
            }
            
            <div className="cart-navigate" >
                <button className="btn" onClick={()=>navigate("/products")} >back</button>  
            </div>
          
        </div>
    )
}

export default SinglePage;