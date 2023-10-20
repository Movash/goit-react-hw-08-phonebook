import { NavLink } from "react-router-dom"
import { Nav } from './Header.styled';
import { useSelector } from "react-redux";
import { tokenSelector } from "redux/auth/selectors";
import UserMenu from "components/UserMenu";
import LoginBtn from "components/LoginBtn";

const Header = () => {

  const isToken = useSelector(tokenSelector);

  return (
    <Nav>
      <div>
        <NavLink to="/">Home</NavLink>
        {isToken && <NavLink to="phonebook">Phonebook</NavLink>}
      </div>
      {isToken ? <UserMenu /> : <LoginBtn />}
    </Nav>
  );
}

export default Header