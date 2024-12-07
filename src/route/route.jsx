import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../components/Home";
import AddMovie from "../components/Addmovie";
import AllMovies from "../components/AllMovies";
import MyFavorites from "../components/MyFavorites";
import Signin from "../components/Signin";

import ErrorPage from "../components/ErrorPage";
import MovieDetails from "../components/MovieDetails";
import UpdateMovieData from "../components/UpdateMovieData";
import AboutUs from "../components/AboutUs";
import Register from "../components/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                
            },
            {
                path: '/addMovie',
                element: <PrivateRoute>
                    <AddMovie></AddMovie>
                </PrivateRoute>
            },
            {
                path: '/update/:id',
                element: <UpdateMovieData></UpdateMovieData>,
                loader: ({params})=> fetch(`http://localhost:5000/movies/${params.id}`)
            },
            {
                path: '/allMovies',
                element: <AllMovies></AllMovies>,
                loader: ()=> fetch('http://localhost:5000/movies')
            },
            {
                path: '/details/:id',
                element: <MovieDetails></MovieDetails>,
                loader: ({params})=> fetch(`http://localhost:5000/movies/${params.id}`)
            },
            {
                path: '/myFavorites',
                element: <PrivateRoute>
                    <MyFavorites></MyFavorites>
                </PrivateRoute>
            },
            {
                path: '/aboutUs',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/signin',
                element: <Signin></Signin>
            }
        ]
    },
]);

export default router;