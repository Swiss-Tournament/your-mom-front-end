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
  "#808C77",
  "#D9BE3B",
  "#D9B64E",
  "#BF5B04",
  "#592202",
  "#262621"
];

const alpha = "b2";
// ***New Color Themes*** ///
/* Color Theme Swatches in Hex */
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
const darkText = palette[0];
const lightText = palette[3];
// new color
const darkBckgrnd = palette[5];
// in global styles
const headerColor = darkText;
const bodyColor = darkText;
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
  headerColor,
  bodyColor,
  overlayBackground,
  formBackground,
  link,
  linkVisited,
  linkHover
};
