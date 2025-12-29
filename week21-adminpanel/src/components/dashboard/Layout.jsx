'use client';

import { Toaster } from "react-hot-toast";
import ProductsHeader from "./ProductsHeader";
import ProductsTable from "./ProductsTable";
import Modal from "../modal/Modal";
import RenderModalContent from "../modal/RenderModalContent.jsx";

const Layout = ({ productsData , productIsPending , page , setPage , modal , setModal , openModalHandler }) => {
    const closeModalHandler = () => {
        setModal({ type : null , data : null })
    }

    return (
        <div className = "my-7">
            <ProductsHeader openModal = {openModalHandler}/>
            <ProductsTable productsData = {productsData} productIsPending = {productIsPending} openModal = {openModalHandler} page = {page} setPage = {setPage}/>

            <Modal isOpen = {!!modal.type} onClose = {closeModalHandler}>
                { RenderModalContent(modal , closeModalHandler) }
            </Modal>

            <Toaster position = "top-left"/>
        </div>
    );
};

export default Layout;