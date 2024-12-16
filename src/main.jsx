import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Provide from './Context/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provide>
    <App />
  </Provide>,
)
