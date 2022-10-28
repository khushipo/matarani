import { useState } from "react";
import {SliderDate} from "./sliderData"
import {FaArrowAltCircleRight , FaArrowAltCircleLeft}  from 'react-icons/fa'
function Sliding(){
  const [current,setCurrent]=useState(0)
  const length=SliderDate.length;


const nextArrow=()=>{
  setCurrent(current===length-1?0:current+1)
}
const prevArrow=()=>{
  setCurrent(current===0?length-1:current-1)
}
  
// if(!Array.isArray(SliderDate)||SliderDate.length<=0){
//       return null;
    
//   }
  return (<>
  <section className="slider">
  <FaArrowAltCircleRight className="right_arrow" onClick={nextArrow}/>
 <FaArrowAltCircleLeft className="left_arrow" onClick={prevArrow}/>
 {SliderDate.map((slide,index)=>{
   return (<>
   <div className={index===current?'slide active':'slide'} key={index}/>
   {index===current&&(  <img src={slide.url} alt="not found" className="images"/>)}
   </>)
 })}
 </section>
  <h2>jai mata dii</h2>
  </>)
}

export default Sliding