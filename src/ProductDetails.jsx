import React from "react";
// import { MapboxMap } from "react-map-gl";
import { useParams, Link } from "react-router-dom";
import Map from "../Map";
import { LoadScript } from "@react-google-maps/api";

const properties = [
    {
      id: 1,
      address: "Sushant Lok 2, Gurgaon",
      views: 41172,
      rating: 3.82,
      availability: "Apr 5 - 10",
      tags: ["Most Liked"],
      price: "$150/night",
      sector: "Sector 55",
      fullAddress: "Sushant Lok 2, Sector 55, Gurgaon, Haryana, 122011",
      latitude: 28.4595,
      longitude: 77.0266,
      images: [
        "https://i.pinimg.com/236x/a7/a2/14/a7a214785bb64212455d72f0c3d18977.jpg",
        "https://preview.redd.it/mqa946mcv8m61.jpg?width=1080&crop=smart&auto=webp&s=130e4b4a46a6a2a9c851ca83ee6c596471e7e7e0",
        "https://i.pinimg.com/236x/f4/d8/24/f4d824dca3de341d6f242c2659e2d81e.jpg",
        "https://i.pinimg.com/236x/b4/e3/71/b4e3713f07320afe56d14008f7f2d280.jpg",
        "https://i.pinimg.com/236x/b8/4e/ef/b84eef4c8cab76040d171018c266efa9.jpg",
      ],
    },
    {
      id: 2,
      address: "Rainbow Heights, HSR",
      views: 8402,
      rating: 5.0,
      availability: "Mar 9 - 14",
      tags: [],
      price: "$120/night",
      sector: "Sector 3",
      fullAddress:
        "Rainbow Heights, Sector 3, HSR Layout, Bengaluru, Karnataka, 560102",
      latitude: 12.9141,
      longitude: 77.6481,
      images: [
        "https://i.pinimg.com/236x/b4/e3/71/b4e3713f07320afe56d14008f7f2d280.jpg",
        "https://i.pinimg.com/236x/f4/d8/24/f4d824dca3de341d6f242c2659e2d81e.jpg",
        "https://i.pinimg.com/236x/a7/a2/14/a7a214785bb64212455d72f0c3d18977.jpg",
        "https://i.pinimg.com/236x/b8/4e/ef/b84eef4c8cab76040d171018c266efa9.jpg",
        "https://preview.redd.it/mqa946mcv8m61.jpg?width=1080&crop=smart&auto=webp&s=130e4b4a46a6a2a9c851ca83ee6c596471e7e7e0",
      ],
    },
    {
      id: 3,
      address: "Walden, Colorado, US",
      views: 12648,
      rating: 2.82,
      availability: "Mar 3 - 8",
      tags: ["Most Liked"],
      price: "$200/night",
      sector: "Main Street",
      fullAddress: "Walden, Main Street, Colorado, United States, 80480",
      latitude: 40.7317,
      longitude: -106.2839,
      images: [
        "https://preview.redd.it/mqa946mcv8m61.jpg?width=1080&crop=smart&auto=webp&s=130e4b4a46a6a2a9c851ca83ee6c596471e7e7e0",
        "https://i.pinimg.com/236x/a7/a2/14/a7a214785bb64212455d72f0c3d18977.jpg",
        "https://i.pinimg.com/236x/b8/4e/ef/b84eef4c8cab76040d171018c266efa9.jpg",
        "https://i.pinimg.com/236x/b4/e3/71/b4e3713f07320afe56d14008f7f2d280.jpg",
        "https://i.pinimg.com/236x/f4/d8/24/f4d824dca3de341d6f242c2659e2d81e.jpg",
      ],
    },
    {
      id: 4,
      address: "Poggibonsi, Italy",
      views: 6483,
      rating: 5.0,
      availability: "Apr 26 - May 1",
      tags: ["Most Liked"],
      price: "$180/night",
      sector: "Via del Chianti",
      fullAddress: "Via del Chianti, Poggibonsi, Siena, Tuscany, Italy, 53036",
      latitude: 43.4707,
      longitude: 11.1524,
      images: [
        "https://i.pinimg.com/236x/b8/4e/ef/b84eef4c8cab76040d171018c266efa9.jpg",
        "https://i.pinimg.com/236x/b4/e3/71/b4e3713f07320afe56d14008f7f2d280.jpg",
        "https://i.pinimg.com/236x/a7/a2/14/a7a214785bb64212455d72f0c3d18977.jpg",
        "https://i.pinimg.com/236x/f4/d8/24/f4d824dca3de341d6f242c2659e2d81e.jpg",
        "https://preview.redd.it/mqa946mcv8m61.jpg?width=1080&crop=smart&auto=webp&s=130e4b4a46a6a2a9c851ca83ee6c596471e7e7e0",
      ],
    },
    {
      id: 5,
      address: "Green Valley, California",
      views: 9324,
      rating: 4.5,
      availability: "May 12 - 18",
      tags: ["New Listing"],
      price: "$160/night",
      sector: "Oak Ridge",
      fullAddress: "Green Valley, Oak Ridge, California, United States, 94534",
      latitude: 38.2736,
      longitude: -122.0236,
      images: [
        "https://i.pinimg.com/236x/a7/a2/14/a7a214785bb64212455d72f0c3d18977.jpg",
        "https://i.pinimg.com/236x/f4/d8/24/f4d824dca3de341d6f242c2659e2d81e.jpg",
        "https://i.pinimg.com/236x/b4/e3/71/b4e3713f07320afe56d14008f7f2d280.jpg",
        "https://i.pinimg.com/236x/b8/4e/ef/b84eef4c8cab76040d171018c266efa9.jpg",
        "https://preview.redd.it/mqa946mcv8m61.jpg?width=1080&crop=smart&auto=webp&s=130e4b4a46a6a2a9c851ca83ee6c596471e7e7e0",
      ],
    },
    {
      id: 6,
      address: "Palm Beach, Florida",
      views: 15487,
      rating: 4.8,
      availability: "Jun 1 - 6",
      tags: ["Luxury"],
      price: "$220/night",
      sector: "Ocean Boulevard",
      fullAddress: "Palm Beach, Ocean Boulevard, Florida, United States, 33480",
      latitude: 26.7056,
      longitude: -80.0364,
      images: [
        "https://i.pinimg.com/236x/f4/d8/24/f4d824dca3de341d6f242c2659e2d81e.jpg",
        "https://i.pinimg.com/236x/b8/4e/ef/b84eef4c8cab76040d171018c266efa9.jpg",
        "https://i.pinimg.com/236x/b4/e3/71/b4e3713f07320afe56d14008f7f2d280.jpg",
        "https://preview.redd.it/mqa946mcv8m61.jpg?width=1080&crop=smart&auto=webp&s=130e4b4a46a6a2a9c851ca83ee6c596471e7e7e0",
        "https://i.pinimg.com/236x/a7/a2/14/a7a214785bb64212455d72f0c3d18977.jpg",
      ],
    },
    {
      id: 7,
      address: "Beverly Hills, California",
      views: 21032,
      rating: 4.9,
      availability: "Jul 4 - 10",
      tags: ["Exclusive"],
      price: "$300/night",
      sector: "Rodeo Drive",
      fullAddress: "Beverly Hills, Rodeo Drive, California, United States, 90210",
      latitude: 34.0736,
      longitude: -118.4004,
      images: [
        "https://i.pinimg.com/236x/b4/e3/71/b4e3713f07320afe56d14008f7f2d280.jpg",
        "https://i.pinimg.com/236x/a7/a2/14/a7a214785bb64212455d72f0c3d18977.jpg",
        "https://i.pinimg.com/236x/f4/d8/24/f4d824dca3de341d6f242c2659e2d81e.jpg",
        "https://preview.redd.it/mqa946mcv8m61.jpg?width=1080&crop=smart&auto=webp&s=130e4b4a46a6a2a9c851ca83ee6c596471e7e7e0",
        "https://i.pinimg.com/236x/b8/4e/ef/b84eef4c8cab76040d171018c266efa9.jpg",
      ],
    },
    {
      id: 8,
      address: "Central Park, New York",
      views: 18345,
      rating: 4.6,
      availability: "Aug 15 - 20",
      tags: ["Hot Deal"],
      price: "$250/night",
      sector: "Central Park West",
      fullAddress:
        "Central Park West, Manhattan, New York, NY, United States, 10024",
      latitude: 40.7851,
      longitude: -73.9683,
      images: [
        "https://preview.redd.it/mqa946mcv8m61.jpg?width=1080&crop=smart&auto=webp&s=130e4b4a46a6a2a9c851ca83ee6c596471e7e7e0",
        "https://i.pinimg.com/236x/b8/4e/ef/b84eef4c8cab76040d171018c266efa9.jpg",
        "https://i.pinimg.com/236x/a7/a2/14/a7a214785bb64212455d72f0c3d18977.jpg",
        "https://i.pinimg.com/236x/b4/e3/71/b4e3713f07320afe56d14008f7f2d280.jpg",
        "https://i.pinimg.com/236x/f4/d8/24/f4d824dca3de341d6f242c2659e2d81e.jpg",
      ],
    },
  ];
  

const ProductDetails = () => {
  const { id } = useParams();
  const product = properties.find((prod) => prod.id === parseInt(id));
  console.log(product);
  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-details-container">
      <div className="product-image-container">
        <div className="product-img-header">
          <span className="product-img-tag tag">
            {product.tags.length > 0 ? product.tags[0] : ""}
          </span>
        </div>
        <img className="product-details-img" src={product.images[0]} />
      </div>
      <div className="product-address-detials">
        <div className="left-container">
          <div className="address">{product.address}</div>
          <div className="sector">{product.sector}</div>
        </div>
        <div className="right-container">
          <div className="price">{product.price}</div>
          <div className="EMI">EMI Available</div>
        </div>
      </div>
      <div className="location-container">
        <div className="full-address-container">
          <h3>Location</h3>
          <div className="full-address">
            <div>{product.fullAddress}</div>
          </div>
        </div>
        <div className="map-container">

            <Map latitude={product.latitude} longitude={product.longitude}/>
        
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
