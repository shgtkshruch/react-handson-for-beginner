import React from 'react';

export default class Text extends React.Component {
  render() {
    return (
      <input type="text" value={this.props.value} onChange={this.props.onChange}/>
    )
  }
}
