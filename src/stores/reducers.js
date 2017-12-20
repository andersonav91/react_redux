import { combineReducers } from 'redux'
import { appReducer } from '../reducers/app'
import { userReducer } from '../reducers/user'

export default combineReducers({
    userReducer,
    appReducer
})