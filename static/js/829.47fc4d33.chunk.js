"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[829],{9760:function(e,t,r){r.d(t,{j:function(){return a}});var n=r(184);function a(){return(0,n.jsx)("p",{children:"Sorry, something went wrong!"})}},854:function(e,t,r){r.d(t,{a:function(){return u}});var n=r(6307),a=r(184);function u(){return(0,a.jsx)(n.Z1,{height:"100",width:"100",color:"#4fa94d",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"three-circles-rotating",outerCircleColor:"",innerCircleColor:"",middleCircleColor:""})}},8829:function(e,t,r){r.r(t),r.d(t,{default:function(){return g}});var n,a=r(5861),u=r(9439),c=r(4687),i=r.n(c),s=r(2791),o=r(7689),p=r(1144),l=r(5264),f=r(9760),h=r(854),v=r(168),d=r(1109).Z.ul(n||(n=(0,v.Z)(["\nlist-style-type: none;\n"]))),y=r(184);function g(){var e=(0,o.UO)().movieId,t=(0,s.useState)([]),r=(0,u.Z)(t,2),n=r[0],c=r[1],v=(0,s.useState)(!1),g=(0,u.Z)(v,2),m=g[0],w=g[1],x=(0,s.useState)(!1),b=(0,u.Z)(x,2),k=b[0],Z=b[1];return(0,s.useEffect)((function(){function t(){return(t=(0,a.Z)(i().mark((function t(){var r,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,Z(!0),t.next=4,(0,p.W_)(e);case 4:r=t.sent,n=r.results,c(n),Z(!1),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),w(!0),l.Notify.failure(t.t0.message);case 14:return t.prev=14,Z(!1),t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[0,10,14,17]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),(0,y.jsxs)(y.Fragment,{children:[n.length>0?(0,y.jsx)(d,{children:n.map((function(e){return(0,y.jsxs)("li",{children:[(0,y.jsxs)("b",{children:["Author: ",e.author]}),(0,y.jsx)("p",{children:e.content})]},e.id)}))}):(0,y.jsx)("div",{children:"Sorry, there is no review"}),k&&(0,y.jsx)(h.a,{}),m&&(0,y.jsx)(f.j,{})]})}},1144:function(e,t,r){r.d(t,{BC:function(){return o},Ku:function(){return d},Pg:function(){return h},W_:function(){return g},aq:function(){return l}});var n=r(5861),a=r(4687),u=r.n(a),c=r(1243),i=r(1686),s="7767ff949005c6c2b1276d0401107c06";function o(){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("trending/movie/day?api_key=".concat(s));case 3:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",i.Notify.failure("".concat(e.t0.message,", please try again later")));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function l(e){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(u().mark((function e(t){var r,n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("search/movie?api_key=".concat(s,"&query=").concat(t,"&language=en-US"));case 3:return r=e.sent,n=r.data,a=n.results.filter((function(e){return"en"===e.original_language})),e.abrupt("return",a);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",i.Notify.failure("".concat(e.t0.message,", please try again later")));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function h(e){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("movie/".concat(t,"?api_key=").concat(s));case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",i.Notify.failure("".concat(e.t0.message,", please try again later")));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function d(e){return y.apply(this,arguments)}function y(){return(y=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(s));case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",i.Notify.failure("".concat(e.t0.message,", please try again later")));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function g(e){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(s));case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",i.Notify.failure("".concat(e.t0.message,", please try again later")));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}c.Z.defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=829.47fc4d33.chunk.js.map