import React from "react";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import styled from 'styled-components';

function AutoCompleteForm({ address, setAddress, coordinates, setCoordinates }) {
  
  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  };

  const inputStyles = {
    width: '24rem',
    height: '2.5rem',
    margin: '1% auto',
    paddingLeft: '3%',
    border: '1px black solid',
  }

  const SuggestionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 75%;
    min-height: 10rem;
    height: 100%;
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
      
            <input type="text" style={inputStyles} {...getInputProps({ placeholder: "Type address" })} /> 

            <SuggestionContainer>
              {loading ? <div>...loading</div> : null}

              {suggestions.map(suggestion => {
                const style = {
                  backgroundColor: suggestion.active ? "#C7E0FC" : "#fff", margin:`0.5% 0`, padding: `0 1%`
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