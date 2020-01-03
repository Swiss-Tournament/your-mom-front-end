import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import styled from 'styled-components';
import axios from 'axios';

function Map({ coordinates, places }) {
  const [selectedPlace, setSelectedPlace] = useState(null)
  const [defaultPosition, setDefaultPosition] = useState({
    lat: null,
    lng: null
  })
  console.log(places)
  
  useEffect(() => {
    setDefaultPosition(coordinates)
  }, [coordinates])
  
  return (
    <GoogleMap 
      defaultZoom={13}
      defaultCenter={{ lat: null, lng: null } ? { lat: 37.7749295, lng: -122.41941550000001 } : { lat: defaultPosition.lat, lng: defaultPosition.lng }}>
      {console.log(defaultPosition)}
      {places.map(place => {
        return (
          <Marker 
            key={place.id} 
            position={{ lat: place.lat, lng: place.lng }} 
            onClick={() => {
              setSelectedPlace(place)
            }}
          />
        )
      })}

      {selectedPlace && (
        <InfoWindow position={{ lat: selectedPlace.lat, lng: selectedPlace.lng }} onCloseClick={() => setSelectedPlace(null)} >
          <Modal>
            <h3>{selectedPlace.name}</h3>
            <p>{selectedPlace.location}</p>
          </Modal>
        </InfoWindow>
      )}
    </ GoogleMap>
  )
}

export default Map;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 6rem;
  width: 100%;
  min-height: 10rem;
  height: 100%;
`