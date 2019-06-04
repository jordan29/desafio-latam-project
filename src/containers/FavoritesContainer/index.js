import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getCharacters } from '../../redux/characters/thunks'
import { CharacterCard } from '../../components/CharacterCard'
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdbreact'
import LoadingContainer from '../../containers/LoadingContainer'
import { Encabezado } from '../../components/Jumbotron'
import { Container } from 'reactstrap'
import ReactPaginate from 'react-paginate'
import { Button } from 'reactstrap'
import { FirebaseContext } from '../../components/Firebase'

const FavoritesContainer = (props) => (
    <FirebaseContext.Consumer>
        {firebase => {
            console.log('Firebase', firebase)
            return (
                <MDBContainer fluid>
                    <Encabezado titulo="Segundo Proyecto Desafio Latam" subTitulo="Favoritos" />
                    <MDBContainer fluid>
                        componente conectado a firebase
                    </MDBContainer>
                </MDBContainer>
            )
        }}
    </FirebaseContext.Consumer>
)

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

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesContainer);
