import {
    RECEIVE_CURRENT_SECRET
} from '../actions/secret_actions'
import merge from 'lodash/merge'

export default (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_CURRENT_SECRET:
            debugger
            return merge({}, state, action.currentSecret)
        default:
            return state;
    }
}