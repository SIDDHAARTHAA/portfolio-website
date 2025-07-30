import project1Img from '@/public/myImage.jpg'
import { px } from 'framer-motion'
import Image from 'next/image'
export default function Projects() {
    const projects = [
        {
            title: "Project 1",
            description: "In this project, I achived free 256gb storage, without the use of any servers.",
            image: project1Img
        }
    ]
    return (
        <div className="min-h-screen px-4 flex flex-col items-center gap-8 mt-6 mb-20">
            <div className='border border-card-border p-4 rounded-2xl gap-4'>
                {projects.map((project, i) => (
                    <div key={i} className=''>
                        <h1>
                            {project.title}
                        </h1>
                        <div className='flex text-pretty'>
                            <Image src={project.image} alt={project.title} width={250} className='rounded-2xl' />
                            <p className='text-base md:text leading-relaxed'>
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}