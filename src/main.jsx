import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import { LightTheme } from './theme/LightTheme.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >
      <LightTheme>
        <HashRouter>
          <App />
        </HashRouter>
      </LightTheme>
    </Provider>
  </StrictMode>,
)
