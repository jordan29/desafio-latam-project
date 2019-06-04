import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { withFirebase } from '../../components/Firebase'
import { compose } from 'recompose'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

const SignUpPage = () => (
  <div>
    <MDBContainer>
      <MDBRow>
        <MDBCol md="12">
          <h1>Registrarse</h1>
          <SignUpForm />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </div>
)

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
}

class SignUpFormBase extends Component {
  constructor(props) {
    super(props)
    this.state = { ...INITIAL_STATE }
  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE })
        this.props.history.push("/personajes")
      })
      .catch(error => {
        this.setState({ error })
      });

    event.preventDefault()
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === ''

    return (

      <div className="page-wrap d-flex flex-row align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center">
              <br />
              <br />
              <br />
              <br />
              <br />
              <form onSubmit={this.onSubmit}>
                <Input
                  name="username"
                  value={username}
                  onChange={this.onChange}
                  type="text"
                  placeholder="Nombre completo"
                />
                <br></br>
                <Input
                  name="email"
                  value={email}
                  onChange={this.onChange}
                  type="text"
                  placeholder="Dirección de correo"
                />
                <br></br>
                <Input
                  name="passwordOne"
                  value={passwordOne}
                  onChange={this.onChange}
                  type="password"
                  placeholder="Password"
                />
                <br></br>
                <Input
                  name="passwordTwo"
                  value={passwordTwo}
                  onChange={this.onChange}
                  type="password"
                  placeholder="Confirmar password"
                />
                <br></br>
                <Button disabled={isInvalid} type="submit">
                  Registrarse
                </Button>
                {error && <p>{error.message}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const SignUpLink = () => (
  <p>
    ¿No posees cuenta? <Link to={"/registro"}>Registrate</Link>
  </p>
);

const SignUpForm = compose(
  withRouter,
  withFirebase,
)(SignUpFormBase)


export default SignUpPage

export { SignUpForm, SignUpLink }