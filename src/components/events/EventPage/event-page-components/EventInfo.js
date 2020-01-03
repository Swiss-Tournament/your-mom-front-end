import React from "react";
import styled from "styled-components";
import Moment from "moment";

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
      <LocationWrapper>
        <Paragraph>Event Date: {newDate}</Paragraph>
        <Paragraph>Start Time: {newTime}</Paragraph>
        <Paragraph>Address: {props.data.location.address}</Paragraph>
      </LocationWrapper>

      {/* <OrganizerWrapper>
                <Paragraph>Event Organizer: Judge Awesome</Paragraph>
                <Paragraph>Event 2nd: Commander 2nd</Paragraph>
                <Paragraph>Name: Brenda's French Soul Food</Paragraph>
            </OrganizerWrapper>
            <LocationWrapper>
                <Paragraph>Event Date: Jan. 17, 2020</Paragraph>
                <Paragraph>Start Time: 1:00PM EST</Paragraph>
                <Paragraph>Address: 652 Polk St, San Francisco, CA 94102</Paragraph>
            </LocationWrapper> */}
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
