import React, { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useThemeContext } from './../../hooks/useThemeContext';
import { useAuthenticate } from "../../hooks/useAuthenticate";
import { AuthContext } from "../../context/AuthContext";
import ThemeSwitch from "../switch/Themeswitch";

export default function Navbar() {
  const { user } = useContext(AuthContext)
  const { theme } = useThemeContext()
  const { logOut } = useAuthenticate()

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Ravi</h1>
        </Link>
        <nav>
          <Link to="/">
            <h4>Home</h4>
          </Link>
          <Link to="/create">
            <h4>Create Post</h4>
          </Link>
          {!user ?
           <>
            <Link to="/login">
              <h4>Login</h4>
            </Link>
            <Link to="/signup">
              <h4>Sign Up</h4>
            </Link>
          </> :
            <button className="btn btn-primary" onClick={logOut}>LogOut</button>
          }
          {/* <Link to="/trial">
              <h4>Trial Page</h4>
            </Link>

            <Link to="/profile">
              <h4>Profile Page</h4>
            </Link> */}
             <ThemeSwitch />
        </nav>
      </div>
    </header>
  );
}
