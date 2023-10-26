import Link from "next/link"
import Logo from "./Logo"
import { DribbbleIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "../Icons"
import Image from 'next/image'
import siteMetadata from "@/src/utils/siteMetaData"
import ThemeSwitcher from "./ThemeSwitcher"
import HamNav from "./HamNav"

const Header = () => {
  return (
    <header className=" flex justify-between items-center md:px-12 sm:px-8 px-5 py-4 w-full relative">
      <Logo />
      <nav className="sm:flex items-center px-6 py-3 bg-white/90 rounded-full backdrop:blur-sm text-dark font-semibold capitalize border border-solid border-dark fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden">
        <Link href={'/'} className="px-2">Home</Link>
        <Link href={'/about'} className="px-2">About</Link>
        <Link href={'/contact'} className="px-2">Contact</Link>
        
        <ThemeSwitcher />
      </nav>
      <div className="sm:flex gap-3 hidden">
        <a className="h-6 w-6 cursor-pointer" href={siteMetadata.linkedin}>
        <LinkedinIcon className="hover:scale-125
         ease duration-200"/>
        </a>
        <a className="h-6 w-6 cursor-pointer" href={siteMetadata.twitter}>
        <TwitterIcon className="hover:scale-125
         ease duration-200"/>
        </a>
        <a className="h-6 w-6 cursor-pointer dark:invert" href={siteMetadata.github}>
        <GithubIcon className="hover:scale-125
         ease duration-200 "/>
        </a>
        <a className="h-6 w-6 cursor-pointer" href={siteMetadata.dribbble}>
        <DribbbleIcon className="hover:scale-125
         ease duration-200"/>
        </a>
      </div>
      <HamNav />
      
      </header>
  )
}

export default Header