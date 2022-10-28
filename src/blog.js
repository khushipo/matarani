
import React from 'react';
import { FaBeer } from 'react-icons/fa';

class Blog extends React.Component{
 constructor(){
     super();
     this.state={show:true}
 }
  render (){
    return (<>
    <div>
       { this.state.show ?
        <h3> Lets go for a <FaBeer />? </h3>
      :null}
   
       </div>

       <button onClick={()=>{this.setState({show:!this.state.show})}}>show</button>
     
       </>)
  }
 
}
export default Blog;