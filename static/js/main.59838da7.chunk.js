(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{11:function(e,n,t){"use strict";var a=t(0),r=t.n(a),l=t(30);n.a=function(e){return r.a.createElement("div",{className:e.global?"loading":"loading-partial"},r.a.createElement("img",{src:l,alt:"Loading..."}))}},16:function(e,n,t){"use strict";t.d(n,"b",function(){return a}),t.d(n,"a",function(){return r});var a=function(e,n){var t=new Date;return function(){var a=arguments,r=new Date;r-t>=n&&(e.apply(this,a),t=r)}},r=function(e,n){var t=null;return function(){var a=this,r=arguments;clearTimeout(t),t=setTimeout(function(){e.apply(a,r)},n)}}},20:function(e,n,t){e.exports=t(33)},25:function(e,n,t){},30:function(e,n,t){e.exports=t.p+"static/media/Spinner-1s-200px.2a947ab3.gif"},31:function(e,n,t){},33:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(7),c=t.n(l),o=(t(25),t(8)),i=t(9),u=t(13),s=t(10),m=t(12),d=t(435),p=t(438),h=t(433),f=t(436),g=[{name:"Home",url:"/"},{name:"Top News",url:"/top-news"},{name:"Business",url:"/business"},{name:"Entertainment",url:"/entertainment"},{name:"General",url:"/general"},{name:"Health",url:"/health"},{name:"Science",url:"/science"},{name:"Sports",url:"/sports"},{name:"Technology",url:"/technology"}],E=function(e,n){return e},v=function(e){var n=e.device,t=e.mobileOpen,a=e.handleToggle,l=e.closeToggle;return r.a.createElement("div",null,r.a.createElement("div",{className:"top-nav"},"mobile"===n?r.a.createElement("div",{className:"mobile-toggle",onClick:a},r.a.createElement("span",{className:"line"}),r.a.createElement("span",{className:"line"}),r.a.createElement("span",{className:"line"})):"",r.a.createElement("div",{className:"top-logo"},"React News"),r.a.createElement("div",{className:"mobile"===n?"mobile-menu ".concat(t?"":"hide"):"top-menu"},g.map(function(e,n){return r.a.createElement("div",{key:n},r.a.createElement(f.a,{activeClassName:"top-link-active",className:"top-link",isActive:E,onClick:l,to:e.url,exact:!0},e.name))}))))},b=t(11),w=t(16),y=(t(31),Object(a.lazy)(function(){return Promise.all([t.e(0),t.e(4),t.e(2)]).then(t.bind(null,434))})),k=Object(a.lazy)(function(){return Promise.all([t.e(0),t.e(3)]).then(t.bind(null,437))}),O=function(e){function n(e){var t;return Object(o.a)(this,n),(t=Object(u.a)(this,Object(s.a)(n).call(this,e))).judgeWindowSize=function(){var e="pc";e=window.matchMedia("(max-width: 768px)").matches?"mobile":"pc",t.setState({device:e})},t.handleToggle=function(){t.setState(function(e){return{mobileOpen:!e.mobileOpen}})},t.closeToggle=function(){t.setState({mobileOpen:!1})},t.state={device:"pc",mobileOpen:!1},t}return Object(m.a)(n,e),Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.judgeWindowSize(),window.addEventListener("resize",function(n){Object(w.b)(e.judgeWindowSize(),50)})}},{key:"render",value:function(){var e=this.state,n=e.device,t=e.mobileOpen;return r.a.createElement(d.a,{basename:"/react-github"},r.a.createElement("div",null,r.a.createElement(v,{device:n,mobileOpen:t,closeToggle:this.closeToggle,handleToggle:this.handleToggle}),r.a.createElement(a.Suspense,{fallback:r.a.createElement(b.a,{global:!0})},r.a.createElement(p.a,null,r.a.createElement(h.a,{path:"/",component:function(e){return r.a.createElement(y,null)},exact:!0}),r.a.createElement(h.a,{path:"/top-news",key:"top-news",render:function(e){return r.a.createElement(k,e)},onRouterEnter:function(e){return console.log(e)}}),r.a.createElement(h.a,{path:"/business",key:"business",render:function(e){return r.a.createElement(k,e)}}),r.a.createElement(h.a,{path:"/entertainment",key:"entertainment",render:function(e){return r.a.createElement(k,e)}}),r.a.createElement(h.a,{path:"/general",key:"general",render:function(e){return r.a.createElement(k,e)}}),r.a.createElement(h.a,{path:"/health",key:"health",render:function(e){return r.a.createElement(k,e)}}),r.a.createElement(h.a,{path:"/science",key:"science",render:function(e){return r.a.createElement(k,e)}}),r.a.createElement(h.a,{path:"/sports",key:"sports",render:function(e){return r.a.createElement(k,e)}}),r.a.createElement(h.a,{path:"/technology",key:"technology",render:function(e){return r.a.createElement(k,e)}}),r.a.createElement(h.a,{render:function(e){return 404}})))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,6,5]]]);
//# sourceMappingURL=main.59838da7.chunk.js.map