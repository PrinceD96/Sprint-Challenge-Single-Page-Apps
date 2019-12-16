import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Button, Card, CardHeader, CardImg, CardBody, CardText } from 'reactstrap';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';


export default function CharacterList(props) {
  // // TODO: Add useState to track data from useEffect
  // const [apiURL, setApiURL] = useState('https://rickandmortyapi.com/api/character/');
  // const [apiData, setApiData] = useState([]);
  // console.log("props Character list ", props)
  // useEffect(() => {
  //   // TODO: Add API Request here - must run in `useEffect`
  //   //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  //   axios
  //     .get(apiURL)
  //     .then(response => {
  //       // console.log(response)
  //       // console.log("apiData", response.data.results)
  //       setApiData(response.data.results)
  //     })
  //     .catch(error => {
  //       console.log("Something went wrong", error)
  //     });

  // }, [apiURL]);
  console.log("character-list", props.character)
  return (

    <section className="character-list">
      <h2 className="char-card">{props.character.map(char => {
        return (
          <Link to={`/character-list/${char.id}`} key={char.id} >
            <Card >
              <CardHeader className="text-center">
                <h1>{char.name}</h1>
              </CardHeader>
              {/* <CardImg src={char.image} /> */}
              <CardBody>
                <CardText>Gender: {char.gender}</CardText>
                <CardText>Species: {char.species}</CardText>
                <CardText>Status: {char.status}</CardText>
                <CardText>Created: {char.created}</CardText>
                <CardText>Origin: {char.origin.name}</CardText>
                <CardText>Featured: {char.episode.length} episodes</CardText>
              </CardBody>
            </Card>
          </Link>

        )
      })}</h2>
    </section >
  );
}
