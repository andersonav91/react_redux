import { SET_CURRENT_USER, LOGIN_USER } from '../constants/user'
import { setLoadingAppToStore } from './app'

// setCurrentUser
export function setCurrentUser(user){
    return {
        type: SET_CURRENT_USER,
        user: user
    }
}

// setCurrentUserToStore
export const setCurrentUserToStore = (user) => (dispatch) => {
    dispatch(setCurrentUser(user));
}


// loginUser
export function loginUser(user){
    return {
        type: LOGIN_USER,
        user: user
    }
}

// loginToStore
export const loginUserToStore = (user) => (dispatch) => {
  dispatch(setLoadingAppToStore(true)); // loading = true
  fetch('http://login/login')
  .then((response) => {
    return response.json()
  })
  .then((user) => {
    dispatch(loginUser(user));
    dispatch(setLoadingAppToStore(false)); // loading = false
  })
  .catch(function(error) {
    console.log(error);
    dispatch(setLoadingAppToStore(false)); // loading = false
  });
}

