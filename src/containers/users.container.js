import {connect} from 'react-redux';
import Users from 'components/Users'
// import {fetchUsers} from 'actions/users.actions'

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchUsers: data => dispatch(fetchUsers(data))
//   }
// }

const mapStateToProps = (state) => {
  return {
    ...state.users
  }
}
export default connect(mapStateToProps, null)(Users)

