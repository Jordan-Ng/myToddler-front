import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.min.css";
import {Auth0Provider} from '@auth0/auth0-react'
import {BrowserRouter} from 'react-router-dom'

const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientID = process.env.REACT_APP_AUTH0_CLIENT_ID
const audience = process.env.REACT_APP_API_URL

ReactDOM.render(
  <Auth0Provider domain={domain} clientId={clientID} audience={audience} redirectUri={window.location.origin}>
  <BrowserRouter>
    <App />
    </BrowserRouter>
  </Auth0Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
