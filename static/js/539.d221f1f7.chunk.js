"use strict";(self.webpackChunkprofile=self.webpackChunkprofile||[]).push([[539],{5130:function(e,t,n){n.r(t),n.d(t,{default:function(){return re}});var a=n(2791),r=n(7462),o=n(4942),i=n(885),c=n(1002),l=n(1694),s=n.n(l),u=n(1818),d=n(1929),f=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},m=a.createContext(void 0),p=function(e){var t,n=a.useContext(d.E_),i=n.getPrefixCls,c=n.direction,l=e.prefixCls,u=e.size,p=e.className,v=f(e,["prefixCls","size","className"]),h=i("btn-group",l),g="";switch(u){case"large":g="lg";break;case"small":g="sm"}var y=s()(h,(t={},(0,o.Z)(t,"".concat(h,"-").concat(g),g),(0,o.Z)(t,"".concat(h,"-rtl"),"rtl"===c),t),p);return a.createElement(m.Provider,{value:u},a.createElement("div",(0,r.Z)({},v,{className:y})))},v=n(5048),h=n(3144),g=n(7326),y=n(9340),b=n(8557),x=n(5561),E=n(8834),N=n(5314),C=0,w={};function Z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=C++,a=t;function r(){(a-=1)<=0?(e(),delete w[n]):w[n]=(0,N.Z)(r)}return w[n]=(0,N.Z)(r),n}Z.cancel=function(e){void 0!==e&&(N.Z.cancel(w[e]),delete w[e])},Z.ids=w;var k,T=n(1113);function j(e){return!e||null===e.offsetParent||e.hidden}function S(e){var t=(e||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);return!(t&&t[1]&&t[2]&&t[3])||!(t[1]===t[2]&&t[2]===t[3])}var O=function(e){(0,y.Z)(n,e);var t=(0,b.Z)(n);function n(){var e;return(0,v.Z)(this,n),(e=t.apply(this,arguments)).containerRef=a.createRef(),e.animationStart=!1,e.destroyed=!1,e.onClick=function(t,n){var a,r,o=e.props,i=o.insertExtraNode;if(!(o.disabled||!t||j(t)||t.className.indexOf("-leave")>=0)){e.extraNode=document.createElement("div");var c=(0,g.Z)(e).extraNode,l=e.context.getPrefixCls;c.className="".concat(l(""),"-click-animating-node");var s=e.getAttributeName();if(t.setAttribute(s,"true"),n&&"#ffffff"!==n&&"rgb(255, 255, 255)"!==n&&S(n)&&!/rgba\((?:\d*, ){3}0\)/.test(n)&&"transparent"!==n){c.style.borderColor=n;var u=(null===(a=t.getRootNode)||void 0===a?void 0:a.call(t))||t.ownerDocument,d=u instanceof Document?u.body:null!==(r=u.firstChild)&&void 0!==r?r:u;k=(0,x.hq)("\n      [".concat(l(""),"-click-animating-without-extra-node='true']::after, .").concat(l(""),"-click-animating-node {\n        --antd-wave-shadow-color: ").concat(n,";\n      }"),"antd-wave",{csp:e.csp,attachTo:d})}i&&t.appendChild(c),["transition","animation"].forEach((function(n){t.addEventListener("".concat(n,"start"),e.onTransitionStart),t.addEventListener("".concat(n,"end"),e.onTransitionEnd)}))}},e.onTransitionStart=function(t){if(!e.destroyed){var n=e.containerRef.current;t&&t.target===n&&!e.animationStart&&e.resetEffect(n)}},e.onTransitionEnd=function(t){t&&"fadeEffect"===t.animationName&&e.resetEffect(t.target)},e.bindAnimationEvent=function(t){if(t&&t.getAttribute&&!t.getAttribute("disabled")&&!(t.className.indexOf("disabled")>=0)){var n=function(n){if("INPUT"!==n.target.tagName&&!j(n.target)){e.resetEffect(t);var a=getComputedStyle(t).getPropertyValue("border-top-color")||getComputedStyle(t).getPropertyValue("border-color")||getComputedStyle(t).getPropertyValue("background-color");e.clickWaveTimeoutId=window.setTimeout((function(){return e.onClick(t,a)}),0),Z.cancel(e.animationStartId),e.animationStart=!0,e.animationStartId=Z((function(){e.animationStart=!1}),10)}};return t.addEventListener("click",n,!0),{cancel:function(){t.removeEventListener("click",n,!0)}}}},e.renderWave=function(t){var n=t.csp,r=e.props.children;if(e.csp=n,!a.isValidElement(r))return r;var o=e.containerRef;return(0,E.Yr)(r)&&(o=(0,E.sQ)(r.ref,e.containerRef)),(0,T.Tm)(r,{ref:o})},e}return(0,h.Z)(n,[{key:"componentDidMount",value:function(){this.destroyed=!1;var e=this.containerRef.current;e&&1===e.nodeType&&(this.instance=this.bindAnimationEvent(e))}},{key:"componentWillUnmount",value:function(){this.instance&&this.instance.cancel(),this.clickWaveTimeoutId&&clearTimeout(this.clickWaveTimeoutId),this.destroyed=!0}},{key:"getAttributeName",value:function(){var e=this.context.getPrefixCls,t=this.props.insertExtraNode;return"".concat(e(""),t?"-click-animating":"-click-animating-without-extra-node")}},{key:"resetEffect",value:function(e){var t=this;if(e&&e!==this.extraNode&&e instanceof Element){var n=this.props.insertExtraNode,a=this.getAttributeName();e.setAttribute(a,"false"),k&&(k.innerHTML=""),n&&this.extraNode&&e.contains(this.extraNode)&&e.removeChild(this.extraNode),["transition","animation"].forEach((function(n){e.removeEventListener("".concat(n,"start"),t.onTransitionStart),e.removeEventListener("".concat(n,"end"),t.onTransitionEnd)}))}}},{key:"render",value:function(){return a.createElement(d.C,null,this.renderWave)}}]),n}(a.Component);O.contextType=d.E_;var I=n(9393),_=n(1815),P=a.createContext(!1),A=P,L=n(5207),R=n(1413),W={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}}]},name:"loading",theme:"outlined"},V=n(9726),B=function(e,t){return a.createElement(V.Z,(0,R.Z)((0,R.Z)({},e),{},{ref:t,icon:W}))};B.displayName="LoadingOutlined";var D=a.forwardRef(B),z=function(){return{width:0,opacity:0,transform:"scale(0)"}},M=function(e){return{width:e.scrollWidth,opacity:1,transform:"scale(1)"}},q=function(e){var t=e.prefixCls,n=!!e.loading;return e.existIcon?a.createElement("span",{className:"".concat(t,"-loading-icon")},a.createElement(D,null)):a.createElement(L.Z,{visible:n,motionName:"".concat(t,"-loading-icon-motion"),removeOnLeave:!0,onAppearStart:z,onAppearActive:M,onEnterStart:z,onEnterActive:M,onLeaveStart:M,onLeaveActive:z},(function(e,n){var r=e.className,o=e.style;return a.createElement("span",{className:"".concat(t,"-loading-icon"),style:o,ref:n},a.createElement(D,{className:r}))}))},U=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},F=/^[\u4e00-\u9fa5]{2}$/,H=F.test.bind(F);function Q(e){return"text"===e||"link"===e}function $(e,t){if(null!=e){var n,r=t?" ":"";return"string"!==typeof e&&"number"!==typeof e&&"string"===typeof e.type&&H(e.props.children)?(0,T.Tm)(e,{children:e.props.children.split("").join(r)}):"string"===typeof e?H(e)?a.createElement("span",null,e.split("").join(r)):a.createElement("span",null,e):(n=e,a.isValidElement(n)&&n.type===a.Fragment?a.createElement("span",null,e):e)}}(0,I.b)("default","primary","ghost","dashed","link","text"),(0,I.b)("default","circle","round"),(0,I.b)("submit","button","reset");var G=function(e,t){var n,l=e.loading,f=void 0!==l&&l,p=e.prefixCls,v=e.type,h=void 0===v?"default":v,g=e.danger,y=e.shape,b=void 0===y?"default":y,x=e.size,E=e.disabled,N=e.className,C=e.children,w=e.icon,Z=e.ghost,k=void 0!==Z&&Z,T=e.block,j=void 0!==T&&T,S=e.htmlType,I=void 0===S?"button":S,P=U(e,["loading","prefixCls","type","danger","shape","size","disabled","className","children","icon","ghost","block","htmlType"]),L=a.useContext(_.Z),R=a.useContext(A),W=E||R,V=a.useContext(m),B=a.useState(!!f),D=(0,i.Z)(B,2),z=D[0],M=D[1],F=a.useState(!1),G=(0,i.Z)(F,2),J=G[0],K=G[1],Y=a.useContext(d.E_),X=Y.getPrefixCls,ee=Y.autoInsertSpaceInButton,te=Y.direction,ne=t||a.createRef(),ae=function(){return 1===a.Children.count(C)&&!w&&!Q(h)},re="object"===(0,c.Z)(f)&&f.delay?f.delay||!0:!!f;a.useEffect((function(){var e=null;return"number"===typeof re?e=window.setTimeout((function(){e=null,M(re)}),re):M(re),function(){e&&(window.clearTimeout(e),e=null)}}),[re]),a.useEffect((function(){if(ne&&ne.current&&!1!==ee){var e=ne.current.textContent;ae()&&H(e)?J||K(!0):J&&K(!1)}}),[ne]);var oe=function(t){var n=e.onClick;z||W?t.preventDefault():null===n||void 0===n||n(t)},ie=X("btn",p),ce=!1!==ee,le=V||x||L,se=le&&{large:"lg",small:"sm",middle:void 0}[le]||"",ue=z?"loading":w,de=(0,u.Z)(P,["navigate"]),fe=s()(ie,(n={},(0,o.Z)(n,"".concat(ie,"-").concat(b),"default"!==b&&b),(0,o.Z)(n,"".concat(ie,"-").concat(h),h),(0,o.Z)(n,"".concat(ie,"-").concat(se),se),(0,o.Z)(n,"".concat(ie,"-icon-only"),!C&&0!==C&&!!ue),(0,o.Z)(n,"".concat(ie,"-background-ghost"),k&&!Q(h)),(0,o.Z)(n,"".concat(ie,"-loading"),z),(0,o.Z)(n,"".concat(ie,"-two-chinese-chars"),J&&ce),(0,o.Z)(n,"".concat(ie,"-block"),j),(0,o.Z)(n,"".concat(ie,"-dangerous"),!!g),(0,o.Z)(n,"".concat(ie,"-rtl"),"rtl"===te),(0,o.Z)(n,"".concat(ie,"-disabled"),void 0!==de.href&&W),n),N),me=w&&!z?w:a.createElement(q,{existIcon:!!w,prefixCls:ie,loading:!!z}),pe=C||0===C?function(e,t){var n=!1,r=[];return a.Children.forEach(e,(function(e){var t=(0,c.Z)(e),a="string"===t||"number"===t;if(n&&a){var o=r.length-1,i=r[o];r[o]="".concat(i).concat(e)}else r.push(e);n=a})),a.Children.map(r,(function(e){return $(e,t)}))}(C,ae()&&ce):null;if(void 0!==de.href)return a.createElement("a",(0,r.Z)({},de,{className:fe,onClick:oe,ref:ne}),me,pe);var ve=a.createElement("button",(0,r.Z)({},P,{type:I,className:fe,onClick:oe,disabled:W,ref:ne}),me,pe);return Q(h)?ve:a.createElement(O,{disabled:!!z},ve)},J=a.forwardRef(G);J.displayName="Button",J.Group=p,J.__ANT_BUTTON=!0;var K=J,Y=n(5671),X=n(605),ee=n(9603),te=n.p+"static/media/about.b415fa051c88ec17fd68.jpg",ne=n(184),ae=Y.Z.Content;var re=function(){return(0,ne.jsx)(Y.Z,{className:"about component__space",children:(0,ne.jsx)(ae,{className:"container",children:(0,ne.jsxs)(X.Z,{children:[(0,ne.jsx)(ee.Z,{span:9,offset:1,children:(0,ne.jsx)("img",{src:te,alt:"",className:"about__img"})}),(0,ne.jsxs)(ee.Z,{span:10,offset:2,children:[(0,ne.jsx)("h1",{className:"about__heading",children:"About Me"}),(0,ne.jsx)("p",{className:" p__color",children:"hello, my name is Nurhamdi Rostina, usually called Tina. I was born in Bandung on November 3, 2004.Now I am studying at SMKN 11 Bandung with a competency in Software Engineering skills, and I will graduate in 2023."}),(0,ne.jsx)("p",{className:" p__color left",children:"I'm a web developer, although I'm not good at it, but I always try so that I can and of course want to learn."}),(0,ne.jsx)("p",{className:" p__color",children:"I can work well in a team and I can accept criticism, suggestions and opinions from others. Because of my principles, everyone has the rights they have. Especially the right to an opinion."}),(0,ne.jsx)("p",{className:" p__color",children:"I am a person who can make decisions quickly and accurately, even in critical situations. For me, every job is important. Doing it carefully and as much as possible is a form of my responsibility."}),(0,ne.jsx)(K,{children:(0,ne.jsx)("a",{href:"https://drive.google.com/file/d/1HVg5_EcsxJmQ7pfePWgDW1u6WpV2qlCs/view?usp=drivesdk",children:"Download CV"})})]})]})})})}},1113:function(e,t,n){n.d(t,{Tm:function(){return o},l$:function(){return r}});var a=n(2791),r=a.isValidElement;function o(e,t){return function(e,t,n){return r(e)?a.cloneElement(e,"function"===typeof n?n(e.props||{}):n):t}(e,e,t)}},1815:function(e,t,n){var a=n(2791).createContext(void 0);t.Z=a}}]);
//# sourceMappingURL=539.d221f1f7.chunk.js.map