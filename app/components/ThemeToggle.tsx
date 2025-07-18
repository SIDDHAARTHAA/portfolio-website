"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const stored = localStorage.getItem("theme");
        // console.log("stored", stored)
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        // console.log("prefersDark:", prefersDark)
        const initTheme = stored || (prefersDark ? "dark" : "light");
        setTheme(initTheme);
        // console.log("initTheme: ", initTheme)
        document.documentElement.classList.add(initTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        // console.log(newTheme)
        document.documentElement.classList.remove(theme);
        document.documentElement.classList.add(newTheme);
        localStorage.setItem("theme", newTheme);
        setTheme(newTheme);
    };

    return (
        <button onClick={toggleTheme} className="border">
            Toggle Theme ({theme})
        </button>
    );
}
