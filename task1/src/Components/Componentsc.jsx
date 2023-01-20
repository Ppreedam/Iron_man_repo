import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import store from '../Appreducer/Store'

const Componentsc = () => {
  const data = useSelector((Store) => Store.reducer.product);

  return (
    <>
      <div>
        <h1>Components C</h1>
        <p>your query:-🤣😂 <strong>{data}</strong> </p>
      </div>
    </>
  )
}

export default Componentsc