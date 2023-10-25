import { sortBlogs } from "@/src/utils"
import Image from "next/image";
import Link from "next/link";
import Tag from "../Elements/Tag";

const HomeCoverSection = ({ blogs }) => {
    
    const sortedBlogs = sortBlogs(blogs);
    const latestBlog = sortedBlogs[0];
    // console.log(latestBlog.title)
  return (
      <div className="w-full md:px-12 sm:px-8 px-5 py-8 h-[80vh]  ">
        <article className="flex flex-col relative h-full justify-end">
          <div className="w-full h-full absolute bg-gradient-to-b from-transparent from-0% to-dark to-[90%] top-0 left-0 -z-10 border-gray border rounded-xl"/>
          <Image
              src={latestBlog.image.filePath.replace('../public', "")}
                  blurDataURL={latestBlog.image.blurhashDataUrl}
                  fill
              alt="Latest Blog"
                  className="rounded-xl overflow-hidden w-full h-full object-center -z-20 object-cover "
                  sizes="100vw"
                  priority
              />
              <div className="sm:p-12 p-8 pt-16 sm:pt-8 w-[95%] sm:w-[85%] flex flex-col gap-4 text-white">
                  <Tag tag={latestBlog.tags[0]} className='font-semibold px-6 py-3' />
                  <Link
                      
                      href={latestBlog.url}>
                      <h1 className="font-bold text-4xl capitalize">
                          <span className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat duration-700 transition-[background-size]">
                              {latestBlog.title}
                              </span>
                      </h1>
                  </Link>
                  <Link
                      className="font-semibold text-lg line-clamp-4 hidden sm:block"
                      href={latestBlog.url}> {latestBlog.description} </Link>
              </div>
        </article>
    </div>
  )
}

export default HomeCoverSection