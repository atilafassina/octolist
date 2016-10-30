import { connect } from 'react-redux';
import RepoList from '../components/RepoList.js';

function checkRepos(currentState) {
  if(currentState.repositories) {
    return currentState.repositories;
  } else if (currentState.msg) {
    return currentState.msg;
  }
}

const mapStateToProps = (state) => {
  return {
    data: checkRepos(state),
    type: state.type
  }
}

const Repos = connect(
  mapStateToProps
)(RepoList);

export default Repos;
