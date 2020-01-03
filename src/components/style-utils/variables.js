//*** Constants ***/
export const MAX_WIDTH = "1040px";
export const MIN_WIDTH = "400px";

// MAGIC FONTS
export const headerFont = `'Almendra SC', serif`;
export const bodyFont = `'Almendra', serif`;

//*** Colors ***//
const palette = [
  "#808C77", // forestGreen [0]
  "#D9BE3B", // brightYellow [1]
  "#D9B64E", // goldenYellow [2]
  "#BF5B04", // autumOrange [3]
  "#592202", // burgundyRed [4]
  "#0c0c0b" // darkBrown [5]
];
const alpha = "b2";
// ***New Color Themes for MTG APP*** ///
/* Color Theme Swatches in Hex MTG APP */
// Regular Magic The Gathering theme
// const forestGreen: #808C77; [0]
// const brightYellow: #D9BE3B;[1]
// const goldenYellow: #D9B64E;[2]
// const autumOrange: #BF5B04;[3]
// const burgundyRed: #592202;[4]
// const darkBrown: #0c0c0b;[5]

//*** Named Colors ***//
const attentionColor = palette[1];
const attentionBorder = palette[1];
const subtleBorder = palette[0];
const bgColor = palette[5];
const accent = palette[3];
const darkText = palette[4];
const lightText = palette[1];
const darkBckgrnd = palette[5]; // new color for Named Colors

// in global styles
const headerColor = attentionColor;
const bodyColor = bgColor;
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
// const smallBtn = button`
//   color: palevioletred;
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid ${bgColor};
//   border-radius: 3px;
// `;

// export const buttons = {
//   smallBtn
// };
