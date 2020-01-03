import useAuthActions from "./auth/actions";
import useEventActions from "./event/actions";

export default () => {
   const auth = useAuthActions();
   const event = useEventActions();

   return {
      auth,
      event
   }
};