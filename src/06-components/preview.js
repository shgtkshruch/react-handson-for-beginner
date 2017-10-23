import React from 'react';

export default class Preview extends React.Component {
  render() {
    if (this.props.textStyle === 'bold') {
      return <span style={{ fontWeight: 'bold' }}>{ this.props.textValue }</span>
    } else if (this.props.textStyle === 'italic') {
      return <i>{ this.props.textValue }</i>
    } else {
      return <span>{ this.props.textValue }</span>
    }
  }
}
