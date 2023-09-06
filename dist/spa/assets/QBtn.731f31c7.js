import{c,J as G,g as I,h as m,l as K,K as de,L as fe,S as Z,Q as ve,r as Q,j as ge,R as me,k as be,m as w,u as he}from"./index.a522e294.js";import{u as ee,a as te,Q as ye}from"./QSpinner.15e54a01.js";import{c as ne,h as pe,a as j,d as ke}from"./render.1fb580e6.js";import{a as xe}from"./dom.36906968.js";function Xe(e){if(Object(e.$parent)===e.$parent)return e.$parent;for(e=e.$.parent;Object(e)===e;){if(Object(e.proxy)===e.proxy)return e.proxy;e=e.parent}}function qe(e){return e.appContext.config.globalProperties.$router!==void 0}function V(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function z(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function $e(e,n){for(const t in n){const u=n[t],i=e[t];if(typeof u=="string"){if(u!==i)return!1}else if(Array.isArray(i)===!1||i.length!==u.length||u.some((s,o)=>s!==i[o]))return!1}return!0}function F(e,n){return Array.isArray(n)===!0?e.length===n.length&&e.every((t,u)=>t===n[u]):e.length===1&&e[0]===n}function Ee(e,n){return Array.isArray(e)===!0?F(e,n):Array.isArray(n)===!0?F(n,e):e===n}function Re(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const t in e)if(Ee(e[t],n[t])===!1)return!1;return!0}const Le={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function we(e){const n=I(),{props:t,proxy:u}=n,i=qe(n),s=c(()=>t.disable!==!0&&t.href!==void 0),o=c(()=>i===!0&&t.disable!==!0&&s.value!==!0&&t.to!==void 0&&t.to!==null&&t.to!==""),a=c(()=>{if(o.value===!0)try{return u.$router.resolve(t.to)}catch{}return null}),b=c(()=>a.value!==null),$=c(()=>s.value===!0||b.value===!0),v=c(()=>t.type==="a"||$.value===!0?"a":t.tag||e||"div"),y=c(()=>s.value===!0?{href:t.href,target:t.target}:b.value===!0?{href:a.value.href,target:t.target}:{}),p=c(()=>{if(b.value===!1)return null;const{matched:f}=a.value,{length:x}=f,L=f[x-1];if(L===void 0)return-1;const E=u.$route.matched;if(E.length===0)return-1;const C=E.findIndex(z.bind(null,L));if(C>-1)return C;const O=V(f[x-2]);return x>1&&V(L)===O&&E[E.length-1].path!==O?E.findIndex(z.bind(null,f[x-2])):C}),r=c(()=>b.value===!0&&p.value>-1&&$e(u.$route.params,a.value.params)),k=c(()=>r.value===!0&&p.value===u.$route.matched.length-1&&Re(u.$route.params,a.value.params)),h=c(()=>b.value===!0?k.value===!0?` ${t.exactActiveClass} ${t.activeClass}`:t.exact===!0?"":r.value===!0?` ${t.activeClass}`:"":"");function d(f){return t.disable===!0||f.metaKey||f.altKey||f.ctrlKey||f.shiftKey||f.__qNavigate!==!0&&f.defaultPrevented===!0||f.button!==void 0&&f.button!==0||t.target==="_blank"?!1:(G(f),u.$router[t.replace===!0?"replace":"push"](t.to).catch(x=>x))}return{hasRouterLink:b,hasHrefLink:s,hasLink:$,linkTag:v,linkRoute:a,linkIsActive:r,linkIsExactActive:k,linkClass:h,linkProps:y,navigateToRouterLink:d}}const H="0 0 24 24",U=e=>e,A=e=>`ionicons ${e}`,ae={"mdi-":e=>`mdi ${e}`,"icon-":U,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":A,"ion-ios":A,"ion-logo":A,"iconfont ":U,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},re={o_:"-outlined",r_:"-round",s_:"-sharp"},le={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},_e=new RegExp("^("+Object.keys(ae).join("|")+")"),Be=new RegExp("^("+Object.keys(re).join("|")+")"),W=new RegExp("^("+Object.keys(le).join("|")+")"),Se=/^[Mm]\s?[-+]?\.?\d/,Ce=/^img:/,Pe=/^svguse:/,Te=/^ion-/,je=/^(fa-(solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var D=ne({name:"QIcon",props:{...ee,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:n}){const{proxy:{$q:t}}=I(),u=te(e),i=c(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),s=c(()=>{let o,a=e.name;if(a==="none"||!a)return{none:!0};if(t.iconMapFn!==null){const v=t.iconMapFn(a);if(v!==void 0)if(v.icon!==void 0){if(a=v.icon,a==="none"||!a)return{none:!0}}else return{cls:v.cls,content:v.content!==void 0?v.content:" "}}if(Se.test(a)===!0){const[v,y=H]=a.split("|");return{svg:!0,viewBox:y,nodes:v.split("&&").map(p=>{const[r,k,h]=p.split("@@");return m("path",{style:k,d:r,transform:h})})}}if(Ce.test(a)===!0)return{img:!0,src:a.substring(4)};if(Pe.test(a)===!0){const[v,y=H]=a.split("|");return{svguse:!0,src:v.substring(7),viewBox:y}}let b=" ";const $=a.match(_e);if($!==null)o=ae[$[1]](a);else if(je.test(a)===!0)o=a;else if(Te.test(a)===!0)o=`ionicons ion-${t.platform.is.ios===!0?"ios":"md"}${a.substring(3)}`;else if(W.test(a)===!0){o="notranslate material-symbols";const v=a.match(W);v!==null&&(a=a.substring(6),o+=le[v[1]]),b=a}else{o="notranslate material-icons";const v=a.match(Be);v!==null&&(a=a.substring(2),o+=re[v[1]]),b=a}return{cls:o,content:b}});return()=>{const o={class:i.value,style:u.value,"aria-hidden":"true",role:"presentation"};return s.value.none===!0?m(e.tag,o,pe(n.default)):s.value.img===!0?m("span",o,j(n.default,[m("img",{src:s.value.src})])):s.value.svg===!0?m("span",o,j(n.default,[m("svg",{viewBox:s.value.viewBox||"0 0 24 24"},s.value.nodes)])):s.value.svguse===!0?m("span",o,j(n.default,[m("svg",{viewBox:s.value.viewBox},[m("use",{"xlink:href":s.value.src})])])):(s.value.cls!==void 0&&(o.class+=" "+s.value.cls),m(e.tag,o,j(n.default,[s.value.content])))}}});function Oe(e,n=250){let t=!1,u;return function(){return t===!1&&(t=!0,setTimeout(()=>{t=!1},n),u=e.apply(this,arguments)),u}}function X(e,n,t,u){t.modifiers.stop===!0&&Z(e);const i=t.modifiers.color;let s=t.modifiers.center;s=s===!0||u===!0;const o=document.createElement("span"),a=document.createElement("span"),b=ve(e),{left:$,top:v,width:y,height:p}=n.getBoundingClientRect(),r=Math.sqrt(y*y+p*p),k=r/2,h=`${(y-r)/2}px`,d=s?h:`${b.left-$-k}px`,f=`${(p-r)/2}px`,x=s?f:`${b.top-v-k}px`;a.className="q-ripple__inner",xe(a,{height:`${r}px`,width:`${r}px`,transform:`translate3d(${d},${x},0) scale3d(.2,.2,1)`,opacity:0}),o.className=`q-ripple${i?" text-"+i:""}`,o.setAttribute("dir","ltr"),o.appendChild(a),n.appendChild(o);const L=()=>{o.remove(),clearTimeout(E)};t.abort.push(L);let E=setTimeout(()=>{a.classList.add("q-ripple__inner--enter"),a.style.transform=`translate3d(${h},${f},0) scale3d(1,1,1)`,a.style.opacity=.2,E=setTimeout(()=>{a.classList.remove("q-ripple__inner--enter"),a.classList.add("q-ripple__inner--leave"),a.style.opacity=0,E=setTimeout(()=>{o.remove(),t.abort.splice(t.abort.indexOf(L),1)},275)},250)},50)}function J(e,{modifiers:n,value:t,arg:u}){const i=Object.assign({},e.cfg.ripple,n,t);e.modifiers={early:i.early===!0,stop:i.stop===!0,center:i.center===!0,color:i.color||u,keyCodes:[].concat(i.keyCodes||13)}}var Me=ke({name:"ripple",beforeMount(e,n){const t=n.instance.$.appContext.config.globalProperties.$q.config||{};if(t.ripple===!1)return;const u={cfg:t,enabled:n.value!==!1,modifiers:{},abort:[],start(i){u.enabled===!0&&i.qSkipRipple!==!0&&i.type===(u.modifiers.early===!0?"pointerdown":"click")&&X(i,e,u,i.qKeyEvent===!0)},keystart:Oe(i=>{u.enabled===!0&&i.qSkipRipple!==!0&&K(i,u.modifiers.keyCodes)===!0&&i.type===`key${u.modifiers.early===!0?"down":"up"}`&&X(i,e,u,!0)},300)};J(u,n),e.__qripple=u,de(u,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,n){if(n.oldValue!==n.value){const t=e.__qripple;t!==void 0&&(t.enabled=n.value!==!1,t.enabled===!0&&Object(n.value)===n.value&&J(t,n))}},beforeUnmount(e){const n=e.__qripple;n!==void 0&&(n.abort.forEach(t=>{t()}),fe(n,"main"),delete e._qripple)}});const ue={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},Ae=Object.keys(ue),Ke={align:{type:String,validator:e=>Ae.includes(e)}};function Ie(e){return c(()=>{const n=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${ue[n]}`})}const Y={none:0,xs:4,sm:8,md:16,lg:24,xl:32},Ne={xs:8,sm:10,md:14,lg:20,xl:24},Qe=["button","submit","reset"],Ve=/[^\s]\/[^\s]/,ze={...ee,...Le,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,round:Boolean,square:Boolean,outline:Boolean,flat:Boolean,unelevated:Boolean,rounded:Boolean,push:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...Ke.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function Fe(e){const n=te(e,Ne),t=Ie(e),{hasRouterLink:u,hasLink:i,linkTag:s,linkProps:o,navigateToRouterLink:a}=we("button"),b=c(()=>{const d=e.fab===!1&&e.fabMini===!1?n.value:{};return e.padding!==void 0?Object.assign({},d,{padding:e.padding.split(/\s+/).map(f=>f in Y?Y[f]+"px":f).join(" "),minWidth:"0",minHeight:"0"}):d}),$=c(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),v=c(()=>e.disable!==!0&&e.loading!==!0),y=c(()=>v.value===!0?e.tabindex||0:-1),p=c(()=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":"standard"),r=c(()=>{const d={tabindex:y.value};return i.value===!0?Object.assign(d,o.value):Qe.includes(e.type)===!0&&(d.type=e.type),s.value==="a"?(e.disable===!0?d["aria-disabled"]="true":d.href===void 0&&(d.role="button"),u.value!==!0&&Ve.test(e.type)===!0&&(d.type=e.type)):e.disable===!0&&(d.disabled="",d["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(d,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),d}),k=c(()=>{let d;e.color!==void 0?e.flat===!0||e.outline===!0?d=`text-${e.textColor||e.color}`:d=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(d=`text-${e.textColor}`);const f=e.round===!0?"round":`rectangle${$.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${p.value} q-btn--${f}`+(d!==void 0?" "+d:"")+(v.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),h=c(()=>t.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:k,style:b,innerClasses:h,attributes:r,hasRouterLink:u,hasLink:i,linkTag:s,navigateToRouterLink:a,isActionable:v}}const{passiveCapture:q}=he;let _=null,B=null,S=null;var Je=ne({name:"QBtn",props:{...ze,percentage:Number,darkPercentage:Boolean},emits:["click","keydown","touchstart","mousedown","keyup"],setup(e,{slots:n,emit:t}){const{proxy:u}=I(),{classes:i,style:s,innerClasses:o,attributes:a,hasRouterLink:b,hasLink:$,linkTag:v,navigateToRouterLink:y,isActionable:p}=Fe(e),r=Q(null),k=Q(null);let h=null,d,f;const x=c(()=>e.label!==void 0&&e.label!==null&&e.label!==""),L=c(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:$.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),E=c(()=>({center:e.round})),C=c(()=>{const l=Math.max(0,Math.min(100,e.percentage));return l>0?{transition:"transform 0.6s",transform:`translateX(${l-100}%)`}:{}}),O=c(()=>e.loading===!0?{onMousedown:T,onTouchstartPassive:T,onClick:T,onKeydown:T,onKeyup:T}:p.value===!0?{onClick:N,onKeydown:oe,onMousedown:ce,onTouchstart:se}:{onClick:w}),ie=c(()=>({ref:r,class:"q-btn q-btn-item non-selectable no-outline "+i.value,style:s.value,...a.value,...O.value}));function N(l){if(r.value!==null){if(l!==void 0){if(l.defaultPrevented===!0)return;const g=document.activeElement;if(e.type==="submit"&&g!==document.body&&r.value.contains(g)===!1&&g.contains(r.value)===!1){r.value.focus();const M=()=>{document.removeEventListener("keydown",w,!0),document.removeEventListener("keyup",M,q),r.value!==null&&r.value.removeEventListener("blur",M,q)};document.addEventListener("keydown",w,!0),document.addEventListener("keyup",M,q),r.value.addEventListener("blur",M,q)}}if(b.value===!0){const g=()=>{l.__qNavigate=!0,y(l)};t("click",l,g),l.defaultPrevented!==!0&&g()}else t("click",l)}}function oe(l){r.value!==null&&(t("keydown",l),K(l,[13,32])===!0&&B!==r.value&&(B!==null&&P(),l.defaultPrevented!==!0&&(r.value.focus(),B=r.value,r.value.classList.add("q-btn--active"),document.addEventListener("keyup",R,!0),r.value.addEventListener("blur",R,q)),w(l)))}function se(l){r.value!==null&&(t("touchstart",l),l.defaultPrevented!==!0&&(_!==r.value&&(_!==null&&P(),_=r.value,h=l.target,h.addEventListener("touchcancel",R,q),h.addEventListener("touchend",R,q)),d=!0,clearTimeout(f),f=setTimeout(()=>{d=!1},200)))}function ce(l){r.value!==null&&(l.qSkipRipple=d===!0,t("mousedown",l),l.defaultPrevented!==!0&&S!==r.value&&(S!==null&&P(),S=r.value,r.value.classList.add("q-btn--active"),document.addEventListener("mouseup",R,q)))}function R(l){if(r.value!==null&&!(l!==void 0&&l.type==="blur"&&document.activeElement===r.value)){if(l!==void 0&&l.type==="keyup"){if(B===r.value&&K(l,[13,32])===!0){const g=new MouseEvent("click",l);g.qKeyEvent=!0,l.defaultPrevented===!0&&G(g),l.cancelBubble===!0&&Z(g),r.value.dispatchEvent(g),w(l),l.qKeyEvent=!0}t("keyup",l)}P()}}function P(l){const g=k.value;l!==!0&&(_===r.value||S===r.value)&&g!==null&&g!==document.activeElement&&(g.setAttribute("tabindex",-1),g.focus()),_===r.value&&(h!==null&&(h.removeEventListener("touchcancel",R,q),h.removeEventListener("touchend",R,q)),_=h=null),S===r.value&&(document.removeEventListener("mouseup",R,q),S=null),B===r.value&&(document.removeEventListener("keyup",R,!0),r.value!==null&&r.value.removeEventListener("blur",R,q),B=null),r.value!==null&&r.value.classList.remove("q-btn--active")}function T(l){w(l),l.qSkipRipple=!0}return ge(()=>{P(!0)}),Object.assign(u,{click:N}),()=>{let l=[];e.icon!==void 0&&l.push(m(D,{name:e.icon,left:e.stack===!1&&x.value===!0,role:"img","aria-hidden":"true"})),x.value===!0&&l.push(m("span",{class:"block"},[e.label])),l=j(n.default,l),e.iconRight!==void 0&&e.round===!1&&l.push(m(D,{name:e.iconRight,right:e.stack===!1&&x.value===!0,role:"img","aria-hidden":"true"}));const g=[m("span",{class:"q-focus-helper",ref:k})];return e.loading===!0&&e.percentage!==void 0&&g.push(m("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[m("span",{class:"q-btn__progress-indicator fit block",style:C.value})])),g.push(m("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+o.value},l)),e.loading!==null&&g.push(m(me,{name:"q-transition--fade"},()=>e.loading===!0?[m("span",{key:"loading",class:"absolute-full flex flex-center"},n.loading!==void 0?n.loading():[m(ye)])]:null)),be(m(v.value,ie.value,g),[[Me,L.value,void 0,E.value]])}}});export{D as Q,Me as R,we as a,ze as b,Je as c,Xe as g,Le as u,qe as v};