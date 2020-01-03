import {useCallback} from "react";
import {useDispatch} from "react-redux";
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_END, SIGNUP_START, SIGNUP_SUCCESS, AUTH_ERROR } from "./actionTypes";
import {axiosWithAuth, axios, getToken, setToken} from "../../utils/axiosWithAuth";

const useAuthActions = () => {
   const dispatch = useDispatch();
   const authSuccess = ({data: {message, token}}) => {
      console.log(message);
      setToken(token);
      
      return axiosWithAuth(token).get("/auth/user");
   };
   const updateUser = ({data: {id, username}}) => {
      dispatch({type: LOGIN_SUCCESS, payload: {id, username}});
   };
   
   const autoLogin = useCallback(() => {
      dispatch({type: LOGIN_START});

      if (getToken()) {
         axiosWithAuth()
            .get("/auth/user")
            .then(updateUser)
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

      axiosWithAuth()
         .post("/auth/login", credentials)
         .then(authSuccess)
         .then(updateUser)
         .catch(error => {
            console.error(error.response);
            dispatch({type: AUTH_ERROR, payload: error.response});
         });
   }, [dispatch]);

   const register = useCallback((newUser) => {
      dispatch({type: SIGNUP_START});
      let newUserExtended = {...newUser};

      if (newUserExtended.location) {
         //https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=REACT_APP_API_KEY
         const address = newUser.location.replace(/\s+/g, "+");
         axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_API_KEY}`)
            .then(([result]) => {
               newUserExtended.lat = result.geometry.location.lat;
               newUserExtended.lng = result.geometry.location.lng;

               return axiosWithAuth().post("/auth/register", newUserExtended)
            })
            .then(authSuccess)
            .then(({data: {id, username}}) => {
               dispatch({type: SIGNUP_SUCCESS, payload: {id, username}});
            })
            .catch(error => {
               console.error(error.response)
               dispatch({type: AUTH_ERROR, payload: error.response});
            })
      } else {
         axiosWithAuth()
            .post("/auth/register", newUserExtended)
            .then(authSuccess)
               .then(({data: {id, username}}) => {
                  dispatch({type: SIGNUP_SUCCESS, payload: {id, username}});
               })
            .catch(error => {
               console.error(error.response)
               dispatch({type: AUTH_ERROR, payload: error.response});
            })
      }
   }, [dispatch]);
   
   return {
      autoLogin,
      login,
      register
   }
};

export default useAuthActions;