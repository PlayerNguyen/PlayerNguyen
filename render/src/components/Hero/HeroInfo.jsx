import React, { useState } from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function HeroInfo() {
  const [buttons] = useState([
    {
      icon: <FiGithub />,
      text: "Github",
      url: "https://github.com/PlayerNguyen",
    },
    {
      icon: <FiLinkedin />,
      text: "LinkedIn",
      url: "https://www.linkedin.com/in/okuranguyen/",
    },
    {
      icon: <FiMail />,
      text: "Mail",
      url: "mailto:nhnguyen.forwork@gmail.com",
    },
  ]);

  return (
    <div className="flex flex-col mt-12 gap-4">
      {buttons.map((ele, index) => (
        <button
          key={index}
          className={`px-12 py-4 flex flex-row gap-4 border-2 
          border-gray-400 cursor-pointer shadow-gray-400 
          text-xl transition-all rounded-xl duration-200 
          hover:bg-white hover:border-black
          hover:text-black hover:shadow-black hover:shadow-sm 
          active:bg-zinc-400 active:border-black 
          active:text-black active:shadow-sm`.trim()}
          onClick={() => {
            location.href = ele.url;
          }}
        >
          {/* Fix the button animation and cursor */}
          <div className={`items-center justify-center text-2xl`}>
            {ele.icon}
          </div>

          <div className={`flex-1 items-center align-middle text-md`}>
            {ele.text}
          </div>
        </button>
      ))}
    </div>
  );
}
