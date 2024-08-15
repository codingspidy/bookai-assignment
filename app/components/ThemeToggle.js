'use client'
import { useState, useEffect } from 'react';

export default function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(false);
    const [toggleChecked, setToggleChecked] = useState(true);

    useEffect(() => {
        const mode = localStorage.getItem('theme');
        const hasClass = document.documentElement.classList.contains("dark");
        if (hasClass || mode === 'dark') {
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
            setToggleChecked(true);
            document.documentElement.classList.add('dark');
        } else {
            localStorage.removeItem('theme');
            setToggleChecked(false);
            document.documentElement.classList.remove('dark');
        }
    };

    const handleKeyDown = (event) => {
        console.log(event.key);
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleDarkMode();
        }
    };

    return (
        <div className='fixed bottom-12 right-[7%] z-10'>
            <span onKeyDown={handleKeyDown} tabIndex={0} aria-label="Switch to toggle Dark theme" className="moon-sun mx-3">
                <input type="checkbox"
                    checked={toggleChecked}
                    onChange={toggleDarkMode}
                    name="ctaTheme"
                    id="ctaTheme"
                    className="sr-only"
                    aria-checked={toggleChecked}
                    aria-label={"Switch to toggle Dark theme"} />
                <label
                    htmlFor="ctaTheme"
                    tabIndex={-1}
                    role="switch"
                    aria-checked={toggleChecked}
                    aria-label={"Switch to toggle Dark theme"}
                >
                    <span></span>
                    <i className="cloud"></i>
                    <i className="stars"></i>
                </label>
            </span>
        </div>
    )
}