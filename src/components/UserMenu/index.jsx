import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from 'redux/auth/selectors';
import { logoutThunk } from 'redux/auth/thunks';

const UserMenu = () => {

  const user = useSelector(userSelector);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logoutThunk());
  }

  const userName = user ? user.name : 'Guest';

  return (
    <div className="fw-semibold fs-5 d-flex flex-row align-items-center">
      <p>
        Welcome, <b>{userName}</b>
      </p>
      <button onClick={handleClick} className="btn btn-dark mx-3">
        Logout
      </button>
    </div>
  );
}

export default UserMenu