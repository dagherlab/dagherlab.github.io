import{c as H,h as fe,a as Me,b as Ye}from"./render.1fb580e6.js";import{c as d,h as y,r as p,j as D,o as Z,a as Ce,k as W,t as Ee,l as Ze,s as et,m as tt,g as V,w as Q,n as He,p as j,q as ue,u as we,v as lt,x as ot,y as xe,z as Te,A as at,B as re,b as nt,_ as it,C as F,D as O,E as T,d as k,G as se,H as ee,I as rt}from"./index.a522e294.js";import{R as st,Q as ce,u as ut,a as ct}from"./QBtn.731f31c7.js";import{u as dt,a as Ie,Q as ft,b as vt,c as U,d as G,C as X}from"./ClosePopup.1e2aae46.js";import{g as ht,a as bt,b as mt,c as _e}from"./scroll.a161af1e.js";import"./QSpinner.15e54a01.js";import"./dom.36906968.js";import"./use-dark.89eb9134.js";var gt=H({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:_}){const a=d(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>y("div",{class:a.value},fe(_.default))}});let yt=0;const _t=["click","keydown"],wt={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${yt++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function Ct(e,_,a,t){const l=Ce(Ee,()=>{console.error("QTab/QRouteTab component needs to be child of QTabs")}),{proxy:u}=V(),b=p(null),$=p(null),f=p(null),c=d(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),w=d(()=>l.currentModel.value===e.name),q=d(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(w.value===!0?" q-tab--active"+(l.tabProps.value.activeClass?" "+l.tabProps.value.activeClass:"")+(l.tabProps.value.activeColor?` text-${l.tabProps.value.activeColor}`:"")+(l.tabProps.value.activeBgColor?` bg-${l.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&l.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||l.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(t!==void 0&&t.linkClass.value!==""?` ${t.linkClass.value}`:"")),P=d(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(l.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),g=d(()=>e.disable===!0||l.hasFocus.value===!0?-1:e.tabindex||0);function z(s,i){if(i!==!0&&b.value!==null&&b.value.focus(),e.disable!==!0){let m;if(t!==void 0)if(t.hasRouterLink.value===!0)m=()=>{s.__qNavigate=!0,l.avoidRouteWatcher=!0;const S=t.navigateToRouterLink(s);S===!1?l.avoidRouteWatcher=!1:S.then(B=>{l.avoidRouteWatcher=!1,B===void 0&&l.updateModel({name:e.name,fromRoute:!0})})};else{a("click",s);return}else m=()=>{l.updateModel({name:e.name,fromRoute:!1})};a("click",s,m),s.defaultPrevented!==!0&&m()}}function M(s){Ze(s,[13,32])?z(s,!0):et(s)!==!0&&s.keyCode>=35&&s.keyCode<=40&&s.altKey!==!0&&s.metaKey!==!0&&l.onKbdNavigate(s.keyCode,u.$el)===!0&&tt(s),a("keydown",s)}function A(){const s=l.tabProps.value.narrowIndicator,i=[],m=y("div",{ref:f,class:["q-tab__indicator",l.tabProps.value.indicatorClass]});e.icon!==void 0&&i.push(y(ce,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&i.push(y("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&i.push(e.alertIcon!==void 0?y(ce,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):y("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),s===!0&&i.push(m);const S=[y("div",{class:"q-focus-helper",tabindex:-1,ref:b}),y("div",{class:P.value},Me(_.default,i))];return s===!1&&S.push(m),S}const I={name:d(()=>e.name),rootRef:$,tabIndicatorRef:f,routerProps:t};D(()=>{l.unregisterTab(I),l.recalculateScroll()}),Z(()=>{l.registerTab(I),l.recalculateScroll()});function n(s,i){const m={ref:$,class:q.value,tabindex:g.value,role:"tab","aria-selected":w.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:z,onKeydown:M,...i};return W(y(s,m,A()),[[st,c.value]])}return{renderTab:n,$tabs:l}}var J=H({name:"QRouteTab",props:{...ut,...wt},emits:_t,setup(e,{slots:_,emit:a}){const t=ct(),{renderTab:l,$tabs:u}=Ct(e,_,a,{exact:d(()=>e.exact),...t});return Q(()=>e.name+e.exact+(t.linkRoute.value||{}).href,()=>{u.verifyRouteModel()}),()=>l(t.linkTag.value,t.linkProps.value)}});function xt(){const e=p(!He.value);return e.value===!1&&Z(()=>{e.value=!0}),e}const Ne=typeof ResizeObserver!="undefined",Be=Ne===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var de=H({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:_}){let a=null,t,l={width:-1,height:-1};function u(f){f===!0||e.debounce===0||e.debounce==="0"?b():a===null&&(a=setTimeout(b,e.debounce))}function b(){if(clearTimeout(a),a=null,t){const{offsetWidth:f,offsetHeight:c}=t;(f!==l.width||c!==l.height)&&(l={width:f,height:c},_("resize",l))}}const $=V();if(Object.assign($.proxy,{trigger:u}),Ne===!0){let f;return Z(()=>{j(()=>{t=$.proxy.$el.parentNode,t&&(f=new ResizeObserver(u),f.observe(t),b())})}),D(()=>{clearTimeout(a),f!==void 0&&(f.disconnect!==void 0?f.disconnect():t&&f.unobserve(t))}),ue}else{let w=function(){clearTimeout(a),c!==void 0&&(c.removeEventListener!==void 0&&c.removeEventListener("resize",u,we.passive),c=void 0)},q=function(){w(),t&&t.contentDocument&&(c=t.contentDocument.defaultView,c.addEventListener("resize",u,we.passive),b())};const f=xt();let c;return Z(()=>{j(()=>{t=$.proxy.$el,t&&q()})}),D(w),()=>{if(f.value===!0)return y("object",{style:Be.style,tabindex:-1,type:"text/html",data:Be.url,"aria-hidden":"true",onLoad:q})}}}});let Ve=!1;{const e=document.createElement("div"),_=document.createElement("div");e.setAttribute("dir","rtl"),e.style.width="1px",e.style.height="1px",e.style.overflow="auto",_.style.width="1000px",_.style.height="1px",document.body.appendChild(e),e.appendChild(_),e.scrollLeft=-1e3,Ve=e.scrollLeft>=0,e.remove()}function Tt(e,_,a){const t=a===!0?["left","right"]:["top","bottom"];return`absolute-${_===!0?t[0]:t[1]}${e?` text-${e}`:""}`}const kt=["left","center","right","justify"],Qe=()=>{};var St=H({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>kt.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:_,emit:a}){const t=V(),{proxy:{$q:l}}=t,{registerTick:u}=dt(),{registerTimeout:b,removeTimeout:$}=Ie(),{registerTimeout:f}=Ie(),c=p(null),w=p(null),q=p(e.modelValue),P=p(!1),g=p(!0),z=p(!1),M=p(!1),A=d(()=>l.platform.is.desktop===!0||e.mobileArrows===!0),I=[],n=p(!1);let s=!1,i,m,S,B=A.value===!0?Se:ue;const K=d(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:Tt(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),te=d(()=>`q-tabs__content--align-${P.value===!0?"left":M.value===!0?"justify":e.align}`),Fe=d(()=>`q-tabs row no-wrap items-center q-tabs--${P.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${A.value===!0&&e.outsideArrows===!0?"outside":"inside"}`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),Oe=d(()=>"q-tabs__content row no-wrap items-center self-stretch hide-scrollbar relative-position "+te.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")+(l.platform.is.mobile===!0?" scroll":"")),le=d(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),oe=d(()=>e.vertical!==!0&&l.lang.rtl===!0),ve=d(()=>Ve===!1&&oe.value===!0);Q(oe,B),Q(()=>e.modelValue,o=>{he({name:o,setCurrent:!0,skipEmit:!0})}),Q(()=>e.outsideArrows,()=>{j(ae())}),Q(A,o=>{B=o===!0?Se:ue,j(ae())});function he({name:o,setCurrent:r,skipEmit:v,fromRoute:x}){q.value!==o&&(v!==!0&&a("update:modelValue",o),(r===!0||e["onUpdate:modelValue"]===void 0)&&(We(q.value,o),q.value=o)),x!==void 0&&(s=x)}function ae(){u(()=>{t.isDeactivated!==!0&&t.isUnmounted!==!0&&ke({width:c.value.offsetWidth,height:c.value.offsetHeight})})}function ke(o){if(le.value===void 0||w.value===null)return;const r=o[le.value.container],v=Math.min(w.value[le.value.scroll],Array.prototype.reduce.call(w.value.children,(h,R)=>h+(R[le.value.content]||0),0)),x=r>0&&v>r;P.value!==x&&(P.value=x),x===!0&&j(B);const L=r<parseInt(e.breakpoint,10);M.value!==L&&(M.value=L)}function We(o,r){const v=o!=null&&o!==""?I.find(L=>L.name.value===o):null,x=r!=null&&r!==""?I.find(L=>L.name.value===r):null;if(v&&x){const L=v.tabIndicatorRef.value,h=x.tabIndicatorRef.value;clearTimeout(i),L.style.transition="none",L.style.transform="none",h.style.transition="none",h.style.transform="none";const R=L.getBoundingClientRect(),C=h.getBoundingClientRect();h.style.transform=e.vertical===!0?`translate3d(0,${R.top-C.top}px,0) scale3d(1,${C.height?R.height/C.height:1},1)`:`translate3d(${R.left-C.left}px,0,0) scale3d(${C.width?R.width/C.width:1},1,1)`,j(()=>{i=setTimeout(()=>{h.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",h.style.transform="none"},70)})}x&&P.value===!0&&ne(x.rootRef.value)}function ne(o){const{left:r,width:v,top:x,height:L}=w.value.getBoundingClientRect(),h=o.getBoundingClientRect();let R=e.vertical===!0?h.top-x:h.left-r;if(R<0){w.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(R),B();return}R+=e.vertical===!0?h.height-L:h.width-v,R>0&&(w.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(R),B())}function Se(){const o=w.value;if(o!==null){const r=o.getBoundingClientRect(),v=e.vertical===!0?o.scrollTop:Math.abs(o.scrollLeft);oe.value===!0?(g.value=Math.ceil(v+r.width)<o.scrollWidth-1,z.value=v>0):(g.value=v>0,z.value=e.vertical===!0?Math.ceil(v+r.height)<o.scrollHeight:Math.ceil(v+r.width)<o.scrollWidth)}}function Re(o){N(),qe(o),m=setInterval(()=>{qe(o)===!0&&N()},5)}function Le(){Re(ve.value===!0?Number.MAX_SAFE_INTEGER:0)}function pe(){Re(ve.value===!0?0:Number.MAX_SAFE_INTEGER)}function N(){clearInterval(m)}function je(o,r){const v=Array.prototype.filter.call(w.value.children,C=>C===r||C.matches&&C.matches(".q-tab.q-focusable")===!0),x=v.length;if(x===0)return;if(o===36)return ne(v[0]),!0;if(o===35)return ne(v[x-1]),!0;const L=o===(e.vertical===!0?38:37),h=o===(e.vertical===!0?40:39),R=L===!0?-1:h===!0?1:void 0;if(R!==void 0){const C=oe.value===!0?-1:1,E=v.indexOf(r)+R*C;return E>=0&&E<x&&(ne(v[E]),v[E].focus({preventScroll:!0})),!0}}const De=d(()=>ve.value===!0?{get:o=>Math.abs(o.scrollLeft),set:(o,r)=>{o.scrollLeft=-r}}:e.vertical===!0?{get:o=>o.scrollTop,set:(o,r)=>{o.scrollTop=r}}:{get:o=>o.scrollLeft,set:(o,r)=>{o.scrollLeft=r}});function qe(o){const r=w.value,{get:v,set:x}=De.value;let L=!1,h=v(r);const R=o<h?-1:1;return h+=R*5,h<0?(L=!0,h=0):(R===-1&&h<=o||R===1&&h>=o)&&(L=!0,h=o),x(r,h),B(),L}function be(){return I.filter(o=>o.routerProps!==void 0&&o.routerProps.hasRouterLink.value===!0)}function Ke(){let o=null,r=s;const v={matchedLen:0,hrefLen:0,exact:!1,found:!1},{hash:x}=t.proxy.$route,L=q.value;let h=r===!0?Qe:C=>{L===C.name.value&&(r=!0,h=Qe)};const R=be();for(const C of R){const E=C.routerProps.exact.value===!0;if(C.routerProps[E===!0?"linkIsExactActive":"linkIsActive"].value!==!0||v.exact===!0&&E!==!0){h(C);continue}const me=C.routerProps.linkRoute.value,ge=me.hash;if(E===!0){if(x===ge){o=C.name.value;break}else if(x!==""&&ge!==""){h(C);continue}}const ye=me.matched.length,Pe=me.href.length-ge.length;if(ye===v.matchedLen?Pe>v.hrefLen:ye>v.matchedLen){o=C.name.value,Object.assign(v,{matchedLen:ye,hrefLen:Pe,exact:E});continue}h(C)}(r===!0||o!==null)&&he({name:o,setCurrent:!0,fromRoute:!0})}function Ue(o){if($(),n.value!==!0&&c.value!==null&&o.target&&typeof o.target.closest=="function"){const r=o.target.closest(".q-tab");r&&c.value.contains(r)===!0&&(n.value=!0)}}function Ge(){b(()=>{n.value=!1},30)}function ie(){$e.avoidRouteWatcher!==!0&&f(Ke)}function Xe(o){I.push(o),be().length>0&&(S===void 0&&(S=Q(()=>t.proxy.$route,ie)),ie())}function Je(o){I.splice(I.indexOf(o),1),S!==void 0&&(be().length===0&&(S(),S=void 0),ie())}const $e={currentModel:q,tabProps:K,hasFocus:n,registerTab:Xe,unregisterTab:Je,verifyRouteModel:ie,updateModel:he,recalculateScroll:ae,onKbdNavigate:je,avoidRouteWatcher:!1};xe(Ee,$e),D(()=>{clearTimeout(i),S!==void 0&&S()});let ze=!1;return lt(()=>{ze=!0}),ot(()=>{ze===!0&&ae()}),()=>{const o=[y(de,{onResize:ke}),y("div",{ref:w,class:Oe.value,onScroll:B},fe(_.default))];return A.value===!0&&o.push(y(ce,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(g.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||l.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedown:Le,onTouchstartPassive:Le,onMouseup:N,onMouseleave:N,onTouchend:N}),y(ce,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(z.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||l.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedown:pe,onTouchstartPassive:pe,onMouseup:N,onMouseleave:N,onTouchend:N})),y("div",{ref:c,class:Fe.value,role:"tablist",onFocusin:Ue,onFocusout:Ge},o)}}}),Y=H({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:_}){const a=d(()=>parseInt(e.lines,10)),t=d(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(a.value===1?" ellipsis":"")),l=d(()=>e.lines!==void 0&&a.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":a.value}:null);return()=>y("div",{style:l.value,class:t.value},fe(_.default))}}),Rt=H({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:_,emit:a}){const{proxy:{$q:t}}=V(),l=Ce(Te,()=>{console.error("QHeader needs to be child of QLayout")}),u=p(parseInt(e.heightHint,10)),b=p(!0),$=d(()=>e.reveal===!0||l.view.value.indexOf("H")>-1||t.platform.is.ios&&l.isContainer.value===!0),f=d(()=>{if(e.modelValue!==!0)return 0;if($.value===!0)return b.value===!0?u.value:0;const n=u.value-l.scroll.value.position;return n>0?n:0}),c=d(()=>e.modelValue!==!0||$.value===!0&&b.value!==!0),w=d(()=>e.modelValue===!0&&c.value===!0&&e.reveal===!0),q=d(()=>"q-header q-layout__section--marginal "+($.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(c.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),P=d(()=>{const n=l.rows.value.top,s={};return n[0]==="l"&&l.left.space===!0&&(s[t.lang.rtl===!0?"right":"left"]=`${l.left.size}px`),n[2]==="r"&&l.right.space===!0&&(s[t.lang.rtl===!0?"left":"right"]=`${l.right.size}px`),s});function g(n,s){l.update("header",n,s)}function z(n,s){n.value!==s&&(n.value=s)}function M({height:n}){z(u,n),g("size",n)}function A(n){w.value===!0&&z(b,!0),a("focusin",n)}Q(()=>e.modelValue,n=>{g("space",n),z(b,!0),l.animate()}),Q(f,n=>{g("offset",n)}),Q(()=>e.reveal,n=>{n===!1&&z(b,e.modelValue)}),Q(b,n=>{l.animate(),a("reveal",n)}),Q(l.scroll,n=>{e.reveal===!0&&z(b,n.direction==="up"||n.position<=e.revealOffset||n.position-n.inflectionPoint<100)});const I={};return l.instances.header=I,e.modelValue===!0&&g("size",u.value),g("space",e.modelValue),g("offset",f.value),D(()=>{l.instances.header===I&&(l.instances.header=void 0,g("size",0),g("offset",0),g("space",!1))}),()=>{const n=Ye(_.default,[]);return e.elevated===!0&&n.push(y("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),n.push(y(de,{debounce:0,onResize:M})),y("header",{class:q.value,style:P.value,onFocusin:A},n)}}}),Lt=H({name:"QPageContainer",setup(e,{slots:_}){const{proxy:{$q:a}}=V(),t=Ce(Te,()=>{console.error("QPageContainer needs to be child of QLayout")});xe(at,!0);const l=d(()=>{const u={};return t.header.space===!0&&(u.paddingTop=`${t.header.size}px`),t.right.space===!0&&(u[`padding${a.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(u.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(u[`padding${a.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),u});return()=>y("div",{class:"q-page-container",style:l.value},fe(_.default))}});const{passive:Ae}=we,pt=["both","horizontal","vertical"];var qt=H({name:"QScrollObserver",props:{axis:{type:String,validator:e=>pt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:_}){const a={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,l,u;Q(()=>e.scrollTarget,()=>{f(),$()});function b(){t!==null&&t();const q=Math.max(0,bt(l)),P=mt(l),g={top:q-a.position.top,left:P-a.position.left};if(e.axis==="vertical"&&g.top===0||e.axis==="horizontal"&&g.left===0)return;const z=Math.abs(g.top)>=Math.abs(g.left)?g.top<0?"up":"down":g.left<0?"left":"right";a.position={top:q,left:P},a.directionChanged=a.direction!==z,a.delta=g,a.directionChanged===!0&&(a.direction=z,a.inflectionPoint=a.position),_("scroll",{...a})}function $(){l=ht(u,e.scrollTarget),l.addEventListener("scroll",c,Ae),c(!0)}function f(){l!==void 0&&(l.removeEventListener("scroll",c,Ae),l=void 0)}function c(q){if(q===!0||e.debounce===0||e.debounce==="0")b();else if(t===null){const[P,g]=e.debounce?[setTimeout(b,e.debounce),clearTimeout]:[requestAnimationFrame(b),cancelAnimationFrame];t=()=>{g(P),t=null}}}const w=V();return Z(()=>{u=w.proxy.$el.parentNode,$()}),D(()=>{t!==null&&t(),f()}),Object.assign(w.proxy,{trigger:c,getPosition:()=>a}),ue}}),$t=H({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:_,emit:a}){const{proxy:{$q:t}}=V(),l=p(null),u=p(t.screen.height),b=p(e.container===!0?0:t.screen.width),$=p({position:0,direction:"down",inflectionPoint:0}),f=p(0),c=p(He.value===!0?0:_e()),w=d(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),q=d(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),P=d(()=>c.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${c.value}px`}:null),g=d(()=>c.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${c.value}px`,width:`calc(100% + ${c.value}px)`}:null);function z(i){if(e.container===!0||document.qScrollPrevented!==!0){const m={position:i.position.top,direction:i.direction,directionChanged:i.directionChanged,inflectionPoint:i.inflectionPoint.top,delta:i.delta.top};$.value=m,e.onScroll!==void 0&&a("scroll",m)}}function M(i){const{height:m,width:S}=i;let B=!1;u.value!==m&&(B=!0,u.value=m,e.onScrollHeight!==void 0&&a("scroll-height",m),I()),b.value!==S&&(B=!0,b.value=S),B===!0&&e.onResize!==void 0&&a("resize",i)}function A({height:i}){f.value!==i&&(f.value=i,I())}function I(){if(e.container===!0){const i=u.value>f.value?_e():0;c.value!==i&&(c.value=i)}}let n;const s={instances:{},view:d(()=>e.view),isContainer:d(()=>e.container),rootRef:l,height:u,containerHeight:f,scrollbarWidth:c,totalWidth:d(()=>b.value+c.value),rows:d(()=>{const i=e.view.toLowerCase().split(" ");return{top:i[0].split(""),middle:i[1].split(""),bottom:i[2].split("")}}),header:re({size:0,offset:0,space:!1}),right:re({size:300,offset:0,space:!1}),footer:re({size:0,offset:0,space:!1}),left:re({size:300,offset:0,space:!1}),scroll:$,animate(){n!==void 0?clearTimeout(n):document.body.classList.add("q-body--layout-animate"),n=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),n=void 0},155)},update(i,m,S){s[i][m]=S}};if(xe(Te,s),_e()>0){let S=function(){i=null,m.classList.remove("hide-scrollbar")},B=function(){if(i===null){if(m.scrollHeight>t.screen.height)return;m.classList.add("hide-scrollbar")}else clearTimeout(i);i=setTimeout(S,300)},K=function(te){i!==null&&te==="remove"&&(clearTimeout(i),S()),window[`${te}EventListener`]("resize",B)},i=null;const m=document.body;Q(()=>e.container!==!0?"add":"remove",K),e.container!==!0&&K("add"),nt(()=>{K("remove")})}return()=>{const i=Me(_.default,[y(qt,{onScroll:z}),y(de,{onResize:M})]),m=y("div",{class:w.value,style:q.value,ref:e.container===!0?void 0:l,tabindex:-1},i);return e.container===!0?y("div",{class:"q-layout-container overflow-hidden",ref:l},[y(de,{onResize:A}),y("div",{class:"absolute-full",style:P.value},[y("div",{class:"scroll",style:g.value},[m])])]):m}}});const zt={setup(){return{onItemClick(){console.log("Clicked on an Item")}}},methods:{home(){this.$router.push("/")},research(){this.$router.push("/research")},team(){this.$router.push("/team")},News(){this.$router.push("/News")},publications(){this.$router.push("/publications")}}},Pt={style:{width:"50%"},class:"flex items-center"},It=se("p",{class:"text-h4 no-margin text-no-wrap"},"Dagher's Lab",-1),Bt={class:"flex justify-end",style:{width:"50%"}},Qt={class:"q-pa-md lt-sm"},At=ee("Home"),Mt=ee("Research"),Et=ee("Team"),Ht=ee("News"),Nt=ee("Publications");function Vt(e,_,a,t,l,u){const b=rt("router-view");return F(),O($t,{view:"hHh lpR fFf"},{default:T(()=>[k(Rt,{elevated:"",class:"bg-primary text-white flex","height-hint":"98"},{default:T(()=>[se("div",Pt,[k(gt,null,{default:T(()=>[It]),_:1})]),se("div",Bt,[k(St,{align:"left",class:"gt-xs"},{default:T(()=>[k(J,{to:"/",label:"Home",style:{color:"grey"}}),k(J,{to:"research",label:"Research",style:{color:"grey"}}),k(J,{to:"team",label:"Team",style:{color:"grey"}}),k(J,{to:"News",label:"News",style:{color:"grey"}}),k(J,{to:"publications",label:"Publications",style:{color:"grey"}})]),_:1}),se("div",Qt,[k(ft,{color:"primary",label:"menu"},{default:T(()=>[k(vt,null,{default:T(()=>[W((F(),O(U,{clickable:"",onClick:t.onItemClick},{default:T(()=>[k(G,null,{default:T(()=>[k(Y,{onClick:u.home},{default:T(()=>[At]),_:1},8,["onClick"])]),_:1})]),_:1},8,["onClick"])),[[X]]),W((F(),O(U,{clickable:"",onClick:t.onItemClick},{default:T(()=>[k(G,null,{default:T(()=>[k(Y,{onClick:u.research},{default:T(()=>[Mt]),_:1},8,["onClick"])]),_:1})]),_:1},8,["onClick"])),[[X]]),W((F(),O(U,{clickable:"",onClick:t.onItemClick},{default:T(()=>[k(G,null,{default:T(()=>[k(Y,{onClick:u.team},{default:T(()=>[Et]),_:1},8,["onClick"])]),_:1})]),_:1},8,["onClick"])),[[X]]),W((F(),O(U,{clickable:"",onClick:t.onItemClick},{default:T(()=>[k(G,null,{default:T(()=>[k(Y,{onClick:u.News},{default:T(()=>[Ht]),_:1},8,["onClick"])]),_:1})]),_:1},8,["onClick"])),[[X]]),W((F(),O(U,{clickable:"",onClick:t.onItemClick},{default:T(()=>[k(G,null,{default:T(()=>[k(Y,{onClick:u.publications},{default:T(()=>[Nt]),_:1},8,["onClick"])]),_:1})]),_:1},8,["onClick"])),[[X]])]),_:1})]),_:1})])])]),_:1}),k(Lt,null,{default:T(()=>[k(b)]),_:1})]),_:1})}var Xt=it(zt,[["render",Vt]]);export{Xt as default};
