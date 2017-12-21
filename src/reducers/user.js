import { SET_CURRENT_USER, LOGIN_USER } from '../constants/user'

// The initial user state
const initialState = {
    user: {
        email: '',
        token: '',
        role: ''
    },
    loggedIn: false,
    errorMessage: ''
};

// User Reducers
export function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {...state, user: action.user, loggedIn: true};
            break;
        case LOGIN_USER:
            return {...state, user: action.user, loggedIn: true};
            break;
        default:
            return state;
    }
}