import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  // children is destructured from props
  const [allPhotos, setAllPhotos] = useState([]);

  useEffect(() => {
    // get data from api
    fetch(
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    )
      .then((res) => res.json())
      .then((data) => console.log(data));

    // save the data to state
  }, []);

  return (
    <Context.Provider value={{ allPhotos }}>
      {/* shorthad for obj container a property and value of "allPhotos" */}
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context }; // exporting as a named export in order to export multiple things
