import React from "react";
import { Button, Card, CardHeader, CardImg, CardBody, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function CharacterCard(props) {
  console.log("characterCard", props);
  const id = props.match.params.id;
  const character = props.character.filter(char => char.id === Number(id))[0];
  // console.log("characterId", characterId)

  return (
    <div className="character-card" >
      < Card >
        <CardHeader className="text-center">
          <h1>{character.name}</h1>
        </CardHeader>
        <CardImg src={character.image} />
        <CardBody>
          <CardText><span>Gender:</span> {character.gender}</CardText>
          <CardText><span>Species:</span> {character.species}</CardText>
          <CardText><span>Status:</span> {character.status}</CardText>
          <CardText><span>Created:</span> {character.created}</CardText>
          <CardText><span>Origin:</span> {character.origin.name}</CardText>
          <CardText><span>Featured:</span> {character.episode.length} episodes</CardText>
          <Link to="/characters-list"><Button color="info">Go back</Button></Link>
        </CardBody>
      </Card >
    </div>
  )
}
