import React from 'react';
import { connect } from 'react-redux';
import './App.css';

const App = (store) => {

  const fun_one = ()=>{
      store.age_up()
  }
  const fun_two = ()=>{
   store.age_down()
  }
  return (
    <React.Fragment>
      <center>
        

        <marquee   behavior="side"  direction="left" scrollamount="7"  onmouseover="this.stop();" onmouseout="this.start();" > 

        <h1>Age Of The Person:-- {store.age}</h1>
		
		</marquee>
        <button onClick={fun_one} >AGE_UP</button>
        <button onClick={fun_two} >AGE_DOWN</button>
        </center>
    </React.Fragment>
  )
}
const receive = (state)=>{
  return{
    age:state.age
  }
}
const send = (dispatch)=>{
  return{
    age_up:()=>{dispatch({type:"Age_up" , value:4})},
    age_down:()=>{dispatch({type:"Age_down" , value:4})}
  }
}

export default connect(receive,send) (App);
