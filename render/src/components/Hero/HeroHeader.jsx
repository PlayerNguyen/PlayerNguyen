import React from "react";
import HeroInfo from "./HeroInfo";
import HeroLanguage from "./HeroLanguage";
import HeroSkill from "./HeroSkill";

export default function HeroHeader() {
  return (
    <div
      className={`hero-header my-[4rem] flex 
        flex-col md:flex-row md:gap-24 
        gap-6 mx-12 z-10`}
    >
      {/* Information */}
      <div className="md:mx-12 md:w-1/3">
        <div className="flex flex-col gap-5 mt-12 md:mt-0">
          <div
            className={`text-5xl font-extrabold text-transparent
        bg-clip-text bg-gradient-to-r 
        from-purple-400 to-pink-600 leading-tight`}
          >
            Player Nguyen
          </div>
          <div className="text-xl uppercase font-bold">
            <span>🇻🇳</span>
            <span className="text-zinc-500 mx-2">•</span>
            <span>Computer Science Engineer</span>
          </div>

          <p className="text-lg mt-3 text-zinc-300">
            Third-year university student dedicated to building React, Express
            applications.
          </p>
        </div>
        {/* Information references */}
        <HeroInfo />
      </div>

      <div className="md:flex-1">
        {/* Language */}
        <HeroLanguage />
        {/* Skill */}
        <HeroSkill />
      </div>
    </div>
  );
}
