import React from 'react';
import { withScriptjs, withGoogleMap } from 'react-google-maps';
import axios from 'axios';
import styled from 'styled-components';
import AutoCompleteForm from './google-maps/AutoCompleteForm';
import Map from './google-maps/Map';

const WrappedMap = withScriptjs(withGoogleMap(Map))

const EventsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const ListingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 1% 0;
  padding: 1rem;
`

function EventListings() {
  
  return (
    <>
      <EventsContainer>
        <ListingsContainer>
        <AutoCompleteForm />
          <h3>This will be a list of events.</h3>
        </ListingsContainer>
        <WrappedMap 
          isMarkerShown
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_API_KEY}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px`, width: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />} />
      </EventsContainer>
    </>
  )
};

export default EventListings;