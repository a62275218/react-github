import React, {Component,Fragment} from 'react';
import {newsapi} from '../../utils/http';
import Latest from './Latest'
import {convertDate} from "../../utils/date";
import Loading from '../common/Loading'

class NewsTemplate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading:true
        };
    }

    async componentDidMount() {
        try {
            let res = await newsapi.topHeadlines({
                country: 'au',
                pageSize: 5
            });
            if (res.status === 'ok') {
                this.setState({
                    totalResults: res.totalResults,
                    articles: res.articles
                })
            }
            console.log(this.state)
        } catch (err) {
            console.log(err)
        } finally{
            this.setState({
                loading:false
            })
        }
    }

    goNewsDetail(title) {
        window.open(title)
    }

    render() {
        const {loading, articles} = this.state;
        return (
            <div className={'wrapper'}>
            {
                loading?<Loading/>:
                        <div className={'news-list'}>
                            {articles.map((item, index) => {
                                return <div className={'news-wrapper'} key={index}>
                                    <div className={'news-title'} onClick={() => this.goNewsDetail(item.url)}>
                                        {item.title}
                                    </div>
                                    <div className={'news-sub'}>
                                        {convertDate(item.publishedAt)}
                                        {item.author ? '   by ' + item.author : ''}
                                    </div>
                                    <div className={'news-content'}>
                                        <div>
                                            <img className={'news-img'}
                                                 onClick={() => this.goNewsDetail(item.url)}
                                                 src={item.urlToImage || 'http://placehold.jp/24/cccccc/ffffff/300x150.png?text=Not%20Found'}
                                            />
                                        </div>
                                        <div className={'news-item-content'}>
                                            {item.content}
                                        </div>
                                    </div>
                                </div>
                            })}
                        <Latest goDetail={this.goNewsDetail}/>
                    </div>
            }
            </div>
        );
    }
}

export default NewsTemplate;
