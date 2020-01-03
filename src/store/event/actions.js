import {useCallback} from "react";
import {useDispatch} from "react-redux";
import axios from 'axios';
import {FETCH_EVENT_START, FETCH_EVENT_SUCCESS, CREATE_EVENT_START, CREATE_EVENT_SUCCESS, EVENT_ERROR, BEGIN_MATCH_SUCCESS} from "./actionTypes";
import {axiosWithAuth} from "../../utils/axiosWithAuth"

const useEventActions = () => {
   const dispatch = useDispatch();

   const fetchEventById = useCallback((eventId) => {
      dispatch({type: FETCH_EVENT_START});

      axiosWithAuth()
         .get(`/event/${eventId}`)
         .then(({data}) => {
            console.log("Current Event: ", data);
            dispatch({type: FETCH_EVENT_SUCCESS, payload: data});
         })
         .catch(error => {
            console.error(error);
            dispatch({type: EVENT_ERROR, payload: error});
         })

   }, [dispatch]);

   const createEvent = useCallback((userId, eventData) => {
      dispatch({type: CREATE_EVENT_START});
      let newEvent = {...eventData}
      const address = eventData.location.replace(/\s+/g, "+");
      const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_API_KEY}`;

      axios.get(url)
         .then(response => {
            console.log("Google API success\n", response);

            newEvent.lat = response.data.results[0].geometry.location.lat;
            newEvent.lng = response.data.results[0].geometry.location.lng;

            console.log("Gunna send this: ", newEvent);
            return axiosWithAuth().post(`/event/${userId}`, eventData)
         })
         .then(({data}) => {
            console.log("New Event Created: ", data);
            dispatch({type: CREATE_EVENT_SUCCESS, payload: data})
         })
         .catch(error => {
            console.error(error);
            dispatch({type: EVENT_ERROR, payload: error});
         })
   }, [dispatch]);

   // const startEvent = useCallback((players, eventId) => {
   //    dispatch({type: BEGIN_MATCH_START});

   //    //make the pairings
   //    let pairings = [];
   //    let indecies = players.map((item, idx) => idx);

   //    for (let i = 0; i < Math.ceil(players.length/2); i++ ) {
   //       let randIdx = Math.floor(Math.random * indecies.length);
   //       const player1_id = indecies[randIdx];
   //       let player2_id = -1;

   //       indecies.splice(randIdx, 1);
   //       if (indecies.length > 0) {
   //          randIdx = Math.floor(Math.random * indecies.length);
   //          player2_id = indecies[Math.floor(Math.random * indecies.length)];
   //          indecies.splice(randIdx, 1);
   //       }

   //       pairings.push({
   //          player1_id,
   //          player2_id
   //       });
   //    }

      // console.log(pairings);
      // axiosWithAuth()
      //    .post(`/event/${eventId}/pairings`)
      //    .then(({data}) => {
      //       dispatch({type: BEGIN_MATCH_SUCCESS, payload: pairings});
      //    })
      //    .catch
      
   // }, [dispatch]);

   return {
      fetchEventById,
      createEvent,
      // startEvent
   };
}

export default useEventActions;