import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        <h4>Bands</h4>
        {this.props.bands.map(band => <li key={band.name}>{band.name}</li>)}
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => {
  return(
   { addBand: band => dispatch({type: 'ADD_BAND', band})}
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
