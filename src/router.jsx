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
import MultiSelect from "./components/MultiSelect/MultiSelect";
import Autocomplete from "./components/Autocomplete/Autocomplete";
import TreeView from "./components/TreeView/TreeView";
import StepupForm from "./components/StepupForm/StepupForm";

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
        path: "/multi-select",
        element: <MultiSelect />,
      },
      {
        path: "/auto-complete",
        element: <Autocomplete />,
      },
      {
        path: "/tree-view",
        element: <TreeView />,
      },
      {
        path: "/step-up-form",
        element: <StepupForm />,
      },
      {
        path: "/infinite-scrolling",
        element: <InfiniteScroll />,
      },
    ],
  },
]);

export default router;
