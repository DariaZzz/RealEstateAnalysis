import{r as g}from"./iframe-D4hbvkVB.js";import{j as x}from"./jsx-runtime-D_zvdyIk.js";import{g as P,a as R,u as b,s as N,c as T,b as h,d as j,m as F}from"./createSimplePaletteValueFilter-Ccc1faLV.js";import{r as E,m as M,u as U,a as k}from"./mergeSlotProps-DnV3t0J5.js";function A(o){return P("MuiSvgIcon",o)}R("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const V=o=>{const{color:e,fontSize:t,classes:n}=o,r={root:["root",e!=="inherit"&&`color${h(e)}`,`fontSize${h(t)}`]};return j(r,A,n)},$=N("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,t.color!=="inherit"&&e[`color${h(t.color)}`],e[`fontSize${h(t.fontSize)}`]]}})(F(({theme:o})=>{var e,t,n,r,l,d,i,u,a,c,f,m,S,p;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",flexShrink:0,transition:(r=(e=o.transitions)==null?void 0:e.create)==null?void 0:r.call(e,"fill",{duration:(n=(t=(o.vars??o).transitions)==null?void 0:t.duration)==null?void 0:n.shorter}),variants:[{props:s=>!s.hasSvgAsChild,style:{fill:"currentColor"}},{props:{fontSize:"inherit"},style:{fontSize:"inherit"}},{props:{fontSize:"small"},style:{fontSize:((d=(l=o.typography)==null?void 0:l.pxToRem)==null?void 0:d.call(l,20))||"1.25rem"}},{props:{fontSize:"medium"},style:{fontSize:((u=(i=o.typography)==null?void 0:i.pxToRem)==null?void 0:u.call(i,24))||"1.5rem"}},{props:{fontSize:"large"},style:{fontSize:((c=(a=o.typography)==null?void 0:a.pxToRem)==null?void 0:c.call(a,35))||"2.1875rem"}},...Object.entries((o.vars??o).palette).filter(([,s])=>s&&s.main).map(([s])=>{var v,y;return{props:{color:s},style:{color:(y=(v=(o.vars??o).palette)==null?void 0:v[s])==null?void 0:y.main}}}),{props:{color:"action"},style:{color:(m=(f=(o.vars??o).palette)==null?void 0:f.action)==null?void 0:m.active}},{props:{color:"disabled"},style:{color:(p=(S=(o.vars??o).palette)==null?void 0:S.action)==null?void 0:p.disabled}},{props:{color:"inherit"},style:{color:void 0}}]}})),C=g.forwardRef(function(e,t){const n=b({props:e,name:"MuiSvgIcon"}),{children:r,className:l,color:d="inherit",component:i="svg",fontSize:u="medium",htmlColor:a,inheritViewBox:c=!1,titleAccess:f,viewBox:m="0 0 24 24",...S}=n,p=g.isValidElement(r)&&r.type==="svg",s={...n,color:d,component:i,fontSize:u,instanceFontSize:e.fontSize,inheritViewBox:c,viewBox:m,hasSvgAsChild:p},v={};c||(v.viewBox=m);const y=V(s);return x.jsxs($,{as:i,className:T(y.root,l),focusable:"false",color:a,"aria-hidden":f?void 0:!0,role:f?"img":void 0,ref:t,...v,...S,...p&&r.props,ownerState:s,children:[p?r.props.children:r,f?x.jsx("title",{children:f}):null]})});C.muiName="SvgIcon";function q(o,e){function t(n,r){return x.jsx(C,{"data-testid":void 0,ref:r,...n,children:o})}return t.muiName=C.muiName,g.memo(g.forwardRef(t))}function G(o){const{controlled:e,default:t,name:n,state:r="value"}=o,{current:l}=g.useRef(e!==void 0),[d,i]=g.useState(t),u=l?e:d,a=g.useCallback(c=>{l||i(c)},[]);return[u,a]}function H(o,e){const{className:t,elementType:n,ownerState:r,externalForwardedProps:l,internalForwardedProps:d,shouldForwardComponentProp:i=!1,...u}=e,{component:a,slots:c={[o]:void 0},slotProps:f={[o]:void 0},...m}=l,S=c[o]||n,p=E(f[o],r),{props:{component:s,...v},internalRef:y}=M({className:t,...u,externalForwardedProps:o==="root"?m:void 0,externalSlotProps:p}),w=U(y,p==null?void 0:p.ref,e.ref),z=o==="root"?s||a:s,I=k(S,{...o==="root"&&!a&&!c[o]&&d,...o!=="root"&&!c[o]&&d,...v,...z&&!i&&{as:z},...z&&i&&{component:z},ref:w},r);return[S,I]}export{H as a,q as c,G as u};
