
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

  drumHit(e) {
    document.querySelector(`.audio[data-drum=${this.props.type}]`).play();
    this.setState({clicked:true});
  }

  clickFunction(e) {
    this.state.clicked === false ? this.drumHit(e) : this.setState({clicked:false})
  }

  render() {
    const drumType = this.props.type;
    const drumFile = this.props.file;
    const buttonClasses = `${this.props.buttonClassName} drum-clicked--${this.state.clicked}`
    return (
      <div onClick={this.props.onClick}>
        <button className={buttonClasses} data-type={drumType} onClick={this.clickFunction}></button>
      </div>
    )
  }
}

export default Drum;
