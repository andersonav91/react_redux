export const SET_CURRENT_USER = 'SET_CURRENT_USER';

// The initial user state
const initialState = {
    user: {
        username: '',
        password: ''
    },
    loggedIn: false,
    errorMessage: ''
};

// User Reducers
export function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_USER:
            return assign({}, state, {
                user: action.user
            });
            break;
        default:
            return state;
    }
}