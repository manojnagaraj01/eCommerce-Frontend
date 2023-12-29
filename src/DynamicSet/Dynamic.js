import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./Dynamic.css";
const Dynamic = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1)
  // console.log(count);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  // console.log(localStorage.getItem('iShop'))
  localStorage.setItem('count',count)
  
  const decrement = () => {
    if(count>1){
      setCount(count-1);
    }
  };

  const increment = () => {
    if(count<10){
      setCount(count+1);
    }
  };
  // const Navi = useNavigate();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://ecom-mcpa.onrender.com/api/v1/product/${id}`
        );
        // const data = response.data;
        // const productsData = 
        // console.log(response.data);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);
  // console.log(localStorage.getItem('ishop'))

  const handleAddToCart = async () => {
    if (isAddingToCart || disableButton) {
      // Request is already in progress, do nothing
      return;
    }

    try {
      // Set the flag to indicate that the request is in progress
      setIsAddingToCart(true);

      await axios.post(
        "https://ecom-mcpa.onrender.com/api/v1/auth/addcart",
        {
          cart: [
            {
              _id: product._id,
              count,
            },
          ],
        },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("iShop")}`,
          },
        }
      );

      // Reset the count after successfully adding to the cart
      setCount(1);
      setDisableButton(true);
      setTimeout(() => {
        setDisableButton(false);
      }, 3000);
    } catch (error) {
      console.error("Error adding to cart:", error);
    } finally {
      // Reset the flag after the request is complete
      setIsAddingToCart(false);
    }
  };
  return (
    <div>
      <div className="product-details-container">
        {product ? (
          <div className="product-details">
            <h1>{product.title}</h1>
            <div className="image-slider">
              {product.images.map((img, index) => {
                return (
                  <>
                    <img
                      key={index}
                      src={img.imageOne}
                      alt={`Product ${index + 1}`}
                    />
                    <img
                      key={index+2}
                      src={img.imageTwo}
                      alt={`Product ${index + 2}`}
                    />
                    <img
                      key={index+3}
                      src={img.imageThree}
                      alt={`Product ${index + 3}`}
                    />
                  </>
                );
              })}
            </div>

            <p>{product.brand}</p>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <div>Count: 
              <button className="addon" onClick={decrement}>-</button>
              <span style={{margin:"30px"}}>{count}</span>
              <button className="addon" onClick={increment}>+</button>
            </div>
            <button className="addtocart" onClick={handleAddToCart} disabled={isAddingToCart}>Add to Cart</button>
          </div>
        ) : (
          <p>Loading product details...</p>
        )}
      </div>
    </div>
  );
};

export default Dynamic;
