
const {createStore} = require("redux")

const initialstate={
    bal:10000
};

const reducer =(state=initialstate,action)=>{

    switch(action.type){
        case "withdraw":
            return{
                bal:state.bal-action.value
            }
            break;
         case "deposit":
             return{
                bal:state.bal+action.value
            }
            break;
        default:
            return state
    }
}
const store = createStore(reducer);


store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch({type:"withdraw" , value:2000})
store.dispatch({type:"deposit" , value:4000})
