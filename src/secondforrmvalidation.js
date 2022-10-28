

import "./style.css"
import { useFormik } from "formik";

import { signUpSchema } from "./yupsecond";
   


 const SecondFormvalidation =()=>{


  const initialValues={
    user:"",
    email:"",
    password:""
  }
const {handleBlur,handleSubmit,touched,handleChange,values,errors}=useFormik({
  initialValues:initialValues,
  validationSchema:signUpSchema,
  onSubmit:(value ,action)=>{
  value;
  action.resetForm();
  }
 
})

   return (<>
<form action="" onSubmit={handleSubmit}>
username22:<input type="text" name="user" onChange={handleChange} onBlur={handleBlur}  value={values.user}/>
{errors.user&&touched.user?(<p>{errors.user}*</p>):null}
email22:<input type="text" name="email" onChange={handleChange} onBlur={handleBlur}  value={values.email}/>
{errors.email&&touched.email?(<p className="red">{errors.email}*</p>):null}
password22:<input type="text" name="password" onChange={handleChange} onBlur={handleBlur}  value={values.password}/>
{errors.password&&touched.password ?(<p>{errors.password}</p>):null}

<button type="submit">submition</button>

</form>
   </>)
 }

 export default SecondFormvalidation;