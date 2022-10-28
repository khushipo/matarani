
import * as Yup from "yup";

export const signUpSchema=Yup.object({
    user:Yup.string().min(3).max(12).required("please enter the correct name"),
    email:Yup.string().email().required("please enter the correct email"),
    password:Yup.string().min(3).max(12).required("please enter the correct password")
})