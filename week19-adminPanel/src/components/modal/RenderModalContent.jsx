import AddProductModal from "./AddProductModal";
import DeleteProductModal from "./DeleteProductModal";
import EditProductModal from "./EditProductModal";

const RenderModalContent = (modal , onClose) => {
    switch(modal.type){
        case 'ADD_PRODUCT' : {
            return <AddProductModal onClose = {onClose}/>
        }

        case 'EDIT_PRODUCT' : {
            return <EditProductModal onClose = {onClose} product = {modal.data}/>
        }

        case 'DELETE_PRODUCT' :{
            return <DeleteProductModal onClose = {onClose} productId = {modal.data}/>
        }

        default : return null;
    }
};

export default RenderModalContent;