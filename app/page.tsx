"use client";
import { useEffect, useRef, useState } from "react";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import DockBar from "./components/DockBar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Tools from "./components/Tools";
import { formatNumber, incrementVisit, onVisitsChange } from "./firebase";

export default function Web2() {
    const [visits, setVisits] = useState(0);
    const [showPlusOne, setShowPlusOne] = useState(false);
    const prevRef = useRef<number | null>(null);

    useEffect(() => {
        incrementVisit(); // once per session

        const unsub = onVisitsChange((val) => {
            if (prevRef.current !== null && val > prevRef.current) {
                setShowPlusOne(true);
                setTimeout(() => setShowPlusOne(false), 1000);
            }
            prevRef.current = val;
            setVisits(val);
        });

        return () => unsub && unsub();
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center relative px-4 xl:px-10">
            <div className="mb-8"><DockBar /></div>

            <div id="home"><Hero /></div>
            <div id="projects"><Projects /></div>
            <div id="tools"><Tools /></div>
            <div id="aboutme"><AboutMe /></div>

            <div className="flex items-center justify-center gap-2 mt-4 relative">
                <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>

                <div className="flex items-center">
                    <p className="flex items-center">
                        {formatNumber(visits)}
                        <span className="inline-block w-6 text-green-500 text-center">
                            {showPlusOne && <span className="animate-fade">+1</span>}
                        </span>
                        humans have been here. Probably.
                    </p>
                </div>
            </div>

            <div id="contact" className="w-full md:w-[75%] xl:w-[50%]">
                <Contact />
            </div>

            <style jsx global>{`
                @keyframes fade {
                    0% { opacity: 0; }
                    20% { opacity: 1; }
                    80% { opacity: 1; }
                    100% { opacity: 0; }
                }
                .animate-fade {
                    animation: fade 1s ease-in-out forwards;
                }
            `}</style>
        </div>
    );
}
