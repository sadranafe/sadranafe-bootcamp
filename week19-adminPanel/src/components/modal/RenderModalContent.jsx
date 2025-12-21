import ProductModalForm from "./ProductModalForm";
import DeleteProductModal from "./DeleteProductModal";

const RenderModalContent = (modal , onClose) => {
        switch(modal.type){
        case 'ADD_PRODUCT' : {
            return <ProductModalForm onClose = {onClose} action = 'add_product' BtnContent = 'ایجاد'/>
        }

        case 'EDIT_PRODUCT' : {
            return <ProductModalForm onClose = {onClose} action = 'edit_product' product = {modal.data.product} productId = {modal.data.product.id} page = {modal.data.page} BtnContent = 'ثبت اطلاعات جدید' />
        }

        case 'DELETE_PRODUCT' :{
            return <DeleteProductModal onClose = {onClose} productId = {modal.data.id} page = {modal.data.page} setPage = {modal.data.setPage}/>
        }

        default : return null;
    }
};

export default RenderModalContent;