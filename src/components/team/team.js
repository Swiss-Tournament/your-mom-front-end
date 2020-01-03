import React from "react";

import image from "../../assets/team-photo/image.png";

import styled from "styled-components";
import {
  bodyFont,
  colors,
  headerFont,
  MIN_WIDTH,
  MAX_WIDTH
} from "../style-utils/variables";
// styled components.

// page container
const TeamContainer = styled.div`
  background-color: ${colors.bodyColor};
`;
// photo styling.
const TeamPhoto = styled.img`
  width: 100%;
`;
const TeamName = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default function Team() {
  return (
    <TeamContainer>
      <div className='team-wrapper'>
        <TeamName>Bad News Bears Crew</TeamName>
        <TeamPhoto src={image} alt='badnewsbearscrew' className='team-photo' />
      </div>
    </TeamContainer>
  );
}
