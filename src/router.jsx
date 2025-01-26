import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./Home";
import InfiniteScroll from "./components/InfiniteScroll/InfiniteScroll";
import Accordian from "./components/Accordian/Accordian";
import Popover from "./components/Popover/PopoverButton";
import StarRating from "./components/StarRating/StarRating";
import TabsComponent from "./components/Tabs/TabsComponent";
import ShowToast from "./components/Toast/ShowToast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/accordian",
        element: <Accordian />,
      },
      {
        path: "/popover",
        element: <Popover />,
      },
      {
        path: "/star-rating",
        element: <StarRating />,
      },
      {
        path: "/tabs",
        element: <TabsComponent />,
      },
      {
        path: "/toast",
        element: <ShowToast />,
      },
      {
        path: "/infinite-scrolling",
        element: <InfiniteScroll />,
      },
    ],
  },
]);

export default router;
