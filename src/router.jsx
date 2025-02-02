import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./Home";
import InfiniteScroll from "./components/InfiniteScroll/InfiniteScroll";
import Accordian from "./components/Accordian/Accordian";
import Popover from "./components/Popover/PopoverButton";
import StarRating from "./components/StarRating/StarRating";
import TabsComponent from "./components/Tabs/TabsComponent";
import ShowToast from "./components/Toast/ShowToast";
import ShowProgressBar from "./components/ProgressBar/ShowProgressBar";
import Form from "./components/Form/Form";

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
        path: "/progress-bar",
        element: <ShowProgressBar count={5} />,
      },
      {
        path: "/form-handle",
        element: <Form />,
      },
      {
        path: "/infinite-scrolling",
        element: <InfiniteScroll />,
      },
    ],
  },
]);

export default router;
