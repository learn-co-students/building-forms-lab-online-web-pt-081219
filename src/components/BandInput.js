// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ''
  }

  handleChange(event) {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>Add Band:</label>
          <input
            className="band-input"
            type="text"
            name="text"
            onChange={(event) => this.handleChange(event)}
            value={this.state.name}
          />
          <br />
          <button type="submit" className="band-submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default BandInput;

// import React, { Component } from 'react';

// class BandInput extends Component {

//   state = {
//     name: ''
//   }

//   handleOnChange(event) {
//     this.setState({
//       name: event.target.value,
//     });
//   }

//   handleOnSubmit(event) {
//     event.preventDefault();
//     this.props.addBand(this.state);
//     this.setState({
//       name: '',
//     });
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={(event) => this.handleOnSubmit(event)}>
//           <input
//             type="text"
//             value={this.state.name}
//             onChange={(event) => this.handleOnChange(event)} />
//           <input type="submit" />
//         </form>
//       </div>
//     );
//   }
// };

// export default BandInput;
