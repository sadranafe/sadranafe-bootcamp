import * as yup from 'yup';

const authFormSchema = (hasRepeatedPassword = false) => {
    return yup.object({
        userName : yup.string()
        .min(3 , 'Must be at least 3 characters or more')
        .max(15 , 'Must be 15 characters or less')
        .required('userName is required'),
        password : yup.string()
        .min(8 , 'Password must be at least 8 characters')
        .matches(/[0-9]/, "Password must contain at least one number")
        .matches(/[a-zA-Z]/, "Password must contain at least one letter")
        .required('password is required'),
        ...(hasRepeatedPassword && {
            repeatedPassword : yup.string()
            .oneOf([yup.ref('password')] , 'Passwords do not match')
            .required('confirm password is required')
        })
    })
}



export { authFormSchema };