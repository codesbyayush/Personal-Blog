import LottiePlayer from '@/src/components/Contact/LottieAnimation'
import React from 'react'
import ContactForm from './ContactForm'
import Metadata from '@/src/utils/siteMetaData'


export const metadata = {
    title: 'Contact me',
    description: `Contact me through the form available on this page or email me at ${Metadata.email}` , 
}

const Contact = () => {
  return (
      <section className='grid md:grid-cols-5 md:border-b-2 items-center justify-center  sm:px-8 px-5 md:px-0'>
          <LottiePlayer />
          <div className='md:col-span-3 md:px-12'>
              <h2 className='text-4xl font-bold mb-8 mt-4'>Let's Connect!</h2>
              <ContactForm />
          </div>
    </section>
  )
}

export default Contact