import React from 'react';
import { connect } from 'react-redux';
import { incrementByAmount } from '../actions';

class Counter extends React.Component {
  state = {
    amount: 3,
  };
  render() {
    return (
      <div>
        <h1>Counter {this.props.counter}</h1>
        <button
          onClick={() =>
            this.props.incrementByAmount(Number(this.state.amount))
          }
        >
          Increment amount
        </button>
        <input
          name='amount'
          value={this.state.amount}
          onChange={(e) => this.setState({ amount: e.target.value })}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
  incrementByAmount: (amount) => dispatch(incrementByAmount(amount)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
