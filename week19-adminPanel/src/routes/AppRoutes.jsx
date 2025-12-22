import { Route , Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Register from "../pages/auth/register";
import Login from "../pages/auth/Login";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Products from "../pages/Products";
import AboutUs from "../pages/AboutUs";
import Layout from "../components/Layout";
const AppRoutes = () => {
    const queryClient = new QueryClient();

    return (
        <Routes>
            <Route path = "/" element = {
                <Layout>
                    <Home/>
                </Layout>
            }/>
            <Route path = "auth/register" element = {<Register/>}/>
            <Route path = "auth/login" element = {<Login/>}/>
            <Route path = "dashboard" element = {
                <ProtectedRoute>
                    <QueryClientProvider client = {queryClient}>
                        <Dashboard/>
                    </QueryClientProvider>
                </ProtectedRoute>
            }/>
            <Route path = "products" element = {
                <Layout>
                    <Products/>
                </Layout>
            }/>
            <Route path = "about-us" element = {
                <Layout>
                    <AboutUs/>
                </Layout>
            }/>
            <Route path = "*" element = {<NotFound/>}/>

        </Routes>
    );
};

export default AppRoutes;