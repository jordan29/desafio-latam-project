import React, { lazy, Suspense, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import Navigation from './Navigation'
import Firebase, { FirebaseContext } from './components/Firebase'
import store from './redux/store'
import { Provider } from 'react-redux'

const NavigationWithContext = ({ props }) => {

  return (
    <FirebaseContext.Provider value={new Firebase()}>
      <Provider store={store}>
        <FirebaseContext.Consumer>
          {firebase => (
            <Navigation props={firebase} />
            )}
        </FirebaseContext.Consumer>
      </Provider>
    </FirebaseContext.Provider>

  )

}

ReactDOM.render(<NavigationWithContext />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
