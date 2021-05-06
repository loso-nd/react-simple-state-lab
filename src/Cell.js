import React, { Component } from 'react'

class Cell extends Component {
    constructor(props){ //allows us to get access and inherit to props from parent 
        super(props) // allows to use those props in a state

        this.state = {
            color : props.value
        }
    }
//Created a handler method to handle the trigger of the synthetic event 
    changeColor = (e) => {
        console.log(e)
        this.setState({color : '#333'})
    }

    render(){
        return (
            <div onClick={this.changeColor} className="cell" style={{backgroundColor: this.state.color}}>{this.setState.color}</div>
        )
    }
}
export default Cell;


/**
 * 
 * NOTE:
 * 
 * ?What is happening?
 * ?constructor
 * *At this point we already have a matrix in the browswer that is invoking our <Cell />
 * *Inside our <Cell /> we want to inherit the props from the parent and set an initial state witht he props passed from its parent Component 
 * !To inheirt the props from the parent we pass (props) into the constructor() and inside super()
 * !set the key as 'color' and its value as the props passed from the parent `props.value`
 * 
 * ?Event Handler method
 * * Create a handler method to handle the trigger of the synthetic event onClick
 * * changeColor() will take a param of `e`
 * * Always console.log(e) to ensure we are on the right track
 * * Goal of the changeColor is to update the state of our initial color in state
 * 
 * ?Render()
 * * return and <div/> JSX
 * * create the onClick which will listen for when a cell triggered and update the state's
 * * Recall setState() is async. It will run the method, execute the trigger and run the new state
 */
