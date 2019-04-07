export function searchInputChange(searchCriteria) {
  return {
    type: 'SEARCH_INPUT_CHANGE',
    payload: {searchCriteria}
  }
}
