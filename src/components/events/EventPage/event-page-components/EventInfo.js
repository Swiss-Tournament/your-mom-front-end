import React from 'react';
import {styled} from 'styled-components';

const EventInfo = (props) => {

    return(
        <div>
            <p>Event Organizer:{props.admin}</p>
            <p>Event Date:{props.eventDate}</p>
            <p>Start Time:{props.startTime}</p>
            <p>Location:{props.location}</p>
        </div>
    )
}

export default EventInfo