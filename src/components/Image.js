import React, { useState, useContext } from "react";
import { Context } from "../Context";
import PropTypes from "prop-types";
import useHover from "../hooks/useHover";

function Image({ className, img }) {
  // receive hover state and ref by calling useHover
  const [hover, ref] = useHover()
  // Get the toggleFavorite function from context
  const { toggleFavorite, addToCart, removeFromCart, cartItems } = useContext(Context);

  const heartIcon = img.isFavorite ? (
    <i
      className="ri-heart-fill favorite"
      onClick={() => toggleFavorite(img.id)}
    ></i>
  ) : (
    hover && (
      <i
        className="ri-heart-line favorite"
        onClick={() => toggleFavorite(img.id)}
      ></i>
    )
  );

  function cartIcon() {
    const isInCart = cartItems.find((item) => item.id === img.id);
    if (isInCart) {
      return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img.id)}></i>;
    } else if (hover) {
      return (
        <i
          className="ri-add-circle-line cart"
          onClick={() => addToCart(img)}
        ></i>
      );
    }
  }

  

  return (
    <div
      className={`${className} image-container`}
      ref={ref}
    >
      {heartIcon}
      {cartIcon()}
      <img src={img.url} className="image-grid" />
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};

export default Image;
