import React, {Component} from 'react';
import Drum from './Drum';
import './styles/DrumRow.css'


class DrumRow extends Component {
  constructor(props) {
    super(props);
    this.buildRow = this.buildRow.bind(this);
    this.state = {
      placeArray: Array(16).fill()
    }
  }

  buildRow() {
    const placeArray = this.state.placeArray.map((button, index) => {
      return <Drum buttonClassName="drum__button" audioClassName="drum__audio" type={this.props.type} file={this.props.file} indexKey={index} />
    })

    return placeArray;
  }

  render() {
    return (
      <div className="drum-row">
        <p class="drum-row__label">{this.props.type}</p>
        {this.buildRow()}
      </div>
    )
  }
}


export default DrumRow;
