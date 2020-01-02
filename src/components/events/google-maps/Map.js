import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, InfoWindow } from 'react-google-maps';

function Map() {
  const [places, setPlaces] = useState([])
  const [selectedPlace, setSelectedPlace] = useState(null)
  console.log(selectedPlace)

  return (
    <GoogleMap 
      defaultZoom={10} 
      defaultCenter={!selectedPlace ? { lat: 41.081444, lng: -81.519005 } : { lat: selectedPlace.lat, lng: selectedPlace.long }}>

      {places.map(place => {
        return (
          <Marker 
            key={place.id} 
            position={{ lat: place.lat, lng: place.long }} 
            onClick={() => {
              setSelectedPlace(place)
            }}
          />
        )
      })}

      {selectedPlace && (
        <InfoWindow position={{ lat: selectedPlace.lat, lng: selectedPlace.long }} onCloseClick={() => setSelectedPlace(null)} >
          <div>
            <h2>{selectedPlace.name}</h2>
            <h3>{selectedPlace.address}</h3>
          </div>
        </InfoWindow>
      )}
    </ GoogleMap>
  )
}

export default Map;