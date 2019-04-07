import {Cmd, loop } from 'redux-loop';
import {fetchProfileInfo, fetchRepos} from '../effects/effect.userProfile'
import {profileFetchSuccessfulAction, profileFetchFailedAction, reposFetchFailedAction, reposFetchSuccessfulAction} from '../actions/profiles.actions'

export default (state={},action) => {
  switch (action.type){

    case 'FETCH_PROFILE_INFO':
      return loop(
        {
          ...state,
          isLoading:true
        },
        Cmd.run(fetchProfileInfo,{
        args: [action.payload],
        successActionCreator: profileFetchSuccessfulAction,
        failActionCreator: profileFetchFailedAction
      }))

    case 'RENDER_PROFILE':
      return {
        ...state,
        isLoading:false,
        ...action.payload
      }

    case 'FETCH_REPOS':
      return loop(
        {
          ...state,
          isLoading:true
        },
        Cmd.run(fetchRepos,{
          args: [action.payload],
          successActionCreator: reposFetchSuccessfulAction,
          failActionCreator: reposFetchFailedAction
        }))

    case 'RENDER_REPOS':
      console.log('RENDER_REPOS', action);
      return {
        ...state,
        isLoading:false,
        ...action.payload
      }

    default:
      return state;
  }
}
