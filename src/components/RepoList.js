import React from 'react';
import Repo from './Repo';

const RepoList = (currentState = {}) => {
  if (Array.isArray(currentState.data)) {
    return (
    <ul className="gh-repoList">
      {currentState.data.map(ghrep =>
        <Repo key={ghrep.id} name={ghrep.name} description={ghrep.description} link={ghrep.html_url} />
      )}
    </ul>)
  } else {
    return (<p>{currentState.data ? currentState.data: 'Type a valid username'}</p>)
  }
}

export default RepoList
