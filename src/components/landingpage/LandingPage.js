import React from "react";
import "./landingpage.css";
import { Link } from 'react-router-dom';
import Forest from "../../assets/Forest-Art-Theros.jpg";
import Island from "../../assets/Island-2-Amonkhet-MtG-Art.jpg";
import Plains from "../../assets/Plains-Art-Theros.jpg";
import Swamp from "../../assets/Swamp-Art-Theros.jpg";
import Panarama from "../../assets/nielsen_judge_lands.jpg";
import styled from "styled-components";

// styled components.
const EventsTitle = styled.h2`
  margin: 2%;
`;
const MagicInfo = styled.h2`
  margin: 2%;
`;

export default function LandingPage() {
  return (
    <div>
      {/* <nav>This is a holding spot for the nav</nav> */}
      <div className='overlay-background'>
        <div className='flex'>
          <div className='events'>
            {/* left side column */}
            <EventsTitle>Events</EventsTitle>
            <div className='card left'>
              <Link to="/events">
                <img src={Island} alt='island mtg card' className='image' />
                <h3 className='overlay'>Upcoming Events</h3>
              </Link>
            </div>
            <div className='card left'>
              <Link to="/create-event"> 
                <img src={Swamp} alt='swamp mtg card' className='image' />
                <h3 className='overlay'>Register An Event</h3>
              </Link>
            </div>
          </div>
          <div className='magic-info'>
            {/* right side column */}
            <MagicInfo>Magic Info</MagicInfo>
            <div className='card right'>
              <a
                title='link to magic news'
                href='https://magic.wizards.com/en/articles'
              >
                <img src={Plains} alt='plains mtg card' className='image' />
                <h3 className='overlay'>Magic News</h3>
              </a>
            </div>
            <div className='card right'>
              <a title='link to scryfall' href='https://scryfall.com/'>
                <img src={Forest} alt='forest mtg card' className='image' />
                <h3 className='overlay'>Card DataBase</h3>
              </a>
            </div>
          </div>
        </div>
        <div className='leaderboard card'>
          <img src={Panarama} alt='land panarama' className='image' />
          <h3 className='overlay'>Leaderboard Coming Soon!</h3>
        </div>
      </div>
    </div>
  );
}

// scryfall link: https://scryfall.com/
// mtg news: https://magic.wizards.com/en/articles
// mtg art: http://www.artofmtg.com/
// give credit to wizards/artist for work
