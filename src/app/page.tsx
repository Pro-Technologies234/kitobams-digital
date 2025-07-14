import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { Hero } from "@/components/shared/sections/Hero";
import { GraphicCarousel } from "@/components/shared/graphic-carousel";
import { WahtWeDo } from "@/components/shared/sections/WhatWeDo";
export default function Home() {
  return (
    <div className="w-full   -z-10 " >
      <Navbar/>
      <Hero/>
      <WahtWeDo/>
      <GraphicCarousel/>
      <Footer/>
    </div>
  );
}
