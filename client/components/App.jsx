import React from 'react'

class App extends React.Component {
  state = {
    greeting: "hello world",
    showGreeting: true
  }

  toggleGreeting = () => {
    this.setState({showGreeting: !this.state.showGreeting})
  }

  render() {
    return (
      <>
        <h1>React development has begun!</h1>
        <button onClick={this.toggleGreeting}>Click</button>
        {this.state.showGreeting && this.state.greeting}
      </>
    )
  }
}

export default App
