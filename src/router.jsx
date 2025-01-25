import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./Home";
import InfiniteScroll from "./components/InfiniteScroll/InfiniteScroll";
import Accordian from "./components/Accordian/Accordian";

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
            path: "/infinite-scrolling",
            element: <InfiniteScroll />,
        },
      ],
    },
  ])

  export default router;