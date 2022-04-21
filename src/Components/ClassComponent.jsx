import React from "react";
import { PureComponent } from "react";

export default class MyPureComponent extends PureComponent{
  constructor(){
    super()
      this.state={
        counter:0
    }
  }
  render(){
    console.warn("Not Pure")
    return(
      <>
      <h1>Counter : {this.state.counter}</h1>
      <button onClick={()=>this.setState({counter:1})}>Click</button>
      </>
    )
  }
}