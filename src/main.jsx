import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Root } from './Components/Root'
import { Webpack } from './Components/Webpack'
import App from './App.jsx'
import './index.css'
/**
 * Главная - / - сравнение
 * Webpack - /webpack
 * Esbuild - /esbuild
 * Vite - /vite
 */

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
        element: <Webpack />
      },
      {
        path: 'esbuild',
        element: <></>
      },
      {
        path: 'vite',
        element: <></>
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
