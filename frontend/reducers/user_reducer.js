import {
<<<<<<< HEAD
    RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER
=======
    RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_ALL_USERS
>>>>>>> 88aabc00991f02e352fb8185298409b7f6f203b7
} from '../actions/session_actions'
import merge from 'lodash/merge'

export default (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
<<<<<<< HEAD
            return merge({}, state, { [action.currentUser.id]: action.currentUser })
=======
            return merge({}, state, action.currentUser)
>>>>>>> 88aabc00991f02e352fb8185298409b7f6f203b7
        case LOGOUT_CURRENT_USER:
            // i added this so that you don't accumulate users throughout login/logouts
            return {}
        default:
            return state;
    }
}