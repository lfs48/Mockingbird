import * as APIUtil from '../util/user_api_util'
import {login} from './session_actions';

export const RECEIVE_USER = "RECEIVE_USER"
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS"

export const receiveAllUsers = (users)=>{
    
    return ({
        type: RECEIVE_ALL_USERS,
        users
    })
}
export const receiveUser = (user) => {

    return ({
        type: RECEIVE_USER,
        user: user
    })
}

export const createUser = (formUser) => (dispatch) => {
    APIUtil.createUser(formUser)
    .then(
        (user) => {
        return dispatch( receiveUser(user) )
    })
    .then(
        () => dispatch(login(formUser)) 
    );
}

export const fetchAllUsers = ()=> (dispatch)=> {
    
    return (
        APIUtil.fetchAllUsers().then((users)=> {
            
            return dispatch(receiveAllUsers(users))
        })
    )
}

