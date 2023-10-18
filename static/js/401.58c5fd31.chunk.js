"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[401],{9760:function(e,n,t){t.d(n,{j:function(){return a}});var r=t(184);function a(){return(0,r.jsx)("p",{children:"Sorry, something went wrong!"})}},854:function(e,n,t){t.d(n,{a:function(){return c}});var r=t(6307),a=t(184);function c(){return(0,a.jsx)(r.Z1,{height:"100",width:"100",color:"#4fa94d",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"three-circles-rotating",outerCircleColor:"",innerCircleColor:"",middleCircleColor:""})}},5401:function(e,n,t){t.r(n),t.d(n,{default:function(){return b}});var r,a=t(5861),c=t(9439),o=t(4687),i=t.n(o),s=t(2791),u=t(7689),p=t(5264),l=t(1144),f=t(168),h=t(1109),v=h.Z.div(r||(r=(0,f.Z)(["\npadding: 24px 0;\ncolor: white;\ndisplay: flex;\ngap: 32px\n"]))),d=t(184);function x(e){var n=e.title,t=e.vote_average,r=e.overview,a=e.genreNames,c=e.posterPath;return(0,d.jsxs)(v,{children:[(0,d.jsx)("div",{children:(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(c),alt:n})}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h1",{children:n}),(0,d.jsxs)("p",{children:["User score: ",t]}),(0,d.jsx)("h2",{children:"Overview"}),(0,d.jsx)("p",{children:r}),(0,d.jsx)("h3",{children:"Genres"}),(0,d.jsx)("p",{children:a})]})]})}var g,w,m=t(9760),j=t(854),y=t(1087),Z=(0,h.Z)(y.rU)(g||(g=(0,f.Z)(["\npadding: 6px 6px;\nfont-size: 14px;\nbackground-color: #9ae9fc;\ncolor:#032730;\nborder: none;\ntext-decoration: none;\n\n&:hover{\nbackground-color: #032730;\ncolor:#9ae9fc;\n}\n"]))),k=(0,h.Z)(y.rU)(w||(w=(0,f.Z)(["\nmargin-right: 24px;\nfont-weight: 600;\ncolor: white;\ntext-decoration: none;\n\n&:hover{\n    color:#04596e\n}\n\n&.active{\n    color:#04596e\n}\n"])));function b(){var e,n,t=(0,u.UO)().movieId,r=(0,s.useState)([]),o=(0,c.Z)(r,2),f=o[0],h=o[1],v=(0,s.useState)(!1),g=(0,c.Z)(v,2),w=g[0],y=g[1],b=(0,s.useState)(!1),_=(0,c.Z)(b,2),C=_[0],S=_[1],U=(0,u.TH)(),P=(0,s.useRef)(null!==(e=null===(n=U.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"./");(0,s.useEffect)((function(){function e(){return(e=(0,a.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,S(!0),e.next=4,(0,l.Pg)(t);case 4:n=e.sent,h(n),S(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),y(!0),p.Notify.failure(e.t0.message);case 13:return e.prev=13,S(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,9,13,16]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]);var N=f.title,R=f.vote_average,q=f.overview,G=f.genres,I=f.poster_path,L=I||"",O=G?G.map((function(e){return e.name})).join(" "):"";return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(Z,{to:P.current,children:"Go back"}),C&&(0,d.jsx)(j.a,{}),w&&(0,d.jsx)(m.j,{}),(0,d.jsx)(x,{title:N,vote_average:R,overview:q,genreNames:O,posterPath:L}),(0,d.jsx)("h2",{children:"Additional Information"}),(0,d.jsx)(k,{to:"cast",children:"Cast"}),(0,d.jsx)(k,{to:"review",children:"Review"}),(0,d.jsx)(u.j3,{})]})}},1144:function(e,n,t){t.d(n,{BC:function(){return s},Ku:function(){return v},Pg:function(){return f},W_:function(){return x},aq:function(){return p}});var r=t(5861),a=t(4687),c=t.n(a),o=t(1243),i="7767ff949005c6c2b1276d0401107c06";function s(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(c().mark((function e(){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("trending/movie/day?api_key=".concat(i));case 3:return n=e.sent,t=n.data,e.abrupt("return",t.results);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function p(e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function e(n){var t,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("search/movie?api_key=".concat(i,"&query=").concat(n,"&language=en-US"));case 3:return t=e.sent,r=t.data,a=r.results.filter((function(e){return"en"===e.original_language})),e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("movie/".concat(n,"?api_key=").concat(i));case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function v(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("movie/".concat(n,"/credits?api_key=").concat(i));case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function x(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("movie/".concat(n,"/reviews?api_key=").concat(i));case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}o.Z.defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=401.58c5fd31.chunk.js.map