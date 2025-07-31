'use client'
import project1Img from '@/public/myImage.jpg'
import { px } from 'framer-motion'
import Image from 'next/image'
import ScrollStack, { ScrollStackItem } from '@/reactBits/blocks/Components/ScrollStack/ScrollStack'
export default function Projects() {
    const projects = [
        {
            title: "Project 1",
            description: "In this project, I achived free 256gb storage, without the use of any servers.",
            image: project1Img
        }
    ]
    return (
        <div className="">
            Tasks
        </div>
    )
}