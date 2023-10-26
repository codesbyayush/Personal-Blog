import Link from "next/link"
import profileImg from '@/public/logo.png'
import Image from "next/image"

const Logo = () => {
  return (
      <Link href={'/'} className="flex items-center text-dark dark:text-light gap-4">
          <div className="rounded-full overflow-hidden border border-solid border-dark dark:border-light md:w-16 sm:w-14 w-12">
              <Image src={profileImg} alt='logo' className='w-full h-auto rounded-full'
              priority
              />
          </div>
          <span className="text-xl font-bold">Ayu..</span>
      </Link>
  )
}

export default Logo