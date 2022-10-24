import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    function handleScrollVisible() {}

    document.addEventListener("scroll", () => {
      let scrollTop = document.documentElement.scrollTop;
      setVisible(scrollTop >= 200);
    });
  }, []);

  return (
    <div className="navbar-wrapper">
      <div
        className={`fixed top-0 px-9 py-12 bg-transparent w-full z-50 ${
          visible ? "block" : "hidden"
        }`}
      >
        <h1>Back to top</h1>
      </div>
    </div>
  );
}
