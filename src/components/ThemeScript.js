'use client'

import Script from "next/script"

export default function ThemeScript() {
  return (
  



<Script id='theme' strategy="beforeInteractive">
          {
            `if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            }`
          }
        </Script>
      )
    }