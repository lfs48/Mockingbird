import { combineReducers } from 'redux';
import usersReducer from './user_reducer';
import secretsReducer from './secrets_reducer';

export default combineReducers({
    users: usersReducer,
    secrets: secretsReducer
});

