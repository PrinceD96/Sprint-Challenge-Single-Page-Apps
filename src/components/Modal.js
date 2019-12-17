import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';

const ModalCharacter = (props) => {
  console.log("modal", props);

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <Link to={`/characters-list/${character.id}`} key={character.id}>
      <Button color="info" onClick={toggle}>See more</Button>
      <Modal isOpen={modal} fade={false} toggle={toggle} >
        <ModalHeader toggle={toggle}>{character.name}</ModalHeader>
        <ModalBody>
          j
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Go back</Button>
        </ModalFooter>
      </Modal>
    </Link>
  );
}

export default ModalCharacter;