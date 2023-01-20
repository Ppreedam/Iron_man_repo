import React from 'react'
import { useDispatch } from 'react-redux'
import { getdata } from '../Appreducer/action';

const ComponentsB = () => {
  const dispatch = useDispatch();


  const handlechange = (e) => {
    // console.log(e.target.value)
    dispatch(getdata(e.target.value))

  }
  return (
    <>
      <div>
        <h1>Components B</h1>
        <input type="text" placeholder='Enter your Query' onChange={(e) => handlechange(e)} />
      </div>
    </>
  )
}

export default ComponentsB