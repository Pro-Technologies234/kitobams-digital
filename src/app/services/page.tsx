import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import aboutImage from "@/assets/images/about/about.jpg";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/shared/navbar";
import graphics from '@/assets/images/services/graphics.jpg'
import printing from '@/assets/images/services/printing.jpg'
import training from '@/assets/images/services/training2.jpg'
import { Footer } from "@/components/shared/footer";

export default function Services() {
    return (
        <div>
            <Navbar/>
            <div className="w-full  ">
                <div className="w-full max-w-7xl pt-20 m-auto h-full" >                
                    <h1 className="text-2xl pl-6 md:pl-10 md:text-3xl lg:text-4xl font-semibold text-violet-600 w-auto md:w-xl lg:w-2xl uppercase" >
                        SERVICES
                    </h1>
                    <div className="py-15 md:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center " >
                        <div className="flex flex-col  items-center h-full " >
                            <div className="md:rounded-2xl overflow-hidden w-full h-90" >
                                <Image src={graphics} alt="about.png" className="object-cover w-full h-full" />
                            </div>
                            <div className="p-4 " >
                                    <h3 className="font-semibold text-xl" >
                                        Graphic Design
                                    </h3>
                                    <p className="text-xs font-extralight" >
                                        We create eye-catching and professional designs tailored to your brand — from logos and flyers to business cards and social media content.
                                    </p>
                                    <Button  className="group cursor-pointer hover:tracking-widest uppercase rounded-full bg-gradient-to-r hover:shadow-lg shadow-zinc-300 bg-violet-600 hover:text-violet-600 hover:bg-white text-white text-sm mt-4 overflow-hidden" >
                                        <ArrowUpRight className="md:-translate-x-7 group-hover:translate-x-0 transition-all duration-300 " />
                                        <span className="group-hover:ml-2 md:-translate-x-3 group-hover:translate-x-0 transition-all duration-300" >
                                        Get a Design
                                        </span>
                                    </Button>
                            </div>
                        </div>
                        <div className="flex flex-col items-center h-full " >
                            <div className="md:rounded-2xl overflow-hidden w-full h-90" >
                                <Image src={printing} alt="about.png" className="object-cover w-full h-full" />
                            </div>
                            <div className=" p-4 " >
                                    <h3 className="font-semibold text-xl" >
                                        Digital & Large Format Printing
                                    </h3>
                                    <p className="text-xs font-extralight" >
                                        High-quality printing services including banners, stickers, T-shirts, ID cards, and more — perfect for events, promotions, and business needs.
                                    </p>
                                    <Button  className="group cursor-pointer hover:tracking-widest uppercase rounded-full bg-gradient-to-r hover:shadow-lg shadow-zinc-300 bg-violet-600 hover:text-violet-600 hover:bg-white text-white text-sm mt-4 overflow-hidden" >
                                        <ArrowUpRight className="md:-translate-x-7 group-hover:translate-x-0 transition-all duration-300 " />
                                        <span className="group-hover:ml-2 md:-translate-x-3 group-hover:translate-x-0 transition-all duration-300" >
                                        Print with us
                                        </span>
                                    </Button>
                            </div>
                        </div>
                        <div className="flex flex-col items-center h-full " >
                            <div className="md:rounded-2xl overflow-hidden w-full h-90" >
                                <Image src={training} alt="about.png" className="object-cover w-full h-full" />
                            </div>
                            <div className=" p-4 " >
                                    <h3 className="font-semibold text-xl" >
                                        Training & Mentorship
                                    </h3>
                                    <p className="text-xs font-extralight" >
                                        We offer hands-on training in graphic design, helping beginners and aspiring designers master the tools and techniques to build a successful creative career.
                                    </p>
                                    <Button  className="group cursor-pointer hover:tracking-widest uppercase rounded-full bg-gradient-to-r hover:shadow-lg shadow-zinc-300 bg-violet-600 hover:text-violet-600 hover:bg-white text-white text-sm mt-4 overflow-hidden" >
                                        <ArrowUpRight className="md:-translate-x-7 group-hover:translate-x-0 transition-all duration-300 " />
                                        <span className="group-hover:ml-2 md:-translate-x-3 group-hover:translate-x-0 transition-all duration-300" >
                                        Join our Training
                                        </span>
                                    </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    );
}