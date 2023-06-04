import classNames from "classnames";
import React from "react";
import GraphMaze from "./GraphMaze";

export default function ShowcaseBox() {
  return (
    <div className={classNames(``, `rounded-xl flex-1`, `my-12`, `text-md`)}>
      {/* Tab switcher */}
      <div>
        <button
          className={classNames(
            `px-4 py-3 hover:text-neutral-50`,
            `text-sm`,
            `bg-neutral-800 rounded-b-none rounded-t-md`
          )}
        >
          Graph
        </button>

        <button
          className={classNames(
            `px-4 py-3 hover:text-neutral-50`,
            `text-sm`,
            `bg-neutral-950 rounded-b-none rounded-t-none`
          )}
        >
          Tree
        </button>
      </div>
      {/* Content */}
      <div
        className={classNames(
          `text-neutral-100 `,
          `text-3xl bg-neutral-800 rounded-b-md`,
          `px-2`
        )}
      >
        <GraphMaze width={48} height={16} />
      </div>
    </div>
  );
}
