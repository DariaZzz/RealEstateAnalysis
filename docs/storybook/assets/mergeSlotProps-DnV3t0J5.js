var Ot=Object.defineProperty;var jt=(t,n,e)=>n in t?Ot(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var W=(t,n,e)=>jt(t,typeof n!="symbol"?n+"":n,e);import{r as u,e as Y}from"./iframe-D4hbvkVB.js";import{j as O}from"./jsx-runtime-D_zvdyIk.js";import{_ as Dt,c as y,a as ft,u as pt,s as tt,z as et,g as Lt,d as wt,v as ot}from"./createSimplePaletteValueFilter-Ccc1faLV.js";const St=typeof window<"u"?u.useLayoutEffect:u.useEffect,dt=u.createContext();function he({value:t,...n}){return O.jsx(dt.Provider,{value:t??!0,...n})}const me=()=>u.useContext(dt)??!1;function G(t){const n=u.useRef(t);return St(()=>{n.current=t}),u.useRef((...e)=>(0,n.current)(...e)).current}function ut(...t){const n=u.useRef(void 0),e=u.useCallback(s=>{const i=t.map(r=>{if(r==null)return null;if(typeof r=="function"){const o=r,f=o(s);return typeof f=="function"?f:()=>{o(null)}}return r.current=s,()=>{r.current=null}});return()=>{i.forEach(r=>r==null?void 0:r())}},t);return u.useMemo(()=>t.every(s=>s==null)?null:s=>{n.current&&(n.current(),n.current=void 0),s!=null&&(n.current=e(s))},t)}const at={};function ht(t,n){const e=u.useRef(at);return e.current===at&&(e.current=t(n)),e}class Z{constructor(){W(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new Z}static use(){const n=ht(Z.create).current,[e,s]=u.useState(!1);return n.shouldMount=e,n.setShouldMount=s,u.useEffect(n.mountEffect,[e]),n}mount(){return this.mounted||(this.mounted=Ut(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...n){this.mount().then(()=>{var e;return(e=this.ref.current)==null?void 0:e.start(...n)})}stop(...n){this.mount().then(()=>{var e;return(e=this.ref.current)==null?void 0:e.stop(...n)})}pulsate(...n){this.mount().then(()=>{var e;return(e=this.ref.current)==null?void 0:e.pulsate(...n)})}}function $t(){return Z.use()}function Ut(){let t,n;const e=new Promise((s,i)=>{t=s,n=i});return e.resolve=t,e.reject=n,e}function Pt(t,n){if(t==null)return{};var e={};for(var s in t)if({}.hasOwnProperty.call(t,s)){if(n.indexOf(s)!==-1)continue;e[s]=t[s]}return e}function J(t,n){return J=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,s){return e.__proto__=s,e},J(t,n)}function zt(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,J(t,n)}const lt=Y.createContext(null);function Ht(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function nt(t,n){var e=function(r){return n&&u.isValidElement(r)?n(r):r},s=Object.create(null);return t&&u.Children.map(t,function(i){return i}).forEach(function(i){s[i.key]=e(i)}),s}function At(t,n){t=t||{},n=n||{};function e(d){return d in n?n[d]:t[d]}var s=Object.create(null),i=[];for(var r in t)r in n?i.length&&(s[r]=i,i=[]):i.push(r);var o,f={};for(var c in n){if(s[c])for(o=0;o<s[c].length;o++){var l=s[c][o];f[s[c][o]]=e(l)}f[c]=e(c)}for(o=0;o<i.length;o++)f[i[o]]=e(i[o]);return f}function w(t,n,e){return e[n]!=null?e[n]:t.props[n]}function _t(t,n){return nt(t.children,function(e){return u.cloneElement(e,{onExited:n.bind(null,e),in:!0,appear:w(e,"appear",t),enter:w(e,"enter",t),exit:w(e,"exit",t)})})}function Wt(t,n,e){var s=nt(t.children),i=At(n,s);return Object.keys(i).forEach(function(r){var o=i[r];if(u.isValidElement(o)){var f=r in n,c=r in s,l=n[r],d=u.isValidElement(l)&&!l.props.in;c&&(!f||d)?i[r]=u.cloneElement(o,{onExited:e.bind(null,o),in:!0,exit:w(o,"exit",t),enter:w(o,"enter",t)}):!c&&f&&!d?i[r]=u.cloneElement(o,{in:!1}):c&&f&&u.isValidElement(l)&&(i[r]=u.cloneElement(o,{onExited:e.bind(null,o),in:l.props.in,exit:w(o,"exit",t),enter:w(o,"enter",t)}))}}),i}var Yt=Object.values||function(t){return Object.keys(t).map(function(n){return t[n]})},Ft={component:"div",childFactory:function(n){return n}},st=function(t){zt(n,t);function n(s,i){var r;r=t.call(this,s,i)||this;var o=r.handleExited.bind(Ht(r));return r.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},r}var e=n.prototype;return e.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},e.componentWillUnmount=function(){this.mounted=!1},n.getDerivedStateFromProps=function(i,r){var o=r.children,f=r.handleExited,c=r.firstRender;return{children:c?_t(i,f):Wt(i,o,f),firstRender:!1}},e.handleExited=function(i,r){var o=nt(this.props.children);i.key in o||(i.props.onExited&&i.props.onExited(r),this.mounted&&this.setState(function(f){var c=Dt({},f.children);return delete c[i.key],{children:c}}))},e.render=function(){var i=this.props,r=i.component,o=i.childFactory,f=Pt(i,["component","childFactory"]),c=this.state.contextValue,l=Yt(this.state.children).map(o);return delete f.appear,delete f.enter,delete f.exit,r===null?Y.createElement(lt.Provider,{value:c},l):Y.createElement(lt.Provider,{value:c},Y.createElement(r,f,l))},n}(Y.Component);st.propTypes={};st.defaultProps=Ft;const Xt=[];function Kt(t){u.useEffect(t,Xt)}class it{constructor(){W(this,"currentId",null);W(this,"clear",()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)});W(this,"disposeEffect",()=>this.clear)}static create(){return new it}start(n,e){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,e()},n)}}function Gt(){const t=ht(it.create).current;return Kt(t.disposeEffect),t}function Zt(t){const{className:n,classes:e,pulsate:s=!1,rippleX:i,rippleY:r,rippleSize:o,in:f,onExited:c,timeout:l}=t,[d,h]=u.useState(!1),b=y(n,e.ripple,e.rippleVisible,s&&e.ripplePulsate),E={width:o,height:o,top:-(o/2)+r,left:-(o/2)+i},g=y(e.child,d&&e.childLeaving,s&&e.childPulsate);return!f&&!d&&h(!0),u.useEffect(()=>{if(!f&&c!=null){const R=setTimeout(c,l);return()=>{clearTimeout(R)}}},[c,f,l]),O.jsx("span",{className:b,style:E,children:O.jsx("span",{className:g})})}const M=ft("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),Q=550,qt=80,Jt=et`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,Qt=et`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,te=et`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,ee=tt("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),ne=tt(Zt,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${M.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Jt};
    animation-duration: ${Q}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  &.${M.ripplePulsate} {
    animation-duration: ${({theme:t})=>t.transitions.duration.shorter}ms;
  }

  & .${M.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${M.childLeaving} {
    opacity: 0;
    animation-name: ${Qt};
    animation-duration: ${Q}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  & .${M.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${te};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,se=u.forwardRef(function(n,e){const s=pt({props:n,name:"MuiTouchRipple"}),{center:i=!1,classes:r={},className:o,...f}=s,[c,l]=u.useState([]),d=u.useRef(0),h=u.useRef(null);u.useEffect(()=>{h.current&&(h.current(),h.current=null)},[c]);const b=u.useRef(!1),E=Gt(),g=u.useRef(null),R=u.useRef(null),v=u.useCallback(p=>{const{pulsate:T,rippleX:C,rippleY:U,rippleSize:j,cb:P}=p;l(x=>[...x,O.jsx(ne,{classes:{ripple:y(r.ripple,M.ripple),rippleVisible:y(r.rippleVisible,M.rippleVisible),ripplePulsate:y(r.ripplePulsate,M.ripplePulsate),child:y(r.child,M.child),childLeaving:y(r.childLeaving,M.childLeaving),childPulsate:y(r.childPulsate,M.childPulsate)},timeout:Q,pulsate:T,rippleX:C,rippleY:U,rippleSize:j},d.current)]),d.current+=1,h.current=P},[r]),S=u.useCallback((p={},T={},C=()=>{})=>{const{pulsate:U=!1,center:j=i||T.pulsate,fakeElement:P=!1}=T;if((p==null?void 0:p.type)==="mousedown"&&b.current){b.current=!1;return}(p==null?void 0:p.type)==="touchstart"&&(b.current=!0);const x=P?null:R.current,I=x?x.getBoundingClientRect():{width:0,height:0,left:0,top:0};let k,N,B;if(j||p===void 0||p.clientX===0&&p.clientY===0||!p.clientX&&!p.touches)k=Math.round(I.width/2),N=Math.round(I.height/2);else{const{clientX:z,clientY:D}=p.touches&&p.touches.length>0?p.touches[0]:p;k=Math.round(z-I.left),N=Math.round(D-I.top)}if(j)B=Math.sqrt((2*I.width**2+I.height**2)/3),B%2===0&&(B+=1);else{const z=Math.max(Math.abs((x?x.clientWidth:0)-k),k)*2+2,D=Math.max(Math.abs((x?x.clientHeight:0)-N),N)*2+2;B=Math.sqrt(z**2+D**2)}p!=null&&p.touches?g.current===null&&(g.current=()=>{v({pulsate:U,rippleX:k,rippleY:N,rippleSize:B,cb:C})},E.start(qt,()=>{g.current&&(g.current(),g.current=null)})):v({pulsate:U,rippleX:k,rippleY:N,rippleSize:B,cb:C})},[i,v,E]),F=u.useCallback(()=>{S({},{pulsate:!0})},[S]),$=u.useCallback((p,T)=>{if(E.clear(),(p==null?void 0:p.type)==="touchend"&&g.current){g.current(),g.current=null,E.start(0,()=>{$(p,T)});return}g.current=null,l(C=>C.length>0?C.slice(1):C),h.current=T},[E]);return u.useImperativeHandle(e,()=>({pulsate:F,start:S,stop:$}),[F,S,$]),O.jsx(ee,{className:y(M.root,r.root,o),ref:R,...f,children:O.jsx(st,{component:null,exit:!0,children:c})})});function ie(t){return Lt("MuiButtonBase",t)}const re=ft("MuiButtonBase",["root","disabled","focusVisible"]),oe=t=>{const{disabled:n,focusVisible:e,focusVisibleClassName:s,classes:i}=t,o=wt({root:["root",n&&"disabled",e&&"focusVisible"]},ie,i);return e&&s&&(o.root+=` ${s}`),o},ue=tt("button",{name:"MuiButtonBase",slot:"Root"})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${re.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),ge=u.forwardRef(function(n,e){const s=pt({props:n,name:"MuiButtonBase"}),{action:i,centerRipple:r=!1,children:o,className:f,component:c="button",disabled:l=!1,disableRipple:d=!1,disableTouchRipple:h=!1,focusRipple:b=!1,focusVisibleClassName:E,LinkComponent:g="a",onBlur:R,onClick:v,onContextMenu:S,onDragLeave:F,onFocus:$,onFocusVisible:p,onKeyDown:T,onKeyUp:C,onMouseDown:U,onMouseLeave:j,onMouseUp:P,onTouchEnd:x,onTouchMove:I,onTouchStart:k,tabIndex:N=0,TouchRippleProps:B,touchRippleRef:z,type:D,...H}=s,A=u.useRef(null),m=$t(),mt=ut(m.ref,z),[L,X]=u.useState(!1);l&&L&&X(!1),u.useImperativeHandle(i,()=>({focusVisible:()=>{X(!0),A.current.focus()}}),[]);const gt=m.shouldMount&&!d&&!l;u.useEffect(()=>{L&&b&&!d&&m.pulsate()},[d,b,L,m]);const bt=V(m,"start",U,h),yt=V(m,"stop",S,h),Mt=V(m,"stop",F,h),Et=V(m,"stop",P,h),Rt=V(m,"stop",a=>{L&&a.preventDefault(),j&&j(a)},h),Ct=V(m,"start",k,h),Tt=V(m,"stop",x,h),xt=V(m,"stop",I,h),vt=V(m,"stop",a=>{ot(a.target)||X(!1),R&&R(a)},!1),Nt=G(a=>{A.current||(A.current=a.currentTarget),ot(a.target)&&(X(!0),p&&p(a)),$&&$(a)}),q=()=>{const a=A.current;return c&&c!=="button"&&!(a.tagName==="A"&&a.href)},Vt=G(a=>{b&&!a.repeat&&L&&a.key===" "&&m.stop(a,()=>{m.start(a)}),a.target===a.currentTarget&&q()&&a.key===" "&&a.preventDefault(),T&&T(a),a.target===a.currentTarget&&q()&&a.key==="Enter"&&!l&&(a.preventDefault(),v&&v(a))}),It=G(a=>{b&&a.key===" "&&L&&!a.defaultPrevented&&m.stop(a,()=>{m.pulsate(a)}),C&&C(a),v&&a.target===a.currentTarget&&q()&&a.key===" "&&!a.defaultPrevented&&v(a)});let K=c;K==="button"&&(H.href||H.to)&&(K=g);const _={};K==="button"?(_.type=D===void 0?"button":D,_.disabled=l):(!H.href&&!H.to&&(_.role="button"),l&&(_["aria-disabled"]=l));const kt=ut(e,A),rt={...s,centerRipple:r,component:c,disabled:l,disableRipple:d,disableTouchRipple:h,focusRipple:b,tabIndex:N,focusVisible:L},Bt=oe(rt);return O.jsxs(ue,{as:K,className:y(Bt.root,f),ownerState:rt,onBlur:vt,onClick:v,onContextMenu:yt,onFocus:Nt,onKeyDown:Vt,onKeyUp:It,onMouseDown:bt,onMouseLeave:Rt,onMouseUp:Et,onDragLeave:Mt,onTouchEnd:Tt,onTouchMove:xt,onTouchStart:Ct,ref:kt,tabIndex:l?-1:N,type:D,..._,...H,children:[o,gt?O.jsx(se,{ref:mt,center:r,...B}):null]})});function V(t,n,e,s=!1){return G(i=>(e&&e(i),s||t[n](i),!0))}function ae(t){return typeof t=="string"}function be(t,n,e){return t===void 0||ae(t)?n:{...n,ownerState:{...n.ownerState,...e}}}function ye(t,n,e){return typeof t=="function"?t(n,e):t}function le(t,n=[]){if(t===void 0)return{};const e={};return Object.keys(t).filter(s=>s.match(/^on[A-Z]/)&&typeof t[s]=="function"&&!n.includes(s)).forEach(s=>{e[s]=t[s]}),e}function ct(t){if(t===void 0)return{};const n={};return Object.keys(t).filter(e=>!(e.match(/^on[A-Z]/)&&typeof t[e]=="function")).forEach(e=>{n[e]=t[e]}),n}function Me(t){const{getSlotProps:n,additionalProps:e,externalSlotProps:s,externalForwardedProps:i,className:r}=t;if(!n){const E=y(e==null?void 0:e.className,r,i==null?void 0:i.className,s==null?void 0:s.className),g={...e==null?void 0:e.style,...i==null?void 0:i.style,...s==null?void 0:s.style},R={...e,...i,...s};return E.length>0&&(R.className=E),Object.keys(g).length>0&&(R.style=g),{props:R,internalRef:void 0}}const o=le({...i,...s}),f=ct(s),c=ct(i),l=n(o),d=y(l==null?void 0:l.className,e==null?void 0:e.className,r,i==null?void 0:i.className,s==null?void 0:s.className),h={...l==null?void 0:l.style,...e==null?void 0:e.style,...i==null?void 0:i.style,...s==null?void 0:s.style},b={...l,...e,...c,...f};return d.length>0&&(b.className=d),Object.keys(h).length>0&&(b.style=h),{props:b,internalRef:l.ref}}export{ge as B,he as R,lt as T,Pt as _,be as a,St as b,me as c,G as d,zt as e,le as f,Gt as g,ht as h,Me as m,ye as r,ut as u};
