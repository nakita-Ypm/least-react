import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './app'

const rootElement = document.getElementById('root')
const root = rootElement ? createRoot(rootElement) : console.error('Root element not found')

if (root) {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}
