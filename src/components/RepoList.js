import React from 'react';
import Repo from './Repo';

const emptyRepositories = { msg: 'Type a valid username.' };

const RepoList = (currentState = emptyRepositories) => {
  if (Array.isArray(currentState.data)) {
    return (<ul>
      {currentState.data.map(ghrep =>
        <Repo name={ghrep.name} key={ghrep.id} />
      )}
    </ul>)
  } else {
    return (<p>{currentState.data ? currentState.data: 'Type a valid username'}</p>)
  }
}

export default RepoList
