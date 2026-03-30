import React from 'react'
import {useSelector} from "react-redux"

function Card() {
  const selector = useSelector((state)=>state.card.value)
  console.log(selector);
  return (
    <div>
      <h1>Cate is {selector}</h1>
    </div>
  )
}

export default Card
