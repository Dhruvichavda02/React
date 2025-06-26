import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

// const anotherElement = (
//   <a href="https.google.com"> Visit Google</a>
// )

const ReactElement = React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank'},
  'click me!!'
) //Here createElement in react have a particular syntax that needs to follow!
createRoot(document.getElementById('root')).render(
  <>

  <App/>
  </>
);

