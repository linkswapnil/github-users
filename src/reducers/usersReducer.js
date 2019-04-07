import {Cmd, loop } from 'redux-loop';
import {fetchUsers} from '../effects/effect.users'
import {userFetchSuccessfulAction, userFetchFailedAction} from '../actions/users.actions'

export default (state={},action) => {
  switch (action.type){
    case 'FETCH_USERS':
    return loop(
      {
        ...state,
        isLoading:true,
        searchCriteria: action.payload.searchCriteria
      },
      Cmd.run(fetchUsers,{
      args: [action.payload],
      successActionCreator: userFetchSuccessfulAction,
      failActionCreator: userFetchFailedAction
    }))

    case 'RENDER_USERS':
      return {
        ...state,
        isLoading:false,
        ...action.payload
      }

    default:
      return state;
  }
}
