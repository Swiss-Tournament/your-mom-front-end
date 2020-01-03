import createReducer from "../createReducer";
import { FETCH_EVENT_START, FETCH_EVENT_SUCCESS, CREATE_EVENT_START, CREATE_EVENT_SUCCESS, EVENT_ERROR } from "./actionTypes";

const NO_ERROR = null;
const initialState = {
   event: {
      admins: [],
      date: null,
      location: {
         address: "",
         lat: -1,
         lng: -1
      },
      format: "",
      players: [],
      currentRound: 0,
      scoreBoard: [
         /*
         {
            name: "",
            points: -1,
            omw: -1.0,
            gw: -1.0,
            ogw: -1.0
         }
         */   
      ]
   },
   isFetchingData: false,
   error: NO_ERROR
};

const start = (state, action) => {
   return {
      ...state,
      event: {
         ...state.event,
         admins: [...state.event.admins],
         location: {...state.event.location},
         players: [...state.event.players],
         scoreBoard: [...state.event.scoreBoard]
      },
      isFetchingData: true,
      error: NO_ERROR
   };
}
;
const success = (state, action) => {
   return {
      ...state,
      event: action.payload,
      isFetchingData: false,
      error: NO_ERROR
   };
};

const error = (state, action) => {
   return {
      ...state,
      event: {
         ...state.event,
         admins: [...state.event.admins],
         location: {...state.event.location},
         players: [...state.event.players],
         scoreBoard: [...state.event.scoreBoard]
      },
      isFetchingData: true,
      error: action.payload
   };
};

export default createReducer(initialState, {
   [FETCH_EVENT_START]: start,
   [FETCH_EVENT_SUCCESS]: success,
   [CREATE_EVENT_START]: start,
   [CREATE_EVENT_SUCCESS]: success,
   [EVENT_ERROR]: error
});