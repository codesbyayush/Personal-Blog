import profileCharacter from '@/public/character.png'
import Image from 'next/image'

const AboutCoverSection = () => {
  return (
      <section className='w-full grid sm:grid-cols-2 border-t-2 border-b-2 items-center justify-items-center'>
          <div className='p-8'>
              <Image
                  alt='Character Image'
                  src={profileCharacter}
                  width={400}
                  height={500}
                  className=''
              />
            </div>  
          <div className='md:px-8 px-5 sm:pr-6 justify-start'>
              <h2 className='text-5xl font-bold text-balance text-center py-4'>Dream Big, Work Hard, Achieve More!</h2>
              <p className='py-4 text-lg pl-4 font-medium'>This Mantra Drives My Work As A Passionate Freelancer. I Blend Innovative Technology With Timeless Design For Captivating Digital Experiences. Inspired By Nature And Literature, I'm A Perpetual Learner Embracing Challenges. With Each Project, I Aim To Leave A Lasting Impact—One Pixel At A Time.</p>
          </div>  
    </section>
  )
}

export default AboutCoverSection