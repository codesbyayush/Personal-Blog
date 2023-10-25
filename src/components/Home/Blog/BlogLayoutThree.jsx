import Link from "next/link"
import Image from "next/image"
import Tag from "../../Elements/Tag"

const BlogLayoutThree = ({blog}) => {
  return (
    <div className="h-full">
        <article className="flex flex-col relative h-full justify-end pt-16">
          <div className="w-full h-full absolute bg-gradient-to-b from-transparent from-0% to-dark to-[90%] top-0 left-0 -z-10 border-gray border rounded-xl "/>
          <Image
              src={blog.image.filePath.replace('../public', "")}
                  blurDataURL={blog.image.blurhashDataUrl}
                  fill
              alt="Latest Blog"
              className="rounded-xl overflow-hidden w-full h-full object-center -z-20 object-cover"
              />
              <div className="p-12 md:p-6 lg:p-12 w-full flex flex-col gap-4 text-white/90">
                              <Tag tag={blog.tags[0]} className='text-sm font-semibold px-6 py-3' />
                  <Link
                      
                      href={blog.url}>
                      <h1 className="font-bold text-xl capitalize">
                          <span className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat duration-700 transition-[background-size]">
                              {blog.title}
                              </span>
                      </h1>
                  </Link>
              </div>
        </article>
                  </div>
  )
}

export default BlogLayoutThree