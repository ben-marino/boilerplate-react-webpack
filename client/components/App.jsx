import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import Greeter from './Greeter'


class App extends React.Component {

  render() {
    return (
      <>
        <Router>
          <h1>React development has begun!</h1>
          <Link to='/'>Home</Link>
          <Link to='/greet/hi'>Hi</Link>
          <Link to='/greet/yo'>Yo</Link>
          <Route path='/' exact={true}>
            <Greeter greeting="sup"/>
          </Route>
          <Route path='/greet/:greeting' exact={true} component={Greeter} />

        </Router>
      </>
    )
  }
}

export default App
