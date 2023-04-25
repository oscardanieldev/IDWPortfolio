import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Screens/Home/Home.jsx";
import Contact from "./Screens/Contact/Contact.jsx";

import NavBar from "./Components/NavBar.jsx";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import WhatWeWork from "./Screens/WhatWeWork/WhatWeWork.jsx";
import Blog from "./Screens/Blog/Blog.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "/WhatWeWork",
    element: <WhatWeWork />,
  },
  {
    path: "/Blog",
    element: <Blog />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar />
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
