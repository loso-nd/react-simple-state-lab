import React, { Component } from 'react'

class Cell extends Component {
    constructor(props){
        super(props)

        this.state = {
            color : props.value // Why does value work instead of values, since values is the name of the props that was passed in {Cell} from {Matrix}
        }
    }
//Created a handler method to handle the trigger of the synthetic event 
    changeColor = (e) => {
        console.log(e)
        this.setState({color : '#333' })
    }

    render(){
        return (
            <div onClick={this.changeColor} className="cell" style={{backgroundColor: this.state.color}}>{this.state.color}</div>
        )
    }
}
export default Cell;
