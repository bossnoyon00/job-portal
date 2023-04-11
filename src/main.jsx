import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import HeaderPart from './components/HeaderPart/HeaderPart'
import JobDetails from './components/JobDetails/JobDetails'
import Details from './components/Details/Details'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <HeaderPart></HeaderPart>,
        loader: () => fetch('/feature.json')
      },
      {
        path: '/job-details',
        element: <Details></Details>
      },
      {
        path: 'job/:jobId',
        element: <JobDetails></JobDetails>,
        loader: () => fetch('/feature.json')
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
