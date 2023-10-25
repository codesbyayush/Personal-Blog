import AboutCoverSection from '@/src/components/About/AboutCoverSection'
import Skills from '@/src/components/About/Skills'
import Link from 'next/link'


export const metadata = {
    title: 'About me',
    description: `Something about me` , 
}

const About = () => {
  return (
      <div>
          <AboutCoverSection />
          <Skills />
          <p className='md:px-16 sm:px-10 px-6 text-2xl font-medium pt-8 pb-4'>
            Have a project in mind? Reach out to me 📞 from <Link href='/contact' className='underline underline-offset-4 px-1 text-accent dark:text-accentDark'>here</Link> and let's make it happen.
            </p>
    </div>
  )
}

export default About