import React, {Component} from 'react';

class DrumRow extends Component {
  constructor(super) {
    super(props);
    this.buildDrumOptions = this.buildDrumOptions.bind(this)
  }
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

buildKit() {
  const buttonList = this.buildDrumOptions().map((object, key) =>  {
    Array(16).fill().map(button => {
      return <Drum buttonClassName="drum__button" audioClassName="drum__audio" type={object.type} file={object.file} key={key} click={this.buildAudioOptions}/>
    })
  });

  return buttonList;
}

render() {
  return (
    <div className="drum-row">
      {this.buildKit()}
    </div>
  )
}

export default DrumRow;
