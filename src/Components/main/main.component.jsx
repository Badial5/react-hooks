import React from 'react'
import { useState } from 'react'


//CSS
import "./main.styles.scss"


const Main = () => {
    //useState
    const [state, setState] = useState(0)

    // const {method} = state.method;

    //handlers
    const decreaseButton = () => {
        setState((prevCount) => prevCount - 1 )
        // setState((prevState) => {
        //     return ({count: prevState.count - 1}, {method: prevState.method = 'Minus'} )
        // })
    }

    const increaseButton = () => {
        setState((prevCount) => prevCount + 1 )
    }


  return (

    <div className='container'>

        <h1 className='title'>useState Hooks</h1>

    <button onClick={decreaseButton} className="button-21" >-</button>
        <span className='text-content' >{state} </span>
    <button onClick={increaseButton} className="button-21" >+</button>

    </div>




  )
}

export default Main
