import React, { useState, useEffect } from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import CharacterCard from "./components/CharacterCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import axios from 'axios';

export default function App() {
  const [apiURL, setApiURL] = useState('https://rickandmortyapi.com/api/character/');
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios
      .get(apiURL)
      .then(response => {
        setApiData(response.data.results)
      })
      .catch(error => {
        console.log("Something went wrong", error)
      });

  }, [apiURL]);

  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/characters-list" render={(routeProps) => <CharacterList {...routeProps} />} />
      <Route path="/characters-list/:id" render={(routeProps) => <CharacterCard {...routeProps} character={apiData} />} />

    </main>
  );
}
