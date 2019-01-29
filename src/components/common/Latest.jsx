import React, {Component} from 'react';
import {newsapi} from '../../utils/http';
import {convertDate, showTimeDiff} from "../../utils/date";
import Loading from '../common/Loading'

class Latest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true
        };
        this.goNewsDetail = this.props.goDetail.bind(this)
    }


    async componentDidMount() {
        console.log(convertDate(null, true));
        try {
            let res = await newsapi.everything({
                sources: 'google-news-au',
                from: convertDate(null, true)
            });
            if (res.status === 'ok') {
                this.setState({
                    totalResults: res.totalResults,
                    articles: res.articles
                })
            }
            console.log(res)
        } catch (err) {
            console.log(err)
        } finally {
            this.setState({
                loading:false
            })
        }
    }

    render() {
        const {loading, articles} = this.state;
        return (
            <div className={'latest-wrapper'}>
                <div className={'latest-container'}>
                    <div className={'latest-title'}>Latest News Worldwide</div>
                    {loading?<Loading/>:
                        <div className={'scroll-container'}>
                        <div className={'latest-list'}>
                            {articles.length === 0? 'Lastest News haven\'t been updated yet':''}
                            {articles.map((item, index) => {
                                return <div className={'latest-item'} key={index}>
                                    <div className={'latest-sub'}>
                                        {showTimeDiff(item.publishedAt)}
                                    </div>
                                    <div className={'latest-item-title'}
                                         onClick={() => this.goNewsDetail(item.url)}
                                    >
                                        {item.title}
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>}
                </div>
            </div>
        );
    }
}

export default Latest;
