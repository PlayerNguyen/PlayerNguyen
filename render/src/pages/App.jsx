import React, { useState, useEffect, useRef } from "react";

import Navbar from "../components/Navbar";

import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import {
  SiGit,
  SiGithub,
  SiJava,
  SiJavascript,
  SiTypescript,
  SiVisualstudiocode,
} from "react-icons/si";

import "./App.css";

function HeroContainerHeader() {
  return (
    <div className="flex flex-col gap-5 mt-12 md:mt-0">
      <h1
        className={`text-5xl font-extrabold text-transparent
        bg-clip-text bg-gradient-to-r 
        from-purple-400 to-pink-600 leading-tight`}
      >
        Player Nguyen
      </h1>
      <h3 className="text-xl uppercase font-bold">Computer Science Engineer</h3>
      <p className="text-md mt-3 text-zinc-300">
        Third-year university student dedicated to building React, Express
        applications.
      </p>
    </div>
  );
}

function HeroInfo() {
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

function HeroSkill() {
  const [languageList] = useState([
    { name: "PHP", percent: 2.1043303895729646 },
    { name: "CSS", percent: 5.793752664093128 },
    { name: "JavaScript", percent: 0.9287794100872321 },
    { name: "HTML", percent: 0.4672954426747195 },
    { name: "Java", percent: 86.43601673800933 },
    { name: "TSQL", percent: 0.037630503040818414 },
    { name: "Shell", percent: 0.2612282144722544 },
    { name: "Batchfile", percent: 0.03263551603859108 },
    { name: "TypeScript", percent: 3.183103495890543 },
    { name: "Clojure", percent: 0.5612156069329459 },
    { name: "Python", percent: 0.15890302400835699 },
    { name: "PureBasic", percent: 0.014312558910228318 },
    { name: "Dockerfile", percent: 0.009077428302124671 },
    { name: "Makefile", percent: 0.0028577089099281368 },
    { name: "SCSS", percent: 0.008861299056835989 },
  ]);
  const [mapColor, setMapColor] = useState(new Map());
  const [mostPopularLanguage, setMostPopularLanguage] = useState([]);
  const sliderWrapper = useRef(null);

  useEffect(() => {
    // Select most popular language and colorize it
    const _mostPopularLanguage = languageList
      .filter((e) => e.percent >= 0.1)
      .sort((a, b) => b.percent - a.percent);

    // Assign color to each language
    const color = [
      "#761A1A",
      "#032A33",
      "#C2BE53",
      "#492540",
      "#062C80",
      "#3C1B1F",
      "#DEBA9D",
      "#9E7777",
      "#6F4C5B",
    ];
    _mostPopularLanguage.push({
      name: "Others",
      percent: 100 - _mostPopularLanguage.reduce((a, b) => a + b.percent, 0),
    });

    _mostPopularLanguage.forEach((language, _index) => {
      const m = mapColor;
      m.set(language.name, color.pop());
      setMapColor(m);
    });

    setMostPopularLanguage(_mostPopularLanguage);
  }, []);

  useEffect(() => {
    console.log(mapColor);
  }, [mapColor]);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-4xl font-bold">Language overal</h1>
      <div className="mt-2 bg-zinc-100 px-8 py-6 rounded-xl text-gray-600">
        {/* Build the color slider */}
        <div className="slider-wrapper block w-full" ref={sliderWrapper}>
          <div className="flex">
            {mostPopularLanguage &&
              mapColor.size > 0 &&
              mostPopularLanguage
                .filter((e) => e.percent >= 0.1)
                .map((e, index) => {
                  console.log(e.name, mapColor.get(e.name));
                  let classes = ``;
                  classes += `left-0 top-0 h-4`;
                  let style = {
                    backgroundColor: `${mapColor.get(e.name)}`.toLowerCase(),
                    width: `${e.percent}%`,
                  };
                  return (
                    <div
                      key={index}
                      className={classes}
                      style={style}
                      alt={e.name}
                    ></div>
                  );
                })}
          </div>
        </div>

        <div className="mt-4">
          {mostPopularLanguage &&
            mapColor.size > 0 &&
            mostPopularLanguage.map((language, index) => {
              let style = {
                color: `${mapColor.get(language.name)}`,
                animationDelay: `${index * 300}ms`,
              };
              return (
                <div
                  key={index}
                  className="inline-block px-4 animate-fadeInUp"
                  style={style}
                >
                  {language.name}
                  <small className="pl-1 text-sm font-light ">
                    {language.percent.toFixed(2)}
                  </small>
                </div>
              );
            })}
        </div>

        <div className="text-sm mt-4">
          <p>The report was programmatically collected from Github</p>
        </div>
      </div>
    </div>
  );
}

function HeroDecoration() {
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
      console.log(basePosition.get(icon));
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

export default function App() {
  return (
    <div className="app-container-wrapper bg-zinc-800 ">
      {/* <Navbar /> */}
      <Navbar />

      {/* Hero */}
      <section
        className={`hero relative min-h-[100vh] z-30 
      overflow-hidden top-0 left-0 h-full
      w-full text-gray-300 
      md:py-28 md:px-16`}
      >
        {/* Hero container */}
        <div
          className={`hero-container my-[4rem] flex 
        flex-col md:flex-row md:gap-24 
        gap-6 mx-12 z-10`}
        >
          {/* Information */}
          <div className="md:mx-12 md:w-1/3">
            <HeroContainerHeader />
            {/* Information references */}
            <HeroInfo />
          </div>
          {/* Skills */}
          <div className="md:flex-1">
            <HeroSkill />
          </div>
        </div>

        {/* Hero decoration */}
        <HeroDecoration />

        {/* Hero  */}
        <div className="hero-footer relative">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>



      {/* Footer */}
      <footer className="relative bg-zinc-900 px-12 py-8 w-full">
        <div className="my-32 flex-reverse-row gap-6"></div>
      </footer>
    </div>
  );
}
