/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#007BFF", 
                secondary: "#6C757D",
                lightBg: "#F8F9FA",
                darkBg: "#121212",
            },
        },
    },
    plugins: [],
};
