import React, { useContext } from "react";
import { Context } from "../Context";
import PropTypes from "prop-types";
import useHover from "../hooks/useHover";

//destructure prop obj to get item
function CartItem({ item, cost }) {
  // get removeFromCart function from Context
  const { removeFromCart } = useContext(Context);
  // receive state and ref by calling useHover
  const [hover, ref] = useHover();

  const iconClassName = hover ? "ri-delete-bin-fill" : "ri-delete-bin-line";

  return (
    <div className="cart-item">
      <i
        className={iconClassName}
        onClick={() => removeFromCart(item.id)}
        ref={ref}
      ></i>
      <img src={item.url} width="130px" alt="" />
      <p>${cost}</p>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};

export default CartItem;
