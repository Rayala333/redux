
const initialState = {
    loading:false,
    products:[],
    err:"",
};

const productReducer = (state=initialState, action)=>{
        switch(action.type){
            case "HIT_SERVER":
            case "CATCH_POSITIVE_RESPONCE":
            case "CATCH_ERROR_RESPONCE":
                return{
                        ...state,
                        loading:action.loading,
                        products:action.value,
                        err:action.err,
                }
            default:
                return state;
        }
}
export default productReducer;