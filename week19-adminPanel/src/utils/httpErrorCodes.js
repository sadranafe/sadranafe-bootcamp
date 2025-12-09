const getHttpErrorMessage = (statusCode , customMessage = {}) => {
    const defaultHttpErrorMessage = {
        400 : 'bad request.',
        401 : 'Unauthorized: invalid credentials.',
        403 : 'sorry, you don\'t have permission.',
        404 : 'resource not found.',
        500 : "server error."
    }

    const merged = { ...defaultHttpErrorMessage , ...customMessage };
    return merged[statusCode] || 'something went wrong !'
}

export default getHttpErrorMessage;