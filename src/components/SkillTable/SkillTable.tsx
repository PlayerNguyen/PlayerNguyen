import classNames from "classnames";
import React, { useState } from "react";
import {
  SiCss3,
  SiDatabricks,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiTypescript,
} from "react-icons/si";

export default function SkillTable() {
  const [skills] = useState([
    {
      icon: <SiTypescript />,
      alt: `TypeScript`,
      value: 0.48,
    },

    {
      icon: <SiJavascript />,
      alt: `Javascript`,
      value: 0.8333333333333,
    },
    {
      icon: <SiHtml5 />,
      alt: `Html5`,
      value: 0.7,
    },
    {
      icon: <SiCss3 />,
      alt: `Html5`,
      value: 0.7,
    },
  ]);

  return (
    <div className={classNames(`flex flex-col gap-4`)}>
      <h1 className={classNames(`text-4xl font-bold`, `text-neutral-100`)}>
        Skills
      </h1>
      <div
        className={classNames(
          `bg-neutral-700`,
          `rounded-md`,
          `px-6 py-4`,
          `flex flex-col gap-4`
        )}
      >
        {skills &&
          skills.map((skill) => {
            return (
              <div
                className={classNames(`flex flex-row items-center`)}
                key={skill.alt}
              >
                <div
                  className={classNames(`p-2 bg-neutral-600
               rounded-md`)}
                >
                  {" "}
                  <span>{skill.icon}</span>
                </div>
                <div
                  className={classNames(
                    `w-full h-2 bg-neutral-600`,
                    `rounded-r-md`,
                    `relative`
                  )}
                >
                  <div
                    className={classNames(
                      `absolute bg-neutral-400`,
                      `top-0`,
                      `h-2`
                    )}
                    style={{ width: skill.value * 100 + "%" }}
                  ></div>
                </div>
                {/* This is percent, can be added later */}
                {/* <div className={classNames(`ml-4`, `text-sm`, `flex flex-row`)}>
                <span>{(skill.value * 100).toFixed(0)}</span>
                <span> %</span>
              </div> */}
              </div>
            );
          })}
      </div>
    </div>
  );
}
