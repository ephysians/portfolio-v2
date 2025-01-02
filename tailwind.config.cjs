/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poppins: "Poppins",
      Paprika: "Paprika",
      Inria: "Inria Serif",
      Montserrat: "Montserrat",
      Lato: "Lato",
    },
    container: {
      center: true,
      padding: "4rem",
    },
    extend: {
      colors: {
        dark_primary: "#081c15",
        bg_light_primary: "#D5E3F1",
        gray: "#495057",
      },
      backgroundImage: {
        primaryLinear: "linear-gradient(180deg, #081c15 0.48%,rgb(150, 168, 185) 100%)",
      },
    
      dropShadow: {
        primary: "-5px 35px 40px rgba(223, 229, 236, 0.9)",
      },
    },

    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },

   

  },
  plugins: [],
};


