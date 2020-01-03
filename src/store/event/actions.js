import {useCallback} from "react";
import {useDispatch} from "react-redux";
import {FETCH_EVENT_START, FETCH_EVENT_SUCCESS, CREATE_EVENT_START, CREATE_EVENT_SUCCESS, EVENT_ERROR} from "./actionTypes";
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

      axiosWithAuth()
         .post(`/event/${userId}`, eventData)
         .then(({data}) => {
            console.log("New Event Created: ", data);
            dispatch({type: CREATE_EVENT_SUCCESS, payload: data})
         })
         .catch(error => {
            console.error(error);
            dispatch({type: EVENT_ERROR, payload: error});
         })
   }, [dispatch]);

   return {
      fetchEventById,
      createEvent
   };
}

export default useEventActions;