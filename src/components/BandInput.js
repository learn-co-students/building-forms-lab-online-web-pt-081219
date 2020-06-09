// Add BandInput component
import React, { Component } from "react";

class BandInput extends Component {
  state = {
    name: "",
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      name: "",
    });
  };

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label></label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleOnChange}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default BandInput;
