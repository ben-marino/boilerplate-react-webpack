const { Component } = require("react")

import React from 'react'

class EventBind extends Component {



render() {
    return (
        <div>
        
            <div>{this.state.message}</div>
            <button>Click</button>
        </div>
    )
}



}
 export default EventBind
