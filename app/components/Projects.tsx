'use client'
import Image from 'next/image'
import { Github, ExternalLink } from 'lucide-react'
import sampleImg from '@/public/sample.png'
import portfolioImg from '@/public/portfolioImg.png'
import homeLabImg from '@/public/homeLab.png'

const projects = [
    {
        title: 'Homelab – Personal Cloud File Manager',
        description:
            'Self-hosted file manager with upload, rename, delete, folder size, and download support. Frontend runs on Cloudflare Pages; backend runs on an old Android phone using Termux and Cloudflare Tunnel. Designed to be usable by all age groups — tested by family.',
        stack: ['React', 'Node.js', 'Cloudflare', 'Tailwind', 'MUI'],
        image: homeLabImg,
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
        image: sampleImg,
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
                            <Image
                                src={project.image}
                                alt={project.title}
                                className="rounded-xl shadow-xl object-cover w-full h-auto max-h-40 sm:max-h-56 md:max-h-80 grayscale hover:grayscale-0 transition"
                                sizes="(max-width: 640px) 90vw, 50vw"
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
