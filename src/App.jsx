import { useState, useContext } from "react";
import { WishlistContext, WishlistProvider } from "./WishlistContext";
import "./App.css";
// import Search from "../public/Search.svg"
import Header from "./Header";
import Footer from "./Footer";
import Grid from "./Grid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./ProductDetails";

function App() {
  const { wishlist, toggleWishlist } = useContext(WishlistContext);

  return (
    <div className="container">
      <Router>
      <Header />
        <Routes>
          {/* Route for Product List */}
          
          <Route path="/" element={<Grid />} />

          {/* Route for Product Details */}
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />

      </Router>
    </div>
  );
}

export default App;
