import React from "react";
import styled from "styled-components";

const EventPlayers = props => {
  //Need to find out how player list can be accessed.
  console.log(props, "data players");
  return (
    <>
      {props.players.map(player => (
        <ul key={player.id}>
          <Li>{player}</Li>
        </ul>
      ))}
    </>
  );
};

export default EventPlayers;

const Li = styled.li`
  font-size: 1.6rem;
  line-height: 1.5;
  margin: 1% 0;
`