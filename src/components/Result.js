import React from 'react'
import { game } from '../utils/contants'

const Result = ({changePage}) => {
  return (
    <div>
        <h2>Lose\Win</h2>
        <h3>1-0</h3>
        <button onClick={() => changePage(game)}>Again ?</button>
    </div>
  )
}

export default Result