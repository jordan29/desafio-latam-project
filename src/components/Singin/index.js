import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact'
import { SignUpLink } from '../SingUp'
import { withFirebase } from '../Firebase'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

const SignInPage = () => (
    <div>
        <MDBContainer>
            <MDBRow>
                <MDBCol md="12">
                    <h1>Iniciar Sesión</h1>
                    <SignInForm />
                    <SignUpLink />
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    </div>
);

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class SignInFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { email, password } = this.state;

        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push("/personajes");
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    };

    render() {
        const { email, password, error } = this.state;

        const isInvalid = password === '' || email === ''

        return (
            <div className="page-wrap d-flex flex-row align-items-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 text-center">
                            <MDBCol md="12">
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                                <form onSubmit={this.onSubmit}>
                                    <p className="h5 text-center mb-4">Ingresa tus datos</p>
                                    <Input
                                        name="email"
                                        value={email}
                                        onChange={this.onChange}
                                        type="text"
                                        placeholder="Dirección de email"
                                    />
                                    <br />

                                    <Input
                                        name="password"
                                        value={password}
                                        onChange={this.onChange}
                                        type="password"
                                        placeholder="Password"
                                    />
                                    <Button disabled={isInvalid} type="submit">
                                        Iniciar
                                    </Button>

                                    {error && <p>{error.message}</p>}
                                </form>
                            </MDBCol>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const SignInForm = compose(
    withRouter,
    withFirebase,
)(SignInFormBase)

export default SignInPage

export { SignInForm }