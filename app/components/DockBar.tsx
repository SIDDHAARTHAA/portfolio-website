"use client"
import { BriefcaseBusiness, Home, Moon, Sun, UserRound, Wrench } from 'lucide-react';
import Dock from '@/reactBits/blocks/Components/Dock/Dock'
import { useEffect, useState } from 'react';

export default function DockBar() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const stored = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const initTheme = stored || (prefersDark ? "dark" : "light");
        setTheme(initTheme);
        document.documentElement.classList.add(initTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        document.documentElement.classList.remove(theme);
        document.documentElement.classList.add(newTheme);
        localStorage.setItem("theme", newTheme);
        setTheme(newTheme);
    };
    const darkColor = "#D3DEFF"
    const lightColor = "#19205C"
    const color = theme === "light" ? lightColor : darkColor

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };
    const items = [
        { icon: <Home size={16} color={color} />, label: 'Home', onClick: () => scrollToSection('home') },
        { icon: <UserRound size={16} color={color} />, label: 'About Me', onClick: () => scrollToSection('aboutme') },
        { icon: <Wrench size={16} color={color} />, label: 'My Developer Tools', onClick: () => scrollToSection('tools') },
        { icon: <BriefcaseBusiness size={16} color={color} />, label: 'Projects', onClick: () => scrollToSection('projects') },
        {
            icon: theme === "light" ? <Moon size={16} color='blue' /> : <Sun size={16} color='orange' />,
            label: 'Toggle theme',
            onClick: toggleTheme
        },
    ];
    return (
        <div
            style={{
                position: "fixed",
                bottom: 0,
                left: 0,
                width: "100%",
                zIndex: 1000, // ensure it's above other content
                display: "flex",
                justifyContent: "center",
                pointerEvents: "none", // allow clicks to pass through except the dock itself
            }}
        >
            <div style={{ pointerEvents: "auto" }}>
                <Dock
                    items={items}
                    panelHeight={68}
                    baseItemSize={50}
                    magnification={70}
                />
            </div>
        </div>
    )
}