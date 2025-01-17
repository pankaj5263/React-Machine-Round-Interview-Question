import React, { useState } from "react";
import Card from "./Card";

const data = [
  { title: "Pankaj", content: "Pankaj is good man" },
  { title: "Kittu", content: "Kittu is good Girl" },
];

function Accordian() {
  const [isOpen, setIsOpen] = useState(0);
  const handleClick = (index) => {
    const ind = index != isOpen ? index : null;
    setIsOpen(ind);
  };
  return (
    <div>
      <h1>Accordian</h1>
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
