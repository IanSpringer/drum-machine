import React, { Component } from 'react';
import Drum from './Drum';
import DrumRow from './DrumRow';
import snare from './sounds/new-snare.mp3';
import crash from './sounds/new-crash.mp3';
import kick from './sounds/new-kick.mp3';
import snare2 from './sounds/snare1.wav';
import './styles/DrumMachine.css'

class DrumMachine extends Component {
  constructor(props) {
    super(props);
    this.buildDrumOptions = this.buildDrumOptions.bind(this);
    this.buildAudioOptions = this.buildAudioOptions.bind(this);
    this.buildKit = this.buildKit.bind(this);
  }

  buildDrumOptions() {
    const drumOptions = [
      {type: 'crash', file: crash},
      {type: 'kick', file: kick},
      {type: 'snare', file: snare},
      {type: 'snare-2', file: snare2}
    ];

    return drumOptions;
  }

  buildAudioOptions(e) {
    let selectedOption = this.buildOptions.filter(option => option)
  }

  buildKit() {
    const buttonList = this.buildDrumOptions().map((object, index) =>  {
      return <DrumRow buttonClassName="drum__row" type={object.type} file={object.file} index={index} click={this.buildAudioOptions}/>
    });

    return buttonList;
  }

  render() {
    return (
      <div className={this.props.className}>
        {this.buildKit()}
      </div>
    )
  }
}

export default DrumMachine;
