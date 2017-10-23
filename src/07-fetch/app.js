import React from 'react';
import ReactDOM from 'react-dom';
// サーバーからデータを取得するための関数
import {fetchHackerNews} from '../api';

import News from './news';

const container = document.querySelector('.js-app');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  componentDidMount() {
    // fetchHackerNews().then((json) => this.setState({ items: JSON.stringify(json, null, ' ') }));
    fetchHackerNews().then((json) => this.setState({ items: json }));
  }

  render() {
    return (
      <News news={ this.state.items }/>
    )
  }
}

ReactDOM.render(<App />, container);

