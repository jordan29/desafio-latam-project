import app from 'firebase/app'
require('firebase/auth')

const config = {
    apiKey: "AIzaSyDmdxwFEXdIaGfPJYFmIZZZYQx-Be9JozU",
    authDomain: "second-project-4f8dd.firebaseapp.com",
    databaseURL: "https://second-project-4f8dd.firebaseio.com",
    projectId: "second-project-4f8dd",
    storageBucket: "second-project-4f8dd.appspot.com",
    messagingSenderId: "289987664804",
};

class Firebase {
    constructor() {
        app.initializeApp(config)

        this.auth = app.auth()
    }

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);
}

export default Firebase;