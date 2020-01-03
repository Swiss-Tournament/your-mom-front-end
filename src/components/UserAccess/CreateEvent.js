import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const CreateEvent = () => {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: CreateEventSchema
  });
  const onSubmit = data => {
    console.log("Create Event", data);
  };

  return (
    <form className="create-event" onSubmit={handleSubmit(onSubmit)}>
      <h1>Create Event</h1>
      <label htmlFor="organizerName">Organizer Name:</label>
      <input name="organizerName" id="organizerName" ref={register} />
      {errors.organizerName && (
        <p className="errors">{errors.organizerName.message}</p>
      )}
      <label htmlFor="organizerTwoName">Organizer Two Name:</label>
      <input name="organizerTwoName" id="organizerTwoName" ref={register} />
      {errors.organizerTwoName && (
        <p className="errors">{errors.organizerTwoName.message}</p>
      )}
      <label htmlFor="eventDate">Event Date:</label>
      <input name="eventDate" id="eventDate" ref={register} />
      {errors.eventDate && <p className="errors">{errors.eventDate.message}</p>}
      <label htmlFor="eventTime">Event Time</label>
      <input name="eventTime" id="eventTime" ref={register} />
      {errors.eventTime && <p className="errors">{errors.eventTime.message}</p>}
      <label htmlFor="eventLocation">Event Location:</label>
      <input
        type="eventLocation"
        name="eventLocation"
        id="eventLocation"
        ref={register}
      />
      {errors.eventLocation && (
        <p className="errors">{errors.eventLocation.message}</p>
      )}

      <label htmlFor="eventName">Event Name</label>
      <input type="eventName" name="eventName" id="eventName" ref={register} />
      {errors.eventName && <p className="errors">{errors.eventName.message}</p>}

      <label htmlFor="eventDetails">Event Details</label>
      <input
        type="eventDetails"
        name="eventDetails"
        id="eventDetails"
        ref={register}
      />
      {errors.eventDetails && (
        <p className="errors">{errors.eventDetails.message}</p>
      )}

      <input type="submit" />
    </form>
  );
};

const CreateEventSchema = yup.object().shape({
  organizerName: yup
    .string()
    .required("This is a required field.")
    .min(3),
  organizerTwoName: yup
    .string()
    .required("This is a required field.")
    .min(3),
  eventDate: yup
    .string()
    // .eventDate("Enter a valid eventDate.")
    .required("Event Date is required."),
  eventTime: yup.string().required("Event Time is required."),
  eventLocation: yup
    .string()
    .required("Event Location is required.")
    .min(8)
    .max(20),
  eventName: yup
    .string()
    .required("Event Location is required..")
    .min(3),
  eventDetails: yup.string().min(3)
});

export default CreateEvent;
