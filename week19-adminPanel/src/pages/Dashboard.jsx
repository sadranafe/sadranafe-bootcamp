import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Navbar from "../components/dashboard/navbar";
import Layout from "../components/dashboard/Layout";
import ProductsPagination from "../components/dashboard/ProductsPagination";

const Dashboard = () => {
    const [page , setPage] = useState(1)
    const limit = 6;
    const queryKey = ['products'];
    const queryFn = () => {
        return axios.get(`http://localhost:3000/products?page=${page}&limit=${limit}`).then(res => { 
            return res.data
        })
    }
    const { data , isPending } = useQuery({ queryKey, queryFn })
    return (
        <>
            <div className = "w-9/12 mx-auto my-5">
                <Navbar/>

                <Layout productsData = {data} productIsPending = {isPending}/>
                <ProductsPagination totalPages = {data?.totalPages} page = {data?.page} setPage = {setPage} />
            </div>
        </>
    );
};

export default Dashboard;