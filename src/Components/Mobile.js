import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./Accessories.css";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import Rating from "@mui/material/Rating";
// import Stack from "@mui/material/Stack";
function Mobile() {
  const [products, setProducts] = useState([]);
  // const state=useSelector(({data})=>{
  //   return data
  // })
  // console.log(state)
  // const Navi = useNavigate()
  const apiUrl = "http://localhost:9000/api/v1/product/allproduct";

  useEffect(() => {
    Axios.get(apiUrl)
      .then((response) => {
        const data = response.data;
        const productsData = data.map((item) => ({
          _id : item._id,
          title: item.title,
          images: item.images.map((img) => ({
            imageOne: img.imageOne,
          })),
          rating: item.rating,
          price: item.price,
          category: item.category,
          count:item.quantity
        }));
        console.log(productsData);
        // console.log(productsData._id)
        setProducts(productsData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); 
  return (
    <div className='product'>
        <div className='product-container'>
              {
                products.filter((data)=> data.category === "Mobile")
                .map((productdetails, index) => {
                  return (
                    <div key={index} className="product-parent">
                      <Link to={`/${productdetails._id}`}>
                        <div>
                          <div>
                            {/* Assuming images is an array */}
                            {productdetails.images.map((imgdata, imgIndex) => (
                              <img
                                key={imgIndex}
                                src={imgdata.imageOne}
                                alt={`Product ${index + 1} ${imgIndex + 1}`}
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
                })
              }
          </div>
      
    </div>
  );
}

export default Mobile;
