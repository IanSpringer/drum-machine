
import React, { Component } from 'react';

class Drum extends Component {
  render() {
    const drumType = this.props.type;
    return (
      <button data-type={drumType} data-file>Click</button>
    )
  }
}

export default Drum;
