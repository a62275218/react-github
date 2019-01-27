import React from 'react';
const url = require('../../static/Spinner-1s-200px.gif');

const Loading = () => {
    return (
        <div className={'loading'}>
            <img src={url} alt="Loading..."/>
        </div>
    );
};

export default Loading;
