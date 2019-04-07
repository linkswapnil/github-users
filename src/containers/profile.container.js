import {connect} from 'react-redux';
import Profile from 'components/Profile'
import {fetchProfileInfo} from 'actions/profiles.actions'

const mapDispatchToProps = dispatch => {
  return {
    fetchProfileInfo: loginId => dispatch(fetchProfileInfo(loginId))
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    profileInfo : state.profile.info || ownProps.profileInfo
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile)

