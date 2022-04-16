import React, { Component } from "react";
import PropTypes from "prop-types";

class SharedButton extends Component {
  submitEvent() {
    if (this.props.emitEvent) {
      this.props.emitEvent();
    }
  }

  render() {
    const { buttonText } = this.props;

    return (
      <button onClick={() => this.submitEvent()} data-test="buttonComponent">
        {buttonText}
      </button>
      //run submitEvent on onClick
    );
  }
}

SharedButton.propTypes = {
  buttonText: PropTypes.string,
  emitEvent: PropTypes.func,
};
//structure of propTypes expected

export default SharedButton;

/*using data-test instead of class-name for making clear and specific names for testing
            it using to avoid possible interference   */
