import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // get data from api
    fetch(
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    )
      .then((res) => res.json())
      .then((data) => setAllPhotos(data));
  }, []);

  function toggleFavorite(id) {
    // rather than setting the allPhotos state directly (which is bad practice), create an updated array and return that
    const updatedArr = allPhotos.map((photo) => {
      if (id === photo.id) {
        return {
          ...photo,
          isFavorite: !photo.isFavorite,
        };
      }
      return photo;
    });

    setAllPhotos(updatedArr);
  }

  function addToCart(newItem) {
    setCartItems(prevCart => [...prevCart, newItem]);
  }
  console.log(cartItems);

  return (
    <Context.Provider value={{ allPhotos, toggleFavorite, addToCart }}>
      {/* shorthad for obj container a property and value of "allPhotos" */}
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context }; // exporting as a named export in order to export multiple things
