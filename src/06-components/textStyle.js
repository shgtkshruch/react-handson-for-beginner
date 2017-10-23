import React from 'react';

export default class TextStyle extends React.Component {
  render() {
    return (
      <select onChange={ this.props.onChange }>
        <option value="bold">Bold</option>
        <option value="italic">Italic</option>
      </select>
    )
  }
}
