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

const TopNav = (props) => {
    const {device,mobileOpen,handleToggle,closeToggle} = props;

    return (
        <div>
            <div className={'top-nav'}>
                {device==='mobile'?<div className={'mobile-toggle'} onClick={handleToggle}>
                    <span className={'line'}/>
                    <span className={'line'}/>
                    <span className={'line'}/>
                </div>:''}
                <div className={'top-logo'}>React News</div>
                <div className={device==='mobile'?`mobile-menu ${mobileOpen?'':'hide'}`:'top-menu'}>
                    {
                        menu.map((element, index) => {
                            return <div key={index}>
                                <NavLink activeClassName={'top-link-active'}
                                         className={'top-link'}
                                         isActive={activeEvent}
                                         onClick={closeToggle}
                                         to={element.url}
                                         exact
                                >
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
