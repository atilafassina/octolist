
export const inputUser = (text) => {
  return dispatch => {
    dispatch(fetchRepos);
    return fetch('https://api.github.com/users/'+text+'/repos')

    .then(response => {
      return checkStatus(response);
    })
    .then(json => dispatch(receiveRepos(json)))

    .catch((error) => dispatch(fetchFailed(error)))
  }
};

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response.json()
  } else {
    const error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

function fetchRepos(){
  return {
      type: 'FETCH',
      isFetching: true
    }
}

function receiveRepos(json) {
  return {
    type: 'NEW_REPOS',
    repositories: json,
    receivedAt: Date.now()
  }
}

function fetchFailed(error) {
  if (error.message.toLowerCase() === 'not found' ) {
    return {
      type: 'NO_USER',
      msg: 'User does not exist'
    }
  } else {
    return {
      type: 'NETWORK_ERROR',
      msg: 'There is a problem with the request. Please try again.'
    }
  }
}
