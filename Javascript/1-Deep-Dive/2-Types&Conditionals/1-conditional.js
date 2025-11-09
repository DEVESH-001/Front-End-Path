// if statements - evaluate boolean values

const prefersDarkMode = false;
const prefersSolarizedMode = true;

if (prefersDarkMode) {
  console.log("dark mode set!");
  document.body.style.background = "black";
} else if (prefersSolarizedMode) {
  console.log("solarized mode set!");
  document.body.style.background = "palegoldenrod";
} else {
  console.log("light mode set!");
  document.body.style.background = "ghostwhite";
}

//if we have multiple mode
const colorMode = "dark";

switch (colorMode) {
  case "solarized":
    console.log("solarized mode set");
    document.body.style.background = "palegoldenrod";
  case "dark":
    console.log("dark mode set");
    document.body.style.background = "black";
  case "light":
    console.log("light mode set");
    document.body.style.background = "ghostwhite";
    break;
  default:
    console.log("no valid mode set");
    document.body.style.background = "white";
}
