"use client";

import { useEffect, useState } from "react";


export const useToggleTheme = () => {
    const [theme, setTheme] = useState('');

    const toggleTheme = () => theme === '' ? setTheme('dark') : setTheme('')
  
    useEffect(() => {
      const storedTheme = localStorage.getItem('theme') || '';
      if (storedTheme) {
        setTheme(storedTheme);
      }
    }, []);

    useEffect(() => {
      localStorage.setItem('theme', theme);
      document.body.className = theme;
    }, [theme]);

  return {
    theme,
    toggleTheme
  }
}
