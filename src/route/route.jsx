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

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path: '/addMovie',
                element: <AddMovie></AddMovie>
            },
            {
                path: '/allMovies',
                element: <AllMovies></AllMovies>
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