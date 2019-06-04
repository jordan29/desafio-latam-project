import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './redux/store'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import LoadingContainer from './containers/LoadingContainer'
import { MDBBtn } from "mdbreact"

import SignOutButton from './components/SingOut';
import { withFirebase } from './components/Firebase'
import { FirebaseContext } from './components/Firebase'


const CharacterContainer = lazy(() => import('./containers/CharacterContainer'))
const EpisodesContainer = lazy(() => import('./containers/EpisodesContainer'))
const FavoritesContainer = lazy(() => import('./containers/FavoritesContainer'))
const NotFoundContainer = lazy(() => import('./containers/NotFoundContainer'))
const SignUpPage = lazy(() => import('./components/SingUp'))
const SignInPage = lazy(() => import('./components/Singin'))


const Navigation = ({ props }) => {

    const [authUser, setAuthUser] = useState(null)
    useEffect(() => {
        props.auth.onAuthStateChanged(authUser => {
            authUser
                ? setAuthUser({ authUser })
                : setAuthUser(null);
        })
    }, [props.auth])

    return (
        <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
    )

}

const NavigationAuth = () => {

    return (

        <Suspense fallback={<LoadingContainer />}>
            <Router>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Desafio Latam Rick and Morty</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link to="/personajes">
                                <MDBBtn outline color="primary">
                                    Personajes
                                </MDBBtn>
                            </Link>&nbsp;
                        </NavItem>
                        <NavItem>
                            <Link to="/episodios">
                                <MDBBtn outline color="primary">
                                    Episodios
                                </MDBBtn>
                            </Link>
                        </NavItem>&nbsp;
                        <NavItem>
                            <Link to="/favoritos">
                                <MDBBtn outline color="primary">
                                    Favoritos
                                </MDBBtn>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <SignOutButton />
                        </NavItem>
                    </Nav>
                </Navbar>
                <Switch>
                    <Route exact path="/personajes" component={CharacterContainer} />
                    <Route exact path="/" component={CharacterContainer} >
                        <Redirect to="/personajes" />
                    </Route>
                    <Route exact path="/episodios" component={EpisodesContainer} />
                    <Route exact path="/favoritos" component={FavoritesContainer} />
                    <Route component={NotFoundContainer} />
                </Switch>
            </Router>
        </Suspense>

    )
}

const NavigationNonAuth = () => {
    const [authUser, setAuthUser] = useState(null);

    return (

        <Suspense fallback={<LoadingContainer />}>
            <Router>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Desafio Latam Rick and Morty</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link to="/registro">
                                <MDBBtn color="secondary">
                                    Registrarse
                                </MDBBtn>
                            </Link>&nbsp;
                        </NavItem>
                        <NavItem>
                            <Link to="/singIn">
                                <MDBBtn outline color="success">
                                    Iniciar Sesión
                                </MDBBtn>
                            </Link>
                        </NavItem>&nbsp;
            </Nav>
                </Navbar>
                <Switch>
                    <Route exact path="/registro" component={SignUpPage} />
                    <Route exact path="/singIn" component={SignInPage} />
                    <Route exact path="/" component={SignUpPage} >
                        <Redirect to="/singIn" />
                    </Route>
                    <Route component={NotFoundContainer} />
                </Switch>
            </Router>
        </Suspense>

    )
}

export default withFirebase(Navigation)