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
import './i18n.js'

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
  }
];

const questionsAnswers = [
  {
    question: "¿Cómo puedo confirmar mi asistencia?",
    answer:
      "Mediante el uso del sitio web. En la pestaña Confirmación. Coloque su nombre y apellido luego sobre el boton continuar y complete el formulario"
  },
  {
    question: "¿Cual es la fecha límite para confirmar mi asistencia?",
    answer:
      "hasta el 28 de Febrero de 2024",
  },
  {
    question: "¿Están invitados los niños?",
    answer: "Le pedimos cortesmente que solo invite niños si se mencionan en su confirmación"
  },
  {
    question: "¿A que hora debo llegar a la Ceremonia?",
    answer: "Recomendamos llegar al menos 15 minutos antes (1:45 pm)",
  },
  {
    question: "¿Cual es el código de vestimenta?",
    answer: "Ropa apropiada a una ceremonia"
  },
  {
    question: "¿La Ceremonia y la Recepción serán al aire libre?",
    answer: "La Ceremonia será en mi casa y la recpción será en el restaurant xxxx"
  },
  {
    question: "¿Cual es el lugar de la Ceremonia?",
    answer: "La ceremonia será en mi casa"
  },
  {
    question: "¿Cual es el lugar de la Recepción?",
    answer: "La recén será en el restaurant xxxx"
  },
  {
    question: "¿Puedo tomar fotografías durante la ceremonia y la recepción?",
    answer: "Eres más que bienvenido a tomar fotografias, pero te pedimos que mantengas al mínimo y tengas en cuenta al fotógrafo/videografo que hemos contratado para capturar momentos."
  },
  {
    question: "¿a qué hora termina la recepción?",
    answer: "5pm o hasta que el cuerpo y su bolsillo aguante"
  },
  {
    question: "¿Habrá fiesta despues de la recepción?",
    answer: "No. Despues de la recepción nos iremos al Aeropuerto porque salimos de viaje de luna de miel."
  }
];

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
        element: <Faq questionsAnswers={questionsAnswers} />,
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
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
    
  </React.StrictMode>
);
