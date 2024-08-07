import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Home from './routes/home';
import Listings from './routes/listings'
import SignIn from './routes/signIn/signIn'
import ErrorPage from "./error-page";
import { GoogleOAuthProvider } from "@react-oauth/google"

import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/listings",
    element: <Listings />,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <SignIn />,
    errorElement: <ErrorPage />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId='452243074156-pnj4liqiolg05tft9t5kltlcqs3fplpn.apps.googleusercontent.com'>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
