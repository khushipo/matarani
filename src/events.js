import { useState } from "react";

function Event(){
  const red="red"
const [bg,setBg]=useState(red ,"yellow")
     const bgChange=()=>{
         const any="yellow"
         setBg(any);
     }
 
    return (<div>
    <h2>this is my event class</h2>
    <div  style={{backgroundColor:bg}}>
    <button onClick={bgChange} >{bg}🤩</button>
    </div>
    </div>)
}

export default Event;
