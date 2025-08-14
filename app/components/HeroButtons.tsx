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
            <a href="https://drive.google.com/file/d/1_lqL2yHO3GfUxJgemYqgtevdZel9IBrv/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <button className="border cursor-pointer px-4 py-2 rounded-md transition-colors ease-out duration-500">View Resume</button>
            </a>
        </div>
    )


}
