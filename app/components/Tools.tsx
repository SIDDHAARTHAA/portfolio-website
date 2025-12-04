import { Terminal, Server, Database, Code2, LayoutPanelTop, Camera, Wrench, ShieldPlus, Palette } from "lucide-react";

export default function Tools() {
    const toolData = [
        {
            title: "Languages",
            icon: <Terminal size={20} />,
            items: ["C++", "C", "JavaScript", "TypeScript", "Bash", "SQL", "Java"],
        },
        {
            title: "Frontend",
            icon: <LayoutPanelTop size={20} />,
            items: ["HTML", "CSS", "React.js", "Next.js", "TailwindCSS", "ShadCN/UI", "Radix UI", "ReactBits"],
        },
        {
            title: "Backend",
            icon: <Server size={20} />,
            items: ["Node.js", "Express.js", "Zod", "JWT", "bcrypt", "Multer", "Redux"],
        },
        {
            title: "Databases",
            icon: <Database size={20} />,
            items: ["MongoDB", "PostgreSQL", "Mongoose", "Prisma"],
        },
        {
            title: "Dev Tools",
            icon: <Code2 size={20} />,
            items: ["Cloudflare", "Git", "GitHub", "VSCode", "Postman", "Linux", "Vercel", "Netlify", "Render"],
        },
        {
            title: "Design & Editing",
            icon: <Camera size={20} />,
            items: ["DaVinci Resolve", "Fusion", "Photoshop", "After Effects", "Figma", "Motion Graphics"],
        },
    ];

    return (
        <div className="min-h-screen px-4 py-4 flex flex-col items-center gap-8 mt-6 mb-20">
            <div className="w-full p-6 border border-card-border rounded-2xl shadow bg-muted/20 flex flex-col gap-6">
                {/* Heading */}
                <h1 className="text-4xl font-bold flex items-center gap-2 text-left">
                    <Wrench size={28} className="text-primary" />
                    Tech Tool Box
                </h1>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
                    {toolData.map((tool, idx) => (
                        <div
                            key={idx}
                            className="border border-card-border rounded-2xl p-6 flex flex-col gap-3 shadow hover:shadow-md hover:shadow-primary/10 transition-all duration-200"
                        >
                            <h2 className="text-xl font-semibold flex items-center gap-2">
                                {tool.icon}
                                {tool.title}
                            </h2>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {tool.items.map((item, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 text-sm bg-muted border border-card-border rounded-full"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
