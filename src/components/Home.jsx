import React, {Component, Fragment} from 'react';
import {newsapi} from '../utils/http';
import {convertDate} from '../utils/date';
import {throttle,debounce} from '../utils/function'
import Loading from './common/Loading'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import {MuiPickersUtilsProvider, DatePicker} from 'material-ui-pickers';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const today = new Date();

const theme = createMuiTheme({
    palette: {
        primary: {main: '#4eb3e5'},
    },
});

class Home extends Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.state = {
            loading: false,
            page: 1,
            articles: [],
            totalResults: null,
            input: '',
            loadingMore: false,
            // one week
            fromD: new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000),
            toD: today,
            sortBy: 'publishedAt',
            language: 'en',
            dialogOpen:false,
            dialogMsg:'',
            selection: [
                {
                    name: 'Sort By',
                    key: 'sortBy',
                    options: [
                        {
                            label: 'Publish Time',
                            value: 'publishedAt'
                        },
                        {
                            label: 'Relevancy',
                            value: 'relevancy'
                        },
                        {
                            label: 'Popularity',
                            value: 'popularity'
                        }
                    ]
                },
                {
                    name: 'Language',
                    key: 'language',
                    options: [
                        {
                            label: 'English',
                            value: 'en'
                        },
                        {
                            label: 'French',
                            value: 'fr'
                        },
                        {
                            label: 'Italian',
                            value: 'it'
                        },
                        {
                            label: 'Chinese',
                            value: 'zh'
                        }
                    ]
                }
            ]
        }
    }

    componentDidMount() {
        console.log(this.props.device);
        switch(this.props.device){
            case 'pc':
                window.addEventListener('scroll', (e) => {
                    if(this.state.articles.length){
                        let body = document.documentElement;
                        if (body.scrollTop + body.clientHeight >= body.scrollHeight) {
                            debounce(this.loadMore(),5000);
                        }
                    }
                });
                break;
            case 'mobile':
                let touchStart,
                    touchDis;
                window.addEventListener('touchstart',function (e) {
                    console.log(e)
                    let touch = e.touches[0];
                    touchStart=touch.pageY;
                },false);
                window.addEventListener('touchmove', (e) => {
                    console.log(e)
                    let touch = e.targetTouches[0];
                    touchDis = touch.pageY - touchStart;
                    console.log(touchDis);
                    if(this.state.articles.length && touchDis <- 100){
                        let body = document.documentElement;
                        if (body.scrollTop + body.clientHeight >= body.scrollHeight) {
                            debounce(this.loadMore(),5000);
                        }
                    }
                });
                break;
            default:
                break;
        }

        window.addEventListener('keyup', (e) => {
            if (e.keyCode === 13) {
                this.handleSearch();
            }
        })
    }

    loadMore = async () => {
        if(!this.state.loadingMore){
            this.setState({
                loadingMore: true
            });
            try {
                let res = await newsapi.everything({
                    q: this.state.input,
                    from: convertDate(this.state.fromD),
                    to: convertDate(this.state.toD),
                    sortBy: this.state.sortBy,
                    language: this.state.language,
                    page: ++this.state.page
                });
                if (res.status === 'ok') {
                    if(res.articles.length){
                        this.setState(prevState => ({
                            articles: prevState.articles.concat(res.articles)
                        }))
                    }else{
                        this.setState({
                            loadingMore: false
                        })
                    }
                }else{
                    this.setState({
                        loadingMore: false
                    })
                }
            } catch (err) {
                console.log(err)
                this.setState({
                    loadingMore: false,
                    dialogOpen:true,
                    dialogMsg:err.toString()
                });
            } finally {
                this.setState({
                    loadingMore: false
                })
            }
        }
    };


    handleSearch = async () => {
        this.setState({
            loading: true
        });
        try {
            let res = await newsapi.everything({
                q: this.state.input,
                from: convertDate(this.state.fromD),
                to: convertDate(this.state.toD),
                sortBy: this.state.sortBy,
                language: this.state.language,
                page: this.state.page
            });
            if (res.status === 'ok') {
                this.setState({
                    totalResults: res.totalResults,
                    articles: res.articles
                }, () => {
                    setTimeout(function () {
                        let element = document.getElementById('article');
                        if (element) {
                            element.scrollIntoView({
                                behavior: 'smooth',
                                block: 'nearest'
                            })
                        }
                    }, 100);
                })
            }
        } catch (err) {
            this.setState({
                dialogOpen:true,
                dialogMsg:err.toString()
            });
            console.log(err)
        } finally {
            this.setState({
                loading: false
            })
        }
    };

    handleDateChange = source => date => {
        this.setState({
            [source]: date
        });
    };

    handleOptionChange = key => e => {
        this.setState({
            [key]: e.target.value
        });
    };

    handleInputChange = (e) => {
        this.setState({
            input: e.target.value
        })
    };

    goNewsDetail(title) {
        window.open(title)
    }

    handleImgLoad = (index,src) => {
        document.getElementById(index).setAttribute('src',src)
    };

    handleDialogClose = ()=>{
        this.setState({
            dialogOpen:false,
            dialogMsg:''
        })
    }

    render() {
        const {selection, fromD, toD, articles, loading, totalResults, loadingMore,dialogOpen,dialogMsg} = this.state;
        return (
            <Fragment>
                <MuiThemeProvider theme={theme}>
                    <div className={'home-container'}>
                        <div className={'box search-bar'}>
                            <TextField
                                style={{width: '80%'}}
                                label="Search News..."
                                type="search"
                                onChange={throttle(this.handleInputChange, 500)}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                onClick={this.handleSearch}
                                style={{color: '#fff'}}
                                size={'medium'}
                            >
                                {loading ? <CircularProgress size={28} color="white"/> : 'Search'}
                            </Button>
                        </div>
                        <div className={'box home-search'}>
                            <div>Advanced Search</div>
                            <form autoComplete={'off'}>
                                <div className={'option-container'}>
                                    {
                                        selection.map((item, index) => {
                                            return <FormControl key={index}>
                                                <InputLabel>{item.name}</InputLabel>
                                                <Select
                                                    className={'select-box'}
                                                    value={this.state[item.key]}
                                                    onChange={this.handleOptionChange(item.key)}
                                                >
                                                    {item.options.map((option, index) => {
                                                        return <MenuItem key={index}
                                                                         value={option.value}
                                                        >
                                                            {option.label}
                                                        </MenuItem>
                                                    })}
                                                </Select>
                                            </FormControl>
                                        })
                                    }

                                </div>
                                <div className={'option-container'}>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <div className={'select-box'}>
                                            <DatePicker
                                                label="From"
                                                value={fromD}
                                                onChange={this.handleDateChange('fromD')}
                                            >
                                            </DatePicker>
                                        </div>
                                        <div className={'select-box'}>
                                            <DatePicker
                                                label="To"
                                                value={toD}
                                                onChange={this.handleDateChange('toD')}
                                            >
                                            </DatePicker>
                                        </div>
                                    </MuiPickersUtilsProvider>
                                </div>
                            </form>
                        </div>
                    </div>
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        open={dialogOpen}
                        onClose={this.handleDialogClose}
                        autoHideDuration={6000}
                        message={
                            <span id="message-id">Error Occurred<br/>
                            <span>{dialogMsg}</span></span>}
                        action={[
                            <IconButton
                                key="close"
                                aria-label="Close"
                                color="inherit"
                                onClick={this.handleDialogClose}
                            >
                                <CloseIcon />
                            </IconButton>,
                        ]}
                    />
                </MuiThemeProvider>
                {articles.length > 0 ?
                    <div className={'article-list'} id={"article"}>
                        <div className={'article-count'}>Found: {totalResults} Records</div>
                        {articles.map((item, index) => {
                            return <div key={index} className={'article-block'}>
                                <div className={'article-frame'} onClick={() => this.goNewsDetail(item.url)}>
                                    <div>{item.title}</div>
                                    <div className={'article-img'}>
                                        <img
                                            id={index}
                                            className={'img'}
                                            alt={'Not Found'}
                                            src={item.urlToImage?require('../static/5-121204194110-51.gif'):'http://placehold.jp/24/cccccc/ffffff/300x150.png?text=Not%20Found'}
                                            onLoad={()=>this.handleImgLoad(index,item.urlToImage)}
                                        />
                                    </div>
                                </div>
                            </div>
                        })}
                    </div> : ''}
                {
                    loadingMore ? <div className={'bot-loading'}>
                        <Loading/>
                    </div> : ''
                }
            </Fragment>
        );
    }
}

export default Home;
