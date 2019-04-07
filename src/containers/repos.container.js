import {connect} from 'react-redux';
import Repos from 'components/Repos'
import {fetchRepos} from 'actions/repos.actions'

const mapDispatchToProps = dispatch => {
  return {
    fetchRepos: data => dispatch(fetchRepos(data))
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    repos: state.profile.repos || ownProps.repos
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Repos)

