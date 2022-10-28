import { useFormik } from "formik"
import "./style.css"
import { signUpSchema } from "./yup";
const initialValues={
    name:"",
    email:"",
    password:"",
}
const Formvalidation=()=>{
   const {values ,errors , touched,handleBlur ,handleChange, handleSubmit}= useFormik({
      initialValues:initialValues,
      validationSchema:signUpSchema,
      onSubmit:(value)=>{

          value;
          <p>{value}</p>

      },
     
      
     
    
    })
 
    
   
    return(<>
    <form action="" onSubmit={handleSubmit} >
   name: <input type="text" name="name" id="name" value={values.name} onChange={handleChange} onBlur={handleBlur}/>
    
   {errors.name&& touched.name?(<p p className="red">{errors.name}**</p>):null}
   email: <input type="text"  name="email" id="email" value={values.email} onChange={handleChange} onBlur={handleBlur}/>
   {errors.email&& touched.email?(<p className="red">{errors.email}**</p>):null}
   password: <input type="password" name="password" id="password" value={values.password} onChange={handleChange} onBlur={handleBlur}/>
    
   {errors.password&& touched.password?(<p p className="red">{errors.password}**</p>):null}
   <button type="submit">submit</button>
  
   </form>

    </>)
}
export default Formvalidation;