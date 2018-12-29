
import React, { Component } from 'react';

class Drum extends Component {
  constructor(props) {
    super(props);
    this.clickFunction = this.clickFunction.bind(this);
    this.state = {
      clicked: false
    }
  }

  clickFunction() {
    this.props.click();
  }
  render() {
    const drumType = this.props.type;
    const drumFile = this.props.file;
    return (
      <button data-type={drumType} data-file={drumFile} onClick={this.clickFunction}>Click</button>
    )
  }
}

export default Drum;
