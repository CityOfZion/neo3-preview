(window["webpackJsonpneo-3-preview"]=window["webpackJsonpneo-3-preview"]||[]).push([[0],{26:function(e,t,n){e.exports=n.p+"static/media/signal.e9614480.svg"},37:function(e,t,n){e.exports=n.p+"static/media/neo-logo.909dbdde.svg"},38:function(e,t,n){e.exports=n.p+"static/media/coz-logo.aa4aec2c.svg"},39:function(e,t,n){e.exports=n.p+"static/media/coz-logo-mobile.8c880a10.svg"},40:function(e,t,n){e.exports=n.p+"static/media/menu.c8149587.svg"},41:function(e,t,n){e.exports=n.p+"static/media/search-icon.1bfeb42e.svg"},43:function(e,t,n){e.exports=n.p+"static/media/fb-social.e7ff3f8b.svg"},44:function(e,t,n){e.exports=n.p+"static/media/twitter-social.87676691.svg"},45:function(e,t,n){e.exports=n.p+"static/media/linkedin-social.19217fb3.svg"},46:function(e,t,n){e.exports=n.p+"static/media/telegram-social.2a85ba62.svg"},50:function(e,t){},52:function(e,t,n){e.exports=n(92)},62:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(22),o=n.n(c),i=n(12),s=n(20),l=n(34),u=n(35),p=n(10),m=n(9),d=n.n(m),f=n(17),h=function(e){return function(t){t({type:"REQUEST_BLOCK",indexOrHash:e})}},v=function(e){return function(t){t({type:"REQUEST_BLOCKS",page:e})}},g=function(e,t){return function(n){n({type:"REQUEST_BLOCK_SUCCESS",blockHeight:e,json:t,receivedAt:Date.now()})}},b=function(e,t){return function(n){n({type:"REQUEST_BLOCKS_SUCCESS",page:e,json:t,receivedAt:Date.now()})}},E=function(e,t){return function(n){n({type:"REQUEST_BLOCK_ERROR",blockHeight:e,error:t,receivedAt:Date.now()})}};var O=function(e){return function(t){t({type:"REQUEST_CONTRACTS",page:e})}},j=function(e,t){return function(n){n({type:"REQUEST_CONTRACTS_SUCCESS",page:e,json:t,receivedAt:Date.now()})}},y=function(e,t){return function(n){n({type:"REQUEST_CONTRACT_ERROR",blockHeight:e,error:t,receivedAt:Date.now()})}};var k=function(e){return function(t){t({type:"REQUEST_TRANSACTIONS",page:e})}},S=function(e,t){return function(n){n({type:"REQUEST_TRANSACTIONS_SUCCESS",page:e,json:t,receivedAt:Date.now()})}},w=function(e,t){return function(n){n({type:"REQUEST_TRANSACTION_ERROR",hash:e,error:t,receivedAt:Date.now()})}};var C=Object(s.c)({blocks:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!1,cached:{},list:[]},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"REQUEST_BLOCK":return Object.assign({},t,{isLoading:!0,block:t.cached[n.indexOrHash]});case"REQUEST_BLOCK_SUCCESS":return Object.assign({},t,{isLoading:!1,block:n.json,lastUpdated:n.receivedAt,cached:(e={},Object(p.a)(e,n.blockHeight,n.json),Object(p.a)(e,n.json.hash,n.json),e)});case"REQUEST_BLOCKS":return Object.assign({},t,{isLoading:!0});case"REQUEST_BLOCKS_SUCCESS":return Object.assign({},t,{isLoading:!1,list:n.json,lastUpdated:n.receivedAt});default:return t}},contracts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!1,cached:{},list:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_CONTRACT":return Object.assign({},e,{isLoading:!0,contract:e.cached[t.indexOrHash]});case"REQUEST_CONTRACT_SUCCESS":return Object.assign({},e,{isLoading:!1,contract:t.json,lastUpdated:t.receivedAt,cached:Object(p.a)({},t.json.hash,t.json)});case"REQUEST_CONTRACTS":return Object.assign({},e,{isLoading:!0});case"REQUEST_CONTRACTS_SUCCESS":return Object.assign({},e,{isLoading:!1,list:t.json,lastUpdated:t.receivedAt});default:return e}},transactions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!1,cached:{},list:[],cursor:1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_TRANSACTION":return Object.assign({},e,{isLoading:!0,contract:e.cached[t.indexOrHash]});case"REQUEST_TRANSACTION_SUCCESS":return Object.assign({},e,{isLoading:!1,contract:t.json,lastUpdated:t.receivedAt,cached:Object(p.a)({},t.json.hash,t.json)});case"REQUEST_TRANSACTIONS":return Object.assign({},e,{isLoading:!0});case"REQUEST_TRANSACTIONS_SUCCESS":return Object.assign({},e,{isLoading:!1,list:t.json.transactions,lastUpdated:t.receivedAt,cursor:t.json.last_evaluated_key});default:return e}},menu:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{open:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CLOSE_MENU":return Object.assign({},e,{open:!1});case"OPEN_MENU":return Object.assign({},e,{open:!0});default:return e}}}),x={blocks:{isLoading:!1,list:[],cached:{}},contracts:{isLoading:!1,list:[],cached:{}},transactions:{isLoading:!1,list:[],cached:{}},menu:{open:!1}},N=Object(l.createLogger)();n(62);var T=n(21),P=n(18),R=n(36),_=n(37),U=n.n(_),A=n(38),D=n.n(A),L=n(39),B=n.n(L),M=n(40),I=n.n(M),z=n(51),Q=n(41),H=n.n(Q),Y=(n(78),function(){var e=r.a.useState(""),t=Object(z.a)(e,2),n=t[0],a=t[1];return r.a.createElement("form",{id:"search-input-container"},r.a.createElement("input",{id:"search-input",type:"text",name:"name",onChange:function(e){a(e.target.value)},value:n,placeholder:"Search block height, address, transaction ID"}),r.a.createElement("img",{id:"search-input-icon",src:H.a,alt:"search"}))}),F=(n(79),{fontWeight:"bold",color:"var(--green)"}),K=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"desktop-coz-logo",className:"logo-sub-text",to:"/"},r.a.createElement("h3",null," NEO3 Preview Explorer"),r.a.createElement("p",null,"Brought to you by: ",r.a.createElement("img",{alt:"coz-logo",src:D.a}))),r.a.createElement("div",{id:"mobile-coz-logo",className:"logo-sub-text",to:"/"},r.a.createElement("img",{alt:"coz-logo",src:B.a})))},W=function(e){var t=e.isMobile,n=void 0!==t&&t,a=e.closeMenu;return r.a.createElement(r.a.Fragment,null,r.a.createElement(T.c,{className:n?"bm-item":"",activeStyle:F,to:"/transactions",onClick:a},"Transactions"),r.a.createElement(T.c,{className:n?"bm-item":"",activeStyle:F,to:"/blocks",isActive:function(e,t){return!!t.pathname.includes("block")},onClick:a},"Blocks"),r.a.createElement(T.c,{className:n?"bm-item":"",activeStyle:F,isActive:function(e,t){return!!t.pathname.includes("contract")},to:"/contracts",onClick:a},"Contracts"))},G=n(43),V=n.n(G),J=n(44),Z=n.n(J),$=n(45),q=n.n($),X=n(46),ee=n.n(X),te=(n(81),function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"footer-flex-container"},r.a.createElement(K,null)),r.a.createElement("span",{className:"footer-flex-container"},"\xa9 2019 City Of Zion"),r.a.createElement("div",{id:"footer-social-icons",className:"footer-flex-container"},r.a.createElement("img",{alt:"facebook-icon",src:V.a}),r.a.createElement("img",{alt:"twitter-icon",src:Z.a}),r.a.createElement("img",{alt:"linkedin-icon",src:q.a}),r.a.createElement("img",{alt:"telegram-icon",src:ee.a})))}),ne=n(2),ae=n(3),re=n(5),ce=n(4),oe=n(6),ie=function(e){return{mobileMenuIsOpen:e.menu.open}},se=function(e){return{openMenu:function(){return e((function(e){e({type:"OPEN_MENU"})}))},closeMenu:function(){return e((function(e){e({type:"CLOSE_MENU"})}))}}};var le,ue=(le=function(e){var t=e.mobileMenuIsOpen,n=e.openMenu,a=e.closeMenu;return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.slide,{customBurgerIcon:r.a.createElement("img",{src:I.a,alt:"burger-menu"}),width:"100%",id:"mobile-navigation",isOpen:t,onStateChange:function(e){return e.isOpen?n():a()}},r.a.createElement("div",{id:"close-mobile-menu-button",onClick:a},"Close"),r.a.createElement("div",{className:"mobile-navigation-links-container"},r.a.createElement(W,{closeMenu:a,isMobile:!0}),r.a.createElement(Y,null))),r.a.createElement("nav",{id:"navigation"},r.a.createElement("div",{id:"logo"},r.a.createElement("img",{id:"neo-3-logo",src:U.a,alt:"logo"}),r.a.createElement("div",{id:"logo-spacer"}),r.a.createElement(T.b,{className:"logo-sub-text",to:"/"},r.a.createElement(K,null))),r.a.createElement("div",{id:"desktop-links-and-search-container"},r.a.createElement(Y,null),r.a.createElement("div",{id:"desktop_navigation_options"},r.a.createElement(W,null)))),r.a.createElement("div",{id:"nav-bottom-border"}))},Object(i.b)(ie,se)(function(e){function t(){return Object(ne.a)(this,t),Object(re.a)(this,Object(ce.a)(t).apply(this,arguments))}return Object(oe.a)(t,e),Object(ae.a)(t,[{key:"render",value:function(){return r.a.createElement(le,this.props)}}]),t}(r.a.Component))),pe=n(94);n(82),n(83);function me(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function de(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?me(n,!0).forEach((function(t){Object(p.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):me(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var fe=function(e){var t=e.columns,n=e.data,a=e.handleRowClick,c=n.map((function(e){var n={};return t.forEach((function(t){n[t.accessor]=e[t.accessor]})),n})),o={gridTemplateColumns:"repeat(".concat(t.length,", 1fr)")},i=function(e){return e?e===t.length-1?{borderRadius:"0 3px 3px 0"}:null:{borderRadius:"3px 0 0 3px"}};return r.a.createElement("div",{className:"data-list-container"},r.a.createElement("div",{className:"data-list",style:o},t.map((function(e,t){return r.a.createElement("div",{style:de({},i(t),{},e.style||{}),className:"data-list-column",key:e.name},e.name)})),c.map((function(e){return Object.values(e).map((function(t){return r.a.createElement("span",{style:i(),onClick:function(){return a(e)},key:Object(pe.a)()},"function"===typeof t?t():t)}))}))))},he=n(48),ve=n(49),ge=n.n(ve),be=(n(84),function(e){var t=e.children,n=e.secondary,a=void 0!==n&&n,c=e.active,o=void 0!==c&&c,i=Object(he.a)(e,["children","secondary","active"]),s=ge()({"primary-button":!a,"secondary-button":a,"active-button":o});return r.a.createElement("button",Object.assign({},i,{className:s}),t)}),Ee=(n(85),function(e){var t=e.value,n=e.detail;return r.a.createElement("div",{className:"card"},r.a.createElement("h2",null,t),r.a.createElement("p",null,n))}),Oe=n(19),je=n.n(Oe),ye=n(26),ke=n.n(ye);function Se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var we=function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Se(n,!0).forEach((function(t){Object(p.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Se(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{time:je()(e.time).format("MM-DD-YYYY | MM:HH:SS"),index:function(){return r.a.createElement("div",{className:"list-block-height-container"},r.a.createElement("img",{src:ke.a,alt:"block-icon",className:"block-icon"}),e.index.toLocaleString())},size:"".concat(e.size," bytes"),height:e.index})},Ce=function(e){var t=e.blocks;return{filteredBlocks:t.list&&t.list.length&&t.list.slice(0,5).map(we)||[],blocks:t.list&&t.list.map(we),isLoading:t.isLoading}},xe=function(e){return{fetchBlocks:function(t){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return function(){var t=Object(f.a)(d.a.mark((function t(n,a){var r,c,o;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(v(e)),r=function(e){return"https://ja3l09yg7a.execute-api.us-east-1.amazonaws.com/dev/api/test_net/v1/get_blocks/".concat(e)},t.next=5,fetch(r(e));case 5:return c=t.sent,t.next=8,c.json();case 8:o=t.sent,console.log({json:o}),n(b(e,o)),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),n(E(e,t.t0));case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e,n){return t.apply(this,arguments)}}()}(t))}}};function Ne(e){return Object(i.b)(Ce,xe)(function(t){function n(){return Object(ne.a)(this,n),Object(re.a)(this,Object(ce.a)(n).apply(this,arguments))}return Object(oe.a)(n,t),Object(ae.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchBlocks()}},{key:"render",value:function(){return r.a.createElement(e,this.props)}}]),n}(r.a.Component))}n(87);var Te=Ne(function(e){function t(){return Object(ne.a)(this,t),Object(re.a)(this,Object(ce.a)(t).apply(this,arguments))}return Object(oe.a)(t,e),Object(ae.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.filteredBlocks;t.isLoading;return r.a.createElement("div",{id:"landing-page"},r.a.createElement("div",{id:"call-to-action"},r.a.createElement("h1",null,"NEO3 Download"),r.a.createElement("div",{id:"call-to-action-content"},r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum placerat arcu a felis porta, a fringilla augue blandit. Proin maximus at libero sit amet."),r.a.createElement("div",{id:"call-to-action-button-container"},r.a.createElement(be,{secondary:!0},"Get Started"),r.a.createElement("span",null," or skip the tutorial"),r.a.createElement(be,null,"Download Now")))),r.a.createElement("h1",null," Statistics"),r.a.createElement("div",{id:"statistics-card-container"},r.a.createElement(Ee,{value:"25,036,425",detail:"Total Transactions"}),r.a.createElement(Ee,{value:"25,036,425",detail:"Total Transactions"}),r.a.createElement(Ee,{value:"25,036,425",detail:"Total Transactions"}),r.a.createElement(Ee,{value:"25,036,425",detail:"Total Transactions"})),r.a.createElement("div",{className:"header-and-link"},r.a.createElement("h1",null," Last 5 Blocks"),r.a.createElement("a",{href:"/blocks/1"}," View all blocks")),r.a.createElement("div",{id:"lading-page-block-list-container"},r.a.createElement(fe,{handleRowClick:function(t){return e.props.history.push("/block/".concat(e.props.blocks.find((function(e){return e.hash===t.hash})).height))},columns:[{name:"Height",accessor:"index"},{name:"Size",accessor:"size"},{name:"Hash",accessor:"hash"},{name:"Created On",accessor:"time"}],data:n})),r.a.createElement("h1",null," NEO3 Features"),r.a.createElement("h1",null," Recent Articles"))}}]),t}(r.a.Component));function Pe(){return(Pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function Re(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var _e=r.a.createElement("g",{id:"Desktop-UI",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Blocks",transform:"translate(-571.000000, -1028.000000)",stroke:"#00E599",strokeWidth:2},r.a.createElement("g",{id:"Group-5",transform:"translate(563.000000, 1014.000000)"},r.a.createElement("polyline",{id:"Path-2",transform:"translate(12.000000, 18.500000) rotate(-180.000000) translate(-12.000000, -18.500000) ",points:"10 15 14 18.5 10 22"})))),Ue=function(e){var t=e.svgRef,n=e.title,a=Re(e,["svgRef","title"]);return r.a.createElement("svg",Pe({width:"7px",height:"9px",viewBox:"0 0 7 9",ref:t},a),n?r.a.createElement("title",null,n):null,_e)},Ae=r.a.forwardRef((function(e,t){return r.a.createElement(Ue,Pe({svgRef:t},e))}));n.p;function De(){return(De=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function Le(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Be=r.a.createElement("g",{id:"Desktop-UI",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Blocks",transform:"translate(-862.000000, -1028.000000)",stroke:"#00E599",strokeWidth:2},r.a.createElement("g",{id:"Group-5",transform:"translate(563.000000, 1014.000000)"},r.a.createElement("g",{id:"Group-3",transform:"translate(256.000000, 0.000000)"},r.a.createElement("polyline",{id:"Path-2",points:"44 15 48 18.5 44 22"}))))),Me=function(e){var t=e.svgRef,n=e.title,a=Le(e,["svgRef","title"]);return r.a.createElement("svg",De({width:"7px",height:"9px",viewBox:"0 0 7 9",ref:t},a),n?r.a.createElement("title",null,n):null,Be)},Ie=r.a.forwardRef((function(e,t){return r.a.createElement(Me,De({svgRef:t},e))})),ze=(n.p,n(88),5),Qe=function(e){return e<=5?[1,2,3,4,5]:[e-2,e-1,e,e+1,e+2]},He=function(e){function t(){var e,n;Object(ne.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(re.a)(this,(e=Object(ce.a)(t)).call.apply(e,[this].concat(r)))).state={currPage:1,selectedPage:1,currentIndex:[],previousButtonDisabled:!0},n.handleDisabledLogicOnPrevButton=function(){var e=n.state,t=e.currentIndex,a=e.previousButtonDisabled;return!(!a||n.props.paginated)||!(!a&&!n.props.paginated)&&t[t.length-1]<=ze},n.handleNextButton=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=n.props.paginated,a=n.state.currentIndex;if(!t)return n.setState({previousButtonDisabled:!e}),e?n.props.handleSelectPage():n.props.handleSelectPage(1);var r=Qe(e?a[a.length-1]+3:a[0]-3);n.setState({currentIndex:r})},n}return Object(oe.a)(t,e),Object(ae.a)(t,[{key:"componentDidMount",value:function(){this.setState({currentIndex:Qe(this.props.currPage||1)})}},{key:"render",value:function(){var e=this,t=this.props,n=t.currPage,a=void 0===n?1:n,c=t.paginated,o=this.state.currentIndex;return r.a.createElement("div",{id:"pagination-container"},r.a.createElement(be,{onClick:function(){return e.handleNextButton(!1)},disabled:this.handleDisabledLogicOnPrevButton(),secondary:!0},r.a.createElement(Ae,null)," Prev"),c&&o.map((function(t){return r.a.createElement(be,{key:t,active:t===a,secondary:!0,onClick:function(){return e.props.handleSelectPage(t)},disabled:e.props.numberOfPages&&e.props.numberOfPages<t},t)})),r.a.createElement(be,{onClick:this.handleNextButton,disabled:this.props.numberOfPages&&this.props.numberOfPages<this.state.currentIndex[this.state.currentIndex.length-1],secondary:!0},"Next ",r.a.createElement(Ie,null)))}}]),t}(r.a.Component);He.defaultProps={paginated:!0};var Ye=function(e){return{contracts:e.contracts.list}},Fe=function(e){return{fetchContracts:function(){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return function(){var t=Object(f.a)(d.a.mark((function t(n,a){var r,c,o;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(O(e)),r=function(e){return"https://ja3l09yg7a.execute-api.us-east-1.amazonaws.com/dev/api/test_net/v1/get_contracts/".concat(e)},t.next=5,fetch(r(e));case 5:return c=t.sent,t.next=8,c.json();case 8:o=t.sent,console.log({json:o}),n(j(e,o)),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),n(y(e,t.t0));case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e,n){return t.apply(this,arguments)}}()}())}}};var Ke=function(e){return{hash:e.hash,time:je()(e.time).format("MM-DD-YYYY | MM:HH:SS"),size:"".concat(e.size," bytes")}},We=function(e){var t=e.transactions;return{cursor:t.cursor,transactions:t.list.map(Ke)}},Ge=function(e){return{fetchTransactions:function(t){return e((n=t,function(){var e=Object(f.a)(d.a.mark((function e(t,a){var r,c,o,i,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a().transactions.cursor,c=n||r,e.prev=2,t(k(c)),o=function(e){return"https://ja3l09yg7a.execute-api.us-east-1.amazonaws.com/dev/api/test_net/v1/get_transactions/".concat(c)},e.next=7,fetch(o());case 7:return i=e.sent,e.next=10,i.json();case 10:s=e.sent,console.log({json:s}),t(S(c,s)),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),t(w(c,e.t0));case 18:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t,n){return e.apply(this,arguments)}}()));var n}}};var Ve=function(e){function t(){var e,n;Object(ne.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(re.a)(this,(e=Object(ce.a)(t)).call.apply(e,[this].concat(r)))).loadNewTransactionPage=function(e){n.props.fetchTransactions(e)},n}return Object(oe.a)(t,e),Object(ae.a)(t,[{key:"render",value:function(){var e=this,t=this.props.transactions,n=this.props.match.params.page,a=void 0===n?1:n;return r.a.createElement("div",{id:"transactions-list"},!!t.length&&r.a.createElement(r.a.Fragment,null,r.a.createElement(fe,{handleRowClick:function(t){return console.log(t)||e.props.history.push("/transaction/".concat(t.hash))},columns:[{name:"Size",accessor:"size"},{name:"Hash",accessor:"hash"},{name:"Created On",accessor:"time"}],data:t}),r.a.createElement(He,{paginated:!1,currPage:Number(a),handleSelectPage:function(t){return e.loadNewTransactionPage(t)}})))}}]),t}(r.a.Component);Ve.defaultProps={contracts:[]};var Je=function(e){return Object(i.b)(We,Ge)(function(t){function n(){return Object(ne.a)(this,n),Object(re.a)(this,Object(ce.a)(n).apply(this,arguments))}return Object(oe.a)(n,t),Object(ae.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchTransactions()}},{key:"render",value:function(){return r.a.createElement(e,this.props)}}]),n}(r.a.Component))}(Ve),Ze=function(e){function t(){var e,n;Object(ne.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(re.a)(this,(e=Object(ce.a)(t)).call.apply(e,[this].concat(r)))).loadNewBlockPage=function(e){n.props.history.push("/blocks/".concat(e)),n.props.fetchBlocks(e)},n}return Object(oe.a)(t,e),Object(ae.a)(t,[{key:"render",value:function(){var e=this,t=this.props.blocks,n=this.props.match.params.page,a=void 0===n?1:n;return r.a.createElement("div",{id:"blocks-list"},!!t.length&&r.a.createElement(r.a.Fragment,null,r.a.createElement(fe,{handleRowClick:function(t){return console.log(t)||e.props.history.push("/block/".concat(e.props.blocks.find((function(e){return e.hash===t.hash})).height))},columns:[{name:"Height",accessor:"index"},{name:"Size",accessor:"size"},{name:"Hash",accessor:"hash"},{name:"Created On",accessor:"time"}],data:t}),r.a.createElement(He,{currPage:Number(a),handleSelectPage:function(t){return e.loadNewBlockPage(t)}})))}}]),t}(r.a.Component);Ze.defaultProps={blocks:[]};var $e=Ne(Ze),qe=(n(89),function(e){var t=e.title,n=e.value,a=e.titleStyle,c=e.valueStyle,o=e.style;return r.a.createElement("div",{style:o,className:"panel"},r.a.createElement("span",{style:a},t),r.a.createElement("p",{style:c},n))});n(90);function Xe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function et(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Xe(n,!0).forEach((function(t){Object(p.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xe(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var tt=function(e){return je()(e).format("MM-DD-YYYY | MM:HH:SS")},nt=function(e){function t(){return Object(ne.a)(this,t),Object(re.a)(this,Object(ce.a)(t).apply(this,arguments))}return Object(oe.a)(t,e),Object(ae.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.fetchBlock(e)}},{key:"render",value:function(){var e=this.props.block;return r.a.createElement("div",{className:"wrapper"},e&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null," Block "),r.a.createElement("div",{className:"block-index"}," #",e.index.toLocaleString()),r.a.createElement("div",{className:"block-time"},tt(e.time)),r.a.createElement("div",{className:"panels-container"},r.a.createElement("div",{className:"panels-row"},r.a.createElement(qe,{title:"Index",value:e.index.toLocaleString()}),r.a.createElement(qe,{valueStyle:{fontSize:"12px"},title:"Hash",value:e.hash})),r.a.createElement("div",{className:"panels-row"},r.a.createElement(qe,{title:"Size",value:"".concat(e.size," bytes")}),r.a.createElement(qe,{title:"Network Fee",value:".0005 GAS"})),r.a.createElement("div",{className:"panels-row"},r.a.createElement(qe,{title:"Version",value:"0"}),r.a.createElement(qe,{title:"Block Time",value:tt(e.time)}))),r.a.createElement("div",{id:"block-transactions-list"},r.a.createElement("h1",null," Transactions(",e.tx.length,")"),!!e.tx.length&&r.a.createElement(fe,{handleRowClick:function(e){return console.log(e)},columns:[{name:"Transaction ID",accessor:"hash"},{name:"Completed On",accessor:"time"}],data:e.tx.map((function(t){return et({time:tt(e.time)},t)}))}))))}}]),t}(r.a.Component),at=Object(i.b)((function(e){return et({},e.blocks)}),(function(e){return{fetchBlock:function(t){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return function(){var t=Object(f.a)(d.a.mark((function t(n,a){var r,c,o;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=a(),s=e,i.blocks.cached[s]&&(i.blocks.isLoading,1)){t.next=16;break}return n(h(e)),t.prev=2,r=function(t){return"https://ja3l09yg7a.execute-api.us-east-1.amazonaws.com/dev/api/test_net/v1/get_block/".concat(e)},t.next=6,fetch(r());case 6:return c=t.sent,t.next=9,c.json();case 9:o=t.sent,n(g(e,o)),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(2),n(E(e,t.t0));case 16:case"end":return t.stop()}var i,s}),t,null,[[2,13]])})));return function(e,n){return t.apply(this,arguments)}}()}(t))}}}))(nt),rt=function(e){function t(){var e,n;Object(ne.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(re.a)(this,(e=Object(ce.a)(t)).call.apply(e,[this].concat(r)))).loadNewContractPage=function(e){n.props.history.push("/contracts/".concat(e)),n.props.fetchContracts(e)},n}return Object(oe.a)(t,e),Object(ae.a)(t,[{key:"render",value:function(){var e=this,t=this.props.contracts,n=this.props.match.params.page,a=void 0===n?1:n;return r.a.createElement("div",{id:"contracts-list"},!!t.length&&r.a.createElement(r.a.Fragment,null,r.a.createElement(fe,{handleRowClick:function(t){return console.log(t)||e.props.history.push("/contract/".concat(t.hash))},columns:[{name:"Idx",accessor:"idx"},{name:"Hash",accessor:"hash"}],data:t}),r.a.createElement(He,{numberOfPages:4,currPage:Number(a),handleSelectPage:function(t){return e.loadNewContractPage(t)}})))}}]),t}(r.a.Component);rt.defaultProps={contracts:[]};var ct=function(e){return Object(i.b)(Ye,Fe)(function(t){function n(){return Object(ne.a)(this,n),Object(re.a)(this,Object(ce.a)(n).apply(this,arguments))}return Object(oe.a)(n,t),Object(ae.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContracts()}},{key:"render",value:function(){return r.a.createElement(e,this.props)}}]),n}(r.a.Component))}(rt),ot=n(50),it=n.n(ot);n(91),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(i.a,{store:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x;return Object(s.d)(C,e,Object(s.a)(u.a,N))}()},r.a.createElement((function(){return r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:"content"},r.a.createElement(T.a,null,r.a.createElement(ue,null),r.a.createElement("div",{className:"router-content"},r.a.createElement(P.c,null,r.a.createElement(P.a,{path:"/transactions",component:function(e){return r.a.createElement(Je,e)}}),r.a.createElement(P.a,{path:"/block/:id",component:function(e){return r.a.createElement(at,e)}}),r.a.createElement(P.a,{path:"/blocks/:page",component:function(e){return r.a.createElement($e,e)},exact:!0}),r.a.createElement(P.a,{path:"/blocks",component:function(e){return r.a.createElement($e,e)},exact:!0}),r.a.createElement(P.a,{path:"/contract/:id",component:function(e){return r.a.createElement(it.a,e)}}),r.a.createElement(P.a,{path:"/contracts/:page",component:function(e){return r.a.createElement(ct,e)},exact:!0}),r.a.createElement(P.a,{path:"/contracts",component:function(e){return r.a.createElement(ct,e)},exact:!0}),r.a.createElement(P.a,{path:"/",component:function(e){return r.a.createElement(Te,e)}}))))),r.a.createElement(te,null))}),null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[52,1,2]]]);
//# sourceMappingURL=main.275de3e1.chunk.js.map