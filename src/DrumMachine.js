import React, { Component } from 'react';
import Drum from './Drum';
import SixteenthNote from './SixteenthNote';
import SoundLabel from './SoundLabel';
import Audio from './Audio';
import snare from './sounds/new-snare.mp3';
import crash from './sounds/new-crash.mp3';
import kick from './sounds/new-kick.mp3';
import snare2 from './sounds/snare1.wav';
import './styles/DrumMachine.css'

class DrumMachine extends Component {
  constructor(props) {
    super(props);
    this.buildKit = this.buildColumns.bind(this);
    this.buildLabels = this.buildLabels.bind(this);
    this.buildAudio = this.buildAudio.bind(this);
    this.state = {
      placeArray: Array(16).fill(),
      drumOptions: [
        {type: 'crash', file: crash, title: 'Crash'},
        {type: 'kick', file: kick, title: 'Kick'},
        {type: 'snare', file: snare, title: 'Snare'},
        {type: 'snare-2', file: snare2, title: 'Snare'}
      ]
    }
  }

  buildLabels() {
    const labelList = this.state.drumOptions.map((sound, index) => {
      return <SoundLabel title={sound.title} className="drum__label" key={index} />
    })

    return labelList;
  }

  buildColumns() {
    const buttonList = this.state.placeArray.map((object, index) =>  {
      return <SixteenthNote columnClassName="drum__column" key={index} drumOptions={this.state.drumOptions}/>
    });
    return buttonList;
  }

  buildAudio() {
    const audioList = this.state.drumOptions.map((audio, index) => {
      return <Audio source={audio.file} drum={audio.type} key={index}/>
    })

    return audioList;
  }

  render() {
    return (
      <div>
        <div className={this.props.className}>
          <div className="label-wrapper">
            {this.buildLabels()}
          </div>
          <div className="drum-wrapper">
            {this.buildColumns()}
          </div>
        </div>
        <div className="audio-wrapper">
          {this.buildAudio()}
        </div>
      </div>
    )
  }
}

export default DrumMachine;
