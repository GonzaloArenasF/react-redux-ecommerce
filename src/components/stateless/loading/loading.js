import React from 'react';

// Style
import './loading.scss';

export const Loading = (data) => {

    return (data.hasToken) ? (
        <div className="loading">
            <h3>{ data.message }</h3>
            <div></div>
            <div></div>
            <div></div>
        </div>
    ) : '';
}