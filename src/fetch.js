import { useState } from "react";
import sdata from "./sdata"
import Props from "./props"

function Fetch(){
    const [data,setData]=useState(sdata)
    const filterItem=(category)=>{
        const updateList=sdata.filter((curElem)=>{
            return curElem.category===category;
        })
        setData(updateList)
    }

    return (<>
     <button onClick={()=>filterItem("jai")}>jai</button>
    <button onClick={()=>filterItem("title")}>title</button>
    <button onClick={()=>filterItem("name")}>name</button>
    <button onClick={()=>filterItem("age")}>age</button>
    <h2>jai mata </h2>
    <Props anydata={data}/>
    </>)
}

export default Fetch;