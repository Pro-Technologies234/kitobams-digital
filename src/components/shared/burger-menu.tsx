'use client'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"


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
        link: '/contact'
    },
    {
        name: 'Training',
        link: '/training'
    },
]


export function BurgerMenu() {
  const currentPath = usePathname()
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size={'icon'} variant="outline" className="md:hidden rounded-full text-black dark:text-white" >
            <Menu/>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Kitobams</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col auto-rows-min gap-2 px-4">
            {
                navigation.map((nav,id)=>(
                    <Link key={id} href={nav.link}  >
                      <Button className={`w-full flex justify-start text-white  ${ currentPath === nav.link ? 'bg-violet-600' : 'bg-black'}`} >
                        {nav.name}
                      </Button>
                    </Link>
                ))
            }
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">
              Close
              </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
