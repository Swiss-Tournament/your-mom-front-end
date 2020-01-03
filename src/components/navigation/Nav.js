import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getUserToken } from "./routes/userAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
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
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
`;

const NewDropToggle = styled(DropdownToggle)`
  color: white;
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
          {/* {UserSignedIn && <NavLinks href="/events">Events</NavLinks>} */}
          <NewLinks href="/events">Events</NewLinks>
        </NavItem>
        <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
          <NewDropToggle nav caret>
            <FontAwesomeIcon icon={faUser} size="1x" color="white" />
          </NewDropToggle>
          <DropdownMenu>
            {!UserSignedIn && (
              <DropdownItem tag={Link} to="/login">
                Login
              </DropdownItem>
            )}
            {!UserSignedIn && (
              <DropdownItem tag={Link} to="/register">
                Register
              </DropdownItem>
            )}
            {/* {UserSignedIn && ( */}
            <DropdownItem tag={Link} to="/logout">
              Logout
            </DropdownItem>
            {/* )} */}
            {/* {UserSignedIn && ( */}
            <DropdownItem tag={Link} to="/create-event">
              Create Event
            </DropdownItem>
            {/* )} */}
            {/* {UserSignedIn && ( */}
            <DropdownItem tag={Link} to="/user/:id/my-events">
              My Events
            </DropdownItem>
            {/* )} */}

            <DropdownItem divider />
          </DropdownMenu>
        </Dropdown>

        {/* <NavLink to="/login">Login</NavLink> */}
      </NewNav>
    </div>
  );
};

export default Navigation;
