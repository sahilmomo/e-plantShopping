import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "./CartSlice";
import { Link } from "react-router-dom";

const CartItem = () => {
  const dispatch = useDispatch();

  // Access cart items from Redux store
  const cartItems = useSelector((state) => state.cart.items);

  // Dynamically calculate total cart amount
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>

      {/* Display message if cart is empty */}
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {/* Render each cart item */}
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} width="80" />

              <div className="cart-details">
                <h4>{item.name}</h4>
                <p>Unit Price: ₹{item.price}</p>
                <p>Total: ₹{item.price * item.quantity}</p>

                {/* Quantity control buttons */}
                <div className="quantity-controls">
                  <button
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => dispatch(increaseQuantity(item.id))}
                  >
                    +
                  </button>
                </div>

                {/* Remove item from cart */}
                <button
                  className="delete-btn"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          {/* Display dynamically updated cart total */}
          <h3>Total Amount: ₹{totalAmount}</h3>

          {/* Action buttons */}
          <button onClick={() => alert("Coming Soon")}>
            Checkout
          </button>

          <Link to="/plants">
            <button>Continue Shopping</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default CartItem;
