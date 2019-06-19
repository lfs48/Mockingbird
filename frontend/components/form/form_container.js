import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import Form from './form';

const mapStateToProps = (state) => {
    return {
        users: Object.values(state.entities.users)
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
