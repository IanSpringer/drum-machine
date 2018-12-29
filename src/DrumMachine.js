import React, { Component } from 'react';
import Drum from './Drum';

class DrumMachine extends Component {
  constructor(props) {
    super(props);
    this.buildDrumOptions = this.buildDrumOptions.bind(this);
    this.buildAudioOptions = this.buildAudioOptions.bind(this);
    this.buildKit = this.buildKit.bind(this);
  }

  buildDrumOptions() {
    const drumOptions = [
      {type: 'hi-hat', file: '../sounds/hat1.aif'},
      {type: 'clap', file: '../sounds/clap1.aif'},
      {type: 'snare', file: '../sounds/snare1.aif'},
    ];

    return drumOptions;
  }

  buildAudioOptions(e) {
    let selectedOption = this.buildOptions.filter(option => option)
  }

  buildKit() {
    const buttonList = this.buildDrumOptions().map((object, key) =>  {
      return <Drum type={object.type} file={object.file} key={key} click={this.buildAudioOptions}/>
    });

    return buttonList;
  }

  render() {
    return (
      <div>
        {this.buildKit()}
      </div>
    )
  }
}

export default DrumMachine;
