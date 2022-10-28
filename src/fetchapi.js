import { useEffect, useState } from "react";
import "./style.css"

function Fetchapi(){

    const [city ,setCity]=useState(null)
    const [search, setSearch]=useState("Mumbai")

    useEffect(()=>{
        const fetchApi=async()=>{
            const url=` https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=506ac313c15008723f435b14efc3aed3`
            const response=await fetch(url)
            const resJson=await response.json();
            setCity(resJson.main)
        };
      
        fetchApi()
    },[search])
    return (<>

    <div className="box">
        <h2 className="weather_heading">CURRENT WEATHER TEMPERETURE</h2>

    <input type="search"  onChange={(event)=>{setSearch(event.target.value)}}  className="search"/>
  

   {!city ? (
       <p>No data found</p>
   ):(<div ><h3 className="heading">{search}</h3>
   <h2 className="heading">Current tempereture is <span id="spancolor">{city.temp}°C</span></h2>
   <h2 className="heading">Current pressure is  <span id="spancolor">{city.pressure}</span></h2>
   {/* <h2 className="heading">this is my fetch api cloud <span id="spancolor">{city.clouds}</span></h2> */}
   </div>)

   }
      </div>
  
    </>)
}
export default Fetchapi;