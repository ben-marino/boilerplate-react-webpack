import React from 'react'

function FunctionClick() {

    function clickHandler(){
        console.log('Button clicked')
    }

    return (
        <div>
          <button onClick={clickHandler}>Twig</button>
          <button onClick={clickHandler}>Wood</button>
          <button onClick={clickHandler}>Stone</button>
          <button onClick={clickHandler}>Metal</button>
          <button onClick={clickHandler}>Armored</button>
        </div>
    )
}


export default FunctionClick