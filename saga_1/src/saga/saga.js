//hear we take latest requst and manipulate the request and fire the new requst

import {takeLatest,put} from 'redux-saga/effects';



export function *modifyAmt(action){
        yield put({type:"WITHDRAW_GTS" , value:action.value(action.value*0.18)})
}


export function *withdraw(action){
        yield takeLatest("WITHDRAW" , modifyAmt)
}

