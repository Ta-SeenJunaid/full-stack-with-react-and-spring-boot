import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService'


class WelcomeComponent extends Component{
    constructor(props) {
        super(props)
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
    }

    retrieveWelcomeMessage() {
        HelloWorldService.executeHelloWorldService()
        .then( response => console.log(response) )
        .catch(console.log("Failed to get the response"))
    }
    
    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome {this.props.match.params.name}.
                    You can manage your todos <Link to="/todos">here.</Link>
                </div>
                <div className="container">
                    Click here to get a customized welcome message.
                    <button onClick={this.retrieveWelcomeMessage}
                        className="btn btn-success">Get Welcome Messages</button>
                </div>
            </>
        )
        
    }
}

export default WelcomeComponent