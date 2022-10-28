import { useEffect, useState } from "react";
import Useeffect from "./useeffect"

function Use(){

const [text ,setText]=useState("jai mata rani ki jai this is my uppercase")
    
const handlebtn=()=>{
  let newText=text.toUpperCase();
   setText(newText)
}

 
const [brand, setBrand] = useState({car:"Ford" , model:"Mustang",year:"1964",color:"red"});

const [car ,setCar]=useState({coolor:"blue"})
const [count ,setCount]=useState(0)


useEffect(()=>{
    document.title=count
})


const changes=(()=>{
     

     setCar((prev)=>{
     return {...prev ,coolor:"pink"}
     })
})

const color=()=>{
    setBrand(prev=>{
      return {...prev ,color:"yellow"}
    })
}

    const [ant ,setAnt]=useState(0)
    const [ase ,setAse]=useState({username:""  , password:"" , email:"" ,file:""})
    const[record,setRecord]=useState([])


     
    const change=(event)=>{
       const name=event.target.name;
       const value=event.target.value;
       
        setAse(
        {... ase,[name]:value})}
       


        const handleSubmit=((e)=>{
          e.preventDefault();
   
         const newRecord={...ase  }
   
         setRecord([...record ,newRecord])
       
       })
    
        
      


   return (<>

   <Useeffect/>
   <h2>this my uppercase {text}</h2>
   <button onClick={handlebtn}>setTExt</button>

   <button onClick={()=>setCount(count+1)}>press</button>
   <br />
   <span>{count+1}</span>
   <button onClick={changes}>green</button>
   <br />
   <span>my car color is  {car.coolor}</span>

      <h1>My {brand.Ford}</h1>
      <br />
      <button onClick={color}>blue</button>
      <p>
        It is a {brand.car} {brand.model} from  {brand.year} and {brand.color}.
      </p>
 
   <button onClick={()=> setAnt(ant+1)}>+</button>
   <br />
   <span>{ant}</span>
   <br />
   <form action=""  onSubmit={handleSubmit}>
   <input type="text" name="username" value={ase.username}  onChange={change}/><br></br>
   <input type="text" name="password" value={ase.password}  onChange={change}/><br></br>
   <input type="text" name="email" value={ase.email}  onChange={change}/><br></br>
   <input type="file" name="file" value={ase.file}  onChange={change}/><br></br>
   <button type="submit" >submit</button>
   </form>


   <div>
     {
       record.map((curElem)=>{
         return (<div key={curElem.id} className="box">

         <h2 className="heading">username is: {curElem.username}</h2>
     <h2 className="heading">password is: {curElem.password}</h2>
     <h2 className="heading">email is: {curElem.email}</h2> 
     <h2 className="heading">file is :{curElem.file}</h2>
   

         </div>)    
 
       })
     }
    
    
   </div>
   <br />
   <span>{ase.username} jai radhe </span><br></br>
   <hr />
   <span>{ase.password}jai radhe </span><br></br>
   <hr />
   <span>{ase.email} jai radhe </span><br></br>
   <hr />

   </>)
}
export default Use;