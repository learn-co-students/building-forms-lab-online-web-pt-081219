
// Add BandInput component
import React, { Component } from 'react'


export class BandInput extends Component {
  state = {
    name: ''
  }

  handleOnChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      text: ''
    })
  }
  render() {
    return(
      <div>
        <form onSubmit={(event)=>this.handleOnSubmit(event)}>
          <input
          type="text"
          onChange={(event) =>this.handleOnChange(event)}
          name="bandName"
          value={this.state.name}
          />

          <input type="submit"/>          


        </form>
      </div>
    )
  }
}


export default BandInput
