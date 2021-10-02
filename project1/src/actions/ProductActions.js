import { HIT_SERVER,
         CATCH_POSITIVE_RESPONCE,
         CATCH_ERROR_RESPONCE } from "../types/ProductTypes";   
         
import Axios from "axios";


export const getProducts = ()=>{

    return async (dispatch)=>{

        dispatch({type:HIT_SERVER, loading:false, err:"", value:[]});
        try{
            const posRes= await Axios.get("http://localhost:8080/products");
            const {data} = posRes;

            dispatch({type:CATCH_POSITIVE_RESPONCE, loading:true, err:"", value:data});

        }catch(err){
            dispatch({type:CATCH_ERROR_RESPONCE, loading:true, err:err.message, value:[]})
        }

    };

};


