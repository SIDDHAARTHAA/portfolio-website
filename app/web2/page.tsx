import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import DockBar from "../components/DockBar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
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
            <div id="projects">
                <Projects />
            </div>

            {/* <div className="flex-1 border-t border-card-border w-[50%]"></div> */}

            <div id="contact" className="w-full md:w-[75%] xl:w-[50%]">
                <Contact />
            </div>
        </div>
    );
}
