import React from 'react';

function Tab({value, show }) {
  return (
    <div className="flex flex-col">
      {show && (
        <div className="border-2 w-full p-4">{value}</div>
      )}
    </div>
  );
}

export default Tab;
