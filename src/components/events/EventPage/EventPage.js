import React from 'react';
import EventInfo from './event-page-components/EventInfo';
import EventRules from './event-page-components/EventRules';

const EventPage = () => {
	return (
		<div className="event-info-page">
			<EventInfo 
                admin="admin" 
                eventDate='eventDate'
                startTime='startTime'
                location='location'/>
			<EventRules format="format" />
		</div>
	);
};

export default EventPage;
