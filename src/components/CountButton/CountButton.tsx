import classNames from "classnames";
import React from "react";

export default function CountButton({ value, onIncrease, onDecrease }) {
  return (
    <div
      className={classNames(
        `flex flex-row items-center`,
        `bg-neutral-700`,
        `rounded-md`,
        `text-lg`
      )}
    >
      <div
        // contentEditable={true}
        className={classNames(`mx-4`)}
        // onInput={(e) => {
        //   e.preventDefault();
        //   (e.target as HTMLDivElement).innerText;
        //   // if ()
        // }}
      >
        {value}
      </div>
      <div className={classNames(`flex flex-col`, `text-sm`)}>
        <button
          onClick={() => onIncrease()}
          className={classNames(`px-2 py-0`, `hover:bg-neutral-800`)}
        >
          +
        </button>
        <button
          onClick={() => onDecrease()}
          className={classNames(`px-2 py-0`, `hover:bg-neutral-800`)}
        >
          -
        </button>
      </div>
    </div>
  );
}
