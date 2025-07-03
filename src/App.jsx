import { useState } from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import Navbar from "./Components/Header/Navbar";
import RootLayout from "./Layout/RootLayout";
import Home from "./Components/Header/Home";
import About from "./Components/Header/About";
import Contact from "./Components/Header/Contact";
import Projects from "./Components/Header/Projects";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
