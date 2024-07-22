import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider, Route
} from "react-router-dom";
import Root from './routes/root';
import Home from './routes/home';
import Listings from './routes/listings'
import ErrorPage from "./error-page";

import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // errorElement: <ErrorPage />,
  },
  ,
  {
    path: "/listings",
    element: <Listings />,
    errorElement: <ErrorPage />
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
