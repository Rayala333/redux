import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// import * as action from "./actions/ProductAction"



export default function App() {
  const res = useSelector(state=>state);

  console.log(res)

  const dispatch = useDispatch()

  // useEffect(()=>{
  //   dispatch(action.getProducts());
  // },[]);



  return (
    <React.Fragment>
      HELLO
    </React.Fragment>
  )
}
