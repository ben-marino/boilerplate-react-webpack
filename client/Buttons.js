import React from 'react'
import buildingMaterial from './buildingMaterial'



function FunctionClick () {

    function clickHandler(){
        console.log('Button clicked')
        const buildingMaterial = buildingMaterial.map(buildingItem => {
            return buildingItem * wood
            
        })
        console.log(buildingItem)
    }

    return (
        <div>
          

          <button onClick={clickHandler}>Wood</button>
          {/* <button className = 'counter'>+</button>
          <button className = 'counter'>-</button> */}
    

          <button onClick={clickHandler}>Stone</button>
          {/* <button className = 'counter'>+</button>
          <button className = 'counter'>-</button> */}
    

          <button onClick={clickHandler}>Metal</button>
          {/* <button className = 'counter'>+</button>
          <button className = 'counter'>-</button> */}
    

          <button onClick={clickHandler}>Armored</button>
          {/* <button className = 'counter'>+</button>
          <button className = 'counter'>-</button> */}
    
          
        </div>
    )
}


export default FunctionClick