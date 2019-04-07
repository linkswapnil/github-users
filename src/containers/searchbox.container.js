import {connect} from 'react-redux';
import SearchBox from 'components/SearchBox'
import {fetchUsers} from 'actions/users.actions'

const mapDispatchToProps = dispatch => {
  return {
    onSearchInputChange: data => {
      dispatch(fetchUsers(data))
    }
  }
}


const mapStateToProps = state => {
  console.log('Maps Search Props', state);
  return {
    isLoading: state.users.isLoading
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox)

