import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Counter.css'

class Counter extends Component {

    constructor(){
        super()
        this.state = {
            counter : 0
        }

        this.increment = this.increment.bind(this)
        this.reset = this.reset.bind(this)
    }

    increment(by){
        this.setState(
            (prevState) => {
            return {counter: prevState.counter + by}
        })
    }

    reset(){
        this.setState(
            {
                counter : 0
            }    
        )
    }

    render() {
        return (
            <div className="App">
                <div>
                    
                </div>
              <CounterButton incrementMethod={this.increment}/>
              <CounterButton by={-1} incrementMethod={this.increment}/>
              <CounterButton by={+5} incrementMethod={this.increment}/>
              <CounterButton by={-5} incrementMethod={this.increment}/>
              <span className="count">{this.state.counter}</span> 
              <div> <button className="reset" onClick={this.reset}>Reset Counter</button> </div>
            </div>
          )
    }
}

class CounterButton extends Component {

    // constructor(){
    //     super()
    //     // this.state = {
    //     //     counter : 0
    //     // }

    //     this.increment = this.increment.bind(this)
    // }

    // increment(){
    //     // this.setState({
    //     //     counter: this.state.counter + this.props.by
    //     // })

    //     this.props.incrementMethod(this.props.by);
    // }

    render(){
        return (
            <div className="counter">
               <button onClick={() => this.props.incrementMethod(this.props.by)} > {this.props.by}</button>
            </div>
        )
    }
}


CounterButton.defaultProps = {
    by : 1
}

CounterButton.propTypes = {
    by : PropTypes.number
}


export default Counter