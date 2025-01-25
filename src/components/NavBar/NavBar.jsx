import React from "react";
import DropDown from "../DropDown/DropDown";
const dropDownList = [
  { name: "Home", path: "/" },
  { name: "Accordian", path: "accordian" },
  { name: "Popover", path: "popover" },
  { name: "Star Rating", path: "star-rating" },
  { name: "Tabs", path: "tabs" },
  { name: "Infinite-Scroll-page", path: "infinite-scrolling" },
];

function Navigation() {
  return (
    <div className="text-sm font-medium text-gray-800 bg-cyan-100 p-4 flex justify-between">
      <div>React Machine interview Questions</div>
      <div className="border border-grey-600">
        <DropDown dropDownList={dropDownList} />
      </div>
    </div>
  );
}

export default Navigation;
