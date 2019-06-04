import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

export  const Encabezado = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">{props.titulo}</h1>
          <p className="lead">{props.subTitulo}</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

