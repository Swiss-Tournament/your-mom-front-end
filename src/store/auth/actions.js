import {useCallback} from "react";
import {useDispatch} from "react-redux";
import { LOGIN_START, LOGIN_SUCCESS, AUTH_ERROR } from "./actionTypes";
//import axios helper

export default useAuthActions = () => {
   const dispatch = useDispatch();
   
   // const autoLogin = useCallback(() => {}, [dispatch]);

   const login = useCallback((credentials) => {
      dispatch({type: LOGIN_START});

      //axios call to backend
      axios.post("some url", credentials)
         .then(response => {
            dispatch({type: LOGIN_SUCCESS, payload: response});
         })
         .catch(error => {
            console.error(error.response);
            dispatch({type: AUTH_ERROR, payload: error});
         });
   }, [dispatch]);
   
   return {
      // autoLogin,
      login
   }
};