import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService'

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <>
                        <HeaderComponent />
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" component={LoginComponent} />
                            <Route path="/welcome/:name" component={WelcomeComponent} />
                            <Route path="/welcome/:name" component={WelcomeComponent} />
                            <Route path="/todos" component={ListTodosComponent} />
                            <Route path="/logout" component={LogoutComponent} />
                            <Route component={ErrorComponent} />
                        </Switch>
                        <FooterComponent />
                    </>
                </Router>

                {/* <LoginComponent />
                <WelcomeComponent /> */}
            </div>
        )
    }
}

class WelcomeComponent extends Component{
    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div class="container">
                    Welcome {this.props.match.params.name}.
                    You can manage your todos <Link to="/todos">here</Link>. 
                </div>
            </>
        )        
    }
}

class HeaderComponent extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://reactjs.org/" className="navbar-brand">ReactJs Learning</a></div>
                    <ul className="navbar-nav">
                        <li><Link className="nav-link" to="/welcome/dummy">Home</Link></li>
                        <li><Link className="nav-link" to="/todos">Todos</Link></li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li><Link  className="nav-link" to="/login"> Login</Link></li>
                        <li><Link  className="nav-link" to="/logout">Logout</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

class FooterComponent extends Component {
    render() {
        return (
            <footer className="footer">
                <span className="text-muted">All Rights Reserved 2020 @noOne</span>
            </footer>
        )
    }
}

class LogoutComponent extends Component {
    render() {
        return (
            <>
                <h1>You are logged out</h1>
                <div className="container">
                    See you Soon
                </div>
            </>
        )
    }
}

class ListTodosComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            todos : 
            [
                {id: 1, description: 'Learn React', done:false, targetDate: new Date()},
                {id: 2, description: 'Learning Fullstack', done:false, targetDate: new Date()},
                {id: 3, description: 'Covid Info', done:false, targetDate: new Date()}
            ]
        }
    }
    render() {
        return(
            <div>
                <h1>List Todos</h1>
                <div class="container">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>description</th>
                                <th>Target Date</th>
                                <th>Is Completed</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map (
                                    todo =>
                                    <tr>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                    </tr>
                                )                         
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        ) 
    }
}

function ErrorComponent() {
    return <div>An Error Occurred</div>
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
            this.props.history.push(`/welcome/${this.state.username}`)
            // this.setState({showSuccessMessage:true})
            // this.setState({hasLoginFailed: false})
        }            
        else{
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed: true})
        }
            
    }

    render(){
        return(
            <div>
                <div className="container">
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Sucessful</div> }
                    User Name: <input type="text" 
                    name="username" 
                    value={this.state.username} 
                    onChange={this.handleChange}/>
                    Password: <input type="password" 
                    name="password" 
                    value={this.state.password}
                    onChange={this.handleChange} />
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>

        )
    }
}

export default TodoApp