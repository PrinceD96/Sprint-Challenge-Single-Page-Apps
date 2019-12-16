import React, { useEffect, useState } from "react";
import { Button, Card, CardHeader, CardImg, CardBody, CardText, CardLink } from 'reactstrap';
import axios from 'axios';

export default function CharacterCard({ character, match }) {
  console.log("props charc card", character)

  const id = match.params.id;
  const characterID = character.filter(char => char.id === Number(id))[0];
  console.log("characterID", characterID)

  const [apiURL, setApiURL] = useState('https://rickandmortyapi.com/api/character/?name=rick');
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios
      .get(apiURL)
      .then(response => {
        console.log("apiData", response)
        setApiData(response.data.results)
      })
      .catch(error => {
        console.log("Something went wrong", error)
      });

  }, [apiURL]);


  return (
    "hello"
    //   < Card >
    //   <CardHeader className="text-center">
    //     <h1>{characterId.name}</h1>
    //   </CardHeader>
    //     {/* <CardImg src={char.image} /> */ }
    // {/* <CardBody>
    //   <CardText>Gender: {characterId.gender}</CardText>
    //   <CardText>Species: {characterId.species}</CardText>
    //   <CardText>Status: {characterId.status}</CardText>
    //   <CardText>Created: {characterId.created}</CardText>
    //   <CardText>Origin: {characterId.origin.name}</CardText>
    //   <CardText>Featured: {characterId.episode.length} episodes</CardText>
    // </CardBody> */}
    //   </Card >
  )
}
