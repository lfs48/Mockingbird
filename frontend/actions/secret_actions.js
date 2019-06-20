import * as APIUtil from '../util/secrets_api_util';
// import receiveErrors from '../actions/session_actions';

export const RECEIVE_CURRENT_SECRET = 'RECEIVE_CURRENT_SECRET';

export const receiveCurrentSecret = currentSecret => ({
    type: RECEIVE_CURRENT_SECRET,
    currentSecret
});

export const createSecret = secret => dispatch => {
    
    return(
        APIUtil.createSecret(secret).then(secret => {
        
        return dispatch(receiveCurrentSecret(secret))
    })
)};

