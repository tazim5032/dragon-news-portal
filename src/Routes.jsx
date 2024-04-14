import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import News from "./Pages/News";
import Register from "./Pages/Register";
import PrivateRoute from "./PrivateRoute";
import Root from "./Root";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/news.json')
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><News></News></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
]);

export default router;