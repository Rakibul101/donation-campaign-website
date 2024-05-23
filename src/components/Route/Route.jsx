import { createBrowserRouter } from "react-router-dom";
import LayOut from "../LayOut/LayOut";
import NotFound from "../NotFound/NotFound";
import Home from "../../pages/Home/Home";
import Donation from "../../pages/Donation/Donation";
import Statistics from "../../pages/Statistics/Statistics";
import CardDetails from "../CardDetails/CardDetails";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    errorElement: <NotFound></NotFound>,
    loader: () => fetch("data.json"),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/carddetails/:id",
        element: <CardDetails></CardDetails>,
        loader: () => fetch("../data.json"),
      },
    ],
  },
]);

export default Route;
