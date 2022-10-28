import { useEffect, useState } from "react"

function Useeffect(){

   const [width,setWidth]= useState(window.screen.width)


   const curScreenWidth=(()=>{
    setWidth(()=>window.innerWidth)
   })
   useEffect(()=>{
       window.addEventListener("resize" , curScreenWidth)
       return ()=>{
           window.removeEventListener("resize" ,curScreenWidth)
       }
   })
    return (<>
    <h2>this is my useeffect {width}</h2>
    </>)
}
export default Useeffect