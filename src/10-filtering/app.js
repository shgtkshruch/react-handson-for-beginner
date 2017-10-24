import React from 'react';
import ReactDOM from 'react-dom';
// サーバーからデータを取得するための関数
import {fetchHackerNews} from '../api';

import News from './news';
import Textbox from './textbox';

const container = document.querySelector('.js-app');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
    this.textChange = this.textChange.bind(this);
  }

  componentDidMount() {
    fetchHackerNews().then((json) => {
      this.setState({ items: json })
      this.loadinText.remove();
    });
  }

  textChange(e) {
    this.setState({ searchText: e.target.value.toLowerCase() });
  }

  render() {
    return (
      <div>
        <Textbox onChange={ this.textChange } />
        <News items={ this.state.items } searchText={ this.state.searchText } />
        <p ref={(text) => { this.loadinText = text }}>Now Loading...</p>
      </div>
    )
  }
}

ReactDOM.render(<App />, container);
