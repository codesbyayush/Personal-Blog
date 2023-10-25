import { allPosts } from "@/.contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Tag from "@/src/components/Elements/Tag";
import RenderMDX from "@/src/components/Home/Blog/RenderMDX";
import ViewCount from "@/src/components/Home/Blog/ViewCount";
import siteMetadata from "@/src/utils/siteMetaData";

export async function generateStaticParams() {
  return allPosts.map((blog) => blog._raw.flattenedPath);
}

export async function generateMetadata({ params }) {
  const blog = allPosts.find((blog) => blog._raw.flattenedPath === params.slug);
  if (!blog) {
    return;
  }

  const publishedAt = new Date(blog.publishedAt).toISOString();
  const updatedAt = new Date(blog.updatedAt || blog.publishedAt).toISOString();

  let imageList = [siteMetadata.socialBanner]
  if (blog.image) {
    imageList = typeof blog.image.filePath === 'string' ? [siteMetadata.siteUrl + blog.image.filePath.replace('../public', '')] : blog.image;
  }

  const modImages = imageList.map(image => (
    {url: image.includes('http') ? image : siteMetadata.siteUrl + image }
  ))

  const authors = blog?.author ? [blog.author] : siteMetadata.author;
  
  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: siteMetadata.siteUrl + blog.url,
      siteName: blog.title,
      publishedTime: publishedAt,
      modifiedTime: updatedAt,
    images: modImages,
    locale: 'en_US',
      type: 'article',
      authors: authors.length > 0 ? authors : [siteMetadata.author],
      twitter: {
        card: 'summary_large_image',
        title: blog.title,
        description: blog.description,
        images: modImages,
      },
  },
  }
}

const BlogPage = ({ params }) => {
  const blog = allPosts.find((blog) => blog._raw.flattenedPath === params.slug);

  let imageList = [siteMetadata.socialBanner]
  if (blog.image) {
    imageList = typeof blog.image.filePath === 'string' ? [siteMetadata.siteUrl + blog.image.filePath.replace('../public', '')] : blog.image;
  }

  const jsonLd = {
    "@context": "http://schema.org",
    "@type": "NewsArticle",
    "headline": blog.title,
    "description": blog.description,
    "image": imageList,
    "datePublished": new Date(blog.publishedAt).toISOString(),
    "dateModified": new Date(blog.updatedAt || blog.publishedAt).toISOString(),
    "author": [{
      "@type": "Person",
      "name": blog?.author ? [blog.author] : siteMetadata.author,
      "url": siteMetadata.siteUrl + blog.url
    }]

    

  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    <div>
      <div className="w-full py-8 h-[80vh]">
        <article className="flex flex-col relative h-full justify-center">
          <div className="w-full h-full absolute bg-gradient-to-b from-dark/50 from-50% to-dark/95 top-0 left-0 -z-10 border border-gray" />
          <Image
            src={blog.image.filePath.replace("../public", "")}
            blurDataURL={blog.image.blurhashDataUrl}
            fill
            alt="Latest Blog"
            className="rounded-xl overflow-hidden w-full h-full object-center -z-20 object-cover"
          />
          <div className="p-12 w-full flex flex-col gap-4 text-center">
            <Tag
              tag={blog.tags[0]}
              className="font-semibold px-6 py-3 mx-auto"
            />

            <h1 className="font-bold text-4xl capitalize text-white">{blog.title}</h1>
          </div>
        </article>
      </div>
      <div className="w-full md:px-12 sm:px-8 px-5 py-8 max-w-screen-2xl mx-auto">
        <div className="w-full py-4 flex justify-evenly bg-accent dark:bg-accentDark dark:text-dark text-white font-semibold text-xl rounded-lg flex-wrap gap-6 px-4">
          <date>September 4, 2022</date>
          <p className="flex gap-1">
            <span><ViewCount slug={params.slug}/></span> views
          </p>
          <p>{blog.readingTime.text}</p>
          <p >#{blog.tags[0]}</p>
        </div>
      </div>
      <div className="max-w-screen-2xl md:px-12 sm:px-8 px-5 grid lg:grid-cols-3 grid-cols-1 lg:gap-16 relative lg:grid-rows-1 mx-auto">
        <div className="col-span-1 pb-16 lg:pb-0">
          <details
            className="border px-4 py-3 rounded-lg lg:sticky lg:top-6 max-h-[80vh]  overflow-y-scroll no-scrollbar"
            open
          >
            <summary className="text-xl font-semibold ">
              Table of Content
            </summary>
            <ul>
              {blog.toc.map((heading) => {
                return (
                  <li
                    key={heading.slug}
                    className={`${
                      heading.level === "one"
                        ? "pl-4 pt-6 font-bold"
                        : heading.level === "two"
                        ? "pl-4 pt-6 font-semibold text-lg"
                        : "pl-10 pt-3 font-medium"
                    } hover:underline underline-offset-2`}
                  >
                    <a href={`#${heading.slug}`}>
                      <span>{heading.text}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </details>
        </div>
        <RenderMDX blog={blog} />
      </div>
      </div>
      </>
  );
};

export default BlogPage;
