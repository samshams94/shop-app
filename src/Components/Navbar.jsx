import { NavLink } from "react-router-dom";
import "../Styles/Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/authSlice";

const NavBar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();


  return (
    <div className="navbar">
      <h2 className="navbar-logo">ShopSwift App</h2>
      <nav>
        <ul className="navbar-links">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/products">Products</NavLink></li>
          <li><NavLink to="/cart">Cart</NavLink></li>

          {isAuthenticated ? (
            <>
              <li>
                <button onClick={() => dispatch(logoutUser())} className="btn btn-danger">
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li><NavLink to="/login">Login</NavLink></li>
              <li><NavLink to="/register">Register</NavLink></li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;