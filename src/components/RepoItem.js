import React, { Component } from 'react';

class RepoItem extends Component {
  render(props) {
    console.log(this.props);
    return (
    <li className="gh-repo">
      <small className="gh-lang">{this.props.data.language}</small>
      <a className="gh-repoTitle" href={this.props.data.link} target="_blank">{this.props.data.name}</a>
      <span className="gh-lastCommit">Last commit: {this.props.data.pushed_at}</span>
      <p>{this.props.data.description}</p>
      <ul className="gh-statsList">
        <li className="gh-stats">
          <a href={`${this.props.data.html_url}/watchers`} target="_blank" title="watchers">
            👀
            <span className="gh-count">
              {this.props.data.watchers}
            </span>
          </a>
        </li>
        <li className="gh-stats">
          <a href={`${this.props.data.html_url}/stargazers`} target="_blank" title="stars">
            ⭐️
            <span className="gh-count">
              {this.props.data.stargazers_count}
            </span>
          </a>
        </li>
        <li className="gh-stats">
          <a href={`${this.props.data.html_url}/issues`} target="_blank" title="issues">
            🚧
            <span className="gh-count">
              {this.props.data.open_issues}
            </span>
          </a>
        </li>
      </ul>
    </li>
    )
  }
}

export default RepoItem;
