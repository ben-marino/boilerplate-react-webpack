import React from 'react'

export default class Greeter extends React.Component {
    state = {
        greeting: "hello world",
        showGreeting: true
    }

    toggleGreeting = () => {
        this.setState({showGreeting: !this.state.showGreeting})
    }

    render() {
        let label = this.state.showGreeting ? 'hide' : 'show'
        return <div>
            Greetings
            <button onClick={this.toggleGreeting}>{label}</button>
            {this.state.showGreeting && this.state.greeting}
        </div>
    }
}
