import React from "react";

function Card({ data, handleClick, isOpen, index }) {
  return (
    <div style={{ width: "100%", border: "1px solid black" }}>
      <div
        onClick={() => handleClick(index)}
        style={{ backgroundColor: "lightgrey" }}
      >
        {data?.title}
      </div>
      {isOpen && <div>{data?.content}</div>}
    </div>
  );
}

export default Card;
