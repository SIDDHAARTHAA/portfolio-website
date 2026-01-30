"use client"
import { BriefcaseBusiness, Contact, Home, Moon, Sun, UserRound, Wrench } from 'lucide-react';
import Dock from '@/reactBits/blocks/Components/Dock/Dock'
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";

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
        { icon: <BriefcaseBusiness size={16} color={color} />, label: 'Projects', onClick: () => scrollToSection('projects') },
        { icon: <Wrench size={16} color={color} />, label: 'My Developer Tools', onClick: () => scrollToSection('tools') },
        { icon: <UserRound size={16} color={color} />, label: 'About Me', onClick: () => scrollToSection('aboutme') },
        { icon: <Contact size={16} color={color} />, label: 'Contact Me!', onClick: () => scrollToSection('contact') },
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
                zIndex: 1000,
                display: "flex",
                justifyContent: "center",
                pointerEvents: "none",
            }}
        >
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 120, delay: 0.5 }}
                style={{ pointerEvents: "auto" }}
            >
                <div className="scale-90 sm:scale-100 origin-bottom">
                    <Dock
                        items={items}
                        panelHeight={68}
                        baseItemSize={50}
                        magnification={70}
                    />
                </div>
            </motion.div>
        </div>
    )
}