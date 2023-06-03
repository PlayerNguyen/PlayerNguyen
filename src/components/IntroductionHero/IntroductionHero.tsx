import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { SiTypescript } from "react-icons/si";
import ShowcaseBox from "../ShowcaseBox/ShowcaseBox";

export default function IntroductionHero() {
  return (
    <div className={`min-h-[80vh] flex flex-row items-center relative`}>
      <div
        className={classNames(
          `text-3xl mx-16`,
          `md:px-10 lg:px-12`,
          `flex md:flex-row`,
          `gap-12`,
          "relative"
        )}
      >
        <div className={classNames(``)}>
          <span
            className={
              "w-12 h-12 md:h-32 md:w-32 bg-red-500 block rounded-full top-32 sticky z-10"
            }
          ></span>
        </div>
        <div className={`w-full`}>
          <h2>Hi, i am</h2>
          <h1 className={classNames(`text-neutral-100`, `font-bold`)}>
            Nguyễn Huỳnh Nguyên
          </h1>
          <h2>a Software Engineering from Vietnam</h2>
        </div>
        <div
          className={`absolute top-12 md:top-32 h-full md:min-h-[40vh] border-l-2 ml-6 md:ml-16 border-l-neutral-500 border-dashed`}
        ></div>
      </div>
      {/* Mini showcase */}
      <ShowcaseBox />
    </div>
  );
}
