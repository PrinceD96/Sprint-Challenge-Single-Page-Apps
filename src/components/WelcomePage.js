import React from "react";
import { Button, } from 'reactstrap';
import { Link } from "react-router-dom";

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header><br />
      <Link to="/characters-list">
        <Button>See Characters</Button>
      </Link>
    </section>
  )
}
