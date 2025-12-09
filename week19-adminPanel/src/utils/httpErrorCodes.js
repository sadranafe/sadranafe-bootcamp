const getHttpErrorMessage = (statusCode , customMessage = {}) => {
    const defaultHttpErrorMessage = {
        400 : 'درخواست نامعتبر هست',
        401 : 'دسترسی غیرمجاز: اطلاعات وارد شده صحیح نیست',
        403 : 'متاسفیم، شما اجازه دسترسی به این بخش رو ندارید',
        404 : 'منبع موردنظر پیدا نشد',
        500 : "خطای داخلی سرور"
    }

    const merged = { ...defaultHttpErrorMessage , ...customMessage };
    return merged[statusCode] || 'something went wrong !'
}

export default getHttpErrorMessage;