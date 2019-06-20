import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import Form from './form';
import {fetchAllUsers} from '../../actions/user_actions'

const mapStateToProps = (state) => {
    return {
        users: Object.values(state.entities.users)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: ()=> dispatch(fetchAllUsers())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
