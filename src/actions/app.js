import { SET_LOADING } from '../constants/app'

// setLoadingApp
export function setLoadingApp(loading){
    return {
        type: SET_LOADING,
        loading: loading
    }
}

// setLoadingAppToStore
export const setLoadingAppToStore = (loading) => (dispatch) => {
    dispatch(setLoadingApp(loading));
}

