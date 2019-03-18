import React, {Component} from 'react';
import Drum from './Drum';
import './styles/DrumRow.css'


class SixteenthNote extends Component {
  constructor(props) {
    super(props);
    this.buildColumn= this.buildColumn.bind(this);
    this.buildDrumOptions = this.buildDrumOptions.bind(this);
  }

  buildDrumOptions() {
    return this.props.drumOptions;
  }

  buildColumn() {
    const placeArray = this.buildDrumOptions().map((button, index) => {
      return <Drum buttonClassName="drum__button" audioClassName="drum__audio" type={button.type} file={button.file} key={index} />
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
