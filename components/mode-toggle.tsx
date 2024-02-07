"use client";

import { useTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme !== "dark" ? (
        <MdDarkMode color="black" size={25} />
      ) : (
        <MdLightMode size={25} />
      )}
    </button>
  );
}
