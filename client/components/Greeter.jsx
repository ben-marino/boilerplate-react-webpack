import React from 'react'

export default class Greeter extends React.Component {
    
constructor(props) {
    super(props)
    this.state = 
    {greeting: props.greeting,
    showGreeting: true
    }
}

    state = {
        greeting: "hello world",
        showGreeting: true
      }
    
      //needs to be fat arrow
      toggleGreeting = () => {
        this.setState({showGreeting: !this.state.showGreeting})
      }
    
    render () {
        let label = this.state.showGreeting ? 'on' : 'off'
        return (
            <div>
                Greetings
                <button onClick={this.toggleGreeting}>{label}</button>
                {this.state.showGreeting && this.state.greeting}
            </div>
        )
    }
}