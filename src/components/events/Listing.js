import React from 'react';
import styled from 'styled-components';

const GameListing = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  padding: 1%;
  margin: 1% auto;
  border: none;
  border-radius: .6rem;
  box-shadow: 1px 3px 5px;
  min-height: 10rem;
  height: 100%;
`

const Heading = styled.h2`
  font-size: 1.6rem;
  font-weight: 600;
  padding: none;
`

const Paragraph = styled.p`
  font-size: 1.4rem;
  padding: none;
`

const EventLink = styled.a`
  text-decoration: none;
  color: blue;
  cursor: pointer;

  &:hover {
   transform: scale(1.02);
  }
`

function Listing() {
  return (
    <GameListing>
      <Heading>Name of Place</Heading>
      <Paragraph>Address of Event</Paragraph>
      <EventLink to="/">
        I am a link.
      </EventLink>
    </GameListing>
  )
}

export default Listing;