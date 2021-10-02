import React, { useEffect } from "react";
import {useSelector,useDispatch} from 'react-redux';

import * as actions from './actions/ProductActions';
import Loading from "./Loading";
import MessageBox from "./MessageBox";



function App(){

  const res = useSelector(state=>state);
  console.log(res);

  //destructuring
  const { loading,products,err } = res

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(actions.getProducts())
  },[dispatch])


return(
  <React.Fragment>

      {/* {JSON.stringify(res)}; */}
      {
        !loading?(<Loading></Loading>) : err === "Network Error"?(<MessageBox></MessageBox>) : (
          <div>
            {
              products.map((element,index)=>(
                <div className="myclass" style={{width:210}}>
                <div class="card" >
                    <img class="card-img-top" src={element.image}  style={{width:200}} alt="Card image cap"></img>
                    <div class="card-body" className="card-1">
                      <h5 class="card-title">{element.name}</h5>
                      <p class="card-text">* {element.rating}</p>
                      <p class="card-text">$ {element.cost}</p>
                      <a href="#" class="btn btn-primary">BUY NOW</a>
                    </div>
                </div>
                </div>
              ))
            }
          </div>
          // <div>{JSON.stringify(products)}</div>
          
        )
      }
  </React.Fragment>
)
}
export default App;