import React, { useState } from "react";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import styled from 'styled-components';

function AutoCompleteForm() {
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null
  });

  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  };

  const Input = styled.input`
    width: 24rem;
    height: 2.5rem;
    margin: 1% auto;
    padding-left: 3%;
    border-radius: .6rem;
    border: 1px black solid;

    &:focus {
      outline: none;
      background-color: #C7E0FC;
    }
  `

  const SuggestionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: 1% auto;
    cursor: pointer;
  `

  return (
    <>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <>
            <Input {...getInputProps({ placeholder: "Type address" })} /> 

            <SuggestionContainer>
              {loading ? <div>...loading</div> : null}

              {suggestions.map(suggestion => {
                const style = {
                  backgroundColor: suggestion.active ? "#C7E0FC" : "#fff"
                };

                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </SuggestionContainer>
          </>
        )}
      </PlacesAutocomplete>
    </>
  );
}

export default AutoCompleteForm;