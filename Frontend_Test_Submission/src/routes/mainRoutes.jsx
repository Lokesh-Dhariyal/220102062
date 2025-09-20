import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { HomePage } from "../pages/HomePage";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<LoginPage/>,
        children:[
            {
                path:"/login",
                element:<LoginPage/>
            },
            {
                path:"/register",
                element:<RegisterPage/>
            },
            {
                path:"/home",
                element:<HomePage/>
            }
        ]
    }
])