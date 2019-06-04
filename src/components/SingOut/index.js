import React from 'react'
import { MDBBtn } from "mdbreact"
import { withFirebase } from '../Firebase'

const SignOutButton = ({ firebase }) => (
    <MDBBtn onClick={firebase.doSignOut} outline color="danger">
        Cerrar Sesión
    </MDBBtn>
);

export default withFirebase(SignOutButton)