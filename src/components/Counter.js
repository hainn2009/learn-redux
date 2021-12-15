import React from "react";
import { connect } from "react-redux";
import { incrementByAmount } from "../actions";
import { Button } from "reactstrap";

class Counter extends React.Component {
  state = {
    amount: 3,
  };
  render() {
    return (
      <div>
        <h1>Counter {this.props.counter}</h1>
        <Button color="danger" onClick={() => this.props.incrementByAmount(Number(this.state.amount))}>
          Increment amount
        </Button>
        <input name="amount" value={this.state.amount} onChange={(e) => this.setState({ amount: e.target.value })} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter,
});

// const mapDispatchToProps = (dispatch) => ({
//   incrementByAmount: (amount) => dispatch(incrementByAmount(amount)),
// });
const mapDispatchToProps = {
  incrementByAmount,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
