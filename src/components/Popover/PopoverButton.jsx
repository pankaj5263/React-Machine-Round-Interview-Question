import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Popover from "./Popover"; 

function PopoverButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState(null);

  const buttonRef = useRef(null);
  const popoverRef = useRef(null);

  const clickHandle = (evt) => {
    setIsOpen(!isOpen);
    setPosition(evt.target.getBoundingClientRect());
  };

  useEffect(() => {
    const handleClickOutside = (event) => {

      if (
        buttonRef.current && !buttonRef.current.contains(event.target) && 
        popoverRef.current && !popoverRef.current.contains(event.target)
      ) {
        setIsOpen(false);
        setPosition(null);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-center">
      <div className="relative w-100 m-50">
        <div>Popover Example</div>
        <div className="border-2 border-gray-400 mt-5 p-2 shadow-lg">
          <button 
            ref={buttonRef}
            className={"w-full"} 
            onClick={clickHandle}
          >
            Open / Close Popover
          </button>
        </div>
        {createPortal(
          <Popover
            ref={popoverRef}
            isOpen={isOpen}
            position={position}
          />,
          document.getElementById("popover")
        )}
      </div>
    </div>
  );
}

export default PopoverButton;
