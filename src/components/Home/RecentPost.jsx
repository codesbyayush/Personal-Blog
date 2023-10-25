import Link from "next/link"
import Tag from "../Elements/Tag"
import Image from "next/image"
import { sortBlogs } from "@/src/utils"
import BlogPost1 from "./Blog/BlogPost1"
import BlogPost2 from "./Blog/BlogPost2"
import BlogLayoutThree from "./Blog/BlogLayoutThree"

const RecentPosts = ({blogs}) => {

  return (
      <section className="md:px-12 sm:px-8 px-5 py-8 text-white">
          <div className="flex items-center justify-between">
              
              <h2 className="font-bold text-3xl py-16">Recent Posts</h2>
              <Link className="text-white font-semibold text-lg border px-4 py-2 rounded-full" href={'/cateogaries/all'}>View All</Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {blogs.splice(5,11).map((blog, i) => <BlogLayoutThree blog={blog} key={i}/>)}
          </div>
    </section>
  )
}

export default RecentPosts