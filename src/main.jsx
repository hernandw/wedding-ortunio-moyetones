import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import Layout from "./components/Layout/Layout.jsx";
import Event from "./components/pages/Event/Event.jsx";
import Faq from "./components/pages/faq/Faq.jsx";
import Groomsmen from "./components/pages/Groomsmen/Groomsmen.jsx";
import Rsvp from "./components/pages/rsvp/rsvp.jsx";
import Gallery from "./components/pages/Gallery/Gallery.jsx";
import NotFound from "./components/pages/NotFound/NotFound.jsx";
import { createHashRouter, RouterProvider } from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
    },
      {
        path: "/event",
        element: <Event />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/groomsmen",
        element: <Groomsmen />,

      },
      {
        path: "/rsvp",
        element: <Rsvp />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "*",
        element: <NotFound />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
