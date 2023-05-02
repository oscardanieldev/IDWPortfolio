import React from "react";
import ReactDOM from "react-dom/client";
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";

import Home from "./Screens/Home/Home.jsx";
import Contact from "./Screens/Contact/Contact.jsx";
import NavBar from "./Components/NavBar.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import WhatWeWork from "./Screens/WhatWeWork/WhatWeWork.jsx";
import AboutMe from "./Screens/AboutMe/AboutMe.jsx";

let sessionLanguage = sessionStorage.getItem("sessionLanguage");

let idioma = (sessionLanguage == null? 'es':sessionLanguage)

i18next.init({
  interpolation:{escapeValue: false},
  lng:idioma,
  resources: {
    es:{
      global: global_es
    },
    en:{
      global: global_en
    }

  }
})


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
    path: "/AboutMe",
    element: <AboutMe />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <NavBar />
      <RouterProvider router={router} />
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
