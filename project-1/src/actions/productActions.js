import Axios from 'axios';
import { HIT_SERVER, CATCH_POSITIVE_RESPONCE, CATCH_ERROR_RESPONCE } from '../types/productsTypes';

export const getProducts = ()=>{

    return async(dispatch)=>{
                dispatch({type:HIT_SERVER, value:"" , loading:false, err:[]});
            try{

               const posRes = await Axios.get("http://localhost:8080/products");
               const {data} = posRes;
               dispatch({ type:CATCH_POSITIVE_RESPONCE, value:data , loading:true, err:"" })

            }catch{
                    dispatch({ type:CATCH_ERROR_RESPONCE, value:[], loading:true , err:err.message })
                  };
                        }
                            };


