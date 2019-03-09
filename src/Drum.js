
import React, { Component } from 'react';
import './styles/Drum.css'

class Drum extends Component {
  constructor(props) {
    super(props);
    this.clickFunction = this.clickFunction.bind(this);
    this.state = {
      clicked: false
    }
  }

  clickFunction(e) {
    const target = e.currentTarget.nextSibling;
    target.play();
    console.log(e.currentTarget.nextSibling)
  }
  render() {
    const drumType = this.props.type;
    const drumFile = this.props.file;
    return (
      <div>
        <button className={this.props.buttonClassName} data-type={drumType} onClick={this.clickFunction}></button>
        <audio controls="controls" className={this.props.audioClassName}>
          <source src={drumFile} type="audio/mpeg" />
          <source src={drumFile} type="audio/wav" />
            Your browser does not support the audio tag.
        </audio>
      </div>
    )
  }
}

export default Drum;
