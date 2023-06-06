import React from "react";
import Header from "./components/Header";
import IntroductionHero from "./components/IntroductionHero/IntroductionHero";
import classNames from "classnames";

export default function App() {
  return (
    <div className="app-container">
      {/* Header */}
      <Header />

      <div className={classNames(`mt-12`)}>
        {/* Hero introduction thumbnail */}
        <IntroductionHero />
      </div>
    </div>
  );
}
