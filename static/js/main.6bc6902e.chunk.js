(this.webpackJsonpbowling_ui=this.webpackJsonpbowling_ui||[]).push([[0],{15:function(e,a,n){e.exports={pageContainer:"HomePage_pageContainer__9eY93",inputContainer:"HomePage_inputContainer__10wIc",searchInput:"HomePage_searchInput__1s2gw",resultContainer:"HomePage_resultContainer__3yv5e",imageContainer:"HomePage_imageContainer__32khm",inline:"HomePage_inline__3ADm2",centerText:"HomePage_centerText__1Qlo1",errorText:"HomePage_errorText__1LOco",paginationContainer:"HomePage_paginationContainer__Gc9E9",disabled:"HomePage_disabled__2tQjv",pointer:"HomePage_pointer__1RDSu"}},48:function(e,a,n){e.exports={loader:"Spinner_loader__3qpwL",load6:"Spinner_load6__3rMhZ",round:"Spinner_round__7YmOD"}},58:function(e,a,n){},78:function(e,a){e.exports={environment:"DEV",imgurAuth:"Client-ID b067d5cb828ec5a"}},84:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n(44),c=n.n(r),s=n(49),i=(n(58),n(45)),l=n(46),j=n(51),o=n(50),h=n(12),d=n.n(h),b=n(47),u=n.n(b);n(78);function O(e){return u()({url:e,method:"GET"})}var x=n(48),g=n.n(x),m=n(2);function p(){return Object(m.jsx)("div",{class:g.a.loader,children:"Loading..."})}var v=n(96),_=n(100),f=n(103),w=n(104),y=n(98),C=n(101),S=n(102),N=n(99),P=Object(v.a)({table:{minWidth:650}});function H(e){var a=e.leagues,n=P();return Object(m.jsxs)(y.a,{component:N.a,children:[Object(m.jsx)("h3",{children:"Leagues"}),Object(m.jsxs)(_.a,{className:n.table,"aria-label":"simple table",children:[Object(m.jsx)(C.a,{children:Object(m.jsxs)(S.a,{children:[Object(m.jsx)(w.a,{children:"Association Name"}),Object(m.jsx)(w.a,{children:"League Name"}),Object(m.jsx)(w.a,{children:"Team Name"}),Object(m.jsx)(w.a,{children:"Season"}),Object(m.jsx)(w.a,{children:"# of Games"}),Object(m.jsx)(w.a,{children:"Average"}),Object(m.jsx)(w.a,{children:"Year"}),Object(m.jsx)(w.a,{children:"Sport"}),Object(m.jsx)(w.a,{children:"Is Challenge?"})]})}),Object(m.jsx)(f.a,{children:a.map((function(e){return Object(m.jsxs)(S.a,{children:[Object(m.jsx)(w.a,{component:"th",scope:"row",children:e.aname}),Object(m.jsx)(w.a,{children:e.lname}),Object(m.jsx)(w.a,{children:e.cname}),Object(m.jsx)(w.a,{children:e.season}),Object(m.jsx)(w.a,{children:e.games}),Object(m.jsx)(w.a,{children:e.avg}),Object(m.jsx)(w.a,{children:e.year}),Object(m.jsx)(w.a,{children:e.sport}),Object(m.jsx)(w.a,{children:e.challenge})]},e.name)}))})]})]})}var k=Object(v.a)({table:{minWidth:650}});function I(e){var a=e.averages,n=k();return Object(m.jsxs)(y.a,{component:N.a,children:[Object(m.jsx)("h3",{children:"Averages"}),Object(m.jsxs)(_.a,{className:n.table,"aria-label":"simple table",children:[Object(m.jsx)(C.a,{children:Object(m.jsxs)(S.a,{children:[Object(m.jsx)(w.a,{children:"Year"}),Object(m.jsx)(w.a,{children:"Games"}),Object(m.jsx)(w.a,{children:"Average"}),Object(m.jsx)(w.a,{children:"Is a Challenge?"}),Object(m.jsx)(w.a,{children:"Sport"}),Object(m.jsx)(w.a,{children:"Hand"})]})}),Object(m.jsx)(f.a,{children:a.map((function(e){return Object(m.jsxs)(S.a,{children:[Object(m.jsx)(w.a,{component:"th",scope:"row",children:e.year}),Object(m.jsx)(w.a,{children:e.games}),Object(m.jsx)(w.a,{children:e.avg}),Object(m.jsx)(w.a,{children:e.challenge}),Object(m.jsx)(w.a,{children:e.sport}),Object(m.jsx)(w.a,{children:e.hand})]},e.name)}))})]})]})}var T=Object(v.a)({table:{minWidth:650}});function q(e){var a=e.profile,n=T();return Object(m.jsxs)(y.a,{component:N.a,children:[Object(m.jsx)("h3",{children:"Profile"}),Object(m.jsxs)(_.a,{className:n.table,"aria-label":"simple table",children:[Object(m.jsx)(C.a,{children:Object(m.jsxs)(S.a,{children:[Object(m.jsx)(w.a,{children:"ID"}),Object(m.jsx)(w.a,{children:"Name"}),Object(m.jsx)(w.a,{children:"Association"}),Object(m.jsx)(w.a,{children:"Member"})]})}),Object(m.jsx)(f.a,{children:Object(m.jsxs)(S.a,{children:[Object(m.jsx)(w.a,{component:"th",scope:"row",children:"".concat(a.prefix,"-").concat(a.suffix)}),Object(m.jsxs)(w.a,{children:[a.first," ",a.last]}),Object(m.jsx)(w.a,{children:a.assn}),Object(m.jsx)(w.a,{children:a.pba})]},a.prefix)})]})]})}var A=n(15),D=n.n(A),M="https://api.scoreverify.com/usbc/",L=["all","day","week","month","year"],E=["time","viral","top"],W=function(e){Object(j.a)(n,e);var a=Object(o.a)(n);function n(){var e;Object(i.a)(this,n);for(var t=arguments.length,r=new Array(t),c=0;c<t;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={data:null,errorMessage:null,query:"5495-24744",sortOption:E[0],windowOption:L[0]},e.handleOnInputChange=function(a){a.preventDefault();var n=a.target.value;e.setState({query:n})},e.handleSearch=function(){var a=e.state.query;e.setState({requesting:!0},(function(){O("".concat(M,"/").concat(a,"/json")).then((function(a){var n=d.a.get(a,"data");d.a.isEmpty(n)?e.setState({errorMessage:"Nothing was found. Try another search?",data:null,requesting:!1}):e.setState({data:n,requesting:!1,errorMessage:null})})).catch((function(a){e.setState({requesting:!1,errorMessage:a})}))}))},e}return Object(l.a)(n,[{key:"renderAverageTable",value:function(){var e=this.state,a=e.data,n=(e.errorMessage,e.requesting),t=d.a.get(a,"Averages",null);return n?Object(m.jsx)(p,{}):d.a.isNil(t)?null:Object(m.jsx)(I,{averages:t})}},{key:"renderLeagueTable",value:function(){var e=this.state,a=e.data,n=(e.errorMessage,e.requesting),t=d.a.get(a,"Leagues",null);return n?Object(m.jsx)(p,{}):d.a.isNil(t)?null:Object(m.jsx)(H,{leagues:t})}},{key:"renderProfile",value:function(){var e=this.state,a=e.data,n=(e.errorMessage,e.requesting),t=d.a.get(a,"ID",null);return n?Object(m.jsx)(p,{}):d.a.isNil(t)?null:Object(m.jsx)(q,{profile:t})}},{key:"render",value:function(){var e=this;this.state.pageNumber;return Object(m.jsxs)("div",{className:D.a.pageContainer,children:[Object(m.jsx)("h3",{className:D.a.centerText,children:"Bowling User Score Search"}),Object(m.jsx)("div",{className:D.a.inputContainer,children:Object(m.jsxs)("div",{children:[Object(m.jsx)("input",{type:"search",onChange:this.handleOnInputChange,className:D.a.searchInput,placeHolder:"Search...",onKeyDown:function(a){"Enter"===a.key&&e.handleSearch()}}),Object(m.jsx)("input",{type:"submit",value:"Search",onClick:this.handleSearch})]})}),Object(m.jsxs)("div",{className:D.a.resultContainer,children:[this.renderProfile(),Object(m.jsx)("br",{}),this.renderAverageTable(),Object(m.jsx)("br",{}),this.renderLeagueTable()]})]})}}]),n}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=Object(m.jsx)(s.a,{children:Object(m.jsx)("div",{children:Object(m.jsx)(W,{})})});c.a.render(G,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[84,1,2]]]);
//# sourceMappingURL=main.6bc6902e.chunk.js.map