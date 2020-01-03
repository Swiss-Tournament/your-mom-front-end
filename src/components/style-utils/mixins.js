//This adds mixin-like functionality to styled-components
import { css } from "styled-components";

//helper functions

//mixin without parameters
//*** Auto-Scale ***//
export const autoScale = css`
  height: auto;
  width: auto;
  max-width: 100%;
`;

//mixin with parameters
//*** Custom-Layout ***//
export const customLayout = (
  justify,
  align = "flex-start",
  direction = "row",
  wrap = "nowrap"
) => `
   display: flex;
   flex-flow: ${direction} ${wrap};
   justify-content: ${justify};
   align-items: ${align};
`;

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

// export const layout = css`
//    display: flex;
//    flex-direction: ${props => setCssFromProps(props, "direction", "row")};
//    flex-wrap: ${props => setCssFromProps(props, "wrap", "nowrap")};
//    justify-content: ${props => setCssFromProps(props, "justify", "flex-start")};
//    align-items: ${props => setCssFromProps(props, "align", "flex-start")};
// `;
