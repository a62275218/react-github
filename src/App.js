import React, {Component, lazy, Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import TopNav from './components/common/TopNav';
import Loading from './components/common/Loading';
import {throttle} from './utils/function';
import './App.css';

const Home = lazy(() => import('./components/Home'));
const NewsTemplate = lazy(()=>import('./components/common/NewsTemplate'));

class App extends Component {
    constructor(props){
        super(props);
        this.state = ({
            device:'pc',
            mobileOpen:false
        })
    }

    judgeWindowSize = ()=>{
        let device = this.state.device;
        let compareDevice = null;
        if(window.matchMedia('(max-width: 768px)').matches){
            compareDevice = 'mobile'
        }else{
            compareDevice = 'pc'
        }
        if(compareDevice !== device){
            this.setState({
                device:compareDevice
            })
        }
    };

    handleToggle = ()=>{
        this.setState(prevState=>({
            mobileOpen:!prevState.mobileOpen
        }))
    };

    closeToggle=()=>{
        this.setState({
            mobileOpen:false
        })
    }

    componentDidMount(){
        this.judgeWindowSize();
        window.addEventListener('resize',(e)=>{
            e.preventDefault();
            throttle(this.judgeWindowSize(),50)
        });
    }
    render() {
        const {device,mobileOpen} = this.state;
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <div>
                    <TopNav device={device} mobileOpen={mobileOpen} closeToggle={this.closeToggle} handleToggle={this.handleToggle}/>
                    <Suspense fallback={<Loading global={true}/>}>
                        <Switch>
                            <Route path='/' component={props=><Home device={device}/>} exact/>
                            <Route path={'/top-news'} key={'top-news'} render={props=><NewsTemplate {...props}/>} onRouterEnter={match=>console.log(match)}/>
                            <Route path={'/business'} key={'business'} render={props=><NewsTemplate {...props}/>}/>
                            <Route path={'/entertainment'} key={'entertainment'} render={props=><NewsTemplate {...props}/>}/>
                            <Route path={'/general'} key={'general'} render={props=><NewsTemplate {...props}/>}/>
                            <Route path={'/health'} key={'health'} render={props=><NewsTemplate {...props}/>}/>
                            <Route path={'/science'} key={'science'} render={props=><NewsTemplate {...props}/>}/>
                            <Route path={'/sports'} key={'sports'} render={props=><NewsTemplate {...props}/>}/>
                            <Route path={'/technology'} key={'technology'} render={props=><NewsTemplate {...props}/>}/>
                            <Route render={(props) => (404)}/>
                        </Switch>
                    </Suspense>
                </div>
            </Router>
        );
    }
}

export default App;
