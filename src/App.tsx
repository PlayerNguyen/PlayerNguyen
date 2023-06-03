import React from "react";
import Header from "./components/Header";
import IntroductionHero from "./components/IntroductionHero/IntroductionHero";

export default function App() {
  return (
    <div className="app-container">
      {/* Header */}
      <Header />

      {/* Hero introduction thumbnail */}
      <IntroductionHero />
    </div>
  );
}
