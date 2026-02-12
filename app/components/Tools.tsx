import { Terminal, Server, Database, Code2, LayoutPanelTop, Camera, Wrench } from "lucide-react";

export default function Tools() {
    const toolData = [
        {
            title: "Languages & Core",
            icon: <Terminal size={20} />,
            items: ["C++", "C", "JavaScript", "TypeScript", "Go", "SQL", "Java", "Bash"],
        },
        {
            title: "Backend & Architecture",
            icon: <Server size={20} />,
            items: [
                "Node.js",
                "Express.js",
                "REST APIs",
                "Authentication & Session Management",
                "Service-Layer Architecture",
                "File Handling Systems",
            ],
            featured: true,
        },
        {
            title: "Databases",
            icon: <Database size={20} />,
            items: ["MongoDB", "PostgreSQL", "Mongoose", "Prisma", "SQL Databases"],
        },
        {
            title: "Cloud & DevOps",
            icon: <Code2 size={20} />,
            items: [
                "AWS (EC2, RDS, S3, VPC)",
                "Docker",
                "GitHub Actions (CI/CD)",
                "Cloudflare",
                "Linux",
                "DNS",
            ],
            featured: true,
        },
        {
            title: "Frontend",
            icon: <LayoutPanelTop size={20} />,
            items: ["React.js", "Next.js", "TailwindCSS", "Radix UI"],
        },
        {
            title: "Tools",
            icon: <Camera size={20} />,
            items: ["Git", "GitHub", "VSCode", "Postman", "Vercel", "Render", "Netlify", "Figma"],
            featured: true,
        },
    ];

    return (
        <div className="min-h-screen px-4 py-4 flex flex-col items-center gap-8 mt-6 mb-20">
            <div className="w-full max-w-5xl p-6 rounded-2xl border border-card-border bg-card-bg backdrop-blur-sm dark:bg-card/10">

                {/* Heading */}
                <h1 className="text-4xl font-bold flex items-center gap-2 mb-6">
                    <Wrench size={28} className="text-primary" />
                    Tech Tool Box
                </h1>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
                    {toolData.map((tool, idx) => (
                        <div
                            key={idx}
                            className={`
                                rounded-2xl p-6 flex flex-col gap-4
                                border border-card-border
                                bg-card-bg backdrop-blur-sm dark:bg-card/10
                                transition-all duration-200
                                hover:shadow-lg hover:shadow-primary/10
                                h-full
                                ${tool.featured ? "xl:col-span-2" : ""}
                            `}
                        >
                            {/* Title */}
                            <h2 className="text-xl font-semibold flex items-center gap-2">
                                {tool.icon}
                                {tool.title}
                            </h2>

                            {/* Tags */}
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
