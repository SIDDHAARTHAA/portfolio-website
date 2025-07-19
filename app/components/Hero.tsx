// import DotGrid from '../../reactBits/blocks/Backgrounds/DotGrid/DotGrid';
import Image from "next/image";
// import pfp from '../../public/aboutMe.png';
import myImage from '../../public/myImage.jpg';

export default function Hero() {
    return (
        <div className="min-h-screen flex flex-col items-center relative px-4">
            <div className="flex flex-col xl:flex-row items-center w-full md:w-[80%] xl:w-[55%] justify-center border-1 border-card-border rounded-xl p-6 md:p-8 gap-6 xl:gap-8 shadow-xl/10 mt-0 xl:mt-25">
                <div className="flex-shrink-0 border border-card-border rounded-full">
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

                <div className="flex flex-col justify-between gap-6 drop-shadow-2xl pt-1 text-center xl:text-left">
                    <div className="rounded-xl text-pretty">
                        <h1 className="text-5xl md:text-6xl mb-4">Hi, I'm Sid</h1>
                        <p className="text-base md:text-lg leading-relaxed">
                            I’m a frontend dev who blends clean design with solid logic. I love turning ideas into smooth, responsive websites using React, TypeScript, and CSS. When I’m off-screen, I’m usually g cup of coffee.
                        </p>
                    </div>
                    <div className="flex justify-center xl:justify-start gap-4">
                        <button className="border cursor-pointer px-4 py-2 rounded-md transition-colors ease-out duration-500">About Me</button>
                        <button className="border cursor-pointer px-4 py-2 rounded-md transition-colors ease-out duration-500">Download CV</button>
                    </div>
                </div>
            </div>
        </div>
    )
}