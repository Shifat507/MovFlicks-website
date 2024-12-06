import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../components/Home";
import AddMovie from "../components/Addmovie";
import AllMovies from "../components/AllMovies";
import MyFavorites from "../components/MyFavorites";
import Signin from "../components/Signin";
import Signout from "../components/Signout";
import ErrorPage from "../components/ErrorPage";
import MovieDetails from "../components/MovieDetails";
import UpdateMovieData from "../components/UpdateMovieData";

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
                element: <AddMovie></AddMovie>
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
                element: <MyFavorites></MyFavorites>
            },
            {
                path: '/signin',
                element: <Signin></Signin>
            },
            {
                path: '/signout',
                element: <Signout></Signout>
            }

        ]
    },
]);

export default router;