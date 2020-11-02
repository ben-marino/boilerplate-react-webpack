import React from 'react'
import Greeter from './Greeter'

class App extends React.Component {
  state = {
    greeting: "hello world",
    showGreeting: true
  }

  toggleGreeting = () => {
    this.setState({showGreeting: !this.state.showGreeting})
  }

  render() {
    let label = this.state.showGreeting ? 'hide' : 'show'
    return (
      <>
        <h1>React development has begun!</h1>
        <Greeter />
        <button onClick={this.toggleGreeting}>{label}</button>
        {this.state.showGreeting && this.state.greeting}
      </>
    )
  }
}

export default App
