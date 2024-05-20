import React from "react";
import { Routes, Route } from "react-router-dom";
import Guarantee from "../components/Guarantee/Guarantee";
import WhoIAm from "../components/Profile/WhoIAm";
import Skills from "../components/Skills/Skills";
import Home from "../Pages/Home";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Guarantee />} />
      <Route path="/about" element={<WhoIAm />} />
      <Route path="/skills" element={<Skills />} />
      {/* <Route path="/" element={<Home />} /> */}
    </Routes>
  );
}

export default Router;
