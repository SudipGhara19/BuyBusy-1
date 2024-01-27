// Importing necessary dependencies and styles
import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../../Contexts/AuthContext"; // Import the useAuth hook
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logo from "./Logo.png";

// Navbar component to display navigation links
function Navbar() {
  // Accessing authentication-related functions and data from the useAuth hook
  const { currentUser, signOutFunc } = useAuth(); 
  // Hook to navigate between pages
  const navigate = useNavigate();

  // Function to handle user signout
  const handleSignOut = async () => {
    try {
      // Sign out the user
      await signOutFunc();
      // Redirect to the home page or any other page after signout
      navigate('/');
      // Show a success toast
      toast.success('Sign Out Successful');
    } catch (error) {
      // Show an error toast in case of signout failure
      toast.error('Sign Out Error');
    }
  };

  // Rendering the Navbar component
  return (
    <>
      <div className="navbar-container">
        <div className="navbar">
          <div className="app-name">
            {/* Application title */}
            <img alt="BusyBuy" src={Logo} style={{height:60, width:220, marginTop:8, marginLeft:10}}/>
          </div>
          <div className="nav-links">
            {currentUser ? (
              // If user is signed in, show these options
              <>
                <NavLink to={"/"} className="nav-link">
                  {/* Home link */}
                  <img
                    src="https://t3.ftcdn.net/jpg/06/37/06/82/360_F_637068250_GiSz2fq4mVi5d19fiiuJgdPflgHeZsgM.webp"
                    alt="Home Icon"
                    className="nav-icon"
                    style={{color: "#fff"}}
                  />
                  Home
                </NavLink>
                <NavLink to={`/users/${currentUser.uid}/orders`} className="nav-link">
                  {/* Orders link */}
                  <img
                  alt="order-icon"
                    src="https://icons.veryicon.com/png/o/miscellaneous/icondian/icon-order-1.png"
                    className="nav-icon"
                  />
                  Orders
                </NavLink>
                <NavLink to={`/users/${currentUser.uid}/myCart`} className="nav-link">
                  {/* Cart link */}
                  <img
                    src="https://icons.veryicon.com/png/256/object/material-design-icons-1/cart-22.png"
                    alt="Cart Icon"
                    className="nav-icon"
                  />
                  Cart
                </NavLink>
                <button className="nav-link signoutbtn" onClick={handleSignOut}>
                  {/* Logout button */}
                  <img
                    src="https://icons.veryicon.com/png/256/internet--web/website-common-icons/user-user-1.png"
                    alt="Logout Icon"
                    className="nav-icon"
                  />
                  Logout
                </button>
              </>
            ) : (
              // If user is not signed in, show these options
              <>
                <NavLink to={"/"} className="nav-link">
                  {/* Home link */}
                  <img
                    src="https://t3.ftcdn.net/jpg/06/37/06/82/360_F_637068250_GiSz2fq4mVi5d19fiiuJgdPflgHeZsgM.webp"
                    alt="Home Icon"
                    className="nav-icon"
                  />
                  Home
                </NavLink>
                <NavLink to={"/signin"} className="nav-link">
                  {/* Sign In link */}
                  <img
                    src="https://icons.veryicon.com/png/256/miscellaneous/operation-bar-icon/sign-in-115.png"
                    alt="Sign In Icon"
                    className="nav-icon"
                  />
                  Sign In
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
      {/* Outlet for rendering nested routes */}
      <Outlet />
    </>
  );
}

// Exporting the Navbar component
export default Navbar;
