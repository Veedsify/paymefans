const config = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "serif"],
        serif: ["Inter", "serif"],
      },
      colors: {
        white: "#ffffff",
        black: "#000000",
        "primary-dark-pink": "#CC0DF8",
        "button-black": "#000000",
        "primary-text-dark-pink": "#78158E",
        "messages-unread": "#FCF1FF",
        "message-bubble": "#CC0DF8",
        "model-online-notify": "#04D900",
        coin: "#F4900C",
        "coins-card-bottom": "#FAE2FF",
      },
    },
  },
  plugins: [],
};

export default config;
