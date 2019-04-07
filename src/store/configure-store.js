import { createStore } from 'redux'
import { install } from 'redux-loop'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from 'reducers'

export default function configureStore(initialState = {}) {
  const composeEnhancers = composeWithDevTools({});
  const store = createStore(rootReducer, initialState, composeEnhancers(install()))
  return store
}
