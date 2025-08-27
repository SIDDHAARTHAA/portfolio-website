"use client";
import { useEffect, useState } from "react";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import DockBar from "./components/DockBar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Tools from "./components/Tools";
import { incrementVisit, onVisitsChange } from "./firebase";

export default function Web2() {
    const [visits, setVisits] = useState(0);

    useEffect(() => {
        incrementVisit(); // Increase counter on load
        onVisitsChange(setVisits); // Listen for live updates
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center relative px-4 xl:px-10">
            {/* <DotGrid className="absolute inset-0 -z-10" /> */}

            <div className="mb-8">
                <DockBar />
            </div>
            {/* Hero page */}
            <div id="home">
                <Hero />
            </div>
            {/* About me Page */}
            <div id="aboutme">
                <AboutMe />
            </div>
            <div id="tools">
                <Tools />
            </div>
            <div id="projects">
                <Projects />
            </div>

            {/* <div className="flex-1 border-t border-card-border w-[50%]"></div> */}

            <div className="flex items-center justify-center gap-2 mt-4">
                <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <p>{visits} humans have been here. Probably.</p>
            </div>
            <div id="contact" className="w-full md:w-[75%] xl:w-[50%]">
                <Contact />
            </div>
        </div>
    );
}
