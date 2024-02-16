import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import Mercury from "./components/Planets/Mercury";
import Venus from "./components/Planets/Venus";
import Earth from "./components/Planets/Earth";
import Mars from "./components/Planets/Mars";
import Jupiter from "./components/Planets/Jupiter";
import { RouterProvider } from "react-router";
import Saturn from "./components/Planets/Saturn";
import Uranus from "./components/Planets/Uranus";
import Neptune from "./components/Planets/Neptune";

const router = createBrowserRouter([
  {
    path: "homepage",
    element: <App />,
  },
  {
    path: "mercury",
    element: <Mercury />,
  },
  {
    path: "venus",
    element: <Venus />,
  },
  {
    path: "earth",
    element: <Earth />,
  },
  {
    path: "mars",
    element: <Mars />,
  },
  {
    path: "jupiter",
    element: <Jupiter />,
  },
  {
    path: "saturn",
    element: <Saturn />,
  },
  {
    path: "uranus",
    element: <Uranus />,
  },
  {
    path: "neptune",
    element: <Neptune />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
