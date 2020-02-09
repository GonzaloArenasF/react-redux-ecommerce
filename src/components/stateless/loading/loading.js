import React from 'react';
import PropTypes from 'prop-types';

// Style
import './loading.scss';

const Loading = (props) => {

    return (props.isLoading) ? (
        <div className="loading" data-test="loading">
            <h3>{ props.message }</h3>
            <div></div>
            <div></div>
            <div></div>
        </div>
    ) : '';
}

Loading.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired
}

export default Loading;