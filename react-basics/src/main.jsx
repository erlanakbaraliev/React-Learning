import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// const root = createRoot(document.getElementById('root'))
// root.render(
//   <App/>
// )

const root = document.getElementById('root')
const variable = document.createElement('h1')
variable.className = 'header'
variable.textContent = "Somthing"
root.appendChild(variable)
