import React, { useEffect } from 'react';
import { useSelector, useDispatch} from "react-redux";
// import * as action from "./actions/productActions"


const App = () => {


  const res = useSelector(state => state);

    console.log(res);

  // const dispatch = useDispatch();

  // useEffect(()=>{
  //     dispatch(action.getProducts())

      
  // },[])

  return (
    <React.Fragment>
        hello
    </React.Fragment>
  )
}
export default App;
