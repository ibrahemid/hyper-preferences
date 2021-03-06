﻿// select one Theme from below ,Default is red gray
// red gray(with animation) theme Uncommment to activate
module.exports = {
  config: {
    updateChannel: "stable",
    fontSize: 12,
    fontFamily: "Fira Code",
    fontWeight: "normal",
    fontWeightBold: "bold",
    cursorColor: "rgba(248,28,229,0.8)",
    cursorAccentColor: "#000",
    cursorShape: "BLOCK",
    cursorBlink: true,
    foregroundColor: "#fff",
    backgroundColor: "#000",
    selectionColor: "rgba(248,28,229,0.3)",
    borderColor: "#333",
    css: "",
    termCSS: "",
    opacity: 0.8,
    hyperBorder: {
      borderColors: ["#0F2027", "#203A43", "#870000", "#C51E14", "#2C5364"],
      animate: true,
    },
    showHamburgerMenu: "",
    showWindowControls: "right",
    padding: "12px 14px",
    shell: "C:\\Program Files\\Git\\git-cmd.exe",
    shellArgs: ["--command=usr/bin/bash.exe", "-l", "-i"],
    env: { TERM: "cygwin" },
    bell: "SOUND",
    copyOnSelect: true,
    defaultSSHApp: true,
  },
  plugins: [
    "hyper-snazzy",
    "hyper-always-on-top",
    "hyper-systray",
    "hyperborder",
    "hyper-opacity",
  ],
  localPlugins: [],
  keymaps: {},
};

// rainbow theme Uncommment to activate
// module.exports = {
//   config: {
//     updateChannel: "stable",
//     fontSize: 12,
//     fontFamily: "Fira Code",
//     fontWeight: "normal",
//     fontWeightBold: "bold",
//     cursorColor: "rgba(248,28,229,0.8)",
//     cursorAccentColor: "#000",
//     cursorShape: "BLOCK",
//     cursorBlink: true,
//     foregroundColor: "#fff",
//     backgroundColor: "#000",
//     selectionColor: "rgba(248,28,229,0.3)",
//     borderColor: "#333",
//     css: "",
//     termCSS: "",
//     opacity: 0.8,
//     showHamburgerMenu: "",
//     showWindowControls: "right",
//     padding: "12px 14px",
//     shell: "C:\\Program Files\\Git\\git-cmd.exe",
//     shellArgs: ["--command=usr/bin/bash.exe", "-l", "-i"],
//     env: { TERM: "cygwin" },
//     bell: "SOUND",
//     copyOnSelect: true,
//     defaultSSHApp: true,
//   },
//   plugins: [
//     "hyper-snazzy",
//     "hyper-always-on-top",
//     "hyper-systray",
//     "hyperborder",
//     "hyper-opacity",
//   ],
//   localPlugins: [],
//   keymaps: {},
// };
