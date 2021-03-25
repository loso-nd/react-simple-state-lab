import React, { Component } from 'react'

class Cell extends Component {
    constructor(props){
        super(props)

        this.state = {
            color : values
        }
    }

    render(){
        return (
            <div className="cell" style={{backgroundColor: this.state.color}}>{this.state.color}</div>
        )
    }
}
export default Cell;
