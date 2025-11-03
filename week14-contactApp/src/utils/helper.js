const ValidateForm = (formData , setErrors) => {
    const { name , email , phoneNumber } = formData;
    const newErrors = {};
    
    const nameRegex = /^[A-Za-z\s]{2,30}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/;
    const phoneRegex = /^[0-9]{10,15}$/;
    const xssPattern = /<script|<\/script|onerror|onload|javascript:/i;

    if (!name.trim()) newErrors.name = "Name is required.";
    else if (xssPattern.test(name)) newErrors.name = "Invalid characters detected in name field.";
    else if (!nameRegex.test(name)) newErrors.name = "Name must contain only letters and spaces (2 - 30 characters).";

    if (!email.trim()) newErrors.email = "Email is required.";
    else if (!emailRegex.test(email)) newErrors.email = "Please enter a valid email.";

    if (!phoneNumber.trim()) newErrors.phoneNumber = "Phone number is required.";
    else if (!phoneRegex.test(phoneNumber)) newErrors.phoneNumber = "Invalid phone number format.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
}

const FormatPhoneNumber = phone => {
    return phone?.replace(/(\d{4})(\d{3})(\d{0,4})/, '$1-$2-$3');
}

export { ValidateForm , FormatPhoneNumber };