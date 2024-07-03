// tailwind.config.js

export default{
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './components/**/*.{jsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #FFCCD5 0%, #FED9E0 27%, #FED9E0 40%, #FED9E0 85%, #FCFCFC 100%)',
        'reverse-gradient': 'linear-gradient(to bottom,#F8FEFF 0%, #C4F1F5 29%,#7FF2FA 100%)',
        'cyan-gradient': 'linear-gradient(to bottom,#F8FEFF 0%, #C4F1F5 29%, #7FF2FA 100%)',
      },
      colors:{
        "prigmayBG": "#FCFCFC",
        "Pink":"#FED9E0 ",
        "puce": "#CE7789", //for buttons
        "Cyan": "#A9DFE4", //for round backgrounds and tags
        "LightRed": "#FF6868",//for sub headings
        "Grey":"#272727",//for navbar items
         "red":"#FF7979" 
      },
     
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
