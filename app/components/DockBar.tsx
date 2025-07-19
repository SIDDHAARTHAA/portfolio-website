"use client"
import { Archive, Camera, Home, Moon, Settings2, Sun } from 'lucide-react';
import Dock from '../../reactBits/blocks/Components/Dock/Dock';
import { useEffect, useState } from 'react';

export default function DockBar() {
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
    const darkColor = "#D3DEFF"
    const lightColor = "#19205C"
    const color = theme === "light" ? lightColor : darkColor
    const items = [
        { icon: <Home size={16} color={color} />, label: 'Home', onClick: () => alert('Home!') },
        { icon: <Archive size={16} color={color} />, label: 'Archive', onClick: () => alert('Archive!') },
        { icon: <Camera size={16} color={color} />, label: 'Profile', onClick: () => alert('Profile!') },
        { icon: <Settings2 size={16} color={color} />, label: 'Settings', onClick: () => alert('Settings!') },
        {
            icon: theme === "light" ? <Moon size={16} color='blue' /> : <Sun size={16} color='orange' />,
            label: 'Toggle theme',
            onClick: toggleTheme
        },
    ];
    return (
        <div>
            <div>
                <Dock
                    items={items}
                    panelHeight={68}
                    // dockHeight={}
                    baseItemSize={50}
                    magnification={70}
                />

            </div>
        </div>

    )
}