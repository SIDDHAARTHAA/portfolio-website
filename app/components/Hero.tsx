'use client'
import Image from "next/image";
import myImage from '../../public/myImage.jpg';
import HeroButtons from "./HeroButtons";
import SpotlightCard from '@/reactBits/blocks/Components/SpotlightCard/SpotlightCard';

export default function Hero() {
    return (
        <div className="min-h-screen flex flex-col items-center relative px-4">
            <SpotlightCard className="custom-spotlight-card flex flex-col xl:flex-row items-center w-[350px] h-[600px] md:w-[700px] xl:w-[750px] xl:h-auto justify-center border-1 border-card-border rounded-xl p-6 md:p-8 gap-6 xl:gap-8 shadow-xl/10 mt-0 xl:mt-25" spotlightColor="rgba(234, 152, 1, 0.4)">
                <div className="flex-shrink-0 border border-card-border rounded-full">
                    {/* rgba(174, 184, 255, 1) */}
                    <Image
                        src={myImage}
                        alt="image"
                        width={250}
                        height={250}
                        className="rounded-full w-50 md:w-60 lg:w-70 aspect-square object-cover"
                    />
                </div>

                {/* Divider only on large screens */}
                <div className="hidden xl:block w-px h-48 bg-card-border mx-4 " />

                <div className="flex flex-col justify-between gap-6 pt-1 text-center xl:text-left">
                    <div className="rounded-xl text-pretty">
                        <h1 className="text-5xl md:text-6xl mb-4 font-bold">Hi, I'm Sid</h1>
                        <p className="text-base md:text leading-relaxed">
                            Full Stack Developer who builds products with purpose. Curious, consistent, and always working on something new. Fast learner, strong focus on backend and end-to-end engineering. If you want to build something real, clean, and cool, connect anytime.
                        </p>
                    </div>
                    <div className="flex justify-center xl:justify-start">
                        <HeroButtons />
                    </div>
                </div>
            </SpotlightCard>
        </div>
    )

}
