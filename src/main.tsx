// import * as React from "react";
// import * as ReactDOM from "react-dom/client";
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import "./index.css";
// import HomePage from "./pages/Homepage";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage/>,
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; 

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);