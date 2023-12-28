
import React from "react";
import ReactDOM from "react-dom"
// import paypal from ""
import { loadScript } from "@paypal/paypal-js";
let paypal;

try {
    paypal = await loadScript({ clientId: "AVvhU0Q9LyPM0ZJdZG2uxJOZK6kn2yEqgSM-t6Acanvl1ahxhM-zWK-hpZmKcxVgJuawFOYLbnDs3maH" });
} catch (error) {
    console.error("failed to load the PayPal JS SDK script", error);
}

if (paypal) {
    try {
        await paypal.Buttons().render("#your-container-element");

    } catch (error) {
        console.error("failed to render the PayPal Buttons", error);
    }
}
const PayPalButton = await paypal.Buttons.driver("react", { React, ReactDOM });

function PayPal(props) {
  const {cart}=props
  const createOrder = async (data) => {
    // Order is created on the server and the order id is returned
    return await fetch("http://localhost:9000/api/v1/order/createorder", {
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
  const onApprove = async (data) => {
     // Order is captured on the server and the response is returned to the browser
     return await fetch("http://localhost:9000/api/v1/order/createorder", {
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
      createOrder={(data) => createOrder(data)}
      onApprove={(data) => onApprove(data)}
    />

  );
}

export default PayPal