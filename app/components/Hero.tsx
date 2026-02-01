'use client'
import Image from "next/image";
import myImage from '../../public/myImage.jpg';
import HeroButtons from "./HeroButtons";


export default function Hero() {
    return (
        <div className="min-h-screen flex flex-col items-center relative px-4">
            <div className="flex flex-col xl:flex-row items-center w-full max-w-[90%] md:max-w-3xl xl:max-w-5xl justify-center rounded-xl p-6 md:p-8 gap-6 xl:gap-8 shadow-xl/10 mt-0 xl:mt-25
                border border-card-border
                bg-card-bg
                backdrop-blur-sm
                dark:bg-card/10
            ">
                <div className="flex-shrink-0 border border-card-border rounded-full">
                    <Image
                        src={myImage}
                        alt="image"
                        width={250}
                        height={250}
                        className="rounded-full w-40 md:w-60 lg:w-70 aspect-square object-cover"
                    />
                </div>

                {/* Divider only on large screens */}
                <div className="hidden xl:block w-px h-48 bg-card-border mx-4" />

                <div className="flex flex-col justify-between gap-6 pt-1 text-center xl:text-left">
                    <div className="rounded-xl text-pretty">
                        <h1 className="text-5xl md:text-6xl mb-4 font-bold">Hi, I'm Sid</h1>
                        <p className="text-base md:text-lg leading-relaxed max-w-lg">
                            I solve complex problems and deliver nothing but quality. A rapid learner who builds clean, scalable systems with purpose. If you want real engineering that works, let's connect.
                        </p>
                    </div>
                    <div className="flex justify-center xl:justify-start">
                        <HeroButtons />
                    </div>
                </div>
            </div>
        </div>
    )
}