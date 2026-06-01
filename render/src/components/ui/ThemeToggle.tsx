import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "light") {
      setDark(false);
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    const theme = next ? "dark" : "light";
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {dark ? <FiSun size={20} /> : <FiMoon size={20} />}
    </button>
  );
}
