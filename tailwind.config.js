/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        facebook: '#3B5998',
        instagram: ['#f09433', '#ec6200'], // Array for gradient colors
        youtube: '#FF0000',
      },
    },
    screens: {
      'sm': '640px',    // Small screens, default: 640px
      'md': '768px',    // Medium screens, default: 768px
      'lg': '1024px',   // Large screens, default: 1024px
      'xl': '1280px',   // Extra-large screens, default: 1280px
      '2xl': '1536px',  // 2-extra-large screens, default: 1536px
      'mobile': '480px',  // Custom screen size for mobile devices
      'tablet': '768px',  // Custom screen size for tablets
      'desktop': '1024px', // Custom screen size for desktops
    },
    
  },
  plugins: [],
};
