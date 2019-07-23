import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props){
        super(props)
        this.state  ={
            isLoggedin: true
        }
    }
    render() {
        // if(this.state.isLoggedin){
        //     return (
        //         <div>
        //             Welcome Shailendra
        //         </div>
        //     )
           
        // }
        // else {
        //      return (
        //          <div>
        //              Welcome Guest
        //          </div>
        //      )
        // }

        // **************** Using Element Variables ******************
        //   let message 
        //   if(this.state.isLoggedin){
        //       message = <div>Welcome Shailendra</div>
        //   }
        //   else {
        //       message = <div>Welcome Guest</div>
        //   }
        //   return <div>{message}</div>

       //  ************* Tarrnary condition operator *********** 
        // return (
        //     this.state.isLoggedin ?
        //     <div>Welcome Shailendra</div>:
        //     <div>Welcome Guest</div>
        // )

        // ************** short circuit ************

       return this.state.isLoggedin && <div>Welcome Shailendra</div>

        // return (
        //     <div>
        //     <div>
        //        Welcome Shailendra 
        //     </div>
        //     <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting
