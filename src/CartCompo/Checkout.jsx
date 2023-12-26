
import React from "react";
import ReactDOM from "react-dom"
import paypal from "paypal-rest-sdk"
const PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM });
function YourComponent() {
  const createOrder = (data) => {
    // Order is created on the server and the order id is returned
    return fetch("http://localhost:9000/api/orders", {
      method: "POST",
       headers: {
        "Content-Type": "application/json",
      },
      // use the "body" param to optionally pass additional order information
      // like product skus and quantities
      body: JSON.stringify({
        cart: [
          {
            sku: cart._id,   //unique id
            quantity: cart.quantity,
          },
        ],
      }),
    })
    .then((response) => response.json())
    .then((order) => order.id);
  };
  const onApprove = (data) => {
     // Order is captured on the server and the response is returned to the browser
     return fetch("http://localhost:9000/api/orders", {
      method: "POST",
       headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderID: data.orderID
      })
    })
    .then((response) => response.json());
  };
  return (
    <PayPalButton
      createOrder={(data) => createOrder(data, actions)}
      onApprove={(data) => onApprove(data, actions)}
    />
  );
}
