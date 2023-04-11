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
import DataChart from './components/DataChart/DataChart';
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
        path: '/statistic',
        element: <DataChart></DataChart>
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
        element: <div className='px-4 text-center py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
          <h1 className='text-4xl text-red-900'>
            <b>404</b></h1>
          <h1 className='text-5xl text-orange-700'>This Site is not Available!!!</h1></div>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
