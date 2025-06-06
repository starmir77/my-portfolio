/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sarala: ['Sarala', 'sans-serif'],
        source: ['"Source Sans 3"', 'sans-serif'],
        karla: ['Karla', 'sans-serif'],
        ibm: ['"IBM Plex Sans"', 'sans-serif'],
      },
    },
  }
}
