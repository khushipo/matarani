// import { useState } from "react";

// import { useState } from "react"

// const Timestring=()=>{
//     let ant=new Date().toLocaleTimeString()
//   const [time ,setTime]=  useState(ant)

//   const update=()=>{
//      ant=new Date().toLocaleTimeString()
//      setTime(ant)

   
//   }
//   setInterval(update ,1000)
//     return(<>
//     <h2>{time}</h2>
  
//     </>)
// }

// export default Timestring;
import {useState} from "react" 

const Timestring=()=>{
    let ant=new Date().toLocaleTimeString()
    const [time,setTime]= useState(ant)
  
  
    const update=()=>{

    ant=new Date().toLocaleTimeString()
    setTime(ant)
   }
   setInterval(update,1000)
  
    return (<>
    <h2>{time}</h2>
    </>)
}
export default Timestring 