'use client'
import Image from 'next/image'
import { Github, ExternalLink } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import sampleImg from '@/public/sample.png'
import portfolioImg from '@/public/portfolioImg.png'
import homeLabImg from '@/public/homeLab.png'
import crypto_wallet_1 from '@/public/crypto_wallet_1.png'
import crypto_wallet_2 from '@/public/crypto_wallet_2.png'


const projects = [
    {
        title: 'Homelab – Personal Cloud File Manager',
        description:
            'Self-hosted file manager with upload, rename, delete, folder size, and download support. Frontend runs on Cloudflare Pages; backend runs on an old Android phone using Termux and Cloudflare Tunnel. Designed to be usable by all age groups — tested by family.',
        stack: ['React', 'Node.js', 'Cloudflare', 'Tailwind', 'MUI'],
        image: [homeLabImg, sampleImg],
        github: 'https://github.com/SIDDHAARTHAA/homelab-final',
        live: 'https://homelab.sidlabs.shop/',
    },
    {
        title: 'Portfolio Website',
        description:
            'A clean, minimal portfolio site built to showcase work and resume. Responsive across devices with simple animations and accessible layout.',
        stack: ['Next.js', 'Tailwind CSS', 'Bits UI'],
        image: portfolioImg,
        github: 'https://github.com/SIDDHAARTHAA/portfolio-website',
        live: 'https://sidlabs.shop/',
    },
    {
        title: 'Crypto Wallet Simulator',
        description:
            'Frontend-only simulation of Ethereum and Solana wallets. Generates valid mnemonic phrases and keypairs using real crypto logic.',
        stack: ['React', 'Tailwind CSS', 'JS Crypto Libs'],
        image: [crypto_wallet_1, crypto_wallet_2],
        github: 'https://github.com/SIDDHAARTHAA/web_based_crypto_wallet',
        live: 'https://crypto.sidlabs.shop/',
    },
    {
        title: 'Social Media App',
        description:
            'Full-stack MERN-based social media platform with posts, comments, real-time messaging, and user auth. Built as part of a university project.',
        stack: ['React', 'Node.js', 'Express', 'MongoDB'],
        image: sampleImg,
        github: 'https://github.com/SIDDHAARTHAA/Social-Media-App',
        live: '#',
    },
];

// Slideshow component
function ProjectSlideshow({ images, alt }: { images: any[]; alt: string }) {
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const [fading, setFading] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (!paused && images.length > 1) {
            intervalRef.current = setInterval(() => {
                setFading(true);
                setTimeout(() => {
                    setIndex((i) => (i + 1) % images.length);
                    setFading(false);
                }, 400); // fade duration
            }, 4000); // 4 seconds per image
        }
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [paused, images.length]);

    if (!images.length) return null;
    return (
        <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="relative w-full"
            style={{
                aspectRatio: '16/10',
                minHeight: '180px',
                maxHeight: '320px',
                overflow: 'hidden',
                background: '#18181b',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <div
                className={`absolute inset-0 transition-opacity duration-400 ease-in-out
                    ${fading ? 'opacity-0' : 'opacity-100'}
                `}
                key={index}
                style={{
                    willChange: 'opacity',
                }}
            >
                <Image
                    src={images[index]}
                    alt={alt}
                    fill
                    style={{
                        objectFit: 'contain',
                        objectPosition: 'center',
                    }}
                    className="rounded-xl shadow-xl transition"
                    sizes="(max-width: 640px) 90vw, 50vw"
                />
            </div>
            {images.length > 1 && (
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                    {images.map((_, i) => (
                        <span
                            key={i}
                            className={`block w-2 h-2 rounded-full ${i === index ? 'bg-white' : 'bg-gray-400/50'}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default function Projects() {
    return (
        <section className="min-h-screen px-1 sm:px-4 py-4 flex flex-col items-center gap-10 mt-6 mb-20">
            {/* Title with dash */}
            <div className="w-full flex flex-col items-center gap-4">
                <h2 className="text-2xl sm:text-4xl font-bold text-center sm:text-left whitespace-nowrap px-3">
                    Some Things I’ve Built
                </h2>
                <div className="hidden sm:flex flex-1 border-t border-card-border"></div>
            </div>

            {/* Projects */}
            <div className="w-full max-w-xs sm:max-w-2xl md:max-w-4xl flex flex-col gap-16 mt-4">
                {projects.map((project, i) => (
                    <div
                        key={i}
                        className={`flex flex-col-reverse md:flex-row ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}
items-center gap-4 sm:gap-8 border border-transparent hover:border-card-border 
rounded-2xl p-2 sm:p-4 box-border transition-all duration-300 w-full`}
                    >
                        {/* Image */}
                        <div className="w-full md:w-1/2">
                            <ProjectSlideshow
                                images={Array.isArray(project.image) ? project.image : [project.image]}
                                alt={project.title}
                            />
                        </div>

                        {/* Content */}
                        <div className="w-full md:w-1/2 flex flex-col gap-4">
                            <p className="text-sm text-purple-400 uppercase tracking-widest">Featured Project</p>
                            <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                            <p className="text-gray-300">{project.description}</p>
                            <ul className="flex flex-wrap gap-3 text-sm text-gray-400">
                                {project.stack.map((tech, i) => (
                                    <li className='border border-card-border p-1 px-3 rounded-full' key={i}>{tech}</li>
                                ))}
                            </ul>
                            <div className="flex gap-4 mt-2">
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noreferrer">
                                        <Github className="w-5 h-5 text-text-sub hover:text-text-hero transition-colors duration-200" />
                                    </a>
                                )}
                                {project.live && (
                                    <div className='mx-2'>
                                        <a href={project.live} target="_blank" rel="noreferrer">
                                            <ExternalLink className="w-5 h-5 text-text-sub hover:text-text-hero transition-colors duration-200" />
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
