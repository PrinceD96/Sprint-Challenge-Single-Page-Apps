import React, { useEffect, useState } from "react";
import axios from 'axios';
import SearchForm from "./SearchForm";


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [apiURL, setApiURL] = useState('https://rickandmortyapi.com/api/character/');
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(apiURL)
      .then(response => {
        setApiData(response.data.results)
      })
      .catch(error => {
        console.log("Something went wrong", error)
      });

  }, [apiURL]);

  if (!apiData) {
    return (<div>Loading characters</div>)
  }
  return (
    <section className="character-list">
      <SearchForm characters={apiData} />
    </section >
  );
}
