import * as yup from 'yup';

const authFormSchema = (hasRepeatedPassword = false) => {
    return yup.object({
        userName : yup.string()
        .min(3 , 'باید حداقل 3 کاراکتر یا بیشتر باشد')
        .max(15 , 'باید حداکثر 15 کاراکتر یا کمتر باشد')
        .required('نام کاربری الزامی میباشد'),
        password : yup.string()
        .min(8 , 'رمز عبور باید حداقل 8 کاراکتر باشد')
        .matches(/[0-9]/, "رمز عبور باید حداقل شامل یک عدد باشد")
        .matches(/[a-zA-Z]/, "رمز عبور باید شامل حروف باشد")
        .required('رمز عبور الزامی میباشد'),
        ...(hasRepeatedPassword && {
            repeatedPassword : yup.string()
            .oneOf([yup.ref('password')] , 'رمز عبور تکرار شده با رمز عبور وارد شده یکسان نیست')
            .required('رمز عبور رو دوباره وارد کنید')
        })
    })
}



export { authFormSchema };