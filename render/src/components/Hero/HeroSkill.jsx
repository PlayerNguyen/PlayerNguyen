import React, { useState } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import RadarChart from "../RadarChart/RadarChart";

export default function HeroSkill() {
  const [skills] = useState([
    {
      name: "Coding",
      value: 7,
    },
    {
      name: "Design",
      value: 6,
    },
    {
      name: "",
      value: 6,
    }
  ]);

  return (
    <div className="hero-skill">
      <h1 className="text-4xl my-6 font-bold">Skills</h1>
      {/* Container */}
      <div className="hero-skill-container bg-white text-zinc-700 px-12 py-6 rounded-xl">
        {skills.map((skill) => {
          return <div className="inline-block mr-2">{skill.name}</div>;
        })}
      </div>
    </div>
  );
}
