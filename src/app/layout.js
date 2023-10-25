import Footer from '../components/Footer'
import Header from '../components/Header'
import './globals.css'
import { Inter, Manrope } from 'next/font/google'
import Metadata from '../utils/siteMetaData'
import Script from 'next/script'
import ThemeScript from '../components/ThemeScript'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' })

const manrope = Manrope({ subsets: ['latin'], display: 'swap', variable: '--font-manrope' })

export const metadata = {
  metadataBase: new URL(Metadata.siteUrl),
  title: {
    template: `%s | ${Metadata.title}`,
    default: Metadata.title,
  },
  description: Metadata.description,
  openGraph: {
    title: Metadata.title,
    description: Metadata.description,
    url: Metadata.siteUrl,
    siteName: Metadata.title,
    images: [
      Metadata.socialBanner
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: Metadata.title,
    images: [Metadata.socialBanner],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable} font-mr bg-light dark:bg-dark text-dark dark:text-light`}>

        < ThemeScript/>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
