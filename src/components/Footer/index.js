import Link from "next/link";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedinIcon,
  SunIcon,
  TwitterIcon,
} from "../Icons";
import InputEmail from '../Client/InputEmail.jsx';
import siteMetadata from "@/src/utils/siteMetaData";

const Footer = () => {
  return (
    <footer className="md:px-12 sm:px-8 px-5 py-8">
      <div className="w-full bg-dark dark:bg-accentDark dark:text-black text-white py-4 rounded-xl">
        <div className="w-full pt-12 pb-8 px-4 text-center">
          <h2 className="text-3xl font-bold ">
            Interesting Reads | Updates | Guides
          </h2>
          <p className=" w-full py-3 text-lg font-medium">
            Subscribe to learn about new technology and updates.
          </p>
          <div className="py-3">
            <InputEmail />
          </div>
          <div className="flex gap-3 w-min mx-auto pt-6">
          <a className="h-6 w-6 cursor-pointer" href={siteMetadata.linkedin}>
        <LinkedinIcon className="hover:scale-125
         ease duration-200"/>
        </a>
        <a className="h-6 w-6 cursor-pointer" href={siteMetadata.twitter}>
        <TwitterIcon className="hover:scale-125
         ease duration-200"/>
        </a>
        <a className="h-6 w-6 cursor-pointer invert dark:invert-0" href={siteMetadata.github}>
        <GithubIcon className="hover:scale-125
         ease duration-200"/>
        </a>
        <a className="h-6 w-6 cursor-pointer" href={siteMetadata.dribbble}>
        <DribbbleIcon className="hover:scale-125
         ease duration-200"/>
        </a>
          </div>
        </div>
        <div className="bg-white w-full h-0.5 mt-8 mb-4" />
        <div className="flex flex-col sm:flex-row w-full justify-between items-center px-12 text-center gap-2 sm:gap-0">
          <p>@2023 CodesByAyush. All rights reserved.</p>
          <p>
            <Link href="/sitemap.xml" className="underline underline-offset-2">
              sitemap.xml
            </Link>
          </p>
          <p>
            Made with &hearts; by{" "}
            <Link
              href="#"
              className="underline underline-offset-2 font-semibold "
            >
              CodesByAyush
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
