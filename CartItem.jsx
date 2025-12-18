import React from "react";

function CartItem() {
  const cartItems = [
    { id: 1, name: "Snake Plant", price: 200, quantity: 2 }
  ];

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>

      {cartItems.map(item => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>Unit Price: ₹{item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Total: ₹{item.price * item.quantity}</p>

          <button>+</button>
          <button>-</button>
          <button>Delete</button>
        </div>
      ))}

      <h3>Total Amount: ₹{totalAmount}</h3>

      <button onClick={() => alert("Coming Soon")}>Checkout</button>
      <button>Continue Shopping</button>
    </div>
  );
}

export default CartItem;
