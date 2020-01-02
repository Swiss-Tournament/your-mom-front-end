import useAuthActions from "./auth/actions";

export const useActions = () => {
   const auth = useAuthActions(); 

   return {
      auth
   }
};