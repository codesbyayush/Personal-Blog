'use client'
import { MoonIcon, SunIcon } from "../Icons"
import { useThemeSwitch } from "../Hooks/useThemeSwitch"

export default function ThemeSwitcher() {

    const [mode, setMode] = useThemeSwitch();
    
  return (
    <button className="px-2" onClick={() => setMode(mode === "light" ? 'dark' : 'light')}>
          { mode === 'light' ? <SunIcon /> : <MoonIcon />}
        </button>
  )
}
