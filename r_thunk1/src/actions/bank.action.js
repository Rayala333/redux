export const withdraw = (val)=>{
    return { type:"WITHDRAW" , value:val}
}

export const depostit =(val)=>{
    return { type:"DEPOSIT" , value:val}
}

export const depositSync = (value)=>{
    return(dispatch)=>{

        setTimeout(()=>{
                dispatch(depostit(value))
        },5000)
    }
}

export const withdrawSync = (value)=>{
    return(dispatch)=>{

        setTimeout(()=>{
                dispatch(withdraw(value))
        },5000)
    }
}