/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGray: "#2F2F2F",
        softGray: "#F4F4F4",
        accent: "#005A34",
        primaryText: "#333333",
      },
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
        merriweatherBold: [
          "Merriweather bold",
          ...defaultTheme.fontFamily.sans,
        ],
        merriweatherReg: [
          "Merriweather regular",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      backgroundImage: {
        "saya-home": "url('assets/image/sayagems/saya-home.png')",
        "saya-about": "url('assets/image/sayagems/saya-about.png')",
        "saya-checkout": "url('assets/image/sayagems/saya-checkout.png')",
        "saya-custom": "url('assets/image/sayagems/saya-custom.png')",
        "saya-mobile-home": "url('assets/image/sayagems/saya-mobile-home.png')",
        "saya-products": "url('assets/image/sayagems/saya-products.png')",
        "saya-mobile-about":
          "url('assets/image/sayagems/saya-mobile-about.png')",
        "audiophile-home": "url('assets/image/audiophile/audiophile-home.png')",
        "audiophile-cart": "url('assets/image/audiophile/audiophile-cart.png')",
        "audiophile-checkout":
          "url('assets/image/audiophile/audiophile-checkout.png')",
        "audiophile-headphones":
          "url('assets/image/audiophile/audiophile-headphones.png')",
        "audiophile-mobile-checkout":
          "url('assets/image/audiophile/audiophile-mobile-checkout.png')",
        "audiophile-mobile-home":
          "url('assets/image/audiophile/audiophile-mobile-home.png')",
        "audiophile-oneheadphone":
          "url('assets/image/audiophile/audiophile-oneheadphone.png')",
        "country-lightmode":
          "url('assets/image/country-api/country-lightmode.png')",
        "country-darkmode":
          "url('assets/image/country-api/country-darkmode.png')",
        "country-card": "url('assets/image/country-api/country-card.png')",
        "country-mobile": "url('assets/image/country-api/country-mobile.png')",
        "country-mobile-card":
          "url('assets/image/country-api/country-mobile-card.png')",
        "dreamland-home": "url('assets/image/dreamland/dreamland-home.png')",
        "dreamland-about": "url('assets/image/dreamland/dreamland-about.png')",
        "dreamland-products":
          "url('assets/image/dreamland/dreamland-products.png')",
        "dreamland-mobile-about":
          "url('assets/image/dreamland/dreamland-mobile-about.png')",
        "dreamland-mobile-home":
          "url('assets/image/dreamland/dreamland-mobile-home.png')",
        "custom-gradient": "linear-gradient(0.25turn, #8900ff, #f50179)",
      },
    },
  },

  plugins: [],
};
