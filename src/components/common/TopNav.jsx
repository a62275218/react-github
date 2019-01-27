import React from 'react';
import {NavLink} from 'react-router-dom';

const menu = [
    {name: 'Home', url: '/'},
    {name: 'Top News', url: '/top-news'},
    {name: 'Business', url: '/business'},
    {name: 'Entertainment', url: '/entertainment'},
    {name: 'General', url: '/general'},
    {name: 'Health', url: '/health'},
    {name: 'Science', url: '/science'},
    {name: 'Sports', url: '/sports'},
    {name: 'Technology', url: '/technology'}
];

const activeEvent = (match, location) => {
    return match
};

const TopNav = () => {
    return (
        <div>
            {/*<div style={{marginTop: 120}}/>*/}
            <div className={'top-nav'}>
                <div className={'top-logo'}>React News</div>
                <div className={'top-menu'}>
                    {
                        menu.map((element, index) => {
                            return <div key={index}>
                                <NavLink activeClassName={'top-link-active'}
                                         className={'top-link'}
                                         isActive={activeEvent}
                                         to={element.url}
                                         exact>
                                    {element.name}
                                </NavLink>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default TopNav;
