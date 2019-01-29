import React, {Component, Fragment} from 'react';
import {newsapi} from '../utils/http';
import {convertDate} from '../utils/date';
import {throttle} from '../utils/function'
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
            loading:false,
            page:1,
            articles: [],
            totalResults: null,
            input: '',
            loadingMore:false,
            // one week
            fromD: new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000),
            toD: today,
            sortBy: 'publishedAt',
            language: 'en',
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

    componentDidMount(){
        window.addEventListener('scroll',(e)=>{
            throttle(()=>{
                let body = document.documentElement;
                if(body.scrollTop + body.clientHeight >= body.scrollHeight){
                    this.loadMore();
                }
            },50).apply(this)
        });
        window.addEventListener('keyup',(e)=>{
            if(e.keyCode === 13){
                this.handleSearch();
            }
        })
    }

    loadMore = async () => {
        this.setState({
            loadingMore:true
        });
        try {
            let res = await newsapi.everything({
                q: this.state.input,
                from: convertDate(this.state.fromD),
                to: convertDate(this.state.toD),
                sortBy: this.state.sortBy,
                language: this.state.language,
                page:++this.state.page
            });
            if (res.status === 'ok') {
                this.setState(prevState=>({
                    articles: prevState.articles.concat(res.articles)
                }))
            }
        } catch (err) {
            console.log(err)
        } finally {
            this.setState({
                loadingMore: false
            })
        }
    };


    handleSearch = async () => {
        this.setState({
            loading:true
        });
        try {
            let res = await newsapi.everything({
                q: this.state.input,
                from: convertDate(this.state.fromD),
                to: convertDate(this.state.toD),
                sortBy: this.state.sortBy,
                language: this.state.language,
                page:this.state.page
            });
            if (res.status === 'ok') {
                this.setState({
                    totalResults: res.totalResults,
                    articles: res.articles
                },()=>{
                    setTimeout(function() {
                        let element = document.getElementById('article');
                        if(element) {
                            element.scrollIntoView({
                                behavior: 'smooth',
                                block: 'nearest'
                            })
                        }
                    }, 100);
                })
            }
            console.log(this.state)
        } catch (err) {
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
        console.log(key);
        this.setState({
            [key]: e.target.value
        });
        console.log(e.target.value)
    };

    handleInputChange = (e) => {
        this.setState({
            input: e.target.value
        })
    };

    handleImgLoad=(e)=>{
    };

    render() {
        const {selection, fromD, toD, articles,loading,totalResults,loadingMore} = this.state;
        return (
            <Fragment>
                <MuiThemeProvider theme={theme}>
                    <div className={'home-container'}>
                        <div className={'box search-bar'}>
                            <TextField
                                style={{width: '80%'}}
                                label="Search News..."
                                type="search"
                                onChange={this.handleInputChange}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                onClick={this.handleSearch}
                                style={{color: '#fff'}}
                                size={'medium'}
                            >
                                {loading?<CircularProgress size={28} color="white"/>:'Search'}
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
                </MuiThemeProvider>
                {articles.length > 0 ?
                    <div className={'article-list'} id={"article"}>
                        <div className={'article-count'}>Found: {totalResults} Records</div>
                        {articles.map((item, index) => {
                            return <div key={index} className={'article-block'}>
                                <div className={'article-frame'}>
                                    <div>{item.title}</div>
                                    <div className={'article-img'}>
                                        <img
                                            src={item.urlToImage || 'http://placehold.jp/24/cccccc/ffffff/300x150.png?text=Not%20Found'}
                                            onLoad={this.handleImgLoad}
                                        />
                                    </div>
                                </div>
                            </div>
                        })}
                    </div> : ''}
                {
                    loadingMore?<div className={'bot-loading'}>
                        <Loading/>
                    </div>:''
                }
            </Fragment>
        );
    }
}

export default Home;
