import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { ModeToggle } from "./mode-toggle"
import { BurgerMenu } from "./burger-menu"

const navigation = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Services',
        link: '/services'
    },
    {
        name: 'About us',
        link: '/about'
    },
    {
        name: 'Contact',
        link: '/'
    },
    {
        name: 'Training',
        link: '/'
    },
]

export function Navbar() {
    return (
        <header className="z-10 fixed w-full max-w-6xl  justify-between px-4 md:px-10 text-xs md:text-sm font-extralight top-0  flex py-2 items-center h-15" >
            <div>

            </div>
            <div className="flex justify-between items-center bg-black/40 text-white backdrop-blur-xs shadow-lg shadow-black/20 p-1 not-sm:w-full rounded-full gap-4" > 
                <nav className="hidden md:flex font-medium items-center gap-5  " >
                    {
                        navigation.map((nav,id)=>(
                            <Link key={id} href={nav.link} className="p-2 group rounded-full overflow-hidden z-0 hover:text-white px-6 relative" >
                                <div className="absolute bottom-0 left-0 group-hover:w-100 group-hover:h-full ease-in-out -z-1 h-0 transition-all w-0 rounded-full bg-fuchsia-600 group-hover:bg-purple-600" >
                                    
                                </div>
                                {nav.name}
                            </Link>
                        ))
                    }
                </nav>
                <BurgerMenu/>
                <div className="flex items-center gap-2" >
                    <ModeToggle />
                    <Link href="">
                        <button className="group    bg-violet-600 font-normal text-white  pl-8 p-0.5 transition-all cursor-pointer ease-out hover:rounded-bl-none rounded-full flex gap-4 items-center" >
                            OUR DESIGNS
                            <span className="p-2 rounded-full bg-white  dark:bg-black dark:text-white text-black transition-all ease-out group-hover:rotate-45" >
                                <ArrowRight size={20} />
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    )
}