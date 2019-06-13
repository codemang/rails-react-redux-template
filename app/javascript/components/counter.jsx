import React from "react"
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { incrementCount} from '../actions';

class Counter extends React.Component {
  render() {
    return (
      <div>
        <p>{`Count: ${this.props.count}`}</p>
        <button onClick={this.props.incrementCount.bind(this)}>Increment</button>
      </div>
    );
  }
}

const structuredSelector = createStructuredSelector({
  count: state => state.count,
});

const mapDispatchToProps = { incrementCount };

export default connect(structuredSelector, mapDispatchToProps)(Counter);
