import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const CreateEvent = () => {
  const { register, handleSubmit, watch, errors } = useForm({
    validationSchema: CreateEventSchema
  });
  const onSubmit = data => {
    console.log(data);
  };

  console.log(watch("name"));
  console.log(watch("name"));
  console.log(watch("name"));
  console.log(watch("name"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Create Event</h1>

      <label htmlFor="name">Event Name</label>
      <input name="name" id="name" ref={register} />
      {errors.name && <p className="errors">{errors.name.message}</p>}
      <label htmlFor="date">Event Date and Time:</label>
      <input name="date" id="date" ref={register} />
      {errors.date && <p className="errors">{errors.date.message}</p>}

      <label htmlFor="location">Event Location:</label>
      <input type="location" name="location" id="location" ref={register} />
      {errors.location && <p className="errors">{errors.location.message}</p>}

      <label htmlFor="eventNotes">Event details</label>
      <input
        type="eventNotes"
        name="eventNotes"
        id="eventNotes"
        ref={register}
      />
      {errors.eventNotes && (
        <p className="errors">{errors.eventNotes.message}</p>
      )}

      <input type="submit" />
    </form>
  );
};

const CreateEventSchema = yup.object().shape({
  name: yup
    .string()
    .required("This is a required field.")
    .min(3),
  date: yup
    .string()
    // .date("Enter a valid date.")
    .required("Event Date is required."),

  location: yup
    .string()
    .required("Event Location is required.")
    .min(8)
    .max(20),
  eventNotes: yup.string().min(3)
});

export default CreateEvent;
