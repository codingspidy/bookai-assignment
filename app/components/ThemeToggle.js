'use client'
import { useState, useEffect } from 'react';

export default function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        localStorage.setItem('theme', 'dark');
    }, []);
    useEffect(() => {
        const mode = localStorage.getItem('theme');
        if (mode === 'dark') {
            setDarkMode(true);
            document.documentElement.classList.add('dark');
        } else {
            setDarkMode(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
            localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add('dark');
        } else {
            localStorage.removeItem('theme');
            document.documentElement.classList.remove('dark');
        }
    };
    return (
        <div className='fixed bottom-16 right-0 z-10'>
            <span tabIndex={0} aria-label="Toggle dark theme" className="moon-sun mx-3">
                <input type="checkbox" name="ct0" id="ct0" />
                <label
                    htmlFor="ct0"
                    onClick={toggleDarkMode}
                >
                    <span></span>
                    <i className="cloud"></i>
                    <i className="stars"></i>
                </label>
            </span>
            {/* <button
                onClick={toggleDarkMode}
                aria-label="Toggle dark mode"
                className="dark:text-[#1B062E] text-white bg-[#1B062E] dark:bg-white py-2 text-lg sm:text-base"
            >
                {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button> */}
        </div>
    )
}