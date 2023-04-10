import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import HeaderPart from './components/HeaderPart/HeaderPart'
import JobDetails from './components/JobDetails/JobDetails'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <HeaderPart></HeaderPart>,
        loader: () => fetch('feature.json')
      },
      {
        path: 'details/:id',
        element: <JobDetails></JobDetails>,
        loader: () => fetch()
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
