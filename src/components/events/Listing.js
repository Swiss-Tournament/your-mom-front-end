import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Moment from "moment";

function Listing({ places }) {
  console.log(places);
  return (
    <>
      {places.map(place => {
        const newDate = Moment(`${place.date}`).format(
          "MM DD, YYYY - HH:mm:ss"
        );
        return (
          <GameListing key={place.id}>
            <Heading>{place.name}</Heading>
            <Paragraph>{place.location}</Paragraph>
            <Paragraph>Date: {newDate}</Paragraph>
            <Link to={`/events/${place.id}`}>
              <EventLink>
                Join the Event!
              </EventLink>
            </Link>
          </GameListing>
        );
      })}
    </>
  );
}

export default Listing;

const GameListing = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  padding: 1%;
  margin: 1% auto;
  border: none;
  border-radius: 0.6rem;
  box-shadow: 1px 3px 5px;
  min-height: 7rem;
  height: 100%;
`;

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  padding: none;
`;

const Paragraph = styled.p`
  font-size: 1.6rem;
  margin: 1% auto;
  padding: none;
`;

const EventLink = styled.h3`
  text-decoration: none;
  color: blue;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }
`;
