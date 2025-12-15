import * as yup from 'yup';

const modalFormSchema = yup.object({
    productName : yup.string()
    .trim()
    .min(3 , 'نام محصول باید حداقل 3 کاراکتر باشد')
    .max(50 , 'نام محصول نمی تواند بیشتر از 50 کاراکتر باشد')
    .required('نام محصول الزامی میباشد'),
    
    inventory : yup.number()
    .typeError('موجودی باید عدد باشد')
    .integer('موجودی باید عدد صحیح باشد')
    .min(0 , 'موجودی نمی تواند منفی باشد')
    .required('موجودی الزامی میباشد'),

    price : yup.number()
    .typeError('قیمت باید عدد باشد')
    .positive('قیمت باید بزرگتر از صفر باشد')
    .required('قیمت الزامی میباشد')
})

export default modalFormSchema;