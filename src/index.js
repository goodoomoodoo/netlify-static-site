import React from 'react'
import ReactDOM from 'react-dom'

import netlifyIdentity from 'netlify-identity-widget';
// Your top level component
import App from './App'

// Export your top level component as JSX (for static rendering)
export default App

if (typeof window !== 'undefined') {
  window.netlifyIdentity = netlifyIdentity
  console.log('hello from netlifyidentity', window.netlifyIdentity)
  netlifyIdentity.init()
}

// Render your app
if (typeof document !== 'undefined') {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate || ReactDOM.render
  const render = Comp => {
    renderMethod(<Comp />, document.getElementById('root'))
  }

  // Render!
  render(App)
}
