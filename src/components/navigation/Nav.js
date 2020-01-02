import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import { getUserToken } from "./routes/userAPI";
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink
} from "reactstrap";
import styled from "styled-components";

const NewNav = styled(Nav)`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  background: black;
`;

const NewLinks = styled(NavLink)`
  font-color: white;
  text-decoration: none;
  font-size: 1.5rem;
`;

const Navigation = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);
  const UserSignedIn = getUserToken();
  return (
    <div>
      <NewNav>
        <NavItem>
          <NewLinks href="/">Home</NewLinks>
        </NavItem>
        <NavItem>
          <NewLinks href="/team">Team</NewLinks>
        </NavItem>
        <NavItem>
          {/*  Commented out until link set up */}
          {/* {UserSignedIn && <NavLink to="/events">Events</NavLink>} */}
          <NewLinks href="/events">Events</NewLinks>
        </NavItem>
        <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle nav caret>
            Login
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>LogOut</DropdownItem>
            <DropdownItem disabled>Register</DropdownItem>

            <DropdownItem divider />
          </DropdownMenu>
        </Dropdown>

        {/* <NavLink to="/login">Login</NavLink> */}
      </NewNav>
    </div>
  );
};

export default Navigation;
