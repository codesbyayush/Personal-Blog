import Link from "next/link"
import Tag from "../Elements/Tag"
import Image from "next/image"
import { sortBlogs } from "@/src/utils"
import BlogPost1 from "./Blog/BlogPost1"
import BlogPost2 from "./Blog/BlogPost2"

const FeaturedPosts = ({blogs}) => {
    const sortedBlogs = sortBlogs(blogs);
  return (
    <section className="md:px-12 sm:px-8 px-5 py-8">
          <h2 className="font-bold text-3xl py-16">Featured Posts</h2>
          <div className="flex flex-col xl:flex-row w-full gap-4 text-white">
              

              <BlogPost1 latestBlog={sortedBlogs[1]}/>

              <div className="grid sm:grid-cols-2 xl:grid-cols-1 gap-4 w-full xl:w-1/2 ">
                  
              
                  <BlogPost2 blog={ sortedBlogs[2]} />
                  <BlogPost2 blog={ sortedBlogs[3]} />
                  
              </div>
          </div>
    </section>
  )
}

export default FeaturedPosts