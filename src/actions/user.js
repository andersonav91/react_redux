import { SET_CURRENT_USER, LOGIN_USER } from '../constants/user';
import { setLoadingAppToStore } from './app';
import queryString from 'query-string';

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
    localStorage.setItem('currentUser', JSON.stringify(user));
    return {
        type: LOGIN_USER,
        user: user
    }
}

// loginToStore
export const loginUserToStore = (user) => (dispatch) => {
  dispatch(setLoadingAppToStore(true)); // loading = true
  fetch('http://csenterprise.allcode.com/users/login', {
    method: "POST",
    headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body: queryString.stringify(user)
  })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    user.token = data.response.token;
    user.role = data.response.role;
    delete user.password;
    dispatch(loginUser(user));
    dispatch(setLoadingAppToStore(false)); // loading = false
  })
  .catch(function(error) {
    console.log(error);
    dispatch(setLoadingAppToStore(false)); // loading = false
  });
}

