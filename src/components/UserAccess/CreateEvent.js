import React, { useState, useContext } from "react";
import { useSelector } from "react-redux";
import styled from 'styled-components';
import ActionsContext from '../../context/Actions';
import MTG from '../../assets/mtg.jpg'

const CreateEvent = () => {
  // const error = useSelector(state => state.event.error)
  const user = useSelector(state => state.auth.user)
  console.log(user)

  const { event } = useContext(ActionsContext);

  // const user = useSelector(state => state.auth.user);
  const [newEvent, setNewEvent] = useState({
    name: " ",
    date: " ",
    location: " ",
    public: false,
    eventNotes: " ",
    players: "",
    gameFormat: ""
  });

  const handleChange = e => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    event.createEvent(user.id, newEvent)
    setNewEvent({
      name: " ",
      date: " ",
      location: " ",
      eventNotes: " ",
      players: "",
      gameFormat: "",
      public: false
    });
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <h1>Create an Event</h1>
        <HR />
        <label>Event Name</label>
        <Input
          type="text"
          name="name"
          placeholder="Event Name"
          value={newEvent.name}
          onChange={handleChange}
          required
        />
        <label>Event Date and Time</label>
        <Input
          type="text"
          name="date"
          placeholder="Event Date and Time"
          value={newEvent.date}
          onChange={handleChange}
          required
        />
        <label>Event Location</label>
        <Input
          type="text"
          name="location"
          placeholder="Event Location"
          value={newEvent.location}
          onChange={handleChange}
          required
        />
        <label>Event Notes</label>
        <Input
          type="textarea"
          name="eventNotes"
          placeholder="Event Notes"
          value={newEvent.eventNotes}
          onChange={handleChange}
        />
        <label>Max Players</label>
        <Input
          type="text"
          name="players"
          value={newEvent.players}
          onChange={handleChange}
          required
        />

        <Select name="gameFormat" onChange={handleChange} required>
          <option value="" disabled>Choose Format...</option>
          <option value="Standard">Standard</option>
          <option value="Modern">Modern</option>
          <option value="Legacy">Legacy</option>
          <option value="Vintage">Vintage</option>
          <option value="Block">Block</option>
          <option value="Pauper">Pauper</option>
          <option value="Pioneer">Pioneer</option>
        </Select>

        <Button type="submit">SUBMIT</Button>
      </Form>
      <ImageContainer />
    </FormContainer>
  );
};

export default CreateEvent;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 5% 1%;
  width: 40%;
  min-height: 500px;
  height: 100%;
  background: white;
`

const Input = styled.input`
  max-width: 50rem;
  width: 100%;
  min-height: 4rem;
  height: 100%;
  padding: 0 2%;
  margin: 1.5% auto;
  font-size: 1.4rem;

  &:focus {
    outline: none;
  }
`

const Select = styled.select`
  max-width: 50rem;
  width: 100%;
  min-height: 4rem;
  height: 100%;
  padding: 1%;
  margin: 1.5% auto;
  font-size: 1.4rem;

  
  &:focus {
    outline: none;
  }
`

const Button = styled.button`
  max-width: 35rem;
  width: 100%;
  min-height: 4rem;
  height: 100%;
  padding: 1%;
  margin: 1% auto;
  font-size: 1.6rem;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  background: #D9B64E;
  cursor: pointer;

  &:hover {
    background: #D9BE3B;
    transform: scale(1.03)
  }
`

const HR = styled.hr`
  width: 8%;
  border: .3rem solid black;
  border-radius: 20px;
`

const ImageContainer = styled.div`
  width: 60%;
  background-image: url(${MTG});
  background-size: 115%;
  background-repeat: no-repeat;
  object-fit: contain;
`

const FormContainer = styled.div`
  display: flex;
  height: 100vh;
`