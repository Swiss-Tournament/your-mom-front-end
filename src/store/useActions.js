import useAuthActions from "./auth/actions";

export default () => {
   const auth = useAuthActions(); 

   return {
      auth
   }
};