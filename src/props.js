function Props({anydata}){
    console.log(anydata);
    return (<>
    {anydata.map((curElem)=>{
    return (<><h2>jai mata dii {curElem.name}</h2></>)
    })}
   
    </>)
}

export default Props;