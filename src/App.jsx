import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Shop from "./Shop";
import Contact from "./Contact";

// Define routes with createBrowserRouter
const router = createBrowserRouter(
  [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/shop", element: <Shop /> },
    { path: "/contact", element: <Contact /> },
  ],
  {
    future: {
      v7_startTransition: true, // Enable early v7 transition behavior
      v7_relativeSplatPath: true, // Enable early v7 relative splat behavior
    },
  }
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;