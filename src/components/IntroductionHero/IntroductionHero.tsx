import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { SiTypescript } from "react-icons/si";
import ShowcaseBox from "../ShowcaseBox/ShowcaseBox";
import SkillTable from "../SkillTable/SkillTable";

export default function IntroductionHero() {
  return (
    <div className={`min-h-[80vh] flex flex-row items-center relative`}>
      <div
        className={classNames(
          `text-3xl lg:mx-16`,
          `px-6 md:px-10 lg:px-12`,
          `flex md:flex-row`,
          `gap-12`,
          "relative"
        )}
      >
        <div className={classNames(`hidden lg:block`)}>
          <span
            className={
              "w-12 h-12 md:h-32 md:w-32 bg-red-500 block rounded-full top-32 sticky z-10"
            }
          ></span>
        </div>

        <div className={classNames(`flex flex-col gap-40`)}>
          <div className={`w-full`}>
            <h2>Greetings, i am</h2>
            <h1 className={classNames(`text-neutral-100`, `font-bold`)}>
              Nguyễn Huỳnh Nguyên
            </h1>
            <h2>a Software Developer from Vietnam</h2>
          </div>

          {/* skill tables */}
          <SkillTable />

          {/* Mini showcase */}
          <ShowcaseBox />
        </div>
        <div
          className={`hidden lg:block absolute top-12 md:top-32 h-full md:min-h-[40vh] border-l ml-6 md:ml-16 border-l-neutral-700 border-solid`}
        ></div>
      </div>
    </div>
  );
}
