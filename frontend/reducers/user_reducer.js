import {
    RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_ALL_USERS
} from '../actions/session_actions'
import merge from 'lodash/merge'

export default (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, state, action.currentUser)
        case LOGOUT_CURRENT_USER:
            // i added this so that you don't accumulate users throughout login/logouts
            return {}
        default:
            return state;
    }
}