import React from "react";
import Tabs from "./Tabs";
import Tab from "../Tab/Tab";
function TabsComponent() {
  return (
    <div>
      <Tabs>
        <Tab label="Tab1" value={"Inside Tab1"} />
        <Tab label="Tab2" value={"Inside Tab2"} />
      </Tabs>
    </div>
  );
}

export default TabsComponent;
