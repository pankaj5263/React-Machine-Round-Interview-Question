import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function Stars({ rating, handleRating }) {
  const [hoverIndex, setHoverIndex] = useState(null);
  const arr = new Array(5).fill(0);
  return (
    <div className="flex">
      {arr.map((_, index) => (
        <FaStar
          key={index}
          className={`w-8 h-8 ${
            (hoverIndex !== null && hoverIndex >= index) || rating >= index + 1
              ? "fill-yellow-500"
              : "fill-gray-400"
          } transition-colors`}
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
          onClick={() => handleRating(index + 1)}
        />
      ))}
    </div>
  );
}

export default Stars;
