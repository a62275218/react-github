import axios from 'axios';
import apiKey from '../config/index';
import NewsAPI from 'newsapi';

export const newsapi = new NewsAPI(apiKey.newsapi).v2;

export const baseURL = {
    news:'https://newsapi.org/v2/top-headlines'
};

let $http = axios.create({
    timeout:300000,
});

export default $http;