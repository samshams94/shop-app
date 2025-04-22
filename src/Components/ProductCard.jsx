import '../Styles/ProductCard.css'
import { Link } from 'react-router-dom';

const ProductCard = ({image,title,price,id})=>{
    return <div className="card product-card" >
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>${price}</p>
        <Link to= {`/product/${id}`} >
        <button className='btn btn-primary' >View</button>
        </Link>
    </div>
}

export default ProductCard;