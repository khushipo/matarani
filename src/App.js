
import {Routes ,Route} from "react-router-dom"
import Layout from "./layout"
import Blog from "./blog"
import About from "./about"
import Contact from "./contact"
import Home from "./home"
import Fetch from "./fetch"
import Newprops from "./newprops"
import Use from "./usestate"
 import Child from "./children"
 import Fetchapi from "./fetchapi"
 import Formvalidation from "./formvalidation"
 import SecondFormvalidation from "./secondforrmvalidation"
 import Timestring from "./timestring"
 import Propssecond from "./propscopy"
import Channel from "./state"
import Event from "./events"
import Sliding from "./sliding"
// import SliderDate from "./sliderData"

// import Slider from "./images"

// import Props from "./props"


function App(){
    return (<>

    <Sliding />
    {/* <Slider/> */}
    <Channel/>
    <Event/>
    <Propssecond/>
 
    <Timestring/>
    <SecondFormvalidation/>
    <Formvalidation/>
    <Fetchapi/>
<Child/>
<Fetch/>
    <Use/>

   <Newprops/>

<Routes>
    <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="About" element={<About/>}/>
        <Route path="Contact" element={<Contact/>}/>
        <Route path="Blog" element={<Blog/>}/>
        {/* <Route path="Props" element={<Props/>}/> */}
       
       
        </Route>
</Routes>

    </>)
}

export default App;



