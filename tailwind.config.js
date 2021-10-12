module.exports = {
  purge: [
    './resources/js/**/*.js'
  ],
  theme: {
    extend: {
      screens: {
        large: "1400px",
        "2xl": "1536px"
      },
      backgroundColor: {
        customPrimary: "#0085d4",
        customGray: "#f2f2f2",
        customPurple: "#d2def8",
        customYellow: "#fdc564",
        customBlue: "#eff3fc",
        customLightGray: "#eef0f2",
        customLightYellow: "#eec609",
        customRed: "#df0024",
        customGreen: "#00b034"
      },
      width: {
        15: "3.75rem",
        56: "56px",
        74: "74px",
        128: "32rem",
        160: "40rem",
        350: "350px",
        28: "7rem",
        36: "9rem"
      },
      height: {
        15: "3.75rem",
        56: "56px",
        74: "74px",
        86: "86px"
      },
      padding: {
        15: "3.75rem",
        22: "5.5rem"
      },
      cursor: {
        grab: "grab"
      },
      borderRadius: {
        large: "58px"
      },
      borderColor: {
        customLightYellow: "#eec609"
      },
      inset: {
        8: "32px"
      },
      maxWidth: {
        310: "310px"
      }
    }
  },
  variants: {},
  plugins: []
};
