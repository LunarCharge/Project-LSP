import{T as g,r as u,b as Be,a as v,j as M,u as Ue}from"./app-9c20d7ec.js";import{T as je,I as _e}from"./TextInput-8d98fb91.js";import{I as We}from"./InputLabel-ec367d81.js";import{a as q,s as U,e as re,u as A,b as oe,C as $,$ as P,o as x,y as T,p as Ye,t as ae,f as Ee,T as Ge,S as pe,c as qe,d as me,m as Ve,J}from"./transition-2a7a4084.js";var ge;let ze=0;function ve(){return++ze}let I=(ge=g.useId)!=null?ge:function(){let e=q(),[t,n]=g.useState(e?ve:null);return U(()=>{t===null&&n(ve())},[t]),t!=null?""+t:void 0};function le(e){return re?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let Q=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var S=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(S||{}),xe=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(xe||{}),Xe=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(Xe||{});function Je(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(Q)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var $e=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))($e||{});function Ke(e,t=0){var n;return e===((n=le(e))==null?void 0:n.body)?!1:A(t,{[0](){return e.matches(Q)},[1](){let r=e;for(;r!==null;){if(r.matches(Q))return!0;r=r.parentElement}return!1}})}function N(e){e==null||e.focus({preventScroll:!0})}let Qe=["textarea","input"].join(",");function Ze(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,Qe))!=null?n:!1}function et(e,t=n=>n){return e.slice().sort((n,r)=>{let o=t(n),l=t(r);if(o===null||l===null)return 0;let a=o.compareDocumentPosition(l);return a&Node.DOCUMENT_POSITION_FOLLOWING?-1:a&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function W(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){let l=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,a=Array.isArray(e)?n?et(e):e:Je(e);o.length>0&&(a=a.filter(p=>!o.includes(p))),r=r??l.activeElement;let i=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,a.indexOf(r))-1;if(t&4)return Math.max(0,a.indexOf(r))+1;if(t&8)return a.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=t&32?{preventScroll:!0}:{},s=0,f=a.length,m;do{if(s>=f||s+f<=0)return 0;let p=d+s;if(t&16)p=(p+f)%f;else{if(p<0)return 3;if(p>=f)return 1}m=a[p],m==null||m.focus(c),s+=i}while(m!==l.activeElement);return t&6&&Ze(m)&&m.select(),m.hasAttribute("tabindex")||m.setAttribute("tabindex","0"),2}function K(e,t,n){let r=oe(t);u.useEffect(()=>{function o(l){r.current(l)}return document.addEventListener(e,o,n),()=>document.removeEventListener(e,o,n)},[e,n])}function tt(e,t,n=!0){let r=u.useRef(!1);u.useEffect(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);function o(a,i){if(!r.current||a.defaultPrevented)return;let d=function s(f){return typeof f=="function"?s(f()):Array.isArray(f)||f instanceof Set?f:[f]}(e),c=i(a);if(c!==null&&c.getRootNode().contains(c)){for(let s of d){if(s===null)continue;let f=s instanceof HTMLElement?s:s.current;if(f!=null&&f.contains(c)||a.composed&&a.composedPath().includes(f))return}return!Ke(c,$e.Loose)&&c.tabIndex!==-1&&a.preventDefault(),t(a,c)}}let l=u.useRef(null);K("mousedown",a=>{var i,d;r.current&&(l.current=((d=(i=a.composedPath)==null?void 0:i.call(a))==null?void 0:d[0])||a.target)},!0),K("click",a=>{!l.current||(o(a,()=>l.current),l.current=null)},!0),K("blur",a=>o(a,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function nt(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(t==null?void 0:t.getAttribute("disabled"))==="";return r&&rt(n)?!1:r}function rt(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}let ot="div";var Y=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(Y||{});let Z=$(function(e,t){let{features:n=1,...r}=e,o={ref:t,"aria-hidden":(n&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(n&4)===4&&(n&2)!==2&&{display:"none"}}};return P({ourProps:o,theirProps:r,slot:{},defaultTag:ot,name:"Hidden"})});var Pe=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Pe||{});function Te(e,t){let n=u.useRef([]),r=x(e);u.useEffect(()=>{let o=[...n.current];for(let[l,a]of t.entries())if(n.current[l]!==a){let i=r(t,o);return n.current=t,i}},[r,...t])}function at(e,t,n){let r=oe(t);u.useEffect(()=>{function o(l){r.current(l)}return window.addEventListener(e,o,n),()=>window.removeEventListener(e,o,n)},[e,n])}var B=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(B||{});function lt(){let e=u.useRef(0);return at("keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function V(...e){return u.useMemo(()=>le(...e),[...e])}function ie(e,t,n,r){let o=oe(n);u.useEffect(()=>{e=e??window;function l(a){o.current(a)}return e.addEventListener(t,l,r),()=>e.removeEventListener(t,l,r)},[e,t,r])}let it="div";var Fe=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Fe||{});let H=Object.assign($(function(e,t){let n=u.useRef(null),r=T(n,t),{initialFocus:o,containers:l,features:a=30,...i}=e;q()||(a=1);let d=V(n);ut({ownerDocument:d},Boolean(a&16));let c=st({ownerDocument:d,container:n,initialFocus:o},Boolean(a&2));ct({ownerDocument:d,container:n,containers:l,previousActiveElement:c},Boolean(a&8));let s=lt(),f=x(w=>{let b=n.current;b&&(F=>F())(()=>{A(s.current,{[B.Forwards]:()=>W(b,S.First,{skipElements:[w.relatedTarget]}),[B.Backwards]:()=>W(b,S.Last,{skipElements:[w.relatedTarget]})})})}),m=Ye(),p=u.useRef(!1),O={ref:r,onKeyDown(w){w.key=="Tab"&&(p.current=!0,m.requestAnimationFrame(()=>{p.current=!1}))},onBlur(w){let b=new Set(l==null?void 0:l.current);b.add(n);let F=w.relatedTarget;!F||F.dataset.headlessuiFocusGuard!=="true"&&(De(b,F)||(p.current?W(n.current,A(s.current,{[B.Forwards]:()=>S.Next,[B.Backwards]:()=>S.Previous})|S.WrapAround,{relativeTo:w.target}):w.target instanceof HTMLElement&&N(w.target)))}};return g.createElement(g.Fragment,null,Boolean(a&4)&&g.createElement(Z,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:f,features:Y.Focusable}),P({ourProps:O,theirProps:i,defaultTag:it,name:"FocusTrap"}),Boolean(a&4)&&g.createElement(Z,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:f,features:Y.Focusable}))}),{features:Fe});function ut({ownerDocument:e},t){let n=u.useRef(null);ie(e==null?void 0:e.defaultView,"focusout",o=>{!t||n.current||(n.current=o.target)},!0),Te(()=>{t||((e==null?void 0:e.activeElement)===(e==null?void 0:e.body)&&N(n.current),n.current=null)},[t]);let r=u.useRef(!1);u.useEffect(()=>(r.current=!1,()=>{r.current=!0,ae(()=>{!r.current||(N(n.current),n.current=null)})}),[])}function st({ownerDocument:e,container:t,initialFocus:n},r){let o=u.useRef(null),l=Ee();return Te(()=>{if(!r)return;let a=t.current;!a||ae(()=>{if(!l.current)return;let i=e==null?void 0:e.activeElement;if(n!=null&&n.current){if((n==null?void 0:n.current)===i){o.current=i;return}}else if(a.contains(i)){o.current=i;return}n!=null&&n.current?N(n.current):W(a,S.First)===xe.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),o.current=e==null?void 0:e.activeElement})},[r]),o}function ct({ownerDocument:e,container:t,containers:n,previousActiveElement:r},o){let l=Ee();ie(e==null?void 0:e.defaultView,"focus",a=>{if(!o||!l.current)return;let i=new Set(n==null?void 0:n.current);i.add(t);let d=r.current;if(!d)return;let c=a.target;c&&c instanceof HTMLElement?De(i,c)?(r.current=c,N(c)):(a.preventDefault(),a.stopPropagation(),N(d)):N(r.current)},!0)}function De(e,t){var n;for(let r of e)if((n=r.current)!=null&&n.contains(t))return!0;return!1}let L=new Set,D=new Map;function he(e){e.setAttribute("aria-hidden","true"),e.inert=!0}function we(e){let t=D.get(e);!t||(t["aria-hidden"]===null?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",t["aria-hidden"]),e.inert=t.inert)}function dt(e,t=!0){U(()=>{if(!t||!e.current)return;let n=e.current,r=le(n);if(r){L.add(n);for(let o of D.keys())o.contains(n)&&(we(o),D.delete(o));return r.querySelectorAll("body > *").forEach(o=>{if(o instanceof HTMLElement){for(let l of L)if(o.contains(l))return;L.size===1&&(D.set(o,{"aria-hidden":o.getAttribute("aria-hidden"),inert:o.inert}),he(o))}}),()=>{if(L.delete(n),L.size>0)r.querySelectorAll("body > *").forEach(o=>{if(o instanceof HTMLElement&&!D.has(o)){for(let l of L)if(o.contains(l))return;D.set(o,{"aria-hidden":o.getAttribute("aria-hidden"),inert:o.inert}),he(o)}});else for(let o of D.keys())we(o),D.delete(o)}}},[t])}let Se=u.createContext(!1);function ft(){return u.useContext(Se)}function ee(e){return g.createElement(Se.Provider,{value:e.force},e.children)}function pt(e){let t=ft(),n=u.useContext(Ae),r=V(e),[o,l]=u.useState(()=>{if(!t&&n!==null||re)return null;let a=r==null?void 0:r.getElementById("headlessui-portal-root");if(a)return a;if(r===null)return null;let i=r.createElement("div");return i.setAttribute("id","headlessui-portal-root"),r.body.appendChild(i)});return u.useEffect(()=>{o!==null&&(r!=null&&r.body.contains(o)||r==null||r.body.appendChild(o))},[o,r]),u.useEffect(()=>{t||n!==null&&l(n.current)},[n,l,t]),o}let mt=u.Fragment,gt=$(function(e,t){let n=e,r=u.useRef(null),o=T(Ge(s=>{r.current=s}),t),l=V(r),a=pt(r),[i]=u.useState(()=>{var s;return re?null:(s=l==null?void 0:l.createElement("div"))!=null?s:null}),d=q(),c=u.useRef(!1);return U(()=>{if(c.current=!1,!(!a||!i))return a.contains(i)||(i.setAttribute("data-headlessui-portal",""),a.appendChild(i)),()=>{c.current=!0,ae(()=>{var s;!c.current||!a||!i||(a.removeChild(i),a.childNodes.length<=0&&((s=a.parentElement)==null||s.removeChild(a)))})}},[a,i]),d?!a||!i?null:Be.createPortal(P({ourProps:{ref:o},theirProps:n,defaultTag:mt,name:"Portal"}),i):null}),vt=u.Fragment,Ae=u.createContext(null),ht=$(function(e,t){let{target:n,...r}=e,o={ref:T(t)};return g.createElement(Ae.Provider,{value:n},P({ourProps:o,theirProps:r,defaultTag:vt,name:"Popover.Group"}))}),te=Object.assign(gt,{Group:ht}),Ne=u.createContext(null);function Ce(){let e=u.useContext(Ne);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,Ce),t}return e}function wt(){let[e,t]=u.useState([]);return[e.length>0?e.join(" "):void 0,u.useMemo(()=>function(n){let r=x(l=>(t(a=>[...a,l]),()=>t(a=>{let i=a.slice(),d=i.indexOf(l);return d!==-1&&i.splice(d,1),i}))),o=u.useMemo(()=>({register:r,slot:n.slot,name:n.name,props:n.props}),[r,n.slot,n.name,n.props]);return g.createElement(Ne.Provider,{value:o},n.children)},[t])]}let bt="p",yt=$(function(e,t){let n=I(),{id:r=`headlessui-description-${n}`,...o}=e,l=Ce(),a=T(t);U(()=>l.register(r),[r,l.register]);let i={ref:a,...l.props,id:r};return P({ourProps:i,theirProps:o,slot:l.slot||{},defaultTag:bt,name:l.name||"Description"})}),ue=u.createContext(()=>{});ue.displayName="StackContext";var ne=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(ne||{});function Et(){return u.useContext(ue)}function xt({children:e,onUpdate:t,type:n,element:r,enabled:o}){let l=Et(),a=x((...i)=>{t==null||t(...i),l(...i)});return U(()=>{let i=o===void 0||o===!0;return i&&a(0,n,r),()=>{i&&a(1,n,r)}},[a,n,r,o]),g.createElement(ue.Provider,{value:a},e)}function $t(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}var Pt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Pt||{}),Tt=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(Tt||{});let Ft={[0](e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},G=u.createContext(null);G.displayName="DialogContext";function j(e){let t=u.useContext(G);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,j),n}return t}function Dt(e,t,n=()=>[document.body]){u.useEffect(()=>{var r;if(!t||!e)return;let o=Ve(),l=window.pageYOffset;function a(c,s,f){let m=c.style.getPropertyValue(s);return Object.assign(c.style,{[s]:f}),o.add(()=>{Object.assign(c.style,{[s]:m})})}let i=e.documentElement,d=((r=e.defaultView)!=null?r:window).innerWidth-i.clientWidth;if(a(i,"overflow","hidden"),d>0){let c=i.clientWidth-i.offsetWidth,s=d-c;a(i,"paddingRight",`${s}px`)}if($t()){a(e.body,"marginTop",`-${l}px`),window.scrollTo(0,0);let c=null;o.addEventListener(e,"click",s=>{if(s.target instanceof HTMLElement)try{let f=s.target.closest("a");if(!f)return;let{hash:m}=new URL(f.href),p=e.querySelector(m);p&&!n().some(O=>O.contains(p))&&(c=p)}catch{}},!0),o.addEventListener(e,"touchmove",s=>{s.target instanceof HTMLElement&&!n().some(f=>f.contains(s.target))&&s.preventDefault()},{passive:!1}),o.add(()=>{window.scrollTo(0,window.pageYOffset+l),c&&c.isConnected&&(c.scrollIntoView({block:"nearest"}),c=null)})}return o.dispose},[e,t])}function St(e,t){return A(t.type,Ft,e,t)}let At="div",Nt=pe.RenderStrategy|pe.Static,Ct=$(function(e,t){let n=I(),{id:r=`headlessui-dialog-${n}`,open:o,onClose:l,initialFocus:a,__demoMode:i=!1,...d}=e,[c,s]=u.useState(0),f=qe();o===void 0&&f!==null&&(o=A(f,{[me.Open]:!0,[me.Closed]:!1}));let m=u.useRef(new Set),p=u.useRef(null),O=T(p,t),w=u.useRef(null),b=V(p),F=e.hasOwnProperty("open")||f!==null,se=e.hasOwnProperty("onClose");if(!F&&!se)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!F)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!se)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof o!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${o}`);if(typeof l!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${l}`);let y=o?0:1,[C,Re]=u.useReducer(St,{titleId:null,descriptionId:null,panelRef:u.createRef()}),R=x(()=>l(!1)),ce=x(h=>Re({type:0,id:h})),z=q()?i?!1:y===0:!1,_=c>1,ke=u.useContext(G)!==null,Le=_?"parent":"leaf";dt(p,_?z:!1);let de=x(()=>{var h,k;return[...Array.from((h=b==null?void 0:b.querySelectorAll("body > *, [data-headlessui-portal]"))!=null?h:[]).filter(E=>!(!(E instanceof HTMLElement)||E.contains(w.current)||C.panelRef.current&&E.contains(C.panelRef.current))),(k=C.panelRef.current)!=null?k:p.current]});tt(()=>de(),R,z&&!_),ie(b==null?void 0:b.defaultView,"keydown",h=>{h.defaultPrevented||h.key===Pe.Escape&&y===0&&(_||(h.preventDefault(),h.stopPropagation(),R()))}),Dt(b,y===0&&!ke,de),u.useEffect(()=>{if(y!==0||!p.current)return;let h=new IntersectionObserver(k=>{for(let E of k)E.boundingClientRect.x===0&&E.boundingClientRect.y===0&&E.boundingClientRect.width===0&&E.boundingClientRect.height===0&&R()});return h.observe(p.current),()=>h.disconnect()},[y,p,R]);let[Me,Ie]=wt(),Oe=u.useMemo(()=>[{dialogState:y,close:R,setTitleId:ce},C],[y,C,R,ce]),fe=u.useMemo(()=>({open:y===0}),[y]),He={ref:O,id:r,role:"dialog","aria-modal":y===0?!0:void 0,"aria-labelledby":C.titleId,"aria-describedby":Me};return g.createElement(xt,{type:"Dialog",enabled:y===0,element:p,onUpdate:x((h,k,E)=>{k==="Dialog"&&A(h,{[ne.Add](){m.current.add(E),s(X=>X+1)},[ne.Remove](){m.current.add(E),s(X=>X-1)}})})},g.createElement(ee,{force:!0},g.createElement(te,null,g.createElement(G.Provider,{value:Oe},g.createElement(te.Group,{target:p},g.createElement(ee,{force:!1},g.createElement(Ie,{slot:fe,name:"Dialog.Description"},g.createElement(H,{initialFocus:a,containers:m,features:z?A(Le,{parent:H.features.RestoreFocus,leaf:H.features.All&~H.features.FocusLock}):H.features.None},P({ourProps:He,theirProps:d,slot:fe,defaultTag:At,features:Nt,visible:y===0,name:"Dialog"})))))))),g.createElement(Z,{features:Y.Hidden,ref:w}))}),Rt="div",kt=$(function(e,t){let n=I(),{id:r=`headlessui-dialog-overlay-${n}`,...o}=e,[{dialogState:l,close:a}]=j("Dialog.Overlay"),i=T(t),d=x(s=>{if(s.target===s.currentTarget){if(nt(s.currentTarget))return s.preventDefault();s.preventDefault(),s.stopPropagation(),a()}}),c=u.useMemo(()=>({open:l===0}),[l]);return P({ourProps:{ref:i,id:r,"aria-hidden":!0,onClick:d},theirProps:o,slot:c,defaultTag:Rt,name:"Dialog.Overlay"})}),Lt="div",Mt=$(function(e,t){let n=I(),{id:r=`headlessui-dialog-backdrop-${n}`,...o}=e,[{dialogState:l},a]=j("Dialog.Backdrop"),i=T(t);u.useEffect(()=>{if(a.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[a.panelRef]);let d=u.useMemo(()=>({open:l===0}),[l]);return g.createElement(ee,{force:!0},g.createElement(te,null,P({ourProps:{ref:i,id:r,"aria-hidden":!0},theirProps:o,slot:d,defaultTag:Lt,name:"Dialog.Backdrop"})))}),It="div",Ot=$(function(e,t){let n=I(),{id:r=`headlessui-dialog-panel-${n}`,...o}=e,[{dialogState:l},a]=j("Dialog.Panel"),i=T(t,a.panelRef),d=u.useMemo(()=>({open:l===0}),[l]),c=x(s=>{s.stopPropagation()});return P({ourProps:{ref:i,id:r,onClick:c},theirProps:o,slot:d,defaultTag:It,name:"Dialog.Panel"})}),Ht="h2",Bt=$(function(e,t){let n=I(),{id:r=`headlessui-dialog-title-${n}`,...o}=e,[{dialogState:l,setTitleId:a}]=j("Dialog.Title"),i=T(t);u.useEffect(()=>(a(r),()=>a(null)),[r,a]);let d=u.useMemo(()=>({open:l===0}),[l]);return P({ourProps:{ref:i,id:r},theirProps:o,slot:d,defaultTag:Ht,name:"Dialog.Title"})}),be=Object.assign(Ct,{Backdrop:Mt,Panel:Ot,Overlay:kt,Title:Bt,Description:yt});function ye({type:e="submit",className:t="",processing:n,children:r,onClick:o}){return v("button",{type:e,onClick:o,className:`inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 ${n&&"opacity-25"} `+t,disabled:n,children:r})}function Ut({children:e,show:t=!1,maxWidth:n="2xl",closeable:r=!0,onClose:o=()=>{}}){const l=()=>{r&&o()},a={sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[n];return v(J,{show:t,as:u.Fragment,leave:"duration-200",children:M(be,{as:"div",id:"modal",className:"fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all",onClose:l,children:[v(J.Child,{as:u.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:v("div",{className:"absolute inset-0 bg-gray-500/75"})}),v(J.Child,{as:u.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:v(be.Panel,{className:`mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${a}`,children:e})})]})})}function jt({type:e="button",className:t="",processing:n,children:r,onClick:o}){return v("button",{type:e,onClick:o,className:`inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${n&&"opacity-25"} `+t,disabled:n,children:r})}function qt({className:e}){const[t,n]=u.useState(!1),r=u.useRef(),{data:o,setData:l,delete:a,processing:i,reset:d,errors:c}=Ue({password:""}),s=()=>{n(!0)},f=p=>{p.preventDefault(),a(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>m(),onError:()=>r.current.focus(),onFinish:()=>d()})},m=()=>{n(!1),d()};return M("section",{className:`space-y-6 ${e}`,children:[M("header",{children:[v("h2",{className:"text-lg font-medium text-gray-900",children:"Delete Account"}),v("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."})]}),v(ye,{onClick:s,children:"Delete Account"}),v(Ut,{show:t,onClose:m,children:M("form",{onSubmit:f,className:"p-6",children:[v("h2",{className:"text-lg font-medium text-gray-900",children:"Are you sure you want to delete your account?"}),v("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."}),M("div",{className:"mt-6",children:[v(We,{for:"password",value:"Password",className:"sr-only"}),v(je,{id:"password",type:"password",name:"password",ref:r,value:o.password,handleChange:p=>l("password",p.target.value),className:"mt-1 block w-3/4",isFocused:!0,placeholder:"Password"}),v(_e,{message:c.password,className:"mt-2"})]}),M("div",{className:"mt-6 flex justify-end",children:[v(jt,{onClick:m,children:"Cancel"}),v(ye,{className:"ml-3",processing:i,children:"Delete Account"})]})]})})]})}export{qt as default};
