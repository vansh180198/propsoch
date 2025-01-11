import React from "react";
import { Link } from "react-router-dom";
// import "./Footer.css"; // Optional: Create separate styles for Footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container" style={{cursor:"pointer"}}>
        <Link to={"/"}><span className="search">
          <img src="/Search.svg" alt="Icon" />
          <div>Search</div>
        </span></Link>
        
        <Link to={"/wishlist"}>
        <span className="wishlist" style={{cursor:"pointer"}}>
          <img src="/Heartfooter.svg" alt="Icon" />
          <div>Wishlist</div>
        </span>
        </Link>
        
        <span className="showmap" style={{cursor:"pointer"}}>
          <img src="/Location_footer.svg" alt="Icon" />
          <div>Locate</div>
        </span>
        <span className="login" style={{cursor:"pointer"}}>
          <img src="/Profile.svg" alt="Icon" />
          <div>Login</div>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
