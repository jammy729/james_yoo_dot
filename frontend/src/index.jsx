import React from "react";
import { Routes, Route, BrowserRouter, Router } from "react-router-dom";

import Header from "../components/header";
import Footer from "../components/footer";
// Routes
import Home from "./routes/home";
import About from "./routes/about";
import Contact from "./routes/contact";
import Work from "./routes/Work";
import WorkPiece from "./routes/work_piece";

import ErrorPage from "./routes/404";
const index = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:id" element={<WorkPiece />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default index;
