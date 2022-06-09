const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/screens/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxs: "321px",
      xs: "372px",
      xsm: "540px",
      ...defaultTheme.screens,
    },
    extend: {
      borderWidth: {
        3: '3px',
      },
      minWidth: {
        36: '9rem',
        44: '11rem',
        56: '14rem',
        60: '15rem',
        72: '18rem',
        80: '20rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      zIndex: {
        60: '60',
        '-10': '-10',
      },
      transitionTimingFunction: {
        'in-expo': 'ease',
      },
      textColor: {
        heading: '#232d42',
      },
      colors: {
        header: "rgba(0,0,0,0.45)",
        "light-pink": "#ECB9DD",
        "dark-pink": "#EA007D",
        primary: "#440052",
        dark: "#393938",
        gray: "#828282",
        "light-gray": "#f2f2f2",
        "pink-transparent": "rgba(206, 65, 164, 0.09)",
        "pink-transparent-1": "rgba(241, 217, 232, 0.39)",
        container: '#f5f6fa',
        body: '#f5f7fe',
      
        sideblue:'#3a57e8',
        sideblack:'#212529',
        sidehover:'#ffffff20',
        glass:'#ffffff90',
        glassdark:'#76707069'
      },
      boxShadow: {
        btn: "4px 0 43px 0 rgba(3, 0, 155, 0.93)",
        shadow: "16px 0px 68px rgba(234, 0, 125, 0.27)",
        "shadow-sm": "0px 4px 15px rgba(234, 0, 125, 0.1)",
        input: "0px 0px 0px 2px rgba(226, 147, 221)",
      },
      backgroundImage: {
        "grad-back":
          "linear-gradient(120deg, #FF0000 0%, #2400FF 100%), linear-gradient(120deg, #FA00FF 0%, #208200 100%), linear-gradient(130deg, #00F0FF 0%, #000000 100%), radial-gradient(110% 140% at 15% 90%, #ffffff 0%, #1700A4 100%), radial-gradient(100% 100% at 50% 0%, #AD00FF 0%, #00FFE0 100%), radial-gradient(100% 100% at 50% 0%, #00FFE0 0%, #7300A9 80%), linear-gradient(30deg, #7ca304 0%, #2200AA 100%)",
        "grad-text-1":
          " linear-gradient(90deg, rgba(57,0,77,1) 0%, rgba(3,0,155,1) 100%)",
        "grad-text-2":
          "linear-gradient(160deg, rgba(255, 0, 128, 1) 50%, rgba(121, 40, 202, 1) 100%)",
          "grad-btn":"linear-gradient(310deg,#7928ca,#ff0080)",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
      keyframes: {
        positionAnim: {
          from: {
            position: "fixed",
            opacity: 1,
          },
          to: {
            position: "absolute",
            opacity: 1,
            transition: "all 0.4s ease-in",
          },
        },
        pulsePlay: {
          from: {
            transform:
              "translateX(-50%) translateY(-50%) translateZ(0) scale(1)",
            opacity: 1,
          },
          to: {
            transform:
              "translateX(-50%) translateY(-50%) translateZ(0) scale(1.5)",
            opacity: 0,
          },
        },
      },
      animation: {
        positionAnim: "positionAnim 0.4s ease-in",
        pulsePlay: "pulsePlay 1.5s ease-out infinite",
      },
    
    },
  },
  // variants: {
  //   extend: {
  //     zIndex: ['hover'],
  //   },
  // },
  plugins: [require('@tailwindcss/forms')],
};
