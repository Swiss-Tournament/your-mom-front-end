import React, {useContext, useEffect} from 'react';
import styled from 'styled-components';
import EventInfo from './event-page-components/EventInfo';
import EventRules from './event-page-components/EventRules';
// import EventTimer from './event-page-components/EventTimer';
import {useSelector} from "react-redux";
import ActionsContext from '../../../context/Actions';

const EventPage = ({match: {params: {id}}}) => {
   const {event} = useContext(ActionsContext);

   useEffect(() => {
      event.fetchEventById(id);
   }, []);

   const data = useSelector(state => state.event.event);

	return (
		<>
		{/* <EventTimer /> */}
		<EventWrapper>
			<EventInfo 
                admin="admin" 
                eventDate='eventDate'
                startTime='startTime'
                location='location'/>
			<EventRules format="format" />

			<PlayersAndScores>
				<PlayerList>
					<h1>List of Players</h1>
					<HR />
				</PlayerList>
				<Scoreboard>
					<h1>This will be a scoreboard.</h1>
					<HR />
				</Scoreboard>
			</PlayersAndScores>
		</EventWrapper>
		</>
	);
};

export default EventPage;

const EventWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	margin: 1% auto;
	width: 100%;
	min-height: 90vh;
	height 100%;
`

const PlayersAndScores = styled.div`
	display: flex;
	width: 100%;
	min-height: 20vh;
	height: 100%;
	justify-content: space-evenly;
	align-items: center;
`

const PlayerList = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	min-height: 10vh;
	height: 100%;
	border-right: 2px solid black;
`

const Scoreboard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
`

const HR = styled.hr`
    width: 12%;
    border: .3rem solid black;
    border-radius: 20px;
`