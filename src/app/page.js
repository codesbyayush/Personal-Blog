import Image from 'next/image'
import { allPosts } from '@/.contentlayer/generated'
import HomeCoverSection from '../components/Home/HomeCoverSection'
import FeaturedPosts from '../components/Home/FeaturedPosts'
import RecentPosts from '../components/Home/RecentPost'
import { sortBlogs } from '../utils'
import Footer from '../components/Footer'

export default function Home() {
  const sortedBlogs = sortBlogs(allPosts);
  return (
    <main className="">
      <HomeCoverSection blogs={sortedBlogs} />
      <FeaturedPosts blogs={sortedBlogs} />
      <RecentPosts blogs={sortedBlogs} />
    </main>
  )
}
