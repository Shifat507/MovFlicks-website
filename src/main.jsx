import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  RouterProvider,
} from "react-router-dom";
import router from './route/route.jsx';
import MovieDataProvider from './provider/MovieDataProvider.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import FavoriteMovieProvider from './provider/FavoriteMovieProvider.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <MovieDataProvider>
        <FavoriteMovieProvider>
          <RouterProvider router={router}></RouterProvider>
        </FavoriteMovieProvider>
      </MovieDataProvider>
    </AuthProvider>
  </StrictMode>
)
