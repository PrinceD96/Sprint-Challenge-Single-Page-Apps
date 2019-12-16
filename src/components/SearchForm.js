import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardImg, CardBody, CardText, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function SearchForm({ characters }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [charList, setCharList] = useState(characters)
  const [searchResults, setSearchResults] = useState(characters);

  useEffect(() => {
    if (characters) {
      const results = charList.filter(character => {
        return character.name.toLowerCase().includes(searchTerm.toLowerCase());
      })
      setSearchResults(results);
    }
  }, [searchTerm])

  const handleChange = event => {
    setSearchTerm(event.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const ModalCharacter = (props) => {
    const {
      buttonLabel,
      className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
      <>

        <div>
          <Button color="info" onClick={toggle}>See more</Button>
          <Modal isOpen={modal} fade={true} toggle={toggle} className={className}>
            {/* {searchResults.filter(character => character.id === 1)} */}
            {searchResults.map(character => {
              // console.log("character", character)
              return (
                <>
                  <ModalHeader toggle={toggle}>{character.name}</ModalHeader>
                  <CardImg src={character.image} />
                  <ModalBody>
                    <CardText><span>Gender:</span> {character.gender}</CardText>
                    <CardText><span>Species:</span> {character.species}</CardText>
                    <CardText><span>Status:</span> {character.status}</CardText>
                    <CardText><span>Created:</span> {character.created}</CardText>
                    <CardText><span>Origin:</span> {character.origin.name}</CardText>
                    <CardText><span>Featured:</span> {character.episode.length}episodes
                    </CardText>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="secondary" onClick={toggle}>Go back</Button>
                  </ModalFooter>
                </>
              )
            })}

          </Modal>
        </div>
      </>
    );
  }

  return (
    <section >
      <form onSubmit={handleSubmit} >
        <label htmlFor="name">Search</label>
        <input
          id="name"
          type="text"
          name="textfield"
          placeholder="Search by name"
          onChange={handleChange}
          value={searchTerm}
        />
      </form>

      <div className="character-list">{searchResults.map(char => {
        return (

          <Card className="character" key={char.id}>
            <CardHeader className="text-center">
              <h2>{char.name}</h2>
            </CardHeader>
            <CardImg src={char.image} />
            <CardBody>
              <CardText><span>Gender:</span> {char.gender}</CardText>
              <CardText><span>Species:</span> {char.species}</CardText>
              <CardText><span>Status:</span> {char.status}</CardText>
              {/* <CardText><span>Created:</span> {char.created}</CardText> */}
              {/* <CardText><span>Origin:</span> {char.origin.name}</CardText> */}
              <CardText><span>Featured:</span> {char.episode.length} episodes</CardText>
              <Link to={`/characters-list/${char.id}`} key={char.id} className="link">
                <ModalCharacter />
              </Link>
            </CardBody>
          </Card>

        )
      })}
      </div>
    </section>
  );
}
