import { Navbar } from "@/components/shared/navbar";
import Image from "next/image";
import Link from "next/link";
import bg from '@/assets/images/background/11679.jpg'
import design from '@/assets/images/designs/12664.jpg'
import design_1 from '@/assets/images/designs/15630.jpg'
import design_2 from '@/assets/images/designs/2151001576.jpg'
import design_3 from '@/assets/images/designs/2151839341.jpg'
import design_4 from '@/assets/images/designs/2151899754.jpg'
import design_5 from '@/assets/images/designs/AN EVENING WITH THE MASTERS 2.jpg'
import design_6 from '@/assets/images/designs/APRIL Our Month of Rememberance 1.jpg'
import design_7 from '@/assets/images/designs/HIS EVERLASTING ARMS CORECTED 1.jpg'
import design_8 from '@/assets/images/designs/THE ONE MARRIAGE SOLUTION 2.jpg'
import design_9 from '@/assets/images/designs/THE DAY OF STRANGE TESTIMONIES 2.jpg'
import design_10 from '@/assets/images/designs/SPECIAL EASTER CELERBATION 2025 CORECTED 1.jpg'
import graphics from '@/assets/images/services/graphics.jpg'
import printing from '@/assets/images/services/printing.jpg'
import training from '@/assets/images/services/training2.jpg'
import { Footer } from "@/components/shared/footer";
import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="w-full h-auto absolute  -z-10 " >
      <Navbar/>
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
        <div className="relative flex sm:-space-x-20 not-sm:overflow-x-scroll not-sm:justify-center gap-4 md:gap-6 lg:gap-8 ">
          <div className="min-w-40 not-sm:shrink-0  h-40 md:min-w-60 md:h-50 overflow-hidden md:-rotate-15 md:translate-y-24 outline-6 outline-white shadow-xl shadow-zinc-300 dark:shadow-black rounded-lg md:rounded-2xl " >
            <Image src={design_8} alt={`${design_2}`} className="object-cover w-full h-full" />
          </div>
          <div className="min-w-40 not-sm:shrink-0 h-40 md:min-w-60 z-1 md:h-50 overflow-hidden rounded-lg md:rounded-2xl   outline-6 outline-white shadow-xl shadow-zinc-300 dark:shadow-black"  >
            <Image src={design_9} alt={`${design_1}`} className="object-cover w-full h-full" />
          </div>
          <div className="min-w-40 not-sm:shrink-0 h-40 md:min-w-60 z-1 md:h-50 overflow-hidden md:rotate-15 md:translate-y-24 outline-6 outline-white shadow-xl shadow-zinc-300 dark:shadow-black rounded-lg md:rounded-2xl " >
            <Image src={design_10} alt={`${design_1}`} className="object-cover w-full h-full" />
          </div>
        </div>
      </section>
      <section className="  max-w-6xl mt-50 spay10 flex flex-col justify-center items-center px-4 m-auto w-full" >
        <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-center w-auto md:w-xl lg:w-2xl" >Custom Orders & Consultation</h2>
        <h3 className="text-lg md:text-2xl lg:text-3xl w-auto md:w-lg lg:w-xl text-center font-light" >Have a unique project in mind? <span className="text-zinc-600 dark:text-zinc-400 font-medium" > Let’s bring it to life—together.</span></h3>
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
      <section className="max-w-6xl h-auto my-30 gap-4 px-4 m-auto w-full" >
          <h2 className="text-2xl text-center md:text-3xl lg:text-4xl font-semibold m-auto" >What We Do at Kitobams Digital Graphics</h2>
        <div className="md:grid flex flex-col md:grid-cols-3 md:h-130 gap-4 mt-10" >
          <div className="group  relative grid grid-rows-9 rounded-2xl  bg-white dark:bg-gradient-to-b dark:from-violet-500 dark:via-violet-700 dark:to-violet-700 overflow-hidden ease-in-out transition-all  outline-fuchsia-300 not-dark:hover:outline-4 border not-dark:hover:border-fuchsia-600 border-transparent" >
            <div className="w-full rounded-b-2xl overflow-hidden row-span-6  " >
              <Image src={graphics} alt="graphics.jpg" className="w-full h-full object-cover group-hover:scale-115 duration-500 transition-transform ease-in-out" />
            </div>
            <div className="row-span-3 p-4 " >
              <h3 className="font-semibold text-xl" >
                Graphic Design
              </h3>
              <p className="text-xs font-extralight" >
                We create eye-catching and professional designs tailored to your brand — from logos and flyers to business cards and social media content.
              </p>
              <Button  className="cursor-pointer group-hover:tracking-widest uppercase rounded-full bg-gradient-to-r bg-black hover:text-violet-600 hover:bg-white text-white text-sm mt-4 overflow-hidden" >
                <ArrowRight className="md:-translate-x-7 group-hover:translate-x-0 transition-all duration-300" />
                <span className="group-hover:ml-2 md:-translate-x-3 group-hover:translate-x-0 transition-all duration-300" >
                  Get a Design
                </span>
              </Button>
            </div>
          </div>
          <div className="group  relative grid grid-rows-9 rounded-2xl  bg-white dark:bg-gradient-to-b dark:from-violet-500 dark:via-violet-700 dark:to-violet-700 overflow-hidden ease-in-out transition-all  outline-fuchsia-300 not-dark:hover:outline-4 border not-dark:hover:border-fuchsia-600 border-transparent" >
            <div className="w-full rounded-b-2xl overflow-hidden row-span-6  " >
              <Image src={printing} alt="graphics.jpg" className="w-full h-full object-cover group-hover:scale-115 duration-500 transition-transform ease-in-out" />
            </div>
            <div className="row-span-3 p-4 " >
              <h3 className="font-semibold text-xl" >
                Digital & Large Format Printing
              </h3>
              <p className="text-xs font-extralight" >
                High-quality printing services including banners, stickers, T-shirts, ID cards, and more — perfect for events, promotions, and business needs.
              </p>
              <Button  className="cursor-pointer group-hover:tracking-widest uppercase rounded-full bg-gradient-to-r bg-black hover:text-violet-600 hover:bg-white text-white text-sm mt-4 overflow-hidden" >
                <ArrowRight className="md:-translate-x-7 group-hover:translate-x-0 transition-all duration-300" />
                <span className="group-hover:ml-2 md:-translate-x-3 group-hover:translate-x-0 transition-all duration-300" >
                  Print with us
                </span>
              </Button>
            </div>
          </div>
          <div className="group  relative grid grid-rows-9 rounded-2xl  bg-white dark:bg-gradient-to-b dark:from-violet-500 dark:via-violet-700 dark:to-violet-700 overflow-hidden ease-in-out transition-all  outline-fuchsia-300 not-dark:hover:outline-4 border not-dark:hover:border-fuchsia-600 border-transparent" >
            <div className="w-full rounded-b-2xl overflow-hidden row-span-6  " >
              <Image src={training} alt="graphics.jpg" className="w-full h-full object-cover group-hover:scale-115 duration-500 transition-transform ease-in-out" />
            </div>
            <div className="row-span-3 p-4 " >
              <h3 className="font-semibold text-xl" >
                 Training & Mentorship
              </h3>
              <p className="text-xs font-extralight" >
                We offer hands-on training in graphic design, helping beginners and aspiring designers master the tools and techniques to build a successful creative career.
              </p>
              <Button  className="cursor-pointer group-hover:tracking-widest uppercase rounded-full bg-gradient-to-r bg-black hover:text-violet-600 hover:bg-white text-white text-sm mt-4 overflow-hidden" >
                <ArrowRight className="md:-translate-x-7 group-hover:translate-x-0 transition-all duration-300" />
                <span className="group-hover:ml-2 md:-translate-x-3 group-hover:translate-x-0 transition-all duration-300" >
                  Join our Training
                </span>
              </Button>
            </div>
          </div>
        </div>

      </section>
      <section className=" max-w-6xl px-4 m-auto w-full" >
        <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold w-auto md:w-lg lg:w-3xl" >From ideas to impact — Kitobams Digital turns creativity into results.</h2>
        <div className="w-full relative h-120 overflow-hidden mt-10 rounded-2xl" >
          <Image src={design_1} alt={`${design}`} className="object-cover -z-1 w-full h-full" />
          <div className="absolute left-0 top-0 p-4 " >
            <div className="px-6 py-2 rounded-full bg-black text-white" >
                Inspirational
            </div>
          </div>
          <div className="absolute flex flex-col space-y-2 justify-center bottom-0 right-0 top-0 p-4 " >
            <div className="bg-white p-1 rounded-full h-20" >

            </div>
            <div className="bg-white p-1 rounded-full " >

            </div>
            <div className="bg-white p-1 rounded-full " >

            </div>
          </div>
          <div className="absolute space-x-6 right-0 bottom-0 p-4 " >
            <button className="cursor-pointer p-3 rounded-full bg-white backdrop-blur-xs transition-colors ease-in-out hover:border-zinc-200 border border-transparent" >
                <ArrowLeft/>
            </button>
            <button className="cursor-pointer p-3 rounded-full bg-white backdrop-blur-xs transition-colors ease-in-out hover:border-zinc-200 border border-transparent" >
                <ArrowRight/>
            </button>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
