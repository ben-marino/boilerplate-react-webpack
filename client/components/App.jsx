import React from 'react'
import Greeter from './Greeter'

class App extends React.Component {

  render() {
    return (
      <>
        <h1>React development has begun!</h1>
        <Greeter greeting="sup"/>
      </>
    )
  }
}

export default App
