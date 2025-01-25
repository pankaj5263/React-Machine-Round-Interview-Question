import React, { forwardRef } from 'react';
import PopoverCard from './PopoverCard';

const Popover = forwardRef((props, ref) => {
  return (
    <div className="w-full" ref={ref}>
      <PopoverCard {...props} />
    </div>
  );
});

export default Popover;
