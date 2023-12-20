import React, { useEffect } from "react";
import Axios from "axios";
import "./Cart.css";
import { MdDelete } from "react-icons/md";

function CartItems() {
  const [cart, setCart] = React.useState([]);
  const [cartId,setCartId]=React.useState(null)
  console.log('cart',cart[0]?.cartid)
  // setCartId(cart[0]?.cartid)


  useEffect(() => {
    Axios.get("https://ecom-mcpa.onrender.com/api/v1/auth/getcartitems", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("iShop")}`,
      },
    })
      .then((resp) => {
        const data = resp.data;

        const productDetails = data.map(({_id, cartTotal, products }) => ({
          // setCartId(_id),
          cartid :_id,
          cartTotal,
        
          products: products.map(
            ({ count, images, price, product, title, _id }) => ({
              count,
              images,
              price,
              product,
              title,
              orderid: _id,
            })
          ),
          
          
        }));
        console.log("cart data", productDetails);
        setCart(productDetails);
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteItem = async (cartid) => {
    // console.log('cartid',cartid)

    try {
      const response = await Axios.delete(`https://ecom-mcpa.onrender.com/api/v1/auth/${cart[0]?.cartid}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("iShop")}`,
        },
      });
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
const handleDelete = () => {
  deleteItem();
};

  return (
    <>
      <section className="cart-container">
        <div className="cart-divone">
          <div className="cart-divtwo">
            <div className="cart-divthree">
              <div className="cart-header">
                <h4 className="cart-one">products</h4>
                <h4 className="cart-two">Price</h4>
                <h4 className="cart-three">Quantity</h4>
                <h4 className="cart-four">Total</h4>
              </div>
              {cart.map(({ cartTotal, products }) => {
                return (
                  <>
                    <div className="cart-data">
                      {products.map((items, index) => {
                        return (
                          <>
                            <div className="cart-one">
                              <div>
                                <img src={items.images} alt="..//.." />
                                <span>{items.title}</span>
                              </div>
                            </div>
                            <div className="cart-two">
                              <div>{items.price}</div>
                            </div>
                            <div className="cart-three">
                              <div>{items.count}</div>
                              <div>
                                <MdDelete onClick={handleDelete} style={{ color: "red " }} />
                              </div>
                            </div>
                          </>
                        );
                      })}
                      <div className="cart-four">
                        <div>{cartTotal}</div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="cart-shopping">
              <a href="hgh" to="/" className="button">
                Continue Shopping
              </a>
              <div>
                {cart.map(({cartTotal})=>{
                  <h4>Subtotal </h4>
                })}
                <h4>Shippinng fee</h4>
                <h4>Coupon </h4>
                <a href="fhfh">Checkout</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CartItems;
