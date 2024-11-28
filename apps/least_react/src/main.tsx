import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './app'
import Todo from './components/Todo'

const rootElement = document.getElementById('root')
const root = rootElement ? createRoot(rootElement) : console.error('Root element not found')

if (root) {
  root.render(
    <React.StrictMode>
      <App />
      <Todo />
    </React.StrictMode>,
  )
}
