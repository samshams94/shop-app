import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import NavBar from './Components/Navbar';
import Home from './Pages/Home'
import Products from './Pages/Products'
import Register from './Pages/Register'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import SinglePage from './Pages/SinglePage';
import { useEffect, useState } from 'react';
import './Styles/global.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import PrivateRoute from './Components/PrivateRoute'
import NotFound from './Components/NotFound';
import Footer from './Components/Footer';

function App() {
  
  
  const [cart, setCart]= useState([]);
  const [hasMounted,setHasMounted]= useState(false)
  console.log("Saving to localStorage:", cart, Array.isArray(cart));
  useEffect(()=>{
    const parsedCart = JSON.parse(localStorage.getItem("cart"))
    if(Array.isArray(parsedCart)){
      console.log("Setting cart from storage...");
      setCart(parsedCart)
      setHasMounted(true)
    }
 },[])

  useEffect(()=>{
    if(hasMounted== true)
   localStorage.setItem("cart", JSON.stringify(cart))
  },[cart])
  console.log("Saving cart:", cart);


 

 
 
  const AppWrapper=()=>{
  

    return( <>
    <div>
      {<NavBar/>}
    
      <Routes>
       <Route element={<PrivateRoute />}>
          <Route path='/' element={<Home />} />
       </Route>
        <Route path='/products' element={<Products/>} />
        <Route path='/product/:id' element={<SinglePage />} />
        <Route path='/cart' element={<Cart />}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='*' element={<NotFound/>} />

      </Routes>
      <Footer  />

      

    </div>
    </>
    )
  }

  return (
    <div className="App">
     <Provider store={store} >
       <Router>
        
        <AppWrapper/>

      </Router>
    </Provider>
    
       
    </div>
  );
}

export default App;
