import React, { Component } from 'react';
import Drum from './Drum';

class DrumMachine extends Component {
  constructor(props) {
    super(props);
    this.buildDrumOptions = this.buildDrumOptions.bind(this);
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

  buildKit() {
    const buttonList = this.buildDrumOptions().map(object =>  {
      return <Drum type={object.type}/>
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
