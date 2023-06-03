import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div
      className={classNames(
        `flex flex-row items-center sticky top-0 bg-neutral-950 z-20`
      )}
    >
      {/* Title url */}
      <div
        className={classNames(
          `font-semibold transition-colors`,
          `p-8 md:p-10 lg:p-12`,
          `text-xl md:text-3xl lg:text-4xl`,
          `text-neutral-300 hover:text-neutral-100`,
          ``
        )}
      >
        <Link to="/">gh@PlayerNguyen</Link>
      </div>

      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}
