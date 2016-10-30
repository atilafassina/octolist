const octolistApp = (state = 'octolist', action) => {
  switch (action.type) {
    case 'NEW_REPOS':
      return Object.assign(
        action,
        {
          receivedAt: Date.now()
        },
        {});

    case 'FETCH':
      return Object.assign(
        action,
        {
          isFetching: true
        },
        {});

    case 'NO_USER':
      return Object.assign(
        action,
        {
          msg: 'User does not exist'
        },
        {});

    case 'NETWORK_ERROR':
      return Object.assign(
        action,
        {
          msg: 'There is a problem with the request. Please try again.'
        },
        {});

    default:
      return Object.assign(
        action,
        {
          default: true
        },
        {});
  }
}

export default octolistApp;


