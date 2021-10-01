const initialstate ={
    bal:10000
}
const reducer = (state=initialstate, action)=>{

    switch(action.type){
         case "WITHDRAW_GST":
            return{
                bal:state.bal+action.value
            }
         case "DEPOSIT":
            return{
                bal:state.bal+action.value
            }
        default:
            return state
    }

}
export default reducer;