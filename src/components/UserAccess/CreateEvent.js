import React, { useState } from "react";
// import { useSelector } from "react-redux";
import styled from 'styled-components';
import axios from "axios";

const CreateEvent = () => {
  // Trued to use user in URl but did not work.

  //   const user = useSelector(state => state.auth.user);
  const [newEvent, setNewEvent] = useState({
    name: " ",
    date: " ",
    location: " ",
    // lat: 0,
    // lng: 0,
    public: false,
    eventNotes: " "
  });

  const handleChange = e => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post(`https://magic-the-gathering-tournament.herokuapp.com/api/event/ , event`)
      .then(res => {
        console.log("res", res);
      })
      .catch(err => {
        console.log(err);
      });
    setNewEvent({
      name: " ",
      date: " ",
      location: " ",
      eventNotes: " ",
      public: false
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Create an Event</h1>
      <HR />
      <label>Event Name</label>
      <Input
        type="text"
        name="name"
        value={newEvent.name}
        onChange={handleChange}
        required
      />
      <label>Event Date and Time</label>
      <Input
        type="text"
        name="date"
        value={newEvent.date}
        onChange={handleChange}
        required
      />
      <label>Event Location</label>
      <Input
        type="text"
        name="location"
        value={newEvent.location}
        onChange={handleChange}
        required
      />
      <label>Event Notes</label>
      <Input
        type="textarea"
        name="eventNotes"
        value={newEvent.eventNotes}
        onChange={handleChange}
      />

      <label>Max Players</label>
      <Input
        type="text"
        name="eventPlayers"
        value={newEvent.players}
        onChange={handleChange}
        required
      />

      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default CreateEvent;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 5% auto;
    padding: 5% 1%;
    width: 30%;
    min-height: 500px;
    height: 100%;
    border: none;
    border-radius: 20px;
    box-shadow: 1px 3px 5px;
`

const Input = styled.input`
    max-width: 40rem;
    width: 100%;
    min-height: 4rem;
    height: 100%;
    padding: 1%;
    margin: 1.5% auto;
    font-size: 1.4rem;
`

const Button = styled.button`
    max-width: 35rem;
    width: 100%;
    min-height: 4rem;
    height: 100%;
    padding: 1%;
    margin: 1% auto;
    font-size: 1.3rem;
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
