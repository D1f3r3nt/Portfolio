import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ReactGA from "react-ga4";

ReactGA.initialize("G-3XQHH4FE5L")

ReactGA.send({
    hitType: "pageview",
    page: "/",
    title: "Home Portfolio"
})

ReactGA.send({
    hitType: "pageview",
    page: "/projects",
    title: "Projects Page"
})

ReactGA.send({
    hitType: "pageview",
    page: "/certificates",
    title: "Certificates Page"
})

ReactGA.send({
    hitType: "pageview",
    page: "/brain",
    title: "Mind Map"
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
          <App />
  </React.StrictMode>,
)
