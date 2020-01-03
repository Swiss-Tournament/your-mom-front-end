import React, { useState } from "react";
// import { useSelector } from "react-redux";

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
    axios
      .post(
        `https://magic-the-gathering-tournament.herokuapp.com/api/event/10 , event `
      )
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
      //   lat: 0,
      //   lng: 0,
      public: false
    });
  };

  console.log("Create Event", newEvent);

  return (
    <form onSubmit={handleSubmit}>
      <label>Event Name</label>
      <input
        type="text"
        name="name"
        value={newEvent.name}
        onChange={handleChange}
      />
      <label>Event Date and Time</label>
      <input
        type="text"
        name="date"
        value={newEvent.date}
        onChange={handleChange}
      />
      <label>Event Location</label>
      <input
        type="text"
        name="location"
        value={newEvent.location}
        onChange={handleChange}
      />
      <label>Event Notes</label>
      <input
        type="textarea"
        name="eventNotes"
        value={newEvent.eventNotes}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateEvent;
