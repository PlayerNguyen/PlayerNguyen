import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScrollVisible() {
      let scrollTop = document.documentElement.scrollTop;
      setVisible(scrollTop >= 100);
    }

    document.addEventListener("scroll", handleScrollVisible);

    return () => {
      document.removeEventListener("scroll", handleScrollVisible);
    };
  }, []);

  return (
    <header className="navbar-wrapper bg-[#000000b5] block">
      <div
        className={`top-0 px-16 py-4 bg-transparent h-full w-full z-50 text-md ${
          visible ? "md:block" : "block"
        } text-white`}
      >
        {/* <h1>Home</h1> */}
      </div>
    </header>
  );
}
