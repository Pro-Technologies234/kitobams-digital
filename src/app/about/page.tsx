import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import aboutImage from "@/assets/images/about/about.jpg";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/shared/navbar";
import { div } from "motion/react-client";

export default function About() {
    return (
        <div>
            <Navbar/>
            <div className="bg-violet-200 w-full text-black md:h-screen">
                <div className="w-full max-w-7xl m-auto py-15 pl-8 grid gap-10 md:grid-cols-2" >                
                    <div  >
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-violet-600 w-auto md:w-xl lg:w-2xl uppercase" >
                            About Us
                        </h1>
                        <h2 className="text-2xl md:text-3xl lg:text-6xl font-light selection:bg-violet-600 selection:text-white  w-auto md:w-xl lg:w-2xl mt-5" >
                            Kitobams Digital Graphics
                        </h2>
                        <p className="text-xs font-light selection:bg-violet-600 selection:text-white  w-sm mt-8" >
                            Kitobams Digital Graphics is a creative design and print studio dedicated to bringing your ideas to life through stunning visuals and high-quality printing. Founded with a passion for design and a commitment to excellence, we help individuals and businesses make a bold and lasting impression.
                            <br />
                            <br />
                            From custom logo designs to eye-catching prints and professional design training, we provide solutions that combine creativity, functionality, and quality. Whether you're starting a new brand, promoting an event, or looking to sharpen your design skills, Kitobams is your trusted creative partner.
                            <br />
                            <br />
                            We believe that great design goes beyond looks — it tells a story, builds trust, and inspires action.
                        </p>
                        <Button className="group text-xs w-45 h-12 relative overflow-hidden mt-6 bg-white shadow-md rounded-full text-violet-600 z-0 hover:text-white hover:bg-white cursor-pointer  font-medium" >
                            <div className="absolute bottom-0 left-0 group-hover:w-100 group-hover:h-full ease-in-out -z-1 h-0 transition-all w-0 rounded-full  group-hover:bg-violet-600" >
                                
                            </div>
                            OUR SERVICES
                            <ArrowRight size={16} />
                        </Button>
                    </div>
                    <div className="flex items-center h-full " >
                        <div className="rounded-2xl overflow-hidden w-full h-90" >
                            <Image src={aboutImage} alt="about.png" className="object-cover w-full h-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}