import{openBlock as e,createBlock as l,createVNode as t,computed as n,createCommentVNode as o,renderSlot as s,ref as a,onMounted as u,watchEffect as i,Fragment as c,renderList as r,toDisplayString as d,resolveDynamicComponent as v,resolveComponent as p,Teleport as g,withCtx as f,createTextVNode as b,createApp as y,h as k}from"vue";var m={props:{value:Boolean,disabled:{type:Boolean,default:!1}},setup:(e,l)=>({toggle:()=>{l.emit("update:value",!e.value)}})};const C=t("span",null,null,-1);m.render=function(t,n,o,s,a,u){return e(),l("button",{class:["gulu-switch",{"gulu-checked":o.value}],onClick:n[1]||(n[1]=(...e)=>s.toggle(...e)),disabled:o.disabled},[C],10,["disabled"])},m.__file="src/lib/Switch.vue";var B={props:{theme:{type:String,default:"button"},size:{type:String,default:"normal"},level:{type:String,default:"normal"},disabled:{type:Boolean,default:!1},radius:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},setup(e){const{theme:l,size:t,level:o}=e;return{classes:n((()=>({[`gulu-theme-${l}`]:l,[`gulu-size-${t}`]:t,[`gulu-level-${o}`]:o})))}}};const h={key:0,class:"gulu-loadingIndicator"};B.render=function(t,n,a,u,i,c){return e(),l("button",{class:["gulu-button",u.classes],disabled:a.disabled,radius:a.radius},[a.loading?(e(),l("span",h)):o("v-if",!0),s(t.$slots,"default")],10,["disabled","radius"])},B.__file="src/lib/Button.vue";const _={render:function(t,n){return e(),l("div",null,[s(t.$slots,"default")])},__file:"src/lib/Tab.vue"};var w={props:{selected:{type:String}},setup(e,l){const t=a(null),o=a(null),s=a(null);u((()=>{i((()=>{const{width:e}=t.value.getBoundingClientRect();o.value.style.width=e+"px";const{left:l}=s.value.getBoundingClientRect(),{left:n}=t.value.getBoundingClientRect(),a=n-l;o.value.style.left=a+"px"}))}));const c=l.slots.default();console.log(c),console.log(c[0].type===_),c.forEach((e=>{if(e.type!==_)throw new Error("Tabs子标签必须是Tab")}));const r=c.map((e=>e.props.title));return{current:n((()=>c.find((l=>l.props.title===e.selected)))),defaults:c,titles:r,select:e=>{l.emit("update:selected",e)},selectedItem:t,indicator:o,container:s}}};const O={class:"gulu-tabs"},S={class:"gulu-tabs-nav",ref:"container"},$={class:"gulu-tabs-nav-indicator",ref:"indicator"},T={class:"gulu-tabs-content"};w.render=function(n,o,s,a,u,i){return e(),l("div",O,[t("div",S,[(e(!0),l(c,null,r(a.titles,((t,n)=>(e(),l("div",{class:["gulu-tabs-nav-item",{selected:t==s.selected}],ref:e=>{t==s.selected&&(a.selectedItem=e)},onClick:e=>a.select(t),key:n},d(t),11,["onClick"])))),128)),t("div",$,null,512)],512),t("div",T,[(e(),l(v(a.current),{key:a.current.props.title}))])])},w.__file="src/lib/Tabs.vue";var x={props:{title:{type:String,default:"提示"},visible:{type:Boolean,default:!1},closeOnClickOverlay:{type:Boolean,default:!0},ok:{type:Function},cancel:{type:Function}},components:{Button:B},setup(e,l){const t=()=>{l.emit("update:visible",!1)};return{close:t,onClickOverlay:()=>{e.closeOnClickOverlay&&t()},ok:()=>{var l;0!=(null==(l=e.ok)?void 0:l.call(e))&&t()},cancel:()=>{var l;null==(l=e.cancel)||l.call(e),t()}}}};const z={class:"gulu-dialog-wrapper"},E={class:"gulu-dialog"},I=b("OK"),R=b("Cancel");x.render=function(n,a,u,i,c,r){const d=p("Button");return u.visible?(e(),l(g,{key:0,to:"body"},[t("div",{class:"gulu-dialog-overlay",onClick:a[1]||(a[1]=(...e)=>i.onClickOverlay(...e))}),t("div",z,[t("div",E,[t("header",null,[s(n.$slots,"title"),t("span",{class:"gulu-dialog-close",onClick:a[2]||(a[2]=(...e)=>i.close(...e))})]),t("main",null,[s(n.$slots,"content")]),t("footer",null,[t(d,{onClick:i.ok},{default:f((()=>[I])),_:1},8,["onClick"]),t(d,{onClick:i.cancel},{default:f((()=>[R])),_:1},8,["onClick"])])])])])):o("v-if",!0)},x.__file="src/lib/Dialog.vue";const D=e=>{const{title:l,content:t,ok:n,cancel:o}=e,s=document.createElement("div");document.body.appendChild(s);const a=y({render:()=>k(x,{visible:!0,"onUpdate:visible":e=>{!1===e&&(a.unmount(s),s.remove())},ok:n,cancel:o},{title:l,content:t})});a.mount(s)};export{B as Button,x as Dialog,m as Switch,_ as Tab,w as Tabs,D as openDialog};