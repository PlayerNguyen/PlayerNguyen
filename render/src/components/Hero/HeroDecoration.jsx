import React, { useState, useEffect, useRef } from "react";
import {
  SiGit,
  SiGithub,
  SiJava,
  SiJavascript,
  SiTypescript,
  SiVisualstudiocode,
} from "react-icons/si";

export default function HeroDecoration() {
  const [icons] = useState([
    {
      icon: <SiVisualstudiocode />,
      x: "4vw",
      y: "12vh",
      textColor: "text-blue-700",
      textSize: "text-6xl",
    },
    {
      icon: <SiGithub />,
      x: "18vw",
      y: "16vh",
      textColor: "text-zinc-300",
      textSize: "text-6xl",
    },

    {
      icon: <SiGit />,
      x: "32vw",
      y: "10vh",
      textColor: "text-orange-600",
      textSize: "text-6xl",
    },
    {
      icon: <SiJava />,
      x: "52vw",
      y: "16vh",
      textColor: "text-red-400",
      textSize: "text-4xl",
    },
    {
      icon: <SiJavascript />,
      x: "87vw",
      y: "14vh",
      textColor: "text-yellow-400",
      textSize: "text-5xl",
    },
    {
      icon: <SiTypescript />,
      x: "75vw",
      y: "20vh",
      textColor: "text-blue-500",
      textSize: "text-5xl",
    },
  ]);
  const [maxScroll] = useState(400);
  const [floating, setFloating] = useState(0);
  const wrapperContainerRef = useRef(null);
  const [basePosition, setBasePosition] = useState(new Map());

  useEffect(() => {
    // Initialize the value
    const _top = document.documentElement.scrollTop;
    setFloating(_top);

    // Collect all base position into map
    const mapSet = basePosition;
    let icons = wrapperContainerRef.current.children;
    for (let icon of icons) {
      mapSet.set(icon, { x: icon.style.left, y: icon.style.top });
    }

    setBasePosition(mapSet);

    // Function to handle scrolling floating
    function handleFloating() {
      const _top = document.documentElement.scrollTop;

      setFloating(_top < maxScroll ? _top : maxScroll);
    }

    // Register the listener
    document.addEventListener("scroll", handleFloating);

    return () => {
      document.removeEventListener("scroll", handleFloating);
    };
  }, []);

  useEffect(() => {
    let icons = wrapperContainerRef.current.children;
    for (let icon of icons) {
      icon.style.top = `calc(${basePosition.get(icon).y} + ${floating / 20}vh)`;
    }
  }, [floating]);

  return (
    <div
      className={`absolute top-0 left-0
     bg-transparent w-full min-h-[100vh] 
     opacity-40 -z-10`}
      ref={wrapperContainerRef}
    >
      {icons &&
        icons.map((icon, index) => {
          let classes =
            "hero-decoration-icon absolute animate-slide-up-then-idle";

          let style = {
            // Position
            left: icon.x,
            top: icon.y,
            // Delay animation
            animationDelay: `${index * 1000}ms`,
          };

          // Typography
          classes += ` ${icon.textColor} ${icon.textSize}`;

          return (
            <div className={classes} key={index} style={style}>
              {icon.icon}
            </div>
          );
        })}
    </div>
  );
}
