import React from 'react';

import NewsItem from './newsItem';

export default class News extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item, i) => <NewsItem news={item} key={i}/>)}
      </ul>
    )
  }
}
