import React, { useState, useRef } from "react";
import Popover from "./Popover";

const App = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const buttonRef = useRef(null);

  const togglePopover = () => {
    setIsPopoverOpen((prev) => !prev);
  };

  return (
    <div style={{ padding: "50px" }}>
      <button
        ref={buttonRef}
        onClick={togglePopover}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Toggle Popover
      </button>

      <Popover
        isOpen={isPopoverOpen}
        onClose={() => setIsPopoverOpen(false)}
        targetRef={buttonRef}
      >
        <p>This is the popover content!</p>
      </Popover>
    </div>
  );
};

export default App;
