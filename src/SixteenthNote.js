import React, {Component} from 'react';
import Drum from './Drum';
import './styles/DrumRow.css'


class SixteenthNote extends Component {
  constructor(props) {
    super(props);
    this.buildColumn= this.buildColumn.bind(this);
    this.buildDrumOptions = this.buildDrumOptions.bind(this);
    this.updateActiveDrumsArray = this.updateActiveDrumsArray.bind(this);
    this.state = {
      activeDrums: []
    }
  }

  buildDrumOptions() {
    return this.props.drumOptions;
  }

  updateActiveDrumsArray(type) {
    let array = this.state.activeDrums;
    array.push(type);
    this.setState({activeDrums: array});
  }

  buildColumn() {
    const placeArray = this.buildDrumOptions().map((button, index) => {
      return <Drum buttonClassName="drum__button" audioClassName="drum__audio" type={button.type} file={button.file} key={index} onClick={() => this.updateActiveDrumsArray(button.type)}/>
    })

    return placeArray;
  }

  render() {
    return (
      <div className={this.props.columnClassName}>
        {this.buildColumn()}
      </div>
    )
  }
}


export default SixteenthNote;
