import React from "react";
import ReactDOM from "react-dom/client";
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";

import Home from "./Screens/Home/Home.jsx";
import Contact from "./Screens/Contact/Contact.jsx";
import NavBar from "./Components/NavBar.jsx";
import Footer from "./Components/Footer.jsx";
import CookiesBanner from "./Screens/CookiesNotice/CookiesBanner.jsx";
import Services from "./Screens/Services/Services.jsx";
import PrivateRoute from "./Screens/PrivateRoute/PrivateRoute.jsx";
import Login from "./Screens/Login/Login.jsx";
import DashboardAdmin from "./Screens/DashboardAdmin/DashboardAdmin.jsx";
import NewPost from "./Screens/BlogAdmin/NewPost.jsx";
import EditPost from "./Screens/BlogAdmin/EditPost.jsx";
import PrivacyPolicy from "./Screens/PrivacyPolicy/PrivacyPolicy.jsx";
import CookiesNotice from "./Screens/CookiesNotice/CookiesNotice.jsx";
import { PostsList }from "./Screens/Posts/PostsList.jsx";
import PostDetail from "./Screens/Posts/PostDetail.jsx";
import { supabase } from "./lib/superBaseClient.js";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import WhatWeWork from "./Screens/WhatWeWork/WhatWeWork.jsx";
import AboutMe from "./Screens/AboutMe/AboutMe.jsx";

import Statistics from "./Screens/Home/Statistics/Statistics.jsx";
import { Box } from '@mui/material';


// Listener fuera de React (no requiere useEffect)
supabase.auth.onAuthStateChange((event, session) => {
  console.log('Evento de autenticación:', event, session);
});

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
    path: "/Statistics",
    element: <Statistics />,
  }, 
  {
    path: "/AboutMe",
    element: <AboutMe />,
  },
  {
    path: "/Services",
    element: <Services />,
  },
  { 
    path: "/login",
    element: <Login />,
  },
  {
    path: "/posts",
    element: <PostsList />,
  },
  {
    path: "/PrivacyPolicy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/CookiesNotice",
    element: <CookiesNotice />,
  },
  {
  path: "/post/:id",
  element: <PostDetail />, // Este será tu nuevo componente
},
   // ✅ Rutas protegida
   {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardAdmin />
      </PrivateRoute>
    ),
  }, 
    {
    path: "/NewPost",
    element: (
      <PrivateRoute>
        <NewPost />
      </PrivateRoute>
    ),
  }, 
  {
  path: "/edit-post/:id",
  element: (
    <PrivateRoute>
      <EditPost />
    </PrivateRoute>
  ),
},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <NavBar />
      <RouterProvider router={router} />
      <CookiesBanner />
      <Footer />

    </I18nextProvider>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
