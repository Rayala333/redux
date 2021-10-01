const initialstate={
    loding : false,
    products : [],
    err : ""
}
const productReducer = (state=initialstate, action)=>{
    switch(action.type){
            case "HIT_SERVER":
            case "CATCH_POSITIVE_RESPONCE":
            case "CATCH_ERROR_RESPONCE": 
                return{
                    ...state,
                    loding:action.loding,
                    err:action.err,
                    products:action.value
                }
            // case "CATCH_POSITIVE_RESPONCE":
            // case "CATCH_ERROR_RESPONCE": 
            default :
            return state;
    }
};

export default productReducer;