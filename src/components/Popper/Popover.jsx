import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";

const Popover = ({ children, isOpen, onClose, targetRef }) => {
  const popoverRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target) &&
        !targetRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose, targetRef]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      ref={popoverRef}
      style={{
        position: "absolute",
        top: `${targetRef.current?.getBoundingClientRect().bottom + window.scrollY}px`,
        left: `${targetRef.current?.getBoundingClientRect().left}px`,
        background: "white",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        padding: "8px 12px",
        borderRadius: "8px",
        zIndex: 1000,
      }}
    >
      {children}
    </div>,
    document.body
  );
};

export default Popover;