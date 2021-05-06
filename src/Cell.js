import React, { Component } from 'react'

class Cell extends Component {
    constructor(props){ //allows us to get access and inherit to props from parent 
        super(props) // allows to use those props in a state

        this.state = {
            color : props.value //'props.value' or 'value'
        }
    }
//Created a handler method to handle the trigger of the synthetic event 
    changeColor = (e) => {
        console.log(e)
        this.setState({color : '#333'})
    }

    render(){
        return (
            <div onClick={this.changeColor} className="cell" style={{backgroundColor: this.state.color}}>{this.state.color}</div>
        )
    }
}
export default Cell;


/**
 * 
 * NOTE:
 * 
 * ?What is happening?
 * *At this point we already have a matrix in the browswer that is invoking our <Cell />
 * *Inside our <Cell /> we want to inherit the props from the parent and set an initial state witht he props passed from its parent Component 
 * !To inheirt the props from the parent we pass (props) into the constructor() and inside super()
 * !set the key as 'color' and its value as the props passed from the parent `props.value`
 */
