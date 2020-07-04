import firebase from 'firebase/app';
import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { getFirebase, ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { applyMiddleware, compose, createStore } from 'redux';
import { createFirestoreInstance, getFireStore, reduxFirestore } from 'redux-firestore';
import thunk from 'redux-thunk';
import App from './App';
import fbConfig from './config/fbConfig';
import './index.css';
import * as serviceWorker from './serviceWorker';
import rootReducer from './store/reducers/rootReducer';

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFireStore })),
    reduxFirestore(firebase, fbConfig)
  )
);

const rrfConfig = {
	userProfile: 'users',
	useFirestoreForProfile: true,
	attachAuthIsReady: true
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
