import React, { useState, useEffect } from 'react';
import { withScriptjs, withGoogleMap } from 'react-google-maps';
import axios from 'axios';
import styled from 'styled-components';
import { colors } from '../style-utils/variables';
import AutoCompleteForm from './google-maps/AutoCompleteForm';
import Map from './google-maps/Map';
import Listing from './Listing';

const WrappedMap = withScriptjs(withGoogleMap(Map))

function EventListings() {
  const [places, setPlaces] = useState([])
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null
  });

  useEffect(() => {
    axios
      .get('https://magic-the-gathering-tournament.herokuapp.com/api/event/location')
      .then(res => {
        setPlaces(res.data)
      })
      .catch(err => {
        console.log(err, 'Did not get the data.')
      })
  }, [])
  
  return (
    <>
      <EventsContainer>
        <ListingsContainer>
        <AutoCompleteForm address={address} setAddress={setAddress} coordinates={coordinates} setCoordinates={setCoordinates}/>
          <Listing places={places} />
        </ListingsContainer>
        <WrappedMap 
          isMarkerShown
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_API_KEY}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `80vh`, width: `100%`, margin: `5%` }} />}
          mapElement={<div style={{ height: `100%` }} />} 
          coordinates={coordinates}
          places={places} />
      </EventsContainer>
    </>
  )
};

export default EventListings;

const EventsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
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