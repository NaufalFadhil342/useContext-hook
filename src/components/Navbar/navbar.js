import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../helper/context';
import './navbar.css';

export const Navbar = () => {
  const { loggedIn } = useContext(Context);

  return (
    <header className="navbar">
      <nav>
        <Link to="/">Home</Link>
        <Link to="profile">Profile</Link>
        <Link to="login">{loggedIn ? 'Logout' : 'Login'}</Link>
      </nav>
    </header>
  );
};
