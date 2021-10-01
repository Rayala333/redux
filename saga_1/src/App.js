import React, { Component } from "react";
import { connect } from "react-redux";

class App extends Component{
  constructor(props){
    super(props)
  }

   fun_one = ()=>{
      this.props.withdaw()
  }

  fun_two = ()=>{
      this.props.deposit()
  }

  render(){
    return(
      <React.Fragment>
        <center>
        <h1>{this.props.bal}</h1>
        <button onClick={this.fun_one}>withdraw</button>
        <button onClick={this.fun_two}>deposite</button>
        </center>
      </React.Fragment>
    )
  }
}

const resive = (state)=>{
  return{
    bal:state.bal
  }
}
const send = (dispatch)=>{
    return{
      withdaw : ()=>dispatch({type:"WITHDRAW" , value:1000}),
      deposit : ()=>dispatch({type:"deposit" , value:1000})
    }
}
export default connect(resive,send) (App);