import React from "react";

export default class Count2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static getDerivedStateFromProps(props, state) {
    const count = props.count;
    console.log(`Derived : ${props.count} ${state.count} ${state}`);
    return {
      count,
      newCount: count === state.count ? state.newCount : count,
    };
  }

  add = () => {
    this.setState(({ newCount }) => ({ newCount: newCount + 1 }));
  };

  render() {
    return (
      <div>
        {this.state.newCount}
        <button onClick={this.add}>
          {console.log(`Render : ${this.state.newCount}`)} Add{" "}
        </button>
      </div>
    );
  }
}
