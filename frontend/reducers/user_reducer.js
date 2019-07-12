import {
    RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_ALL_USERS
} from '../actions/session_actions'
import merge from 'lodash/merge'

export default (state = {}, action) => {
    Object.freeze(state);
    const newState = merge({}, state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState[action.currentUser.id] = action.currentUser;
            return newState;
        default:
            return state;
    }
}