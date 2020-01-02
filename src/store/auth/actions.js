import {useCallback} from "react";
import {useDispatch} from "react-redux";
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_END, SIGNUP_START, SIGNUP_SUCCESS, AUTH_ERROR } from "./actionTypes";
import {axiosWithAuth as axios, getToken} from "../../utils/axiosWithAuth";

const useAuthActions = () => {
   const dispatch = useDispatch();
   
   const autoLogin = useCallback(() => {
      dispatch({type: LOGIN_START});

      if (getToken()) {
         axios()
            .get("/auth/user")
            .then(user => {
               dispatch({type: LOGIN_SUCCESS, payload: user});
            })
            .catch(error => {
               console.error(error.response);
               dispatch({type: AUTH_ERROR, payload: error});
            });
      } else {
         dispatch({type: LOGIN_END});
      }
   }, [dispatch]);

   const login = useCallback((credentials) => {
      dispatch({type: LOGIN_START});

      axios()
         .post("/auth/login", credentials)
         .then(response => {
            dispatch({type: LOGIN_SUCCESS, payload: response.data.user});
         })
         .catch(error => {
            console.error(error.response);
            dispatch({type: AUTH_ERROR, payload: error.response});
         });
   }, [dispatch]);

   const register = useCallback((newUser) => {
      dispatch({type: SIGNUP_START});

      axios()
         .post("/auth/register", newUser)
         .then(response => {
            dispatch({type: SIGNUP_SUCCESS, payload: response.data.user});
            // if (history && history.goBack) history.goBack();
         })
         .catch(error => {
            console.error(error.response)
            dispatch({type: AUTH_ERROR, payload: error.response});
         })
   }, [dispatch]);
   
   return {
      autoLogin,
      login,
      register
   }
};

export default useAuthActions;