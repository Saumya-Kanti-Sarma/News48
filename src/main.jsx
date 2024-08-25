import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(

  <GoogleOAuthProvider clientId="254942735069-5bjfv6pbrvosf6hspv0i4pd14rs1gh17.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>

)
