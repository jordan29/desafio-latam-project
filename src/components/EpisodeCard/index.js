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

export const EpisodeCard = ({ episodio }) => {
  console.log(episodio)
  const {name, id, air_date, created, url, episode, characters} = episodio 
  
  return (
    <div>
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol size="12">
            <MDBCol style={{ paddingBottom: 12, }}>
              <Card style={{ height: "20rem" }}>
                  <CardHeader tag="h3">{`${id} - ${name}`}</CardHeader>
                  <CardBody>
                    <CardTitle>
                      Fecha de Creación: &nbsp;
                      <Moment format="DD MMMM YYYY"> 
                        {`${created}`} 
                      </Moment>
                    </CardTitle>
                    <CardTitle>
                      Fecha al aire: &nbsp;
                      <Moment format="DD MMMM YYYY"> 
                        {`${air_date}`} 
                      </Moment>
                    </CardTitle>
                    <CardTitle>
                      Episodio: {episode}
                    </CardTitle>
                    <Button>Ir al episodio</Button>
                  </CardBody>
                  <CardFooter className="text-muted"></CardFooter>
              </Card>
            </MDBCol>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  )
}

export default EpisodeCard
