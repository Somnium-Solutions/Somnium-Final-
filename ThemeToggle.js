function ThemeToggle() {
    const [isDark, setIsDark] = React.useState(false);

    const toggleTheme = () => {
        setIsDark(!isDark);
        document.documentElement.classList.toggle('dark');
    };

    return (
        <button
            data-name="theme-toggle"
            onClick={toggleTheme}
            className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
            aria-label="Toggle theme"
        >
            <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'} text-xl`}></i>
        </button>
    );
}
