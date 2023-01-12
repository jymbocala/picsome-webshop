import { useState, useEffect, useRef } from "react";

function useHover() {
  const [hover, setHover] = useState(false);
  const ref = useRef(null);

  function enterHover() {
    setHover(true);
  }

  function leaveHover() {
    setHover(false);
  }

  // when the useHover hook is first called run a function
  useEffect(() => {
    // whichever DOM element you put the ref property (ref={ref}), add an event listener to it.
    ref.current.addEventListener("mouseenter", enterHover)
    ref.current.addEventListener("mouseleave", leaveHover)

    // when component unmounts remove the event listeners with a clean up function
    return () => {
      ref.current.removeEventListener("mouseenter", enterHover)
      ref.current.removeEventListener("mouseleave", leaveHover)
    }
  }, []); // an empty array because we only need this to run once because I'm setting up an event listener
  
  return [hover, ref]
}

export default useHover;
