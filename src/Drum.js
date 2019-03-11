
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
    this.setState({clicked:true})
    e.currentTarget.nextSibling.play(e);
  }



  clickFunction(e) {
    this.state.clicked === false ? this.drumHit(e) : this.setState({clicked:false})
  }
  render() {
    const drumType = this.props.type;
    const drumFile = this.props.file;
    const buttonClasses = `${this.props.buttonClassName} drum-clicked--${this.state.clicked}`
    return (
      <div>
        <button className={buttonClasses} data-type={drumType} onClick={this.clickFunction}></button>
        <audio controls="controls" className="drum__audio">
          <source src={drumFile} type="audio/mpeg" />
          <source src={drumFile} type="audio/wav" />
            Your browser does not support the audio tag.
        </audio>
      </div>
    )
  }
}

export default Drum;
