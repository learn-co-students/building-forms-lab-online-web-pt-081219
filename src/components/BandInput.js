// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ''
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: '',
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Band Input
          </label>
          <input type="text" value={this.state.text} onChange={this.handleChange}></input>
          <input type="submit" value="Add Band"></input>
        </form>
      </div>
    )
  }
}


export default BandInput
