import React from "react";
import Count from "./Count1";
import Count2 from "./Count2";
export default class CountParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 2,
    };
  }

  add = () => {
    this.setState(({ count }) => ({ count: count + 10 }));
  };

  render() {
    return (
      <div>
        <Count count={this.state.count} />
        <Count2 count={this.state.count} />
        <button onClick={this.add}>+10 Add</button>
      </div>
    );
  }
}
