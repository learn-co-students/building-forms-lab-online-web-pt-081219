import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput';

class BandsContainer extends Component {

  renderBands = () => this.props.bands.map((band, index) => <li key={index}>{band.name}</li>)

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        <ul className="bands-list">
          {this.renderBands()}
        </ul>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}
// const mapStateToProps = ({ bands }) => ({ bands: bands })

const mapDispatchToProps = dispatch => ({
  addBand: band => dispatch({ type: 'ADD_BAND', band })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
