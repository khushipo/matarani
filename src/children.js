// import React from "react"
// import { useContext } from "react"
// import { Apple } from "./usecontext"
// function Child(){
//     const userData=useContext(Apple)
 
//     return (<>
//     <h2>my name is {userData.name} and my age is {userData.age} and my last name is {userData.lname}</h2>

//     </>)
// }

// export default Child;
import { useContext } from "react"
import {Anything} from "./usecontext"

function Child(){
    const user=useContext(Anything)
    return (<>
    <h2>jai mata di {user.name}</h2>
    </>)
}
export default Child;