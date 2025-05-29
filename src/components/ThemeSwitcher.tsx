"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";


const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
    
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <>
            <button
                onClick={toggleTheme}
                aria-label="Toggle light / dark theme"
                className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition cursor-pointer"
            >
                {theme === "light" ? (
                    <MoonIcon className="h-6 w-6" />
                ) : (
                    <SunIcon className="h-6 w-6" />
                )}
            </button>
        </>
    );
};

export default ThemeSwitcher;
