import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import HeaderPart from './components/HeaderPart/HeaderPart';
import JobDetails from './components/JobDetails/JobDetails';
import Details from './components/Details/Details';
import Blog from './components/Blog/Blog';
import Statistic from './components/Statistic/Statistic';
import ErrorPage from './components/ErrorPage/ErrorPage';
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
        element: <Details></Details>,
        loader: () => fetch('/feature.json')
      },
      {
        path: '/statistic',
        element: <Statistic></Statistic>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: 'job/:jobId',
        element: <JobDetails></JobDetails>,
        loader: () => fetch('/feature.json')
      },
      {
        path: '*',
        element: <ErrorPage></ErrorPage>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
