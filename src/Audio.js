import React, { Component } from 'react';
import './styles/Audio.css'

class Audio extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <audio controls data-drum={this.props.drum} className="audio">
        <source src={this.props.source} type="audio/mp3" />
        <source src={this.props.source} type="audio/aif" />
      </audio>
    )
  }
}

export default Audio;
