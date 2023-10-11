import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AlertContextProvider from './context/AlertContext.tsx'
import UserContextProvider from './context/UserContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AlertContextProvider>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </AlertContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
