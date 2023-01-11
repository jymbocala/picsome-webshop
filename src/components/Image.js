import React, { useState } from "react";

export default function Image({ className, img }) {
  // console.log(img)
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={img.url} className="image-grid" />
    </div>
  );
}
