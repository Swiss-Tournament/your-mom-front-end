//*** Constants ***/
export const MAX_WIDTH = "1040px";
export const MIN_WIDTH = "400px";

//*** Fonts ***//
export const headerFont = `'Almendra SC', serif`;
export const bodyFont = `'Almendra', serif`;
// MAGIC FONTS
// font-family: 'Almendra', serif;
// font-family: 'Almendra SC', serif;
//*** Colors ***//
const palette = [
  "#808C77", // forestGreen [0]
  "#D9BE3B", // brightYellow [1]
  "#D9B64E", // goldenYellow [2]
  "#BF5B04", // autumOrange [3]
  "#592202", // burgundyRed [4]
  "#262621" // darkBrown [5]
];
const alpha = "b2";
// ***New Color Themes for MTG APP*** ///
/* Color Theme Swatches in Hex MTG APP */
// Regular Magic The Gathering theme
// const forestGreen: #808C77;
// const brightYellow: #D9BE3B;
// const goldenYellow: #D9B64E;
// const autumOrange: #BF5B04;
// const burgundyRed: #592202;
// const darkBrown: #262621;

//*** Named Colors ***//
const attentionColor = palette[0];
const attentionBorder = palette[1];
const subtleBorder = palette[2];
const bgColor = palette[2];
const accent = palette[4];
const darkText = palette[1];
const lightText = palette[1];
const darkBckgrnd = palette[5]; // new color for Named Colors

// in global styles
const headerColor = darkText;
const bodyColor = lightText;
// in global styles can change properties but not the name.
const overlayBackground = [
  accent + alpha,
  attentionBorder + alpha,
  attentionColor + alpha
];
const formBackground = darkText;
const link = darkText;
const linkVisited = darkText;
const linkHover = subtleBorder;

export const colors = {
  attentionColor,
  attentionBorder,
  subtleBorder,
  bgColor,
  accent,
  darkText,
  lightText,
  darkBckgrnd,
  headerColor,
  bodyColor,
  overlayBackground,
  formBackground,
  link,
  linkVisited,
  linkHover
};

// buttons
// const Button = styled.button`
//   color: palevioletred;
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid ${bgColor};
//   border-radius: 3px;
// `;
// div containers
