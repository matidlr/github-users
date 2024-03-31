import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { GithubProvider } from './context.jsx';
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-6nn0jpj28fnynxns.us.auth0.com'
      clientId='Ji6FfObbP8ww408T7OtpdBWMGN598Hn1'
      redirectUrl={window.location.origin}>
    <GithubProvider>
      <App />
    </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>,
)
