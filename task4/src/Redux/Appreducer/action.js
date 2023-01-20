import * as types from "./actionTypes";
import axios from "axios";

export const getData =()=>(dispatch)=>{
  dispatch({type:types.GET_DATA_REQUEST});
  axios(`https://dummyjson.com/products`)
  // .then((res)=>res.json())
  .then((res)=>{
    // console.log(res)
    dispatch({type:types.GET_DATA_SUCCESS,payload:res.data});
  })
  .catch((err)=>{
    dispatch({type:types.GET_DATA_ERROR});
  })

}






