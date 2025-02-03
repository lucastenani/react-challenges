import { Home } from "@/pages/home";
import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./pages/_layouts/app";
import { States } from "./pages/states";
import { ListsAndConditionals } from "./pages/listsAndConditionals";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/states",
        element: <States />,
      },
      {
        path: "/lists-and-conditionals",
        element: <ListsAndConditionals />,
      },
    ],
  },
]);
