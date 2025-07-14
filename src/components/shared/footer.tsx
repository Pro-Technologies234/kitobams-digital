'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"


const quick_links = [
    { name: 'Home', link: '/' },
    { name: 'Services', link: '/services' },
    { name: 'About us', link: '/about' },
    { name: 'Contact', link: '/contact' },
]
const resource_links = [
    { name: 'Designs', link: '/' },
    { name: 'Training', link: '/' },
    { name: 'FAQ', link: '/' },
]
const social_links = [
    { name: 'Facebook', link: '/' },
    { name: 'Instagram', link: '/' },
    { name: 'Linkedin', link: '/' },
    { name: 'Twitter', link: '/' },
]

export function Footer() {
    const currentPath = usePathname()
    return (
        <footer className="relative max-w-6xl dark:bg-black drop-shadow-2xl  not-dark:drop-shadow-black/20 bg-white mt-20 m-auto  rounded-t-xl dark:text-white text-black flex md:flex-row gap-5 flex-col justify-between p-10 pb-30" >
            <div>
                <h1 className="font-bold text-2xl text-amber-500" >Kitobams <span className="text-fuchsia-600" > Digital Graphics</span></h1>
                <p className="text-xs font-extralight mt-2 w-auto md:w-sm" >
                    3 Onwuchikwa Street ,Off Market Road, 
                    Rumuomasi, Rumuola, Port Harcourt, Rivers 500102, Rivers
                </p>
                <div className="grid grid-rows-2 text-xs mt-4" >
                    <span >
                        Phone number
                        +234 8136017229
                    </span>
                    <span >
                        Email Address 
                        kitobamsdigital@gmail.com
                    </span>
                </div>
            </div>
            <div className="w-full md:w-200 grid font-light text-xs  gap-4 grid-cols-3" >         
                <div className="flex flex-col gap-2" >
                    <span className="font-medium text-sm" >Quick links</span>
                    {
                        quick_links.map((quic_link, id)=>(
                            <Link key={id} href={quic_link.link} className={`hover:text-fuchsia-500 ${ currentPath === quic_link.link && 'text-violet-500' }`}  >
                                {quic_link.name}
                            </Link>
                        ))
                    }
                </div>
                <div className="flex flex-col gap-2" >
                    <span className="font-medium text-sm" >Resources</span>
                    {
                        resource_links.map((resource_link, id)=>(
                            <Link key={id} href={resource_link.link} className="hover:text-fuchsia-500"  >
                                {resource_link.name}
                            </Link>
                        ))
                    }
                </div>
                <div className="flex flex-col gap-2" >
                    <span className="font-medium text-sm" >Social links</span>
                    {
                        social_links.map((social_link, id)=>(
                            <Link key={id} href={social_link.link} className="hover:text-fuchsia-500"  >
                                {social_link.name}
                            </Link>
                        ))
                    }
                </div>
            </div>
              <span className="font-extralight dark:text-zinc-300 absolute left-0 right-0 bottom-4  text-center text-xs md:text-sm " >&copy; {new Date().getFullYear()} Kitobams Digital Graphics. All rights reserved.</span>
        </footer>
    )
}
