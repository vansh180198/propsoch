import React,{useContext} from 'react'
import { WishlistContext, WishlistProvider } from "./WishlistContext";
import ImageSlider from "./ImageSlider";
import { Link } from "react-router-dom";


const properties = [
    {
      id: 1,
      address: "Sushant Lok 2, Gurgaon",
      views: 41172,
      rating: 3.82,
      availability: "Apr 5 - 10",
      tags: ["Most Liked"],
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
      images: [
        "https://preview.redd.it/mqa946mcv8m61.jpg?width=1080&crop=smart&auto=webp&s=130e4b4a46a6a2a9c851ca83ee6c596471e7e7e0",
        "https://i.pinimg.com/236x/b8/4e/ef/b84eef4c8cab76040d171018c266efa9.jpg",
        "https://i.pinimg.com/236x/a7/a2/14/a7a214785bb64212455d72f0c3d18977.jpg",
        "https://i.pinimg.com/236x/b4/e3/71/b4e3713f07320afe56d14008f7f2d280.jpg",
        "https://i.pinimg.com/236x/f4/d8/24/f4d824dca3de341d6f242c2659e2d81e.jpg",
      ],
    },
  ];
const Grid = () => {

      const { wishlist, toggleWishlist } = useContext(WishlistContext);
    

  return (
    <div className="grid">
          {properties.map((prop) => (
            <div className="card" key={prop.id}>
              <div className="img-container">
                <div className="img-header">
                  <span className="tag">{prop.tags.length > 0 ? prop.tags[0] : ""}</span>
                  <img
                    onClick={() => toggleWishlist(prop.id)}
                    src={
                      wishlist.includes(prop.id)
                        ? "../public/heart(1).svg"
                        : "../public/heart.svg"
                    }
                    alt="Wishlist Icon"
                  />
                </div>
                <div className="prop-image">
                  <ImageSlider images={prop.images} />
                </div>
              </div>
              <Link className="custom-link" to={`/product/${prop.id}`}>
              <div className="middle-container">
                <div className="views">{prop.views}</div>
                <div className="ratings">{prop.rating}</div>
              </div>
              <div className="prop-address">{prop.address}</div>
              <div className="dates">{prop.availability}</div>
              </Link>
            </div>
          ))}
        </div>
  )
}

export default Grid