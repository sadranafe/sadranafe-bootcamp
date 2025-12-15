import ProductModalForm from "./ProductModalForm";
import DeleteProductModal from "./DeleteProductModal";

const RenderModalContent = (modal , onClose) => {
    switch(modal.type){
        case 'ADD_PRODUCT' : {
            return <ProductModalForm onClose = {onClose} BtnContent = 'ایجاد'/>
        }

        case 'EDIT_PRODUCT' : {
            return <ProductModalForm onClose = {onClose} product = {modal.data} BtnContent = 'ثبت اطلاعات جدید' />
        }

        case 'DELETE_PRODUCT' :{
            return <DeleteProductModal onClose = {onClose} productId = {modal.data}/>
        }

        default : return null;
    }
};

export default RenderModalContent;