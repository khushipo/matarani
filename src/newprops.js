import { useState } from "react";
import Propstwo from "./propstwo"
import Api from "./api"


function Newprops() {
    const [second, setSecond] = useState(Api)

    const filterItem = (cateogory) => {
        const update = Api.filter((curElem) => {
            return curElem.cateogory === cateogory
        })
        setSecond(update)
    }


    return (<>
        <Propstwo Second={second} />

        <button onClick={() => filterItem("1")}>button1</button>
        <button onClick={() => filterItem("2")}>button2</button>
        <button onClick={() => filterItem("3")}>button3</button>

    </>)
}
export default Newprops;