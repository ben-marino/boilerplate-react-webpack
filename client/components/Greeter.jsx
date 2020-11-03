import React from 'react'

export default class Greeter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            greeting: props.greeting,
            showGreeting: true
        }
    }

    toggleGreeting = () => {
        this.setState({showGreeting: !this.state.showGreeting})
    }

    render() {
        console.log(this.state)
        console.log(this.props)
        let label = this.state.showGreeting ? 'hide' : 'show'
        return <div>
            <h2>{this.state.showGreeting && this.state.greeting}</h2>
            <button onClick={this.toggleGreeting}>{label}</button>
        </div>
    }
}
