import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  RouterProvider,
} from "react-router-dom";
import router from './route/route.jsx';
import MovieDataProvider from './provider/MovieDataProvider.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MovieDataProvider>

      <RouterProvider router={router}></RouterProvider>
    </MovieDataProvider>
  </StrictMode>,
)
