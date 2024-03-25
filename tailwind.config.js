/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                blue2: "#66B2FF",
                black_text: "#1f1f1f",
                gray: "#525252",
                gray_white: "#e6e6e6",
                green: "#3399FF",
                blue: "##3399FF",
            },
            fontFamily: {
                customFont: ['"Outfit"', "sans-serif"],
                // Add more custom font families as needed
            },
        },
    },
    plugins: [
        require("tailwind-scrollbar")({
            nocompatible: true,
            preferredStrategy: "pseudoelements",
        }),
    ],
};
