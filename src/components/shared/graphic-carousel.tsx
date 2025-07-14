'use client'
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import design_1 from '@/assets/images/designs/15630.jpg'
import design_2 from '@/assets/images/carousel/19612.jpg'
import design_3 from '@/assets/images/carousel/2509.jpg'
import { title } from "process";
import { useState } from "react";

const graphic = [
    {
        title: 'Creative Design',
        alt: '15630.jpg',
        image: design_1
    },
    {
        title: 'Professional Prints',
        alt: '19612.jpg',
        image: design_2
    },
    {
        title: 'Brand Identity',
        alt: '2509.jpg',
        image: design_3
    }
]


export function GraphicCarousel() {
     const [currentIndex, setCurrentIndex] = useState(0);
     const totalItems = graphic.length;
     const nextItem = () => {
         setCurrentIndex((prevIndex) => (prevIndex + 1) %
             totalItems);
     };

        const prevItem = () => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) %
                totalItems);
        };
    return (
      <section className=" max-w-6xl px-4 m-auto w-full" >
        <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold w-auto md:w-lg lg:w-3xl" >From ideas to impact — Kitobams Digital turns creativity into results.</h2>
        <div className={`w-full relative h-120 flex overflow-hidden mt-10 rounded-2xl`}  >
            <div className="absolute left-0 top-0 w-full h-full flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {
                graphic.map((item, index) => (
                    <div key={index} className="w-full h-full shrink-0 relative" >
                        <Image src={item.image} alt={item.alt} className="object-cover -z-1 w-full h-full" />
                        <div className="absolute left-0 top-0 p-4 " >
                            <div className="px-6 py-2 rounded-full bg-black text-white" >
                                {item.title}
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>

          <div className="absolute flex flex-col space-y-2 justify-center items-center bottom-0 right-0 top-0 p-4 " >
            {
                Array.from({ length: totalItems }).map((_, index) => (
                    <div key={index} className={`w-2 h-2 rounded-full transition-all ${currentIndex === index ? 'bg-white h-8' : 'bg-white'}`} />
                ))
            }

          </div>
          <div className="absolute space-x-6 right-0 bottom-0 p-4 " >
            <Button onClick={prevItem} size={'icon'} className="cursor-pointer p-3 rounded-full  backdrop-blur-xs transition-colors ease-in-out hover:border-zinc-200 border border-transparent" >
                <ArrowLeft/>
            </Button>
            <Button onClick={nextItem} size={'icon'} className="cursor-pointer p-3 rounded-full  backdrop-blur-xs transition-colors ease-in-out hover:border-zinc-200 border border-transparent" >
                <ArrowRight/>
            </Button>
          </div>
        </div>
      </section>
    )
}