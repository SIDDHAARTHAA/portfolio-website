"use client"
export default function HeroButtons() {
    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div className="flex gap-2">
            <button className="border cursor-pointer px-4 py-2 rounded-md transition-colors ease-out duration-500" onClick={() => scrollToSection('aboutme')}>About Me</button>
            <button className="border cursor-pointer px-4 py-2 rounded-md transition-colors ease-out duration-500">Download CV</button>
        </div>
    )
}