import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Root } from './Components/Root'
import { WebpackPage } from './page/webpack'
import { EsbuildPage } from './page/esbuild'
import { VitePage } from './page/vite'
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: 'webpack',
        element: <WebpackPage />
      },
      {
        path: 'esbuild',
        element: <EsbuildPage />
      },
      {
        path: 'vite',
        element: <VitePage />
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
