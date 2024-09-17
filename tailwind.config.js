/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
   
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('D:\ReactAll\CHEFS-TABLE\chefs-table\src\assets\Images\beef-chaomi.jpg')",
       
      },
    },
  },
  plugins: [],
}

