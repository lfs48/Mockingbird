import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import Form from './form';
import {fetchAllUsers} from '../../actions/user_actions'
import {createSecret} from '../../actions/secret_actions'
const mapStateToProps = (state) => {
    return {
        users: Object.values(state.entities.users)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: ()=> dispatch(fetchAllUsers()),
        createSecret: (secret) => dispatch(createSecret(secret))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
