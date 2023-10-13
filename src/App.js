import "./App.css";
import "./index.css";
import React from "react";
import { Article, Brand, Cta, Feature, Navbar } from "./Components";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Header,
} from "./Containers";

export default function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}
