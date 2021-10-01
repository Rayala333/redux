import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css';


class App extends Component {
  // constructor(props){
  //   super(props)
  // }


  fun_one = ()=>{

      this.props.deposit()

  }
  fun_two = ()=>{
      this.props.withdraw()
  }
  render() {
    return (
      <React.Fragment>
        <center>
            <h1>{this.props.bal}</h1>  
            <button  className="bt1" onClick={this.fun_one}>DEPOSIT</button>
            <button className="bt2" onClick={this.fun_two}>WITHDRAW</button>
        </center>
      </React.Fragment>
    )
  }
}

const receive = (state)=>{
  return{
    bal:state.bal
  }
}

const send = (dispatch)=>{
  return{
    deposit : ()=>{dispatch({type:"DEPOSIT" , value:5000})},
    withdraw : ()=>{dispatch({type:"WITHDRAW" , value:2000})}
  }
}
export default connect(receive,send) (App);
