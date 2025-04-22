import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/authSlice";

const NavBar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  console.log("Navbar Auth Status:", isAuthenticated);

  return (
    <div className="navbar">
      <h2 className="navbar-logo">ShopSwift App</h2>
      <nav>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/cart">Cart</Link></li>

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
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;