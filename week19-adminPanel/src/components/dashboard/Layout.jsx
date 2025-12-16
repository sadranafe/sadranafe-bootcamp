import { useState } from "react";
import { Toaster } from "react-hot-toast";
import Modal from "../modal/Modal";
import ProductsHeader from "./ProductsHeader";
import ProductsTable from "./ProductsTable";
import RenderModalContent from "../modal/RenderModalContent";

const Layout = () => {
    const [modal , setModal] = useState({ type : null , data : null })

    const openModalHandler = (type, data = null) => {
        setModal({ type , data });
    }

    const closeModalHandler = () => {
        setModal({ type : null , data : null })
    }

    return (
        <div className = "my-7">
            <ProductsHeader openModal = {openModalHandler}/>
            <ProductsTable openModal = {openModalHandler}/>

            <Modal isOpen = {!!modal.type} onClose = {closeModalHandler}>
                { RenderModalContent(modal , closeModalHandler) }
            </Modal>

            <Toaster position = "top-left"/>
        </div>
    );
};

export default Layout;