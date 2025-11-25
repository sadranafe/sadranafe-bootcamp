import * as yup from "yup";

export const contactEditSchema = yup.object({
    name: yup
        .string()
        .min(2, "must be 2 characters or more")
        .max(30, "must be 30 character or less")
        .matches(/^[A-Za-z\s]{2,30}$/, "Invalid name")
        .required("name is required"),
    email: yup
        .string()
        .email("Invalid email")
        .required("email is required"),
    phoneNumber: yup
        .string()
        .matches(/^[0-9]{10,15}$/, "Invalid phone number")
        .required("phone number is required"),
});