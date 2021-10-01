const {createStore} = require("redux");

const initialstate ={
    age:10
};

const reducer =(state=initialstate,action)=>{

    switch(action.type){
        case "age-up":
            return{
                age:state.age+action.value
            }
            break;
         case "age-down":
             return{
                age:state.age-action.value
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

store.dispatch({type:"age-up" , value:2})
store.dispatch({type:"age-up" , value:4})
store.dispatch({type:"age-down" , value:6})