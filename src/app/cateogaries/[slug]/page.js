import { allPosts } from "@/.contentlayer/generated"
import Tag from "@/src/components/Elements/Tag";
import BlogLayoutThree from "@/src/components/Home/Blog/BlogLayoutThree";
import GithubSlugger, {slug} from "github-slugger"


const slugger = new GithubSlugger();


export async function generateStaticParams() {
    const cateogaries = [];
    const paths = [ { slug: 'all' }];

    allPosts.map(post => {
        post.tags.map(tag => {
            
            const slug = slugger.slug(tag)
            if (!cateogaries.includes(slug)) {
                cateogaries.push(slug);
                paths.push( { slug: slug})
            }
        })
        
    })
    return paths
}

export async function generateMetadata({ params }) {
    
    return {
        title: `${params.slug.replaceAll('-', ' ')} Blogs`,
        description: `Learn more about ${params.slug === 'all' ? 'web development' : params.slug} through our collection of blogs`,
    }
}

const CateogaryPage = ({ params }) => {

    const allCateogaries = ["all"];
    const blogs = allPosts.filter((blog) => {
        return blog.tags.some(tag => {
            const slugified = slug(tag);
            if (!allCateogaries.includes(slugified)) {
                allCateogaries.push(slugified)
            }
            if (params.slug === 'all') {
                return true;
            }
            return slugified === params.slug
        })
    })
  return (
      <div className="md:px-12 sm:px-8 px-5">
          <div className="pt-16 pb-8 ">
              <h1 className="text-3xl font-bold capitalize">
                  #{params.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join('')}
              </h1>
              <p>Discover more categories and expand your knowledge!</p>
          </div>
          <div className="w-full h-0.5 mx-auto bg-white/60 invert dark:invert-0"/>
          <div className="flex w-full flex-wrap gap-6 py-8 ">
              { allCateogaries.map(cateogary => <Tag tag={cateogary} key={cateogary} className={`px-6 py-2 ${cateogary === params.slug ? 'bg-black dark:bg-white dark:text-black font-semibold' : 'dark:bg-dark invert dark:invert-0'}`}/>)}
          </div>
          <div className="w-full h-0.5 mx-auto bg-white/60 invert dark:invert-0"/>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 items-center justify-between pt-20 pb-12">
              {blogs.map(blog => <BlogLayoutThree blog={ blog } key={blog.slug}/>)}
          </div>
    </div>
  )
}

export default CateogaryPage