import Image from "next/image";
import bg from '@/assets/images/background/11679.jpg'
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import design_8 from '@/assets/images/designs/THE ONE MARRIAGE SOLUTION 2.jpg'
import design_9 from '@/assets/images/designs/THE DAY OF STRANGE TESTIMONIES 2.jpg'
import design_10 from '@/assets/images/designs/SPECIAL EASTER CELERBATION 2025 CORECTED 1.jpg'

import design from '@/assets/images/designs/12664.jpg'
import design_5 from '@/assets/images/designs/AN EVENING WITH THE MASTERS 2.jpg'
import design_6 from '@/assets/images/designs/APRIL Our Month of Rememberance 1.jpg'
import design_7 from '@/assets/images/designs/HIS EVERLASTING ARMS CORECTED 1.jpg'

export function Hero() {
    return (
        <>
            <main className="z-10  w-full h-screen dark:text-white" >
            <div className=' w-full h-dvh overflow-hidden -Z-10 rounded-b-2xl  absolute' >
            <Image src={bg} alt='' className="obejct-cover w-full -z-1 h-full" />
            </div>
            <div  className="w-full pt-40 absolute bg-radial from-transparent via-black/20 to-black h-screen" >  
            <div className="w-full z-10  max-w-6xl m-auto" >
                <h1 className="text-4xl sm:text-6xl  md:text-6xl text-white Z-10 leading-tight text-center font-bold px-2 md:px-10" >
                Creative Designs, <br /> <span >Powerful Prints</span> 
                </h1>
                <p className="text-center font-extralight text-xs mt-2 md:mt-5 px-5 text-white  w-xs md:w-md lg:w-lg m-auto" >At Kitobams Digital Graphics, we bring your ideas to life through stunning graphic design and high-quality print solutions. </p>
                <div className="w-full m-auto flex gap-3 justify-center mt-5" >
                    <Link href="">
                        <button className="group text-xs md:text-sm cursor-pointer outline-offset-2 outline-1 outline-black text-white shadow-2xl md:shadow-2xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1  bg-black px-5 py-1.5  rounded-full flex gap-2 items-center" >
                            View Our Designs 
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" className=" slucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                        </button>
                    </Link>
                    <Link href="">
                        <button className="group text-xs md:text-sm cursor-pointer outline-1 outline-white text-white shadow-2xl md:shadow-2xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1   px-5 py-1.5  rounded-full flex gap-2 items-center" >
                            Contact us
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" className=" slucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                        </button>
                    </Link>
                </div>
                <div className="w-full flex flex-col justify-center gap-4 items-center mt-30" >
                <div className="p-2 m-auto  animate-bounce shadow-2xl shadow-black bg-white text-black  rounded-full" >
                    <ArrowDown/>
                </div>
                <span className='text-center tracking-widest uppercase m-auto text-white font-extralight text-xs' >
                    Scroll to get Inspired
                </span>
                </div>
            </div>
            </div>
        </main>
        <section className=" not-sm:gap-50 max-w-6xl mt-20 flex flex-col md:grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 grid-cols-1 px-4 m-auto w-full" >
            <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold w-auto md:w-xl lg:w-2xl" >
                Creative Graphic Design
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl  w-xs md:w-sm" >
                Elevate your brand identity with professional designs that speak volumes.
            </p>
            <p className="text-xs md:text-sm lg:text-md text-zinc-700 dark:text-zinc-300 w-xs not-sm:pr-10 md:w-sm mt-2 md:mt-5" >
                “Great design tells your story before a word is read. We bring that story to life with clarity, style, and purpose.”
            </p>
            <div className="mt-10" >
                <Link href="">
                    <button className="group text-xs md:text-sm cursor-pointer bg-gradient-to-r bg-black dark:bg-white text-white dark:text-black shadow-2xl md:shadow-2xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1  shadow-fuchsia-500 px-5 py-1.5  rounded-full flex gap-2 items-center" >
                        What we do
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" className=" slucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                    </button>
                </Link>
            </div>
            </div>
            {/* <div className="relative flex -space-x-20 not-sm:justify-center gap-4 md:gap-6 lg:gap-8 ">
            <div className="min-w-40 not-sm:shrink-0  h-40 md:min-w-60 md:h-50 overflow-hidden md:-rotate-15 md:translate-y-24 outline-6 outline-white shadow-xl shadow-zinc-300 dark:shadow-black rounded-lg md:rounded-2xl " >
                <Image src={design_8} alt={`${design_2}`} className="object-cover w-full h-full" />
            </div>
            <div className="min-w-40 not-sm:shrink-0 h-40 md:min-w-60 z-1 md:h-50 overflow-hidden rounded-lg md:rounded-2xl   outline-6 outline-white shadow-xl shadow-zinc-300 dark:shadow-black"  >
                <Image src={design_9} alt={`${design_1}`} className="object-cover w-full h-full" />
            </div>
            <div className="min-w-40 not-sm:shrink-0 h-40 md:min-w-60 z-1 md:h-50 overflow-hidden md:rotate-15 md:translate-y-24 outline-6 outline-white shadow-xl shadow-zinc-300 dark:shadow-black rounded-lg md:rounded-2xl " >
                <Image src={design_10} alt={`${design_1}`} className="object-cover w-full h-full" />
            </div>
            </div> */}
            <div className="relative md:flex -space-x-50 justify-center gap-4 md:gap-6  ">
            <div className="max-w-60 m-auto not-sm:shrink-0  h-50 md:min-w-60 md:h-50 overflow-hidden z-0 -rotate-15 md:translate-y-24 md:translate-x-20 outline-6 outline-white shadow-xl shadow-zinc-300 dark:shadow-black rounded-lg md:rounded-2xl " >
                <Image src={design_8} alt={`THE ONE MARRIAGE SOLUTION 2.jpg`} className="object-cover w-full h-full" />
            </div>
            <div className="max-w-60 m-auto not-sm:shrink-0 h-50 md:min-w-60 z-1  md:h-50 overflow-hidden rounded-lg md:rounded-2xl   outline-6 outline-white shadow-xl shadow-zinc-300 dark:shadow-black"  >
                <Image src={design_9} alt={`THE DAY OF STRANGE TESTIMONIES 2.jpg`} className="object-cover w-full h-full" />
            </div>
            <div className="max-w-60 m-auto not-sm:shrink-0 h-50 md:min-w-60 z-1 md:h-50 overflow-hidden rotate-15 md:translate-y-24 md:-translate-x-20 outline-6 outline-white shadow-xl shadow-zinc-300 dark:shadow-black rounded-lg md:rounded-2xl " >
                <Image src={design_10} alt={`SPECIAL EASTER CELERBATION 2025 CORECTED 1.jpg`} className="object-cover w-full h-full" />
            </div>
            </div>
        </section>
      <section className="  max-w-6xl mt-50 spay10 flex flex-col justify-center items-center px-4 m-auto w-full" >
        <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-center w-auto md:w-xl lg:w-2xl" >Design, Print & Training Solutions</h2>
        <h3 className="text-lg md:text-2xl lg:text-3xl w-auto md:w-lg lg:w-xl text-center font-light" >Need something custom?  <span className="text-zinc-600 dark:text-zinc-400 font-medium" >Let’s bring your vision to life—together.</span></h3>
        <div className="w-full space-y-20 grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-8 mt-10" >
          <div className="grid grid-rows-9  h-80 not-sm:mt-10" >
            <div className="row-span-7 rounded-2xl shadow overflow-hidden" >
              <Image src={design_5} alt={`${design}`} className="object-cover w-full h-full" />
            </div>
            <div className="p-2 flex flex-col" >
              <h3 className="font-semibold" >Bold Brand Identity</h3>
              <p className="text-sm mb-5" >Custom logos, clean layouts, and timeless designs crafted to tell your brand story with clarity and power.</p>
              <Link href="" className="self-end" >
                  <button className="group text-xs cursor-pointer bg-gradient-to-r bg-black dark:bg-white dark:text-black text-white shadow-2xl md:shadow-2xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1  shadow-fuchsia-500 px-4 py-1  rounded-full flex gap-2 items-center" >
                      More designs
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" className=" slucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                  </button>
              </Link>
            </div>
          </div>
          <div className="grid grid-rows-9  h-80 not-sm:mt-10" >
            <div className="row-span-7 rounded-2xl shadow overflow-hidden" >
              <Image src={design_7} alt={`${design}`} className="object-cover w-full h-full" />
            </div>
            <div className="p-2 flex flex-col" >
              <h3 className="font-semibold" >Print-Ready Perfection</h3>
              <p className="text-sm mb-5" >From flyers to business cards, we ensure every pixel prints perfectly — sharp, vibrant, and professionally aligned.</p>
              <Link href="" className="self-end" >
                  <button className="group text-xs cursor-pointer bg-gradient-to-r bg-black dark:bg-white dark:text-black text-white shadow-2xl md:shadow-2xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1  shadow-fuchsia-500 px-4 py-1  rounded-full flex gap-2 items-center" >
                      More designs
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" className=" slucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                  </button>
              </Link>
            </div>
          </div>
          <div className="grid grid-rows-9  h-80 not-sm:mt-10" >
            <div className="row-span-7 rounded-2xl shadow overflow-hidden" >
              <Image src={design_6} alt={`${design}`} className="object-cover w-full h-full" />
            </div>
            <div className="p-2 flex flex-col" >
              <h3 className="font-semibold" >Creative Skill Training</h3>
              <p className="text-sm mb-5" >Join our design bootcamps and hands-on workshops to master Photoshop, Illustrator, and modern visual storytelling.</p>
              <Link href="" className="self-end" >
                  <button className="group text-xs cursor-pointer bg-gradient-to-r bg-black dark:bg-white dark:text-black text-white shadow-2xl md:shadow-2xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1  shadow-fuchsia-500 px-4 py-1  rounded-full flex gap-2 items-center" >
                      More designs
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" className=" slucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                  </button>
              </Link>
            </div>
          </div>
        </div>
        
      </section>
        </>
    )
}