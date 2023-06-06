import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div
      className={classNames(
        `flex flex-row items-center sticky top-0 bg-neutral-950 z-20`,
        `px-6 py-4 w-full`
      )}
    >
      {/* Title url */}
      <div
        className={classNames(
          `font-semibold transition-colors`,
          `lg:mx-32`,
          `text-xl md:text-2xl lg:text-3xl`,
          `text-neutral-300 hover:text-neutral-100`,
          `w-full`
        )}
      >
        <Link to="/">gh@PlayerNguyen</Link>
      </div>

      <div className="hidden md:flex">
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}
