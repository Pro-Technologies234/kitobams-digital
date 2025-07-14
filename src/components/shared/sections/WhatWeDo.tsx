
import graphics from '@/assets/images/services/graphics.jpg'
import printing from '@/assets/images/services/printing.jpg'
import training from '@/assets/images/services/training2.jpg'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

export function WahtWeDo() {
    return(
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
                <ArrowUpRight className="md:-translate-x-7 group-hover:translate-x-0 transition-all duration-300 group-hover:rotate-90" />
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
                <ArrowUpRight className="md:-translate-x-7 group-hover:translate-x-0 transition-all duration-300 group-hover:rotate-90" />
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
                <ArrowUpRight className="md:-translate-x-7 group-hover:translate-x-0 transition-all duration-300 group-hover:rotate-90" />
                <span className="group-hover:ml-2 md:-translate-x-3 group-hover:translate-x-0 transition-all duration-300" >
                  Join our Training
                </span>
              </Button>
            </div>
          </div>
        </div>

      </section>
    )
}