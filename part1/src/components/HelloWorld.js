import React, { Component } from 'react';

// console logs in here are for demo purposes
class HelloWorld extends Component {

  static propTypes = {
    name: React.PropTypes.string,
  };

  static defaultProps = {
    name: 'bob',
  };

  constructor() {
    super();
    this.state = {
      counter: 0,
    };

    this.increment = this.increment.bind(this);
  }


  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    console.log('Next Props: ', nextProps);
    console.log('Next State: ', nextState);

    // return nextState.counter % 2;
    return true;
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
    console.log('Prev Props: ', prevProps);
    console.log('Prev State: ', prevState);
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    console.log('Render');
    return (
      <div>
        <h1>
          Hello {this.props.name} World: {this.state.counter}
        </h1>
        <input type="button" onClick={this.increment} defaultValue="Increment" />
      </div>
    );
  }
}

export default HelloWorld;
