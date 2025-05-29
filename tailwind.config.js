module.exports = {
    darkMode: 'class',
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                background: "var(--color-background)",
                primary: "var(--color-primary)",
                cardBackground: "var(--color-cardBackground)",
                accent: "var(--color-accent)",
            },
        },
    },
    plugins: [],
};