import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import { FireBaseApp } from './firebase/firebase.js';
import { LightTheme } from './theme/LightTheme.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >
      <LightTheme>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </LightTheme>
    </Provider>
  </StrictMode>,
)
