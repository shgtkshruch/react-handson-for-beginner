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
    fetchHackerNews().then((json) => {
      this.setState({ items: json })
      this.loadinText.remove();
    });
  }

  render() {
    return (
      <div>
        {/* サーバーからデータを取得したあとは、NewsのComponentを表示して、その中でNewsItemのComponentを表示してみましょう */}
        <News items={ this.state.items }/>
        <p ref={(text) => { this.loadinText = text }}>Now Loading...</p>
      </div>
    )
  }
}

ReactDOM.render(<App />, container);
