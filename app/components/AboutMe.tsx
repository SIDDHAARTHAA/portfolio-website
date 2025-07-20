import Image from "next/image";
import AboutImage from "@/public/aboutMe.png";
import { GraduationCap, LaptopMinimal, SquareArrowOutUpRight } from "lucide-react";

export default function AboutMe() {
    const educationData = [
        {
            title: "Bachelor of Technology in Computer Science",
            duration: "2024–2027",
            institute: "Indian Institute of Information Technology Dharwad",
            link: "https://iiitdwd.ac.in/",
        },
        {
            title: "Pre-University Course",
            duration: "2022–2024",
            institute: "Ambika Padavi Poorva Vidyalaya",
            link: "https://www.ambikapucollege.edu.in/",
        },
        {
            title: "Secondary Education – Specialization in Sanskrit and Veda",
            duration: "2016–2022",
            institute: "Vaidika Laukika Gurukula, Udupi",
            link: "https://sriputhige.org/padigaar-vidyapeetha/",
        },
    ];

    return (
        <div className="min-h-screen px-4 py-4 flex flex-col items-center gap-8 mt-16 mb-20">

            {/* Topbar */}
            <div className="flex flex-col md:flex-row items-center gap-6 w-full md:w-[80%] xl:w-[100%] p-4 border-1 border-card-border rounded-2xl shadow-xl/10">
                <div>
                    <Image
                        src={AboutImage}
                        alt="Profile"
                        width={160}
                        height={160}
                        className="rounded-full border border-card-border shadow-md"
                    />
                </div>

                <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
                    <h1 className="text-4xl font-bold">Siddhaartha B S</h1>
                    <p className="text-muted-foreground text-lg">Student @ IIIT Dharwad</p>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        {["Web2 Dev", "Web3 Learner", "AI Enthusiast", "Filmmaker", "Video Editor", "Freelancer"].map((tag, idx) => (
                            <span
                                key={idx}
                                className="px-3 py-1 text-sm bg-muted border border-card-border rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Cards */}
            <div className="flex flex-col xl:flex-row gap-4 justify-center items-center xl:items-stretch">

                {/* Professional Summary */}
                <div className="bg-muted/20 p-6 rounded-xl border border-card-border w-full md:w-[80%] xl:w-[70%] shadow-xl/10">
                    <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                        <LaptopMinimal /> Professional Summary
                    </h2>
                    <p className="text-base leading-relaxed">
                        Full-Stack Developer based in Dharwad, blending rapid learning with a passion for clean, scalable tech. I specialize in building modern web applications using the MERN stack, with growing expertise in TypeScript, Next.js, Prisma, and cutting-edge UI systems like ShadCN/UI and Radix UI.
                        <br /><br />
                        I’ve built everything from authentication systems with JWT and Zod validation to full file managers and chat apps with real-time features. I focus on writing modular, maintainable code and crafting polished UIs that just work across devices.
                        <br /><br />
                        Whether it’s designing smart full-stack flows, refactoring frontend structure, or integrating complex backend logic — I believe in deep understanding and clean execution. I’m also diving into cybersecurity, and my editing/filmmaking background adds a visual edge to the things I build.
                    </p>
                </div>

                {/* Education */}
                <div className="bg-muted/20 p-6 rounded-xl border border-card-border shadow-xl/10 w-full md:w-[80%] xl:w-[70%] flex flex-col gap-6">
                    <h2 className="text-2xl font-semibold flex items-center gap-2">
                        <GraduationCap /> Education
                    </h2>

                    {educationData.map((edu, idx) => (
                        <div
                            key={idx}
                            className="border border-card-border rounded-2xl p-6 m-2 group"
                        >
                            <div className="flex flex-col xl:flex-row justify-between xl:items-center">
                                <h3 className="text-xl font-semibold">{edu.title}</h3>
                                <p className="text-sm text-nowrap underline underline-offset-2 xl:no-underline">
                                    {edu.duration}
                                </p>
                            </div>
                            <a
                                href={edu.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="leading-relaxed text-sm underline-offset-4 hover:underline inline-flex items-center gap-1 text-primary transition-all duration-200 font-sub text-text-sub"
                            >
                                {edu.institute}
                                <SquareArrowOutUpRight
                                    size={16}
                                    className="opacity-100 duration-200"
                                />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
