import React, {Component} from 'react';
import $http, {newsapi} from '../utils/http';
import {convertDate} from '../utils/date';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import {MuiPickersUtilsProvider, DatePicker} from 'material-ui-pickers';


const today = new Date();

const theme = createMuiTheme({
    palette: {
        primary:{main:'#4eb3e5'} ,
    },
});

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            // one week
            fromD: new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000),
            toD: today,
            sortBy:'publishedAt',
            language:'en',
            selection: [
                {
                    name: 'Sort By',
                    key:'sortBy',
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
                    key:'language',
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

    handleSearch = async() => {
        let res = await newsapi.everything({
            q:this.state.input,
            from:convertDate(this.state.fromD),
            to:convertDate(this.state.toD),
            sortBy:this.state.sortBy,
            language:this.state.language
        });
        console.log(res)
    };

    handleDateChange = source => date => {
        this.setState({
            [source]: date
        });
    };

    handleOptionChange = key => e=>{
        console.log(key);
        this.setState({
            [key]:e.target.value
        });
        console.log(e.target.value)
    };

    handleInputChange = (e)=>{
        this.setState({
            input:e.target.value
        })
    };

    render() {
        const {selection, fromD, toD} = this.state;
        return (
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
                            style={{color:'#fff'}}
                        >
                            Search
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
        );
    }
}

export default Home;
