
import * as Yup from "yup"
export const signUpSchema=Yup.object({
    name:Yup.string().min(2).max(10).required("please enter yiur user name"),
    email:Yup.string().email().required("please enter yiur user email"),
    password:Yup.string().min(2).max(10).required("please enter yiur user password")
})
