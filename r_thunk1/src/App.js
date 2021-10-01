
// class level components

import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "./actions/bank.action"

class App extends Component{
  constructor(props){
    super(props)
  } 

  deposit = ()=>{
    this.props.fun_one(5000);
  }

  withdraw = ()=>{
    this.props.fun_two(4000);
  }


  render(){
    return(
      <React.Fragment>
        <center>
          <h1>{this.props.bal}</h1>
          <button onClick={this.deposit}>Deposite</button>
          <button onClick={this.withdraw}>Withdraw</button>
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

    fun_one : (value)=>dispatch(action.depositSync(value)),
    fun_two : (value)=>dispatch(action.withdrawSync(value))

  }
};
export default connect( resive,send) (App);



// class level components end



// functional level components


// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import * as action from "./actions/bank.action"



// const App = () => {

//       const result = useSelector(state => state);

//       const dispatch = useDispatch()


      

//       const deposit = ()=>{
//             dispatch(action.depositSync())
            
//           }
    
//       const withdraw = ()=>{
//           dispatch(action.withdrawSync())
//       }

//   return (
//     <React.Fragment>
//       <h1>{result.bal}</h1>
//       <button onClick={this.deposit}>Deposite</button>
//       <button onClick={this.withdraw}>Withdraw</button>
      
//     </React.Fragment>
//   )
// }
// export default App;