(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{434:function(e,t,a){"use strict";a.r(t);var n=a(195),l=a(92),r=a.n(l),c=a(93),o=a(8),i=a(9),s=a(13),u=a(10),m=a(12),h=a(0),d=a.n(h),g=a(91),f=a(82),v=a(16),p=a(11),b=a(175),E=a.n(b),y=a(174),w=a.n(y),k=a(172),D=a.n(k),N=a(176),C=a.n(N),O=a(393),j=a.n(O),S=a(431),x=a(124),M=a.n(x),T=a(108),B=a(432),I=a(391),R=a.n(I),F=new Date,L=Object(T.createMuiTheme)({palette:{primary:{main:"#4eb3e5"}}}),z=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).loadMore=Object(c.a)(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({loadingMore:!0}),e.prev=1,e.next=4,g.a.everything({q:a.state.input,from:Object(f.a)(a.state.fromD),to:Object(f.a)(a.state.toD),sortBy:a.state.sortBy,language:a.state.language,page:++a.state.page});case 4:"ok"===(t=e.sent).status&&a.setState(function(e){return{articles:e.articles.concat(t.articles)}}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:return e.prev=11,a.setState({loadingMore:!1}),e.finish(11);case 14:case"end":return e.stop()}},e,this,[[1,8,11,14]])})),a.handleSearch=Object(c.a)(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({loading:!0}),e.prev=1,e.next=4,g.a.everything({q:a.state.input,from:Object(f.a)(a.state.fromD),to:Object(f.a)(a.state.toD),sortBy:a.state.sortBy,language:a.state.language,page:a.state.page});case 4:"ok"===(t=e.sent).status&&a.setState({totalResults:t.totalResults,articles:t.articles},function(){setTimeout(function(){var e=document.getElementById("article");e&&e.scrollIntoView({behavior:"smooth",block:"nearest"})},100)}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:return e.prev=11,a.setState({loading:!1}),e.finish(11);case 14:case"end":return e.stop()}},e,this,[[1,8,11,14]])})),a.handleDateChange=function(e){return function(t){a.setState(Object(n.a)({},e,t))}},a.handleOptionChange=function(e){return function(t){a.setState(Object(n.a)({},e,t.target.value))}},a.handleInputChange=function(e){a.setState({input:e.target.value})},a.handleImgLoad=function(e){},a.ref=d.a.createRef(),a.state={loading:!1,page:1,articles:[],totalResults:null,input:"",loadingMore:!1,fromD:new Date(F.getTime()-6048e5),toD:F,sortBy:"publishedAt",language:"en",selection:[{name:"Sort By",key:"sortBy",options:[{label:"Publish Time",value:"publishedAt"},{label:"Relevancy",value:"relevancy"},{label:"Popularity",value:"popularity"}]},{name:"Language",key:"language",options:[{label:"English",value:"en"},{label:"French",value:"fr"},{label:"Italian",value:"it"},{label:"Chinese",value:"zh"}]}]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",function(t){Object(v.a)(function(){var t=document.documentElement;t.scrollTop+t.clientHeight>=t.scrollHeight&&e.loadMore()},50).apply(e)}),window.addEventListener("keyup",function(t){13===t.keyCode&&e.handleSearch()})}},{key:"goNewsDetail",value:function(e){window.open(e)}},{key:"render",value:function(){var e=this,t=this.state,a=t.selection,n=t.fromD,l=t.toD,r=t.articles,c=t.loading,o=t.totalResults,i=t.loadingMore;return d.a.createElement(h.Fragment,null,d.a.createElement(T.MuiThemeProvider,{theme:L},d.a.createElement("div",{className:"home-container"},d.a.createElement("div",{className:"box search-bar"},d.a.createElement(D.a,{style:{width:"80%"},label:"Search News...",type:"search",onChange:this.handleInputChange}),d.a.createElement(M.a,{type:"submit",variant:"contained",color:"primary",onClick:this.handleSearch,style:{color:"#fff"},size:"medium"},c?d.a.createElement(R.a,{size:28,color:"white"}):"Search")),d.a.createElement("div",{className:"box home-search"},d.a.createElement("div",null,"Advanced Search"),d.a.createElement("form",{autoComplete:"off"},d.a.createElement("div",{className:"option-container"},a.map(function(t,a){return d.a.createElement(E.a,{key:a},d.a.createElement(w.a,null,t.name),d.a.createElement(C.a,{className:"select-box",value:e.state[t.key],onChange:e.handleOptionChange(t.key)},t.options.map(function(e,t){return d.a.createElement(j.a,{key:t,value:e.value},e.label)})))})),d.a.createElement("div",{className:"option-container"},d.a.createElement(B.b,{utils:S.a},d.a.createElement("div",{className:"select-box"},d.a.createElement(B.a,{label:"From",value:n,onChange:this.handleDateChange("fromD")})),d.a.createElement("div",{className:"select-box"},d.a.createElement(B.a,{label:"To",value:l,onChange:this.handleDateChange("toD")})))))))),r.length>0?d.a.createElement("div",{className:"article-list",id:"article"},d.a.createElement("div",{className:"article-count"},"Found: ",o," Records"),r.map(function(t,a){return d.a.createElement("div",{key:a,className:"article-block"},d.a.createElement("div",{className:"article-frame",onClick:function(){return e.goNewsDetail(t.url)}},d.a.createElement("div",null,t.title),d.a.createElement("div",{className:"article-img"},d.a.createElement("img",{src:t.urlToImage||"http://placehold.jp/24/cccccc/ffffff/300x150.png?text=Not%20Found",onLoad:e.handleImgLoad}))))})):"",i?d.a.createElement("div",{className:"bot-loading"},d.a.createElement(p.a,null)):"")}}]),t}(h.Component);t.default=z},82:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"b",function(){return l});var n=function(e,t){var a=t?new Date:new Date(e);return"".concat(a.getFullYear(),"-").concat(a.getMonth()+1,"-").concat(a.getDate())},l=function(e){var t=((new Date).getTime()-new Date(e).getTime())%864e5,a=Math.floor(t/36e5),n=Math.floor(t%36e5/6e4);return 0===a?"".concat(n," min ago"):"".concat(a," hr ago")}},91:function(e,t,a){"use strict";var n=a(126),l=a.n(n),r=a(132),c=a.n(r);a.d(t,"a",function(){return o});var o=new c.a("c81011b157164eb2b2c54679d9f91b9b").v2;l.a.create({timeout:3e5})}}]);
//# sourceMappingURL=2.8fb7303f.chunk.js.map