import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getCharacters } from '../../redux/characters/thunks'
import './App.css';
import { CharacterCard } from '../../components/CharacterCard'
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdbreact'
import LoadingContainer from '../../containers/LoadingContainer'
import { Encabezado } from '../../components/Jumbotron'
import { Container } from 'reactstrap'
import ReactPaginate from 'react-paginate'
import { Button } from 'reactstrap'

const CharacterContainer = props => {
  const {
    getCharacters,
    loading,
    characters,
    error,
  } = props

  useEffect(() => {
    getCharacters()
  }, [getCharacters])

  return (
    <MDBContainer fluid>
      <Encabezado titulo="Segundo Proyecto Desafio Latam" subTitulo="Personajes" />
      {error}
      <MDBContainer fluid>
      <Button onClick={() => getCharacters("asdsa")}>Cargar Mas</Button>
      <br/>
      <br/>
        {loading && (
          <div>
            <LoadingContainer />
          </div>
        )}
        <MDBRow>
          {!loading &&
            characters.map((character, index) => (
              <MDBCol key={index} size="3">
                <MDBCol style={{ paddingBottom: 12, }}>
                  <div style={{ marginBottom: '20px' }}>
                    <CharacterCard character={character} />
                  </div>
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
  } = state.characters

  return {
    loading,
    characters: entities,
    error,
  }
}

const mapDispatchToProps = {
  getCharacters
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterContainer);
