import React from 'react';

function PopoverCard({ isOpen, position }) {
  console.log(position);

  // If the popover is not open, don't render anything
  if (!isOpen) {
    return null;
  }

  const { width, left, top, bottom } = position;

  return (
    <div
      className="border-2 p-2 border-gray-400 shadow-2xl absolute bg-white min-h-50"
      style={{
        width: `${width + 20}px`,
        top: `${bottom + 20}px`,
        left: `${left-10}px`,
      }}
    >
      PopoverCard
    </div>
  );
}

export default PopoverCard;
