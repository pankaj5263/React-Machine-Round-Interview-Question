import React, { useState } from "react";
import Card from "./Card";

const data = [
  { title: "Accpordian 1", content: "This is accordian 1" },
  { title: "Accpordian 2", content: "This is accordian 2" },
];

function Accordian() {
  const [isOpen, setIsOpen] = useState(0);
  const handleClick = (index) => {
    const ind = index != isOpen ? index : null;
    setIsOpen(ind);
  };
  return (
    <div className="w-80 m-auto mt-20">
      <h1>Please click on Accordian</h1>
      {data?.map((item, index) => (
        <Card
          data={item}
          index={index}
          handleClick={handleClick}
          isOpen={isOpen == index}
        />
      ))}
    </div>
  );
}

export default Accordian;
