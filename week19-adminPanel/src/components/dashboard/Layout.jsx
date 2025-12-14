import { useState } from "react";
import Modal from "../modal/Modal";
import ProductsHeader from "./ProductsHeader";
import ProductsTable from "./ProductsTable";
import RenderModalContent from "../modal/RenderModalContent";

const MODAL_TYPES = {
    ADD : 'ADD_PRODUCT',
    EDIT : 'EDIT_PRODUCT',
    DELETE : 'DELETE_PRODUCT',
    GROUP_DELETE : 'GROUP_DELETE_PRODUCTS',
}

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
        </div>
    );
};

export default Layout;