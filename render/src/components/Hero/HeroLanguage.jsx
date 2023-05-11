import React, { useState, useEffect, useRef } from "react";
import {
  fetchRepositories,
  fetchRepositoryLanguage,
} from "../../request/GitHubRequest";
import { generateRandomHex } from "../../utils/hexGen";

export default function HeroLanguage() {
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

    // Generate color set
    const color = [];
    for (let i = 0; i < 30; i++) color.push("#" + generateRandomHex());

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
    fetchRepositories().then((response) => {
      const repositories = response.data;

      Promise.all(
        repositories.map(async ({ name }) => {
          const response = await fetchRepositoryLanguage(name);
          return response.data;
        })
      ).then((items) => {
        console.log(items);
      });
    });
  }, []);
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-4xl font-bold">Language</h1>
      <div className="mt-2 bg-zinc-100 px-8 py-6 rounded-md text-gray-600 shadow-lg">
        {/* Build the color slider */}
        <div className="slider-wrapper block w-full" ref={sliderWrapper}>
          <div className="flex">
            {mostPopularLanguage &&
              mapColor.size > 0 &&
              mostPopularLanguage
                .filter((e) => e.percent >= 0.1)
                .map((e, index) => {
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
