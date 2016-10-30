const octolistApp = (state = 'octolist', action) => {
  switch (action.type) {
    case 'NEW_REPOS':
      return action;

    case 'FETCH':
      return action;

    case 'NO_USER':
      return action;

    case 'NETWORK_ERROR':
      return action;

    default:
      return action;
  }
}

export default octolistApp;
