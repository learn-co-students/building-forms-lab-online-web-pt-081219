import React, { Component } from 'react';
import { connect } from 'react-redux';

import BandInput from '../components/BandInput';

class BandsContainer extends Component {
  displayBands = () => {
    return this.props.bands.map((b, i) => <li key={i}>{b.name}</li>)
  }

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <ul>
          {this.displayBands()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({bands}) => ({bands});

const mapDispatchToProps = dispatch => {
  return {
    addBand: formData => dispatch({ type: "ADD_BAND", payload: formData })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)