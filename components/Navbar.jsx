"use client";

import { useToggleTheme } from "@/hooks/useToggleTheme";
import { useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi2";
import { BsGithub } from "react-icons/bs";
export const Navbar = () => {
    const { theme, toggleTheme } = useToggleTheme()
    const [themeIcon, setthemeIcon] = useState(false)

    const toggleIconTheme = () => {
        if(theme === 'dark'){
            setthemeIcon(false)
            toggleTheme()
        } else {
            setthemeIcon(true)
            toggleTheme()

        }
        
    }

    return (
        <nav className="w-full bg-gray-950 dark:bg-slate-300 py-3 px-6 md:py-6 md:px-6 transition duration-300">
            <div className="flex justify-center">
                <h1 className="text-2xl md:text-3xl text-center dark:text-gray-900 my-2.5">Morse translator</h1>
                
                <div className="ms-auto flex gap-2">
                    <a href="https://github.com/jeliasdiaz/morse-app" target="_blank" rel="noreferrer"><BsGithub size={60} className="ms-auto hover:bg-gray-700/50 p-4 rounded-md cursor-pointer dark:text-gray-900 dark:hover:bg-gray-400/50" /></a>
                {
                    themeIcon
                        ? <HiMoon className="hover:bg-gray-700/50 p-4 rounded-md cursor-pointer dark:text-gray-900 dark:hover:bg-gray-400/50 transition duration-200" size={60} onClick={toggleIconTheme} />
                        : <HiSun className="hover:bg-gray-700/50 hover:rotate-45 p-4 rounded-md cursor-pointer dark:text-gray-900 dark:hover:bg-gray-400/50 transition duration-200" size={60} onClick={toggleIconTheme}/>
                }
                </div>
            </div>
        </nav>
    )
}
