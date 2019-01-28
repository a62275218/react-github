import React from 'react';
const url = require('../../static/Spinner-1s-200px.gif');

const Loading = (props) => {
    return (
        <div className={props.global?'loading':'loading-partial'}>
            <img src={url} alt="Loading..."/>
        </div>
    );
};

export default Loading;
