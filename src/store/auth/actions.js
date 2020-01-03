import {useCallback} from "react";
import {useDispatch} from "react-redux";
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_END, SIGNUP_START, SIGNUP_SUCCESS, AUTH_ERROR } from "./actionTypes";
import {axiosWithAuth, getToken, setToken} from "../../utils/axiosWithAuth";
import axios from "axios";

const useAuthActions = () => {
   const dispatch = useDispatch();
   const authSuccess = ({data: {message, token}}) => {
      console.log(message);
      setToken(token);
      
      return axiosWithAuth(token).get("/auth/user");
   };
   const updateUser = ({data: {id, username}}) => {
      dispatch({type: LOGIN_SUCCESS, payload: {id, username}});
      return Promise.resolve();
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

   const login = useCallback((credentials, history) => {
      dispatch({type: LOGIN_START});

      axiosWithAuth()
         .post("/auth/login", credentials)
         .then(authSuccess)
         .then(updateUser)
         .then(() => {
            if (history) history.push("/")
          })
         .catch(error => {
            console.error(error.response);
            dispatch({type: AUTH_ERROR, payload: error.response});
         });
   }, [dispatch]);

   const register = useCallback((newUser, history) => {
      dispatch({type: SIGNUP_START});
      let newUserExtended = {...newUser};

      if (newUserExtended.location) {
         console.log("User has a location");
         const address = newUser.location.replace(/\s+/g, "+");
         const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_API_KEY}`;
         // const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyDtF2pl_Eiizfpicdir5t49-PuP06mdqXA`;
         console.log("the url: ", url);

         //https://maps.googleapis.com/maps/api/geocode/json?address=18825+N+3rd+Drive&key=AIzaSyDtF2pl_Eiizfpicdir5t49-PuP06mdqXA

         axios.get(url)
         // axios.get("https://magic-the-gathering-tournament.herokuapp.com/api/event/location")
            // .then(response => {
            //    console.log(response);
            // })
            .then(response => {
               console.log("Google API success\n", response);

               newUserExtended.lat = response.data.results[0].geometry.location.lat;
               newUserExtended.lng = response.data.results[0].geometry.location.lng;

               console.log("Gunna send this: ", newUserExtended);
               return axiosWithAuth().post("/auth/register", newUserExtended)
            })
            .then(({data: {message, token}}) => {
               console.log(message);
               if (window.alert('Thank you for registering. Please login to your new account.'));
               if (history) history.push("/login");
            })
            // .then(authSuccess)
            // .then(({data: {id, username}}) => {
            //    dispatch({type: SIGNUP_SUCCESS, payload: {id, username}});
            // })
            .catch(error => {
               console.error(error);
               dispatch({type: AUTH_ERROR, payload: error});
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