import React from 'react';

export default class News extends React.Component {
  render() {
    return (
      <p>
        {/* ここにサーバーから取得したデータをそのまま出力してみましょう */}
        { this.props.news.map(news => news.title) }
      </p>
    )
  }
}
