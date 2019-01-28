import React, {Component} from 'react';
import $http, {newsapi} from '../utils/http';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            selection: [
                {
                    name: 'Sort By',
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
                    options: [
                        {
                            label: 'English',
                            value: 'ar'
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

    render() {
        const {selection} = this.state;
        return (
            <div className={'home-container'}>
                <div className={'box search-bar'}>
                    <TextField
                        id="standard-search"
                        label="Search News"
                        type="search"
                    />
                </div>
                <div className={'box home-search'}>
                    <form autoComplete={'off'}>
                        {
                            selection.map((item,index)=>{
                                return <FormControl key={index}>
                                    <FormLabel>{item.label}</FormLabel>
                                    <Select
                                        value={item.options[0].value}
                                        onChange={this.handleChange}
                                        input={<Input name="age" id="age-helper"/>}
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
                    </form>
                </div>
            </div>
        );
    }
}

export default Home;
