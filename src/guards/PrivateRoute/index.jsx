import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { tokenSelector } from 'redux/auth/selectors';

const PrivateRoute = ({children}) => {

  const isToken = useSelector(tokenSelector);
  const location = useLocation()

  return isToken ? children : <Navigate to='/login' state={location} />
}

export default PrivateRoute