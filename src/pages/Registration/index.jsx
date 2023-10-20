import FormRegistration from "Forms/FormRegistration";
import { useDispatch } from "react-redux";
import { registrstionThunk } from "redux/auth/thunks";

const Registration = () => {

  const dispatch = useDispatch()

  const registration = (body) => {
    dispatch(registrstionThunk(body));
  }

  return (
    <FormRegistration registration={registration}/>
  );
};

export default Registration;