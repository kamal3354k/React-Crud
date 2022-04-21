import React, { Component } from 'react'




export default class ComponentWillUnmountByButton extends Component {
    constructor(){
        super();
        this.state={
            bool:true
        }
    }
  render() {
    return (
        <>
        {this.state.bool?<ComponentWillUnmount/>:null}
        <button onClick={()=>this.setState({bool:!this.state.bool})}>Toggle Removed</button>
        </>
        
    )
  }
}



export  class ComponentWillUnmount extends Component {
  componentWillUnmount(){
      alert("Component Removed")
  }
    render() {
    return (
      <div>Component Will Unmount</div>
    )
  }
}