'use client';

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import Layout from "@/components/dashboard/Layout";
import ProductsPagination from "@/components/dashboard/ProductsPagination";

const DashboardClient = () => {
    const [page , setPage] = useState(1);
    const [modal , setModal] = useState({ type : null , data : null });

    const openModalHandler = (type, data = null) => {
        setModal({ type , data });
    }

    const limit = 6;
    const queryKey = ['products' , page];
    const queryFn = () => {
        return axios.get(`http://localhost:3000/products?page=${page}&limit=${limit}`).then(res => { 
            return res.data
        })
    }
    const { data , isPending } = useQuery({ queryKey, queryFn , keepPreviousData : true })

    return (
        <>
            <DashboardNavbar productsData = {data} page = {page} setPage = {setPage} openModal = {openModalHandler}/>
            <Layout productsData = {data} productIsPending = {isPending} modal = {modal} setModal = {setModal} openModalHandler = {openModalHandler} page = {page} setPage = {setPage}/>
            <ProductsPagination totalPages = {data?.totalPages} page = {page} setPage = {setPage} />
        </>
    );
};

export default DashboardClient;