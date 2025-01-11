import React from "react";
// import "./Footer.css"; // Optional: Create separate styles for Footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <span className="search">
          <img src="/Search.svg" alt="Icon" />
          <div>Search</div>
        </span>
        <span className="wishlist">
          <img src="/Search.svg" alt="Icon" />
          <div>Wishlist</div>
        </span>
        <span className="showmap">
          <img src="/Search.svg" alt="Icon" />
          <div>Locate</div>
        </span>
        <span className="login">
          <img src="/Search.svg" alt="Icon" />
          <div>Login</div>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
