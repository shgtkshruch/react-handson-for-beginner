import React from 'react';

export default class NewsItem extends React.Component {
  render() {
    return (
      <li>
         <span>{this.props.news.rank}</span>
         <span>
            <a href={ this.props.news.url } target="blank">
              {this.props.news.title}
            </a>
          </span>
         <span>(by {this.props.news.by})</span>
         <span>{this.props.news.kidsの数}comments</span>
      </li>
    )
  }
}
