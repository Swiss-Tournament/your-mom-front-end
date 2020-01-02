import React from "react";
import { NavLink } from "react-router-dom";
import { getUserToken } from "./routes/userAPI";

const Nav = () => {
  const UserSignedIn = getUserToken();
  return (
    <div className="nav-bar">
      <nav>
        <h1>Your Mama</h1>
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/team">Team</NavLink>
          {UserSignedIn && <NavLink to="/events">Events</NavLink>}
          <NavLink to="/login">Login</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
