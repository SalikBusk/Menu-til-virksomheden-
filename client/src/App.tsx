import React from 'react';
import './App.css';

import Header from './Components/Header/Header';

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom'


const Layout = () => {
  return(
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <div>hello world</div>,
      }
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
