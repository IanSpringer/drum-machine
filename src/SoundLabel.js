import React, {Component} from 'react';
import './styles/SoundLabel.css'


class SoundLabel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <label className={this.props.className}>{this.props.title}</label>
    )
  }
}


export default SoundLabel;
