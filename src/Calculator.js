import React, { useState } from 'react';
import Screen from './Screen.js';
import KeyBoard from './Keyboard.js'
import './Calculator.css';

//ignore the state stuff for now casue its a bit more complicated
//but please use functions and hooks, class components are absolute garbage
const AltCalc = (props) => {

    const [state, setState] = useState({ expr: '0' })

    const handleClick = (e) => {
        //code that changes state
    }

    return (
        <div className="Calculator">
            <Screen expr={state.expr} />
            <KeyBoard />
        </div>
    )
}

//use functional components!!!
class Calculator extends React.Component {

    state = { expr: '0' }

    handleClick(e) {
        //code that changes state expr, to pass down to button onlick goes here
    }

    render() {
        return(
            <div className="Calculator">
                <Screen expr={this.state.expr} ></Screen>
                <KeyBoard></KeyBoard>
            </div>
        );
    }
}
export default Calculator;