import React, { PureComponent, createRef } from "react";
import PropTypes from "prop-types";

export default class InputWithStyle extends PureComponent {
  constructor(props) {
    super(props);
    this.setRef = createRef();
  }
  handleChange = (event) => {
    const { name, onChange } = this.props;
    if (onChange) {
      onChange(name, event.target.value);
    }
  };
  componentDidMount() {
    if (this.props.autoFocus) {
      this.setRef.current.focus();
    }
  }
  componentDidUpdate() {
    if (this.props.autoFocus) {
      this.setRef.current.focus();
    }
  }
  render() {
    const { errorMessage, label, name, value, type, onFocus } = this.props;
    return (
      <div className="input-field">
        <input
          id={`input_${name}`}
          className="vaildate"
          ref={this.setRef}
          type={type}
          onChange={this.handleChange}
          value={value}
        />
        <label htmlFor={`input_${name}`}>{label}</label>
        {errorMessage && <span className="helper-text">{errorMessage}</span>}
      </div>
    );
  }
}

InputWithStyle.propTypes = {
  type: PropTypes.oneOf(["text", "number", "price"]),
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  autoFocus: PropTypes.bool,
};
InputWithStyle.defaultProps = {
  onChange: () => {},
  onFocus: () => {},
  autoFocus: false,
  type: "text",
};
