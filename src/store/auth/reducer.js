import createReducer from "../createReducer";
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_END, SIGNUP_START, SIGNUP_SUCCESS, AUTH_ERROR } from "./actionTypes";

const NO_ERRORS = null;
const initialState = {
   user: {
      id: -1,
      username: ""
   },
   isAuthorizing: false,
   error: null
};

const start = (state, action) => {
   return {
      ...state,
      user: {
         ...state.user
      },
      isAuthorizing: true,
      error: NO_ERRORS
   }
};
const success = (state, action) => {
   return {
      ...state,
      user: action.payload,
      isAuthorizing: false,
      error: NO_ERRORS
   };
};
const end = (state, action) => {
   return {
      ...state,
      user: {
         ...state.user
      },
      isAuthorizing: false,
      error: NO_ERRORS
   };
};
const error = (state, action) => {
   return {
      ...state,
      user: {
         ...state.user
      },
      isAuthorizing: false,
      error: action.payload
   };
};

export default createReducer(initialState, {
   [LOGIN_START]: start,
   [LOGIN_SUCCESS]: success,
   [LOGIN_END]: end,
   [SIGNUP_START]: start,
   [SIGNUP_SUCCESS]: success,
   [AUTH_ERROR]: error
});