import createReducer from "../createReducer";
import { FETCH_EVENT_START, FETCH_EVENT_SUCCESS, CREATE_EVENT_START, CREATE_EVENT_SUCCESS, EVENT_ERROR } from "./actionTypes";

const NO_ERROR = null;
const initialState = {
   event: {
      id: -1,
      name: "",
      location: {
         address: "",
         lat: -1,
         lng: -1
      },
      public: false,
      complete: false,
      date: "",
      gameFormat: "",
      eventNotes: "",
      maxPlayers: -1,
      roundEndTime: "",
      currentRound: 0,
      maxRounds: -1,
      admins: [],
      players: [

      ],
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
      ],
      pairings: null
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
      isFetchingData: false,
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