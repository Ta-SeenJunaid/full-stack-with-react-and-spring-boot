import React, {Component} from 'react'

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <LoginComponent />
            </div>
        )
    }
}

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'name',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        // this.handleUsernameChange = this.handleUsernameChange.bind(this)
        // this.handleUserPasswordChange = this.handleUserPasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)

    }

    // handleUsernameChange(event) {
    //     console.log(event.target.value)
    //     this.setState(
    //        {username : event.target.value}
    //     )
    // }

    // handleUserPasswordChange(event) {
    //     console.log(event.target.value)
    //     this.setState(
    //         {password: event.target.value}
    //     )
    // }

    handleChange(event){
        // console.log(this.state);
        this.setState(
            {
                [event.target.name]
                :event.target.value
            }
        )
    }

    loginClicked() {
        console.log(this.state)
        if(this.state.username==='dummy' && this.state.password === "123" ){
            console.log('Successful')
            this.setState({showSuccessMessage:true})
            this.setState({hasLoginFailed: false})
        }            
        else{
            console.log('Failed')
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed: true})
        }
            
    }

    render(){
        return(
            <div>
                {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div>Login Sucessful</div> }
                User Name: <input type="text" 
                name="username" 
                value={this.state.username} 
                onChange={this.handleChange}/>
                Password: <input type="password" 
                name="password" 
                value={this.state.password}
                onChange={this.handleChange} />
                <button onClick={this.loginClicked}>Login</button>
            </div>

        )
    }
}

export default TodoApp