import React from 'react'
import {Link} from 'react-router-dom'

export default class Greeter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            greeting: props.greeting || props.match.params.greeting,
            showGreeting: true
        }
    }

    toggleGreeting = () => {
        this.setState({showGreeting: !this.state.showGreeting})
    }

    goSomewhere = () => {
        this.props.history.push('/greet/LetMeOut')
    }

    render() {
        let greeting = this.props.greeting || this.props.match.params.greeting
        console.log(this.props)
        let label = this.state.showGreeting ? 'hide' : 'show'
        return <div>
            <h2>{this.state.showGreeting && greeting}</h2>
            <button onClick={this.toggleGreeting}>{label}</button>
            <button onClick={this.goSomewhere}>Go Somewhere</button>
            <Link to='/greet/yoza'>Yoza</Link>
        </div>
    }
}
