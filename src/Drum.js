
import React, { Component } from 'react';

class Drum extends Component {
  render() {
    const drumType = this.props.type;
    return (
      <button data-type={drumType}>
        Click
      </button>
    )
  }
}

export default Drum;
