import React, { useState, useContext } from "react";
import { Context } from "../Context";
import CartItem from "../components/CartItem";

export default function Cart() {
  // get cartItems array state from context
  const {cartItems} = useContext(Context);
  const totalCost = 5.99 * cartItems.length;
  const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "AUD"})
  // map over each cart item and pass the item as a prop for a CartItem component
  const cartItemElements = cartItems.map(item => (
    <CartItem key={item.id} item={item} cost={5.99}/>
  ));

  
  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">Total: {totalCostDisplay} </p>
      <div className="order-button">
        <button>Place Order</button>
      </div>
    </main>
  );
}
