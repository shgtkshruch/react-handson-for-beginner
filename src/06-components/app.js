import React from 'react';
import ReactDOM from 'react-dom';

import Text from './text.js';
import TextStyle from './textStyle.js';
import Preview from './preview.js';

const container = document.querySelector('.js-app');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {textValue: 'Hello'};
    this.textChange = this.textChange.bind(this);
    this.styleChange = this.styleChange.bind(this);
  }

  textChange(e) {
    this.setState({ textValue: e.target.value })
  }

  styleChange(e) {
    this.setState({ textStyle: e.target.value })
  }

  render() {
    return (
      <div>
        {/* TextとTextStyleとPreviewのComponentを配置してみましょう */}
        <Text onChange={ this.textChange } value={ this.state.textValue } />
        <TextStyle onChange={ this.styleChange } />
        <div>
          <Preview textValue={ this.state.textValue } textStyle={ this.state.textStyle }/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, container);
