const initialstate = {
    age:20
}

const reducer = (state=initialstate , action)=>{

        switch(action.type){
            case "Age_up":
                return{
                    age:state.age + action.value
                }
            case "Age_down":
                return{
                    age:state.age - action.value
                }
            default :
            return state;
            
        }
}
export default reducer;