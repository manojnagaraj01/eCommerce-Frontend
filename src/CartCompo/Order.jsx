import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Order = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate("/");
    }, 5000);
    return () => {
      clearTimeout(timeoutId);
    };  
  }, [navigate]);
  return (
    <div>
      <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
      <img style={{width:"100%", height:"300px"}} src="https://sellcodes.com/assets/images/Purchase_Success.png" alt=""/>
      <div>Order Successfull</div>
    </div>
    </div>
  );
};

export default Order;
