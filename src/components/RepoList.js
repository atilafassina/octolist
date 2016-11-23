import React, { Component } from 'react';
import RepoItem from './RepoItem';

class RepoList extends Component {
  render(props) {
    if(this.props.repos) {
      return (
          <ul className="gh-repoList">
            <header className="gh-userData">
              <h2 className="gh-userTitle">{this.props.repos[0].owner.login}'s Repositories</h2>
              <img className="gh-userAvatar" alt={`${this.props.repos[0].owner.login} avatar`} src={this.props.repos[0].owner.avatar_url} />
            </header>
            {this.props.repos.map(ghrep =>
              <RepoItem data={ghrep} key={ghrep.id}/>
            )}
          </ul>);
    } else {
      return (<p>Enter a valid Github username</p>);
    }
  }
};

export default RepoList;


//name={ghrep.name} description={ghrep.description} link={ghrep.link} key={ghrep.id} watchers={ghrep.watchers}
