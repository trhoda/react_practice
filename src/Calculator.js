import React from 'react';
import Screen from './Screen.js';
import KeyBoard from './Keyboard.js'
import './Calculator.css';


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