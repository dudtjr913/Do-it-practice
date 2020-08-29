/* import React, { createRef, useRef } from "react";

export default class Ref extends React.Component {
  constructor(props) {
    super(props);
    this.refInput = createRef();
    this.focusInput = () => {
      if (this.refInput) {
        this.refInput.current.focus();
      }
    };
  }

  componentDidMount() {
    console.log("hello");
    this.focusInput();
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.refInput}></input>
        <input type="button" onClick={this.focusInput} value="Focus"></input>
      </div>
    );
  }
}
*/
