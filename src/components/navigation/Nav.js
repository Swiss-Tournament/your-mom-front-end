import React, { useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { getUserToken } from "./routes/userAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHatWizard } from "@fortawesome/free-solid-svg-icons";
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink
} from "reactstrap";
// styles
import styled from "styled-components";
import { clearToken } from '../../utils/axiosWithAuth'

// route components
import LandingPage from "../landingpage/LandingPage";
import EventPage from "../events/EventPage/EventPage";
import EventListings from "../events/EventListings";
import Login from "../UserAccess/Login";
import Logout from "./routes/UserLogOut";
import Register from "../UserAccess/Registration";
import CreateEvent from "../UserAccess/CreateEvent";
import Team from "../team/team";

const NewNav = styled(Nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  // changed background color to match global.
  background: #0c0c0b;
  // added nav height.
  height: 100px;
`;

const NewLinks = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 2rem;
  // added padding.
  padding-top: 25px;
`;

const NewDropToggle = styled(DropdownToggle)`
  color: white;
  text-decoration: none;
  font-size: 2rem;
  // added padding.
  padding-top: 25px;
`;

// const NewDropdownMenu = styled(DropdownMenu)`
//   display: flex;
//   justify-content: center;
//   min-width: 30rem;
//   width: 100%;
//   min-height: 30rem;
//   height: 100%;
// `

const NewDropDownItem = styled(DropdownItem)`
  font-size: 1.6rem;
  font-weight: 600;
  text-align: center;
`

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top 1%;
  width: 30%;
`

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 40%;
`

const Navigation = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  const UserSignedIn = getUserToken();

  return (
    <div>
      <NewNav>
        <LogoWrapper>
          <NavItem>
            <h1>MTG Tourney</h1>
          </NavItem>
        </LogoWrapper>
        <LinkWrapper>
          <NavItem>
            <NewLinks href='/'>Home</NewLinks>
          </NavItem>
          <NavItem>
            <NewLinks href='/team'>Team</NewLinks>
          </NavItem>
          <NavItem>
            <NewLinks href='/events'>Events</NewLinks>
          </NavItem>
          <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
            <NewDropToggle nav caret>
              <FontAwesomeIcon icon={faHatWizard} size='1x' color='white' />
            </NewDropToggle>
            <DropdownMenu>
              {!UserSignedIn && (
                <NewDropDownItem tag={Link} to='/login'>
                  Login
                </NewDropDownItem>
              )}

              {UserSignedIn && (
                <>
                <NewDropDownItem tag={Link} to='/user/:id/my-events'>
                  My Events
                </NewDropDownItem>
                <NewDropDownItem tag={Link} to='/login' onClick={clearToken}>
                  Logout
                </NewDropDownItem>
                </>
              )}
              <DropdownItem divider />
            </DropdownMenu>
          </Dropdown>

          <NavLink to="/login">Login</NavLink>
          
        </LinkWrapper>
      </NewNav>

      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/events' component={EventListings} />
        <Route path='/team' component={Team} />
        <Route path='/events/:id' component={EventPage} />
        <Route path='/login' component={Login} />
        <Route path='/logout' component={Logout} />
        <Route path='/register' component={Register} />
        <Route path='/create-event' component={CreateEvent} />
      </Switch>
    </div>
  );
};

export default Navigation;