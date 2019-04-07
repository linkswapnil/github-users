export function fetchProfileInfo(loginId) {
  return {
    type: 'FETCH_PROFILE_INFO',
    payload: {loginId}
  }
}

export function profileFetchFailedAction(data) {
  return {
    type: 'RENDER_PROFILE_FAILED',
    payload: {data}
  }
}

export function profileFetchSuccessfulAction(data) {
  return {
    type: 'RENDER_PROFILE',
    payload: {info: data}
  }
}

export function reposFetchFailedAction(data) {
  return {
    type: 'RENDER_PROFILE_FAILED',
    payload: {data}
  }
}

export function reposFetchSuccessfulAction(data) {
  return {
    type: 'RENDER_REPOS',
    payload: {repos: data}
  }
}
