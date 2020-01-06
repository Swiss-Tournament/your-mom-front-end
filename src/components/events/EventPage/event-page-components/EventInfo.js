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
        <EventInfoWrapper>
          <Paragraph>Name:</Paragraph>
          <Paragraph>Event Organizer:</Paragraph>
          <Paragraph>Event 2nd:</Paragraph>
        </EventInfoWrapper>
        <EventDataWrapper>
          <Paragraph><Span>{props.data.name}</Span></Paragraph>
          <Paragraph><Span>{props.data.admins[0]}</Span> </Paragraph>
          <Paragraph><Span>{props.data.admins[1]}</Span> </Paragraph>
        </EventDataWrapper>
      </OrganizerWrapper>
      <EventTimer />
      <LocationWrapper>
        <EventInfoWrapper>
          <Paragraph>Event Date:</Paragraph>
          <Paragraph>Start Time:</Paragraph>
          <Paragraph>Address:</Paragraph>
        </EventInfoWrapper>
        <EventDataWrapper>
          <Paragraph><Span>{newDate}</Span></Paragraph>
          <Paragraph><Span>{newTime}</Span></Paragraph>
          <Paragraph><Span>{props.data.location.address}</Span></Paragraph>
        </EventDataWrapper>
      </LocationWrapper>
    </InfoWrapper>
  );
};

export default EventInfo;

const InfoWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const EventInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`

const EventDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const OrganizerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 1% auto;
  padding: 1%;
`;

const LocationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 1% auto;
  padding: 1%;
`;

const Paragraph = styled.p`
  font-size: 1.6rem;
  letter-spacing: 1.2;
  padding: none;
  margin: 2% 0;
`;

const Span = styled.span`
  color: blue;
`