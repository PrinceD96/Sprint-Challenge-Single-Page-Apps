import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Button, Card, CardHeader, CardImg, CardBody, CardText } from 'reactstrap';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';
import SearchForm from "./SearchForm";


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
  // console.log("character-list", props.character)
  // console.log("Search form in CharacterList", < SearchForm />)
  if (!props.character) {
    return (<div>Loading</div>)
  }
  return (

    <section className="character-list">
      <SearchForm characters={props.character} />

    </section >
  );
}
