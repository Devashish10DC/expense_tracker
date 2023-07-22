import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useAuth } from "../Context/AuthContext";
import { useHistory } from "react-router";

const Header = () => {
  const { logout } = useAuth();
  const [Loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      await logout();
      history.push("/login");
    } catch (err) {
      console.log(err.message);
    }
    setLoading(false);
  }

  return (
    <header className="header">
      <div>
        <Link className="logo" to="/">
          Logo
        </Link>
      </div>
      <nav className="link">
        <ul className="ul">
          <li></li>
          <div>
            <Link to="/profile">Profile</Link>
          </div>
          &nbsp;&nbsp;&nbsp;
          <button className="logout" onClick={handleSubmit}>
            LogOut
          </button>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
