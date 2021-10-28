import { useState, useEffect } from 'react';

const useDarkMode = () => {
    const [theme, setTheme] = useState(localStorage.theme);

    const colorTheme = theme === 'dark' ? 'light' : 'dark';

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === undefined) {
            root.classList.remove(undefined);
            root.classList.add('light');
            localStorage.setItem('theme', 'light');
        } else {
            root.classList.remove(colorTheme);
            root.classList.add(theme);
            localStorage.setItem('theme', theme);
        }
    }, [theme, colorTheme]);
    return [colorTheme, setTheme];
};

export default useDarkMode;
