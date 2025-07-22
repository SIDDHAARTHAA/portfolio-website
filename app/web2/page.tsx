// "use client"
import AboutMe from "../components/AboutMe";
import DockBar from "../components/DockBar";
import Hero from "../components/Hero";
import Tools from "../components/Tools";
export default function Web2() {
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
        </div>
    );
}
