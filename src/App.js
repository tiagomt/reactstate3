import React from "react"
import './style.css'

export default function App() {

  const [count, setCount] = React.useState(0)

  function clickPlus() {

    // setCount(count + 1)
    // count como parametro refere-se ao atual de count
    // alterando valor utilizando callback
    setCount((count) => {

      return count + 1

    })

  }


  function clickMinus() {

    // setCount(count - 1)
    setCount((count) => {

      return count - 1

    })

  }

  return (
    <div className="counter">
      <button className="counter--minus" onClick={clickMinus}>–</button>
      <div className="counter--count">
        <h1>{count}</h1>
      </div>
      <button className="counter--plus" onClick={clickPlus}>+</button>
    </div>
  )
}
