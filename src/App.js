import React from "react";
import { About, Skill, Header, Footer, Work, Testimonial } from "./containers";
import { Navbar } from "./components";
import "./App.scss";

export const App = () => {
  return (
    <>
      <div className="app">
        <Navbar />
        <Header />
        <About />
        <Skill />
        <Work />
        <Testimonial />
        <Footer />
      </div>
    </>
  );
};
