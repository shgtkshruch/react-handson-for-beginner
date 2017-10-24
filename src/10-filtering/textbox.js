import React from 'react';

export default class Textbox extends React.Component {
  render() {
    return (
      <input type="text" onChange={ this.props.onChange }/>
    )
  }
}
