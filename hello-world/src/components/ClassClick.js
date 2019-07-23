import React, { Component } from 'react'

export class ClassClick extends Component {
    
    clckHandler(){
       console.log("Clicked the button")
   }
    render() {
        return (
            <div>
                <button onClick = {this.clckHandler}>Click Me</button>
            </div>
        )
    }
}

export default ClassClick
