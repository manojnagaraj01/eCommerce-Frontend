import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import "./Accessories.css"
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
// import {  useParams } from 'react-router-dom';

const Accessories = () => {
  const [products, setProducts] = useState([]);
  const state=useSelector(({data})=>{
    return data
  })
  console.log(state)
  // const Navi = useNavigate()
  const apiUrl = "https://ecom-mcpa.onrender.com/api/v1/product/allproduct";

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
        }));
        console.log(productsData);
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
                products.filter((data)=> data.category === "Accessories")
                .map((productdetails, index) => {
                  return (
                    <div key={index} className="product-parent">
                      <Link to={`/${productdetails._id}`}>
                        <div>
                          <div>
                            {/* Assuming images is an array */}
                            {productdetails.images.map((img, imgIndex) => (
                              <img
                                key={imgIndex}
                                src={img.imageOne}
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
};

export default Accessories;
