// Import necessary libraries
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import "./Accessories.css"
const Accessories = () => {
  // State to store product details
  const [products, setProducts] = useState([]);
  console.log(products)
  // API endpoint
  const apiUrl = 'http://localhost:8080/api/product/productdetails';

  useEffect(() => {
    // Function to fetch data from the API
    Axios.get(apiUrl)
    .then((resp)=>{
      // console.log(resp.data.productData)
      setProducts(resp.data.productData)
    })
    .catch((err)=>{
      console.log(err)
    })

    // Call the fetchData function
    
  }, []); // The empty dependency array ensures that useEffect runs only once (similar to componentDidMount)

  return (
    <div>
      
        <div>
          {/* {products.map((product) => (
            <div key={product._id.$oid}>
              <h1>{product.productTitle}</h1>
              <p>{product.description}</p>
              <p>Price: ${product.price.$numberInt}</p>
              Render images
              <div>
                <img src={product.imageOne} alt="Product Image 1" />
                <img src={product.imageTwo} alt="Product Image 2" />
                <img src={product.imageThree} alt="Product Image 3" />
              </div>
              Add more details as needed
            </div>
          ))} */}
          <div>
          {/* {
            products.map(({brand,category,description,imageOne,imageThree,imageTwo,price,product,productTitle,quantity})=>{
                return <div>
                    <i>{brand}</i>
                  </div>
            })
          } */}
          </div>
          <div>
              {
                products.map(({productTitle, imageOne, rating, price},index)=>{
                  return <div key={index} className='product-parent'>
                      <div>
                        <img src={imageOne} alt='imageOne'/>
                        <p>{productTitle}</p>
                      </div>
                      <div>
                        <h5>{rating.$numberDecimal}</h5>
                        <h5>{price}</h5>
                      </div>


                  </div>
                })
              }
          </div>
        </div>
      
    </div>
  );
};

export default Accessories;
