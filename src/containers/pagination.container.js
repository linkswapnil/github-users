import {connect} from 'react-redux';
import Pagination from 'components/Pagination'
import {fetchUsers} from 'actions/users.actions'

const mapDispatchToProps = dispatch => {
  return {
    onPageSelectionChange: data => {
      dispatch(fetchUsers(data))
    }
  }
}


const mapStateToProps = (state) => {
  return {
    totalItems: state.users.total_count || 0,
    searchCriteria: state.users.searchCriteria
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)

