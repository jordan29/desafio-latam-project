import React, { useState } from 'react'
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact'
import {  CardImg,
          Card, 
          Button, 
          CardHeader, 
          CardFooter, 
          CardBody,
          CardTitle, 
          CardText 
        } from 'reactstrap'
  import Moment from 'react-moment'
  import ReactPaginate from 'react-paginate'

export const CharacterCard = ({ character }) => {
  console.log(character)
  const {name, id, created, image, species, status, url, gender, location} = character 
  
  return (
    <div>
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol size="4">
            <MDBCol style={{ paddingBottom: 12, }}>
              <Card style={{ width: "22rem", height: "45rem" }}>
                  <CardHeader tag="h3">{`${id} - ${name}`}</CardHeader>
                  <CardImg top width="100%" src={image} alt="Card image cap" />
                  <CardBody>
                    <CardTitle>
                      Fecha de Creación: &nbsp;
                      <Moment format="DD MMMM YYYY"> 
                        {`${created}`} 
                      </Moment>
                    </CardTitle>
                    <CardText>{`Especie: ${species}`}</CardText>
                    <CardText>{`Genero: ${gender}`}</CardText>
                    <CardText>{`Localización: ${location.name}`}</CardText>
                    <Button>Ir al personaje</Button>
                  </CardBody>
                  <CardFooter className="text-muted">{status === "Alive" ? "Vivo" : "Muerto"}</CardFooter>
              </Card>
            </MDBCol>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  )
}

export default CharacterCard
