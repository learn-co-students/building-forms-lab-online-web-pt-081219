// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
      name: ""
    }
  
  handleChange(event) {
    this.setState({
      ...this.state, name:event.target.value
    })
  };

  handleSubmit(event) {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({name: ''})
  }

  render() {
    return(
      <div>
        <form onSubmit={ (event) => this.handleSubmit(event)}>
        <input 
          onChange={ (event) => this.handleChange(event)} value={this.state.name} type='text' name='band'/>
        <input
          type='submit'value='Submit'/>
        </form>
      </div>
    )
  }
}


export default BandInput
