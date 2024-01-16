import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Context from './firebase/context.jsx'
import PostComponent from './PostContext/PostContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
      <PostComponent>
        <App />
      </PostComponent>
    </Context>
  </React.StrictMode>,
)
