// import { createContext } from "react";
// const Apple=createContext();
// const Anything=({children})=>{
//     const userData={name:"khushboo" ,lname:"kumari" ,age:15}
//     return <Apple.Provider value={userData}>{children}</Apple.Provider>
// }

// export {Apple ,Anything}


import { createContext } from "react";
const Anything=createContext();

const Apple=({children})=>{
     const user={name:"rani" ,lname:"poddar" ,midname:"kumari"}
     return <Anything.Provider value={user}>{children}</Anything.Provider>
}
export {Apple,Anything};