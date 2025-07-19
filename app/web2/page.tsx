// "use client"
import DockBar from "../components/DockBar";
import Hero from "../components/Hero";
export default function Web2() {
    return (
        <div className="min-h-screen flex flex-col items-center relative px-4">
            {/* <DotGrid className="absolute inset-0 -z-10" /> */}

            <div className="mb-8">
                <DockBar />
            </div>

            {/* Hero page */}
            <Hero />
        </div>
    );
}
