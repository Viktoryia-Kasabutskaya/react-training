import { Component } from "react";

import CounterView from "../components/CounterView";

class CounterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countValue: 0,
      isEven: true,
    };
  }

  handleIncrement = () => {
    this.setState((previousState) => {
      console.log(previousState);
      const incrementValue = previousState.countValue + 1;
      const numericalValue =
        incrementValue % 2 === 0 ? "Number is even" : "Number is odd";
      return {
        countValue: incrementValue,
        numericalValue,
        isEven: !this.state.isEven,
      };
    });
  };

  handleReset = () => {
    this.setState({ countValue: 0 });
  };

  handleDecrement = () => {
    if (this.state.countValue > 0) {
      this.setState((previousState) => {
        const incrementValue = previousState.countValue - 1;
        const numericalValue =
          incrementValue % 2 === 0 ? "Number is even" : "Number is odd";
        return {
          countValue: incrementValue,
          numericalValue,
          isEven: !this.state.isEven,
        };
      });
    }
  };

  render() {
    return (
      <CounterView
        isEven={this.state.isEven}
        counterValue={this.state.countValue}
        numericalValue={this.state.numericalValue}
        handleIncrement={this.handleIncrement}
        handleReset={this.handleReset}
        handleDecrement={this.handleDecrement}
      />
    );
  }
}

export default CounterContainer;
