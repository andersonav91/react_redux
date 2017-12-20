import { SET_LOADING } from '../constants/app'

// The initial app state
const initialState = {
  loading: false
};

// App Reducers
export function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return {...state, loading: action.loading}
      break;
    default:
      return state;
  }
}