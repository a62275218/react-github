(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{432:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(91),s=a.n(r),l=a(92),i=a(8),o=a(9),u=a(11),m=a(10),v=a(12),d=a(90),f=a(15),p=a(81),h=a(13),w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={articles:[],loading:!0},a.goNewsDetail=a.props.goDetail.bind(Object(f.a)(Object(f.a)(a))),a}return Object(v.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(Object(p.a)(null,!0)),e.prev=1,e.next=4,d.a.everything({sources:"google-news-au",from:Object(p.a)(null,!0)});case 4:"ok"===(t=e.sent).status&&this.setState({totalResults:t.totalResults,articles:t.articles}),console.log(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:return e.prev=12,this.setState({loading:!1}),e.finish(12);case 15:case"end":return e.stop()}},e,this,[[1,9,12,15]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.loading,n=t.articles;return c.a.createElement("div",{className:"latest-wrapper"},c.a.createElement("div",{className:"latest-container"},c.a.createElement("div",{className:"latest-title"},"Latest News Worldwide"),a?c.a.createElement(h.a,null):c.a.createElement("div",{className:"scroll-container"},c.a.createElement("div",{className:"latest-list"},n.map(function(t,a){return c.a.createElement("div",{className:"latest-item",key:a},c.a.createElement("div",{className:"latest-sub"},Object(p.b)(t.publishedAt)),c.a.createElement("div",{className:"latest-item-title",onClick:function(){return e.goNewsDetail(t.url)}},t.title))})))))}}]),t}(n.Component),b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={articles:[],loading:!0},a}return Object(v.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.topHeadlines({country:"au",pageSize:5});case 3:"ok"===(t=e.sent).status&&this.setState({totalResults:t.totalResults,articles:t.articles}),console.log(this.state),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:return e.prev=11,this.setState({loading:!1}),e.finish(11);case 14:case"end":return e.stop()}},e,this,[[0,8,11,14]])}));return function(){return e.apply(this,arguments)}}()},{key:"goNewsDetail",value:function(e){window.open(e)}},{key:"render",value:function(){var e=this,t=this.state,a=t.loading,n=t.articles;return c.a.createElement("div",{className:"wrapper"},a?c.a.createElement(h.a,null):c.a.createElement("div",{className:"news-list"},n.map(function(t,a){return c.a.createElement("div",{className:"news-wrapper",key:a},c.a.createElement("div",{className:"news-title",onClick:function(){return e.goNewsDetail(t.url)}},t.title),c.a.createElement("div",{className:"news-sub"},Object(p.a)(t.publishedAt),t.author?"   by "+t.author:""),c.a.createElement("div",{className:"news-content"},c.a.createElement("div",null,c.a.createElement("img",{className:"news-img",onClick:function(){return e.goNewsDetail(t.url)},src:t.urlToImage||"http://placehold.jp/24/cccccc/ffffff/300x150.png?text=Not%20Found"})),c.a.createElement("div",{className:"news-item-content"},t.content)))}),c.a.createElement(w,{goDetail:this.goNewsDetail})))}}]),t}(n.Component);t.default=function(){return c.a.createElement("div",null,c.a.createElement(b,null))}},81:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"b",function(){return c});var n=function(e,t){var a=t?new Date:new Date(e);return"".concat(a.getFullYear(),"-").concat(a.getMonth()+1,"-").concat(a.getDate())},c=function(e){var t=((new Date).getTime()-new Date(e).getTime())%864e5,a=Math.floor(t/36e5),n=Math.floor(t%36e5/6e4);return 0===a?"".concat(n," min ago"):"".concat(a," hr ago")}},90:function(e,t,a){"use strict";var n=a(125),c=a.n(n),r=a(131),s=a.n(r);a.d(t,"a",function(){return l});var l=new s.a("c81011b157164eb2b2c54679d9f91b9b").v2;c.a.create({timeout:3e5})}}]);
//# sourceMappingURL=3.7540b0ac.chunk.js.map