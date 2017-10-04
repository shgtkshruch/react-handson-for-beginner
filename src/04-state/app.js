import React from 'react';
import ReactDOM from 'react-dom';

const container = document.querySelector('.js-app');

class App extends React.Component {
  render() {
    return (
      <div>
        <input type="text" value="Hello" onChange={() => {}} />
        <p>Hello</p>
      </div>
    )
  }
}

ReactDOM.render(<App />, container);
