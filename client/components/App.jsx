import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import Greeter from './Greeter'
import JediList from './JediList'


class App extends React.Component {

  render() {
    return (
      <>
        <Router>
          <Link to='/jedis/light'>Goodies</Link> |
          <Link to='/jedis/dark'>Baddies</Link>
          <Route path='/jedis/:force' component={JediList} />
        </Router>
      </>
    )
  }
}

export default App
