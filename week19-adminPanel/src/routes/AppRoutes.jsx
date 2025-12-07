import { Route , Routes } from "react-router-dom";
import Register from "../pages/auth/register";
import Login from "../pages/auth/Login";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
const AppRoutes = () => {
    return (
        <Routes>
            <Route path = "/" element = {<h1>hello world</h1>}/>
            <Route path = "auth/register" element = {<Register/>}/>
            <Route path = "auth/login" element = {<Login/>}/>
            <Route path = "dashboard" element = {
                <ProtectedRoute>
                    <Dashboard/>
                </ProtectedRoute>
            }/>
            <Route path = "*" element = {<NotFound/>}/>

        </Routes>
    );
};

export default AppRoutes;