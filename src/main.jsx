import React, { Suspense } from "react";
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
import "./i18n.js";
import Home from "./components/pages/Home/Home.jsx";

let slides = [
  {
    id: 1,
    image: "/assets/images/gallery1.jpg",
    title: "Wedding",
  },
  {
    id: 2,
    image: "/assets/images/gallery2.jpg",
    title: "Wedding",
  },
  {
    id: 3,
    image: "/assets/images/gallery3.jpg",
    title: "Wedding",
  },
  {
    id: 4,
    image: "/assets/images/gallery4.jpg",
    title: "Wedding",
  },
  {
    id: 5,
    image: "/assets/images/gallery5.jpg",
    title: "Wedding",
  },
  {
    id: 6,
    image: "/assets/images/gallery6.jpg",
    title: "Wedding",
  },
];

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Layout />,
      },
      {
        path: "/home",
        element: <Home />,
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
        element: <Gallery slides={slides} />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
