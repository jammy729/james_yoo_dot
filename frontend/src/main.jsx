import React from "react";
import ReactDOM from "react-dom/client";
import "../scss/index.scss";

//Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./index";
import About from "../pages/about";
import Contact from "../pages/contact";
import Work from "../pages/work";
import Work from "../pages/about";

import ErrorPage from "./routes/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <ErrorPage />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "work",
    element: <Work />,
  },
  {
    path: "work/:workId",
    element: <WorkPiece />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
