import React from "react";

const EventPlayers = props => {
  //Need to find out how player list can be accessed.
  console.log(props, "data players");
  return (
    <>
      {props.players.map(player => (
        <ul key={player.id}>
          <li>{player}</li>
        </ul>
      ))}
    </>
  );
};

export default EventPlayers;
