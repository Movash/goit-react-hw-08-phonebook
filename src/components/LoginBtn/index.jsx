import { useNavigate } from 'react-router-dom';

const LoginBtn = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('login');
  };

  return (
    <button onClick={handleClick} className="btn btn-dark mx-3">
      Login
    </button>
  );
}

export default LoginBtn