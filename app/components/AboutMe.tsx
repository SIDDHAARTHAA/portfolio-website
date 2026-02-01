import Image from "next/image";
import AboutImage from "@/public/myImage.jpg";
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
        <div className="min-h-screen px-4 py-4 flex flex-col items-center gap-8 mt-6 mb-20">

            {/* Topbar */}
            <div className="flex flex-col md:flex-row items-center gap-6 w-full max-w-5xl p-4 rounded-2xl shadow-xl/10 border border-card-border bg-card-bg backdrop-blur-sm dark:bg-card/10">
                <div>
                    <Image
                        src={AboutImage}
                        alt="Profile"
                        width={160}
                        height={160}
                        className="rounded-full border border-card-border aspect-square object-cover w-32 h-32 sm:w-40 sm:h-40"
                    />
                </div>

                <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
                    <h1 className="text-4xl font-bold">Siddhaartha B S</h1>
                    <p className="text-muted-foreground text-lg">Student @ IIIT Dharwad</p>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        {["Web2 Engineer", "Cloud & Deployment", "Visual Storyteller", "Motion & Video Artist", "Independent Builder"
                        ].map((tag, idx) => (
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
            <div className="flex flex-col gap-4 justify-center items-center w-full max-w-5xl">

                {/* Professional Summary */}
                <div className="p-6 rounded-xl w-full shadow-xl/10 border border-card-border bg-card-bg backdrop-blur-sm dark:bg-card/10">
                    <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                        <LaptopMinimal /> Professional Summary
                    </h2>
                    <p className="text-base leading-relaxed">
                        Full Stack Engineer from Dharwad who designs, builds, and ships real-world products and websites. I work mostly with the MERN stack, and I am actively building deeper skills in backend architecture, TypeScript, Next.js, Prisma, and modern UI libraries like ShadCN/UI and Radix UI.
                        <br /><br />
                        I build backend systems I can trust, secure authentication with JWT and Zod, scalable APIs, real-time features, and frontend experiences that feel clean, fast, and responsive on all devices.
                        <br /><br />
                        I am currently advancing on the DevOps path, focusing on deployment, automation, cloud infrastructure, and production workflows. I engineer products, not templates, and I care about writing modular code, clean logic, and solid execution over quick hacks.
                    </p>
                </div>

                {/* Education */}
                <div className="p-6 rounded-xl shadow-xl/10 w-full flex flex-col gap-6 border border-card-border bg-card-bg backdrop-blur-sm dark:bg-card/10">
                    <h2 className="text-2xl font-semibold flex items-center gap-2">
                        <GraduationCap /> Education
                    </h2>

                    {educationData.map((edu, idx) => (
                        <div
                            key={idx}
                            className="rounded-2xl p-6 m-2 group border border-card-border bg-card-bg backdrop-blur-sm dark:bg-card/10"
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


