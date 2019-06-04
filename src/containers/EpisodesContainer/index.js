import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getEpisodes } from '../../redux/episodes/thunk'
import { EpisodeCard } from '../../components/EpisodeCard'
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdbreact'
import LoadingContainer from '../../containers/LoadingContainer'
import { Encabezado } from '../../components/Jumbotron'
import { Container } from 'reactstrap'
import ReactPaginate from 'react-paginate'
import { Button } from 'reactstrap'

const EpisodesContainer = props => {
  const {
    getEpisodes,
    loading,
    episodes,
    error,
  } = props

  useEffect(() => {
    getEpisodes()
  }, [getEpisodes])

  return (
    <MDBContainer fluid>
      <Encabezado titulo="Segundo Proyecto Desafio Latam" subTitulo="Episodios" />
      {error}
      <MDBContainer fluid>
      <Button onClick={() => getEpisodes("asdsa")}>Cargar Mas</Button>
      <br/>
      <br/>
        {loading && (
          <div>
            <LoadingContainer />
          </div>
        )}
        <MDBRow>
            
          {!loading &&
            episodes.map((episode, index) => (
                <MDBCol key={index} size="12">
                    {console.log('Episode',episode)}
                  <MDBCol style={{ paddingBottom: 12, }}>
                  <EpisodeCard episodio={episode} />
                  </MDBCol>
                </MDBCol>
              ))
          }
        </MDBRow>
      </MDBContainer>
    </MDBContainer>
  );
}

const mapStateToProps = state => {
  const {
    loading,
    entities,
    error,
  } = state.episodes

  return {
    loading,
    episodes: entities,
    error,
  }
}

const mapDispatchToProps = {
  getEpisodes
}

export default connect(mapStateToProps, mapDispatchToProps)(EpisodesContainer);
