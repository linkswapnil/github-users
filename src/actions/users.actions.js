export function fetchUsers(data) {
  return {
    type: 'FETCH_USERS',
    payload: data
  }
}

export function userFetchSuccessfulAction(data) {
  data.error = '';
  return {
    type: 'RENDER_USERS',
    payload: data
  }
}

export function userFetchFailedAction(data) {
  return {
    type: 'RENDER_USERS',
    payload: data
  }
}
