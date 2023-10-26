'use client'
import { MoonIcon, SunIcon } from "../Icons"
import { useThemeSwitch } from "../Hooks/useThemeSwitch"

export default function ThemeSwitcher() {

    const [mode, setMode] = useThemeSwitch();
    
  return (
    <button className="px-1 ml-2 min-w-[2rem] bg-dark/20 rounded-full py-1" onClick={() => setMode(mode === "light" ? 'dark' : 'light')}>
          { mode === 'light' ? <SunIcon /> : <MoonIcon />}
        </button>
  )
}
