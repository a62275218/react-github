import React, {Component, lazy, Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import TopNav from './components/common/TopNav';
import Loading from './components/common/Loading'
import './App.css';

const Home = lazy(() => import('./components/Home'));
const TopNews = lazy(() => import('./components/TopNews'));

class App extends Component {
    render() {
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <div>
                    <TopNav/>
                    <Suspense fallback={<Loading global={true}/>}>
                        <Switch>
                            <Route path={process.env.PUBLIC_URL} component={props=><Home/>} exact/>
                            <Route path={'/top-news'} component={props=><TopNews/>}/>
                            <Route render={(props) => (404)}/>
                        </Switch>
                    </Suspense>
                </div>
            </Router>
        );
    }
}

export default App;
