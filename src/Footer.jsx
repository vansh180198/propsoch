import React from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  console.log(isActive("/"));
  

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Search */}
        <Link to="/" className={`search ${isActive("/")?"active-footer-tab":""}` } style={{textDecoration:"none"}}>
          <img
            src={isActive("/") ? "/Search_active.svg" : "/Search.svg"}
            alt="Search Icon"
          />
          <div>Search</div>
        </Link>

        {/* Wishlist */}
        <Link to="/wishlist" className={`wishlist ${isActive("/wishlist")?"active-footer-tab":""}` } style={{textDecoration:"none"}}>
          <img
            src={isActive("/wishlist") ? "/Heartfooter_active.svg" : "/Heartfooter.svg"}
            alt="Wishlist Icon"
          />
          <div>Wishlist</div>
        </Link>

        {/* Locate */}
        <Link className={`showmap ${isActive("/locate")?"active-footer-tab":""}` } style={{textDecoration:"none"}}>
          <img
            src={isActive("/locate") ? "/Location_footer_active.svg" : "/Location_footer.svg"}
            alt="Locate Icon"
          />
          <div>Locate</div>
        </Link>

        {/* Login */}
        <Link className={`login ${isActive("/locate")?"active-footer-tab":""}` } style={{textDecoration:"none"}}>
          <img
            src={isActive("/login") ? "/Profile_active.svg" : "/Profile.svg"}
            alt="Login Icon"
          />
          <div>Login</div>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
