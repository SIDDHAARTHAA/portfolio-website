import { Github } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full flex flex-col items-center justify-center py-8 mt-12 mb-24 border-t border-card-border bg-card-bg/20 text-text-sub">
            <div className="flex items-center gap-2 mb-2">
                <a
                    href="https://github.com/SIDDHAARTHAA/portfolio-website"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-text-main transition-colors duration-200 group"
                >
                    <Github size={20} className="group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">View Source</span>
                </a>
            </div>
            <p className="text-xs opacity-70">
                © {new Date().getFullYear()} Sid. All rights reserved.
            </p>
        </footer>
    );
}
