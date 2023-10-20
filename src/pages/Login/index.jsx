import FormLogin from 'Forms/FormLogin';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/thunks';

const Login = () => {
  const dispatch = useDispatch();

  const login = async (body) => {
    try {
      await dispatch(loginThunk(body)).unwrap()
      toast.success('Login successful', {
          duration: 3000,
          position: 'top-right',
        })
    } catch (error) {
      toast.error('Email or password error', {
          duration: 3000,
          position: 'top-right',
        })
    }
  };

  return <FormLogin login={login} />;
};

export default Login;
