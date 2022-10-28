// import React from "react";

// class  Channel extends React.Component{
//     constructor(){
//       super();
//       this.state={
//           name:`i am khushboo`
//       }
//     }

//     subscribe(){
//       this.setState({
//         name:"jai radhe"
//       })
       
//     }
   
// render(){
//     return    (
//         <div>
//          <h2> {this.state.name}</h2>

//          <button onClick={()=>{this.subscribe()}}>subscribe</button>
//          </div>
//     )
//     }
// }
// export default Channel;

// import React from "react";
// class Channel extends  React.Component{
//     constructor(){
//         super();
//         this.state={
// msg:"jai maiya rabni ki jai "
//         }
//     }
//     subscribe(){
//         this.setState({
//        msg:"thanks for subscribing my you tube channel"
//         })
//     }
//     render (){
//         return (<>
//         <h2>{this.state.msg}</h2>
//         <button onClick={()=>{this.subscribe()}}>subscribe</button>
//         </>)
//     }
// }
// export default Channel;

import React from "react";

class Channel extends React.Component{

    constructor(){
        super();
        this.state={
            msg:`this is my class component`
        }
    }
    nels(){
        this.setState({
            msg:"this is my function component"

        })
    }


    render(){
        return (<>
        <h2>{this.state.msg}</h2>
        <button onClick={()=>this.nels()}>change</button>
        </>)
    }
}
export default Channel;