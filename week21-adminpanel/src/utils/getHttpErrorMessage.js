const getHttpErrorMessage = (statusCode , customMessage = {}) => {
    const defaultHttpErrorMessage = {
        400 : 'درخواست نامعتبر است',
        401 : 'دسترسی غیرمجاز: اطلاعات وارد شده صحیح نیست',
        403 : 'متاسفیم، شما اجازه دسترسی به این بخش رو ندارید. دوباره وارد شوید',
        404 : 'منبع موردنظر پیدا نشد',
        500 : "خطای داخلی سرور"
    }

    const merged = { ...defaultHttpErrorMessage , ...customMessage };
    return merged[statusCode] || 'خطای ناشناخته ای رخ داده !'
}

export default getHttpErrorMessage;