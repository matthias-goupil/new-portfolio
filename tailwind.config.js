/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // ou 'media' si tu préfères
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    plugins: [],
}
