import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const signup = user => dispatch => (
    APIUtil.signup(user).then(user => (
        dispatch(receiveCurrentUser(user))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const login = user => dispatch => {

    return (
<<<<<<< HEAD
        APIUtil.login(user).then(user => (

            dispatch(receiveCurrentUser(user))
        ), err => {
=======
        APIUtil.login(user).then(user => {
            return dispatch(receiveCurrentUser(user))
        }, err => {
>>>>>>> 88aabc00991f02e352fb8185298409b7f6f203b7

            return dispatch(receiveErrors(err.responseJSON))
        })
    )
};

export const logout = () => dispatch => {

    return (
        APIUtil.logout().then(user => {

            dispatch(logoutCurrentUser())
        })
    )
};
