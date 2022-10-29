import React from "react";
import Navbar from "../components/Navbar";
import "./App.css";

import HeroMain from "../components/Hero/HeroMain";

export default function App() {
  return (
    <div className="app-container-wrapper bg-zinc-800 ">
      {/* <Navbar /> */}
      <Navbar />

      {/* Hero */}
      <HeroMain />

      {/* Footer */}
      <footer className="relative bg-zinc-900 px-12 py-8 w-full">
        <div className="my-32 flex-reverse-row gap-6"></div>
      </footer>
    </div>
  );
}
