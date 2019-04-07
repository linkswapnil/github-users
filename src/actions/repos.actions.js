export function fetchRepos(data) {
  return {
    type: 'FETCH_REPOS',
    payload: data
  }
}

export function reposFetchSuccessfulAction(data) {
  data.error = '';
  return {
    type: 'RENDER_REPOS',
    payload: data
  }
}

export function reposFetchFailedAction(data) {
  return {
    type: 'RENDER_REPOS',
    payload: data
  }
}
