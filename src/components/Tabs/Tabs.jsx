import React, { useState } from "react";

const Tabs = ({ children }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleClick = (index) => {
    setTabIndex(index);
  };

  const tabsChildren = React.Children.map(children, (child, index) =>
    React.cloneElement(child, {
      ...child.props,
      index,
      show: tabIndex === index,
      handleClick,
    })
  );

  return (
    <div className="flex flex-col">
      <div className="flex">
        {tabsChildren.map((child, index) => (
          <button
            className="border-1 p-2 cursor-pointer hover:shadow-2xl hover:border-2 border-b-0 hover:border-b-0"
            onClick={() => handleClick(index)}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className="mt-0">{tabsChildren}</div>
    </div>
  );
};

export default Tabs;
