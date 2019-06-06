import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase';
import { applyMiddleware, compose, createStore } from 'redux';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import thunk from 'redux-thunk';
import App from './App';
import fbConfig from './config/fbConfig';
import './index.css';
import rootReducer from './store/reducers/rootReducer';

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(
            thunk.withExtraArgument({
                getFirebase,
                getFirestore
            })
        ),
        reactReduxFirebase(fbConfig),
        reduxFirestore(fbConfig)
    )
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
