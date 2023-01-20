import * as types from "./actionType";

export const getdata =(data)=>(dispatch)=>{
    // console.log(data)
    dispatch({type:types.GET_RESPONSE,payload:data})
}