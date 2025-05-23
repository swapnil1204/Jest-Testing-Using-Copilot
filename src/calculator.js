import React, { Component } from 'react';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input1: '',
            input2: '',
            result: null,
        };
    }

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    add = () => {
        const { input1, input2 } = this.state;
        this.setState({ result: parseFloat(input1) + parseFloat(input2) });
    };

    subtract = () => {
        const { input1, input2 } = this.state;
        this.setState({ result: parseFloat(input1) - parseFloat(input2) });
    };

    multiply = () => {
        const { input1, input2 } = this.state;
        this.setState({ result: parseFloat(input1) * parseFloat(input2) });
    };

    divide = () => {
        const { input1, input2 } = this.state;
        if (parseFloat(input2) !== 0) {
            this.setState({ result: parseFloat(input1) / parseFloat(input2) });
        } else {
            this.setState({ result: 'Error: Division by zero' });
        }
    };

    clear = () => {
        this.setState({ input1: '', input2: '', result: null });
    };

    render() {
        const { input1, input2, result } = this.state;

        return (
            <div>
                <h1>Calculator</h1>
                <input
                    type="number"
                    name="input1"
                    value={input1}
                    onChange={this.handleInputChange}
                    placeholder="Enter first number"
                />
                <input
                    type="number"
                    name="input2"
                    value={input2}
                    onChange={this.handleInputChange}
                    placeholder="Enter second number"
                />
                <div>
                    <button onClick={this.add}>Add</button>
                    <button onClick={this.subtract}>Subtract</button>
                    <button onClick={this.multiply}>Multiply</button>
                    <button onClick={this.divide}>Divide</button>
                    <button onClick={this.clear}>Clear</button>
                </div>
                <h2>Result: {result !== null ? result : 'No calculation yet'}</h2>
            </div>
        );
    }
}

export default Calculator;