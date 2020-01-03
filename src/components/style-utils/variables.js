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
const palette = ["#464655", "#94958b", "#b7b6c1", "#d5cfe1", "#eddfef"];
const alpha = "b2";
// ***New Color Themes*** ///
/* Color Theme Swatches in Hex */
// LA THEME
// const Magic-color: #DFE7F2;  // ***Super Light Blue, White*** ///
// const Magic-color: #9ABBD9;  // ***Light Blue*** ///
// const Magic-color: #268C8C;  // ***Teal*** ///
// const Magic-color: #9FA668;  // ***Forest Green/ Camo light*** ///
// const darkBrown: #262621;  // ***Dark Brown*** ///

/* Color Theme Swatches in Hex */
// Regular Magic The Gathering theme
// const forestGreen: #808C77;
// const brightYellow: #D9BE3B;
// const goldenYellow: #D9B64E;
// const autumOrange: #BF5B04;
// const burgundyRed: #592202;

//*** Named Colors ***//
const attentionColor = palette[0];
const attentionBorder = palette[1];
const subtleBorder = palette[2];
const bgColor = palette[2];
const accent = palette[4];
const darkText = palette[0];
const lightText = palette[3];
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
