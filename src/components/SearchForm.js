import React, { useState, useEffect } from "react";
import { Button, Card, CardHeader, CardImg, CardBody, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function SearchForm({ characters }) {
  // console.log("characters SF", characters);
  // const characterName = characters.map(char => char.name)

  const [searchTerm, setSearchTerm] = useState('');
  const [charList, setCharList] = useState(characters)
  const [searchResults, setSearchResults] = useState(characters);


  // console.log('characterName', characterName)
  useEffect(() => {
    if (characters) {
      const results = charList.filter(character => {

        return character.name.toLowerCase().includes(searchTerm.toLowerCase());
      })
      setSearchResults(results);
      console.log("results", results)
      console.log('charList', charList)
    }
  }, [searchTerm])

  const handleChange = event => {
    console.log(event.target.value)
    setSearchTerm(event.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <section className="search-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Search:</label>
        <input
          id="name"
          type="text"
          name="textfield"
          placeholder="Search"
          onChange={handleChange}
          value={searchTerm}
        />
      </form>
      <h2 >{searchResults.map(char => {
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
    </section>
  );
}
