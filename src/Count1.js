import React from "react";

export default class Count extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.count,
    };
  }

  add = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.add}> Add </button>
      </div>
    );
  }
}
