import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
   constructor(props){
       super(props)

       this.state = {
           parentName: 'Parent'
       }
       this.greetPrent = this.greetPrent.bind(this)
   }
   greetPrent(clhildName) {
       console.log("*****************")
       alert(`Hello ${this.state.parentName} from ${clhildName}` )
   }
    render() {
        return (
            <div>
                <ChildComponent greetHandler = {this.greetPrent} />
            </div>
        )
    }
}

export default ParentComponent
