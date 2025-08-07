import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Todoprovider } from './contexts/Todocontext.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Todoprovider>
      <App />
    </Todoprovider>
  </StrictMode>,
)
