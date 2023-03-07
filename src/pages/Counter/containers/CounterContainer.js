import { Component } from "react";

import CounterView from "../../../components/CounterView";

class CounterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countValue: 0,
      isEven: true,
    };
  }

  componentDidUpdate(_, prevState) {
    if (prevState.countValue !== this.state.countValue) {
      this.setState({ isEven: this.state.countValue % 2 === 0 });
    }
  }

  handleIncrement = () => {
    this.setState({ countValue: this.state.countValue + 1 });
  };

  handleReset = () => {
    this.setState({ countValue: 0 });
  };

  handleDecrement = () => {
    if (this.state.countValue > 0) {
      this.setState({ countValue: this.state.countValue - 1 });
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
