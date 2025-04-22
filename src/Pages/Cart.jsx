import { useDispatch, useSelector } from "react-redux"
import "../Styles/Cart.css"
import { clearCart, decreaseItem, increaseItem, removeFromCart } from "../redux/cartSlice";



const Cart=()=>{

  const dispatch = useDispatch();
  const cartItem = useSelector((state)=>state.cart.cartItems)

    const totalPrice = cartItem.reduce((acc, item) => acc + item.price * item.quantity, 0)
    
  

    return <div>
            { cartItem.length === 0 ? (
   <p className="empty-cart-msg animate-pop" >Your cart is empty</p>
) : (
    cartItem.map((product)=>{
        return <div className="cart-container card" key={product.id} >
        
       <img src= {product.image} alt="Photo for console" />
        <p className="p-title"> Title: {product.title} </p>
        <p className="p-price">Price: {product.price}</p>
        <button className="btn btn-danger" onClick={()=>dispatch(removeFromCart(product.id))} >Delete</button>
        <p className="p-quantity" >Quantity: {product.quantity}</p>
        <div className="quantity-controls">
         <button className="btn-decrease btn" onClick={() => dispatch(decreaseItem(product.id))}>-</button>
         <button className="btn-increase btn" onClick={() => dispatch(increaseItem(product.id))}>+</button>
        </div>
        </div>
           
    })
) }

    <div className="submit" >
        <p>Total: {totalPrice}</p>
       
           {cartItem.length>0 && (<button className="btn btn-primary" onClick={dispatch(clearCart)} >Clear Cart</button>
                            ,<button className="btn btn-primary" >Check Out</button>)}
           
     </div>
          </div>
}
export default Cart;