import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./Accessories.css";
import "../Head&Foot/SliderCou.css";
import SliderCou from "../Head&Foot/SliderCou";
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const apiUrl = "https://ecom-mcpa.onrender.com/api/v1/product/allproduct";

  useEffect(() => {
    Axios.get(apiUrl)
      .then((response) => {
        // Handle the successful response here
        const data = response.data;
        const productsData = data.map((item) => ({
          _id : item._id,

          title: item.title,
          images: item.images.map((img) => ({
            imageOne: img.imageOne,
          })),
          rating: item.rating,
          price: item.price,
          
        }));
        
        setProducts(productsData);
        // console.log(productsData)
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <SliderCou />
      <div className="product">
        <div className="product-container">
          {products.slice(16, 34).map((productdetails, index) => {
            
            return (
              <div key={index} className="product-parent" >
                      <Link to={`/${productdetails._id}`}>
                
                  <div>
                    <div>
                      {/* Assuming images is an array */}
                      {productdetails.images.map((img, imgIndex) => (
                        <img
                          key={imgIndex}
                          src={img.imageOne}
                          alt={`Product ${index + 1}  ${imgIndex + 1}`}
                        />
                      ))}
                    </div>
                    <p>{productdetails.title}</p>
                  </div>
                  <div>
                    <h5>{productdetails.rating}</h5>
                    <h5>{productdetails.price}</h5>
                  </div>
                  </Link>
                
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
