import React from "react";
// import {Link} from 'react-router-dom'
import "./landingpage.css";
import Forest from "../../assets/Forest-Art-Theros.jpg";
import Island from "../../assets/Island-2-Amonkhet-MtG-Art.jpg";
import Plains from "../../assets/Plains-Art-Theros.jpg";
import Swamp from "../../assets/Swamp-Art-Theros.jpg";
import Panarama from "../../assets/nielsen_judge_lands.jpg";

export default function LandingPage() {
  return (
    <div>
      {/* <nav>This is a holding spot for the nav</nav> */}
      <div className='overlay-background'>
        <div className='flex'>
          <div className='events'>
            <h2>Events</h2>
            <div className='card left'>
              <img src={Island} alt='island mtg card' class='image' />
              <h3 className='overlay'>Upcoming Events</h3>
            </div>
            <div className='card left'>
              <img src={Swamp} alt='swamp mtg card' class='image' />
              <h3 className='overlay'>Register An Event</h3>
            </div>
          </div>
          <div className='magic-info'>
            <h2>Magic Info</h2>
            <div className='card right'>
              <a
                title='link to magic news'
                href='https://magic.wizards.com/en/articles'
              >
                <img src={Plains} alt='plains mtg card' class='image' />
                <h3 className='overlay'>Magic News</h3>
              </a>
            </div>
            <div className='card right'>
              <a title='link to scryfall' href='https://scryfall.com/'>
                <img src={Forest} alt='forest mtg card' class='image' />
                <h3 className='overlay'>Card DataBase</h3>
              </a>
            </div>
          </div>
        </div>
        <div className='leaderboard card'>
          <img src={Panarama} alt='land panarama' class='image' />
          <h3 className='overlay'>Leaderboard Coming Soon!</h3>
        </div>
      </div>
      <div className='footer'>
        {/* bottom of page contains credit to the makers of mtg and artists */}
        <p>footer placeholder</p>
      </div>
    </div>
  );
}

// scryfall link: https://scryfall.com/
// mtg news: https://magic.wizards.com/en/articles
// mtg art: http://www.artofmtg.com/
// give credit to wizards/artist for work
