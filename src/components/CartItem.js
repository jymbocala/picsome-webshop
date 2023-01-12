import React, { useState, useContext } from "react";
import { Context } from "../Context";

//destructure prop obj to get item
function CartItem({ item, cost }) {
  // get removeFromCart function from Context
  const { removeFromCart } = useContext(Context);
  const [hover, setHover] = useState(false);

  const iconClassName = hover ? "ri-delete-bin-fill" : "ri-delete-bin-line"

  return (
    <div className="cart-item">
      <i
        className={iconClassName}
        onClick={() => removeFromCart(item.id)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      ></i>
      <img src={item.url} width="130px" />
      <p>${cost}</p>
    </div>
  );
}

export default CartItem;
