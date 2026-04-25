import React, { useContext } from "react";
import { CartContext } from "../../components/context/CartContext";
import { FaTrashAlt } from "react-icons/fa";
import "./cart.css";
function Cart() {
  const { cartItems } = useContext(CartContext);

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);
  return (
    <div className="checkout">
      <div className="order-summary">
        <h1>Order Summary</h1>

        <div className="items">
          {cartItems.length === 0 ? (
            <p>Cart is emty</p>
          ) : (
            cartItems.map((item, index) => (
              <div className="item-cart" key={index}>
                <div className="image-name">
                  <img src={item.images[0]} />

                  <div className="content">
                    <h4>{item.title}</h4>
                    <p className="price-item">${item.price}</p>

                    <div className="quantity-control">
                      <button>-</button>
                      <span className="quantity">1</span>
                      <button>+</button>
                    </div>
                  </div>

                </div>
                  <button className="delete-item">
                    <FaTrashAlt />
                  </button>
              </div>
            ))
          )}
        </div>

      <div className="bottom-summary">
        <div className="shop-table">
          <p>Total:</p>
          <span className="total-checkout">${total.toFixed(2)}</span>
        </div>

        <div className="button-div">
          <button type="submit">Place Order</button>
        </div>
      </div>
    </div>
      </div>
  );
}

export default Cart;
