import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter,Route} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import "semantic-ui-css/semantic.min.css"
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import {userLoggedIn} from './actions/auth'

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
  if(localStorage.bookJwt){
   const user  = {token: localStorage.bookJwt};
   store.dispatch(userLoggedIn(user));
  }

ReactDOM.render(
<BrowserRouter>
<Provider store = {store}>
<Route  component = {App}/>
</Provider>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
