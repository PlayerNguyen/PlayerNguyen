import classNames from "classnames";
import React from "react";
import GraphMaze from "./GraphMaze";

export default function ShowcaseBox() {
  return (
    <div className={classNames(`bg-neutral-700`, `rounded-xl flex-1 m-5`)}>
      {/* Tab switcher */}
      <div>
        <button className={classNames(`px-4 py-3 hover:text-neutral-50`)}>
          Graph
        </button>
      </div>
      {/* Content */}
      <div className={"text-neutral-100 text-3xl bg-neutral-800"}>
        <GraphMaze width={48} height={16} />
      </div>
    </div>
  );
}
