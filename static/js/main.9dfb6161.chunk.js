(this.webpackJsonplupitan6=this.webpackJsonplupitan6||[]).push([[0],{11:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(5),a=n.n(s),i=(n(11),n(0));var j=function(){return Object(i.jsx)("header",{children:Object(i.jsx)("h1",{children:"Lupitan6"})})},u=n(3),l=n.n(u),o=n(6),b=n(4),h=Object(c.createContext)([]);n(14);function d(){var e=Object(c.useContext)(h);return Object(i.jsx)(i.Fragment,{children:e.map((function(e,t){return null===e.urlToImage&&(e.urlToImage="https://klubanet.files.wordpress.com/2015/05/blank-thumbnail.jpg"),Object(i.jsxs)("div",{className:"news-card",children:[Object(i.jsx)("div",{className:"thumbnail",children:Object(i.jsx)("img",{src:e.urlToImage,alt:"thumbnail"})}),Object(i.jsx)("div",{className:"description",children:Object(i.jsx)("h4",{className:"title",children:Object(i.jsx)("a",{target:"blank",href:e.url,children:e.title})})})]},t)}))})}var O=function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(!0),a=Object(b.a)(s,2),j=a[0],u=a[1];return Object(c.useEffect)((function(){var e="https://api-news-org.herokuapp.com/top-headlines";function t(){return(t=Object(o.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return t.next=4,t.sent.json();case 4:n=t.sent,r(n.response.articles),u(!1);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),j?Object(i.jsx)("p",{children:"Loading..."}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{children:"Berita Utama"}),Object(i.jsx)("section",{className:"news-container",children:Object(i.jsx)(h.Provider,{value:n,children:Object(i.jsx)(d,{})})})]})};var p=function(){return Object(i.jsxs)(c.Fragment,{children:[Object(i.jsx)(j,{}),Object(i.jsx)(O,{})]})};n(15);a.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(p,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.9dfb6161.chunk.js.map