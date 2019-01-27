import React, {Component} from 'react';
import $http, {newsapi} from '../utils/http'

class Home extends Component {
    constructor(props){
        super(props);

    }

    render() {
        return (
            <div className={'home-container'}>
                <div className={'box search-bar'}>
                    <input type="text"/>
                </div>
                <div className={'box home-search'}>

                </div>
            </div>
        );
    }
}

export default Home;
