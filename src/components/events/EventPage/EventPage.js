import React, {useContext, useEffect} from 'react';
import {useSelector} from "react-redux";
import EventInfo from './event-page-components/EventInfo';
import EventRules from './event-page-components/EventRules';
import ActionsContext from '../../../context/Actions';

const EventPage = ({match: {params: {id}}}) => {
   const {event} = useContext(ActionsContext);

   useEffect(() => {
      event.fetchEventById(id);
   }, []);

   const data = useSelector(state => state.event.event);

	return (
		<div className="event-info-page">
			<EventInfo 
                admin="admin" 
                eventDate='eventDate'
                startTime='startTime'
                location={data.location.address}/>
			<EventRules format={data.gameFormat} />
		</div>
	);
};

export default EventPage;
