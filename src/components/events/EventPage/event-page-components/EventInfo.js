import React from "react";
import styled from "styled-components";
import Moment from "moment";
import EventTimer from './EventTimer';

const EventInfo = props => {
  const newDate = Moment(`${props.data.date}`).format("MM DD, YYYY ");
  const newTime = Moment(`${props.data.date}`).format(" HH:mm:ss");
  return (
    <InfoWrapper>
      <OrganizerWrapper>
        <Paragraph>Event Organizer: {props.data.admins[0]} </Paragraph>
        <Paragraph>Event 2nd: {props.data.admins[1]} </Paragraph>
        <Paragraph>Name: {props.data.name}</Paragraph>
      </OrganizerWrapper>
      <EventTimer />
      <LocationWrapper>
        <Paragraph>Event Date: {newDate}</Paragraph>
        <Paragraph>Start Time: {newTime}</Paragraph>
        <Paragraph>Address: {props.data.location.address}</Paragraph>
      </LocationWrapper>
    </InfoWrapper>
  );
};

export default EventInfo;

const InfoWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const OrganizerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 48%;
  margin: 1% auto;
  padding: 2%;
`;

const LocationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 48%;
  margin: 1% auto;
  padding: 2%;
`;

const Paragraph = styled.p`
  font-size: 1.6rem;
  margin: 1% auto;
  padding: none;
`;
