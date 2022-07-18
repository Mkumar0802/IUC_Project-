const AnimateCss = require('animated-tailwindcss')


module.exports = AnimateCss(
  {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
  
  theme: {
    fontFamily: {
      mono: "'DM Mono', monospace ",
      rajdhani: "'Rajdhani', sans-serif ",
       oleo:"'Oleo Script Swash Caps', cursive",
       lora:"'Lora', serif",
       roboto:"'Roboto', sans-serif",
       radio: "'Radio Canada', sans-serif",
       popins:" 'Poppins', sans-serif;"
   
    },
    variants: {},
   
  }

}

)