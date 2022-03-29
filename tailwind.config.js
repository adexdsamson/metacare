module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#25BB87",
        secondary: "",
        active: "#6837EF",
        tertiary: "#3E68FF",
        default: "#696D8C",
        "deep-default": "#060213",
      },
      fontFamily: {
        inter: "'Inter', sans-serif",
        "gelion-regular": "Gelion Regular",
        "gelion-medium": "Gelion Medium",
        "gelion-semibold": "Gelion Semi Bold",
        "gelion-bold": "Gelion Bold",
      },
      fontSize: {
        header: "24px",
        subheader: "20px",
        body: "18px",
        subbody: "16px",
        caption: "14px",
        subcaption: "12px",
      },
      lineHeight: {
        38: "38.4px",
        29: "29px",
        24: "24px",
        22: "22px",
        20: "20px",
      },
      spacing: {
        "cal-288": "calc(100% - 288px)",
      },
    },
  },
  plugins: [],
};
