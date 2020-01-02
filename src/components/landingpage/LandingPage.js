import React from 'react'
import './landingpage.css'

export default function LandingPage() {
    return (
        <div>
            {/* <nav>This is a holding spot for the nav</nav> */}
            <div className='overlay-background'>
                <div className='events'>
                    <h2>Events</h2>
                    <div className='card left'>
                        <h3>Upcoming Events</h3>
                    </div>
                    <div className='card left'>
                        <h3>Register An Event</h3>
                    </div>
                </div>
                <div className='magic-info'>
                    <h2>Magic Info</h2>
                    <div className='card right'>
                        <h3>Magic News</h3>
                    </div>
                    <div className='card right'>
                        <h3>Card DataBase</h3>
                    </div>
                </div>
                
            </div>
            <div className='footer'>
                {/* bottom of page contains credit to the makers of mtg and artists */}
                <p>footer placeholder</p>
            </div>
        </div>
    )
}


// scryfall link: https://scryfall.com/
// mtg news: https://magic.wizards.com/en/articles
// mtg art: http://www.artofmtg.com/ 
// give credit to wizards/artist for work