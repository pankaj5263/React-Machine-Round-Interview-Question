import React from "react";

function Card({ data, handleClick, isOpen, index }) {
  return (
    <div className="border border-4-b-gray-400">
      <div
        onClick={() => handleClick(index)}
        className="bg-green-400 p-2"
      >
        {data?.title}
      </div>
      {isOpen && <div className="min-h-20 text-sm">{data?.content}</div>}
    </div>
  );
}

export default Card;
