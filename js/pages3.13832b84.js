"use strict";(self["webpackChunkvue_ui_teplate_gallery"]=self["webpackChunkvue_ui_teplate_gallery"]||[]).push([[9068,8654,8345,9946,1908,2919,4745,2076,462],{30972:function(t,e,a){a.d(e,{CN:function(){return i},T4:function(){return s},p6:function(){return l}});var n=a(88980);function i(t){return String(t).replace(/(\d{3})(\d{3})(\d{4})/,"+1($1)$2-$3")}function s(t,e){return(0,n.uf)(t,{type:"currency",precision:e||0,currency:"USD"})}function l(t){return(0,n.p6)(new Date(t),"MM/dd/yyyy")}},2671:function(t,e,a){a.r(e),a.d(e,{default:function(){return w}});var n=a(49256),i=a(64701),s=a(47919),l=a(10437),o=a(30972),d=a(81507),u=a(49358);const c={class:"activity"},r={class:"name"},v={key:0};var m=(0,n.aZ)({__name:"card-activities",props:{isLoading:{type:Boolean,default:!0},showBy:{type:Boolean,default:!1},items:{default:void 0}},setup(t){const e=t,a=[{text:"View details"},{text:"Delete"}];return(t,m)=>((0,n.wg)(),(0,n.iD)("div",{id:"activities-list",class:(0,i.C_)({load:e.items})},[(0,n.Wm)((0,s.SU)(d.ZP),{visible:e.isLoading,"show-pane":!1,width:"auto",container:"#activities-list",position:{of:"#activities-list"}},null,8,["visible"]),e.items?((0,n.wg)(),(0,n.j4)((0,s.SU)(l._p),{key:0,class:"activities-list",items:e.items,"scrolling-enabled":!1},{item:(0,n.w5)((({data:t})=>[(0,n._)("div",null,[(0,n._)("div",c,[(0,n._)("div",r,(0,i.zw)(t.name),1),(0,n._)("div",{class:(0,i.C_)(["date",{by:e.showBy}])},[(0,n._)("span",null,(0,i.zw)((0,s.SU)(o.p6)(new Date(t.date))),1),e.showBy?((0,n.wg)(),(0,n.iD)("span",v,"by")):(0,n.kq)("",!0),(0,n._)("span",null,(0,i.zw)(t.manager),1)],2),(0,n.Wm)(u["default"],{class:"overflow-menu",items:a})])])])),_:1},8,["items"])):(0,n.kq)("",!0)],2))}}),p=a(97179);const f=(0,p.Z)(m,[["__scopeId","data-v-1d020838"]]);var w=f},49358:function(t,e,a){a.r(e),a.d(e,{default:function(){return d}});var n=a(49256),i=a(47919),s=a(63261),l=(0,n.aZ)({__name:"card-menu",props:{items:{},visible:{type:Boolean,default:!0}},setup(t){const e=t;return(t,a)=>((0,n.wg)(),(0,n.j4)((0,i.SU)(s.ZP),{items:e.items,visible:e.visible,icon:"overflow","show-arrow-icon":!1,"styling-mode":"text","drop-down-options":{width:"auto"}},null,8,["items","visible"]))}});const o=l;var d=o},4256:function(t,e,a){a.r(e),a.d(e,{default:function(){return Z}});a(44936);var n=a(49256),i=a(47919),s=a(64701),l=a(44896),o=a(47250),d=a(37252),u=a(9533),c=a(16568),r=a(67699),v=a(1122),m=a(30972),p=a(81507),f=a(49261);const w={class:"messages",id:"card-messages"},g={class:"input-content"},_={class:"messages-content"},y={class:"message-list"},S={class:"message-container"},U={class:"message dx-card"},W={class:"message-title"},h={class:"subject"},b={class:"message-text"};var k=(0,n.aZ)({__name:"card-messages",props:{isLoading:{type:Boolean,default:!0},user:{default:""},messages:{default:()=>[]}},setup(t){const e=t,a=(0,i.iH)(e.messages),k=(0,i.iH)(""),x=(0,i.iH)("");function D(t){return t.split(" ").map((t=>t[0])).join("")}function Z(t){return t.text.replace("{username}",t.manager!==a.value[0].manager?a.value[0].manager:a.value[1].manager)}function H(t){if(!t.validationGroup.validate().isValid)return;const n={subject:x.value,text:k.value,manager:e.user,date:new Date};a.value.push(n),t.validationGroup.reset()}return(0,n.YP)((()=>e.messages),(t=>{a.value=t})),(t,I)=>((0,n.wg)(),(0,n.j4)((0,i.SU)(r.G),null,{default:(0,n.w5)((()=>[(0,n._)("div",w,[(0,n.Wm)((0,i.SU)(p.ZP),{visible:e.isLoading,"show-pane":!1,width:"auto",container:"#card-messages",position:{of:"#card-messages"}},null,8,["visible"]),e.messages.length?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[(0,n._)("div",g,[(0,n.Wm)((0,i.SU)(o.ki),{label:"Subject","styling-mode":"filled",value:x.value,"value-change-event":"keyup",onValueChanged:I[0]||(I[0]=t=>x.value=t.value)},{default:(0,n.w5)((()=>[(0,n.Wm)((0,i.SU)(v.ZP),null,{default:(0,n.w5)((()=>[(0,n.Wm)((0,i.SU)(v.VD))])),_:1})])),_:1},8,["value"]),(0,n.Wm)((0,i.SU)(l.w),{label:"Message","styling-mode":"filled",value:k.value,height:150,"value-change-event":"keyup",onValueChanged:I[1]||(I[1]=t=>k.value=t.value)},{default:(0,n.w5)((()=>[(0,n.Wm)((0,i.SU)(v.ZP),null,{default:(0,n.w5)((()=>[(0,n.Wm)((0,i.SU)(v.VD))])),_:1})])),_:1},8,["value"]),(0,n.Wm)((0,i.SU)(u.sc),null,{default:(0,n.w5)((()=>[(0,n.Wm)((0,i.SU)(u.wy),{location:"before"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,i.SU)(c.c),{class:"file-uploader","label-text":"","select-button-text":"Attach file"})])),_:1}),(0,n.Wm)((0,i.SU)(u.wy),{widget:"dxButton",location:"after",options:{text:"Send",stylingMode:"contained",type:"default",onClick:H}},null,8,["options"])])),_:1})]),(0,n._)("div",_,[(0,n._)("div",y,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.value,(t=>((0,n.wg)(),(0,n.iD)("div",S,[(0,n.Wm)(f["default"],{"data-letters":D(t.manager)},null,8,["data-letters"]),(0,n._)("div",U,[(0,n._)("div",W,[(0,n._)("div",null,[(0,n._)("div",h,(0,s.zw)(t.subject),1),(0,n._)("div",null,(0,s.zw)((0,i.SU)(m.p6)(new Date(t.date)))+" - "+(0,s.zw)(t.manager),1)]),(0,n.Wm)((0,i.SU)(d.J),{icon:"overflow","styling-mode":"text"})]),(0,n._)("div",b,(0,s.zw)(Z(t)),1)])])))),256))])])],64)):(0,n.kq)("",!0)])])),_:1}))}}),x=a(97179);const D=(0,x.Z)(k,[["__scopeId","data-v-60c4980f"]]);var Z=D},81383:function(t,e,a){a.r(e),a.d(e,{default:function(){return k}});a(44936);var n=a(49256),i=a(47919),s=a(64701),l=a(44896),o=a(37252),d=a(9533),u=a(67699),c=a(1122),r=a(69067),v=a(30972),m=a(23954),p=a(81507);const f={id:"card-notes"},w={class:"input-content"},g={class:"messages-content"},_={class:"message-list"},y={class:"note dx-card"},S={class:"note-title"},U={class:"note-text"};var W=(0,n.aZ)({__name:"card-notes",props:{user:{default:""},contactId:{default:null},items:{default:void 0}},setup(t){const e=t,a=(0,i.iH)(!0),W=(0,i.iH)(e.items),h=(0,i.iH)("");function b(t){if(!t.validationGroup.validate().isValid)return;const a={manager:e.user,date:new Date,text:h.value};W.value.push(a),t.validationGroup.reset()}async function k(){null!=e.contactId&&(a.value=!0,W.value=await(0,m.$f)(e.contactId),a.value=!1)}return(0,n.YP)((()=>e.items),(t=>{t&&t.length>0&&(W.value=t,a.value=!1)})),(0,n.bv)((()=>{e.contactId&&k()})),(t,e)=>((0,n.wg)(),(0,n.j4)((0,i.SU)(u.G),null,{default:(0,n.w5)((()=>[(0,n._)("div",f,[(0,n.Wm)((0,i.SU)(p.ZP),{visible:a.value,"show-pane":!1,width:"auto",container:"#card-notes",position:{of:"#card-notes"}},null,8,["visible"]),a.value?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[(0,n._)("div",w,[(0,n.Wm)((0,i.SU)(l.w),{label:"New Note","styling-mode":"filled",value:h.value,"value-change-event":"keyup",onValueChanged:e[0]||(e[0]=t=>h.value=t.value)},{default:(0,n.w5)((()=>[(0,n.Wm)((0,i.SU)(c.ZP),null,{default:(0,n.w5)((()=>[(0,n.Wm)((0,i.SU)(c.VD))])),_:1})])),_:1},8,["value"]),(0,n.Wm)((0,i.SU)(d.sc),null,{default:(0,n.w5)((()=>[(0,n.Wm)((0,i.SU)(d.wy),{widget:"dxButton",location:"after",options:{text:"Add",stylingMode:"contained",type:"default",onClick:b}},null,8,["options"])])),_:1})]),(0,n._)("div",g,[(0,n.Wm)((0,i.SU)(r.Z),null,{default:(0,n.w5)((()=>[(0,n._)("div",_,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(W.value,(t=>((0,n.wg)(),(0,n.iD)("div",y,[(0,n._)("div",S,[(0,n._)("div",null,(0,s.zw)((0,i.SU)(v.p6)(new Date(t.date)))+" - "+(0,s.zw)(t.manager),1),(0,n.Wm)((0,i.SU)(o.J),{icon:"overflow","styling-mode":"text"})]),(0,n._)("div",U,(0,s.zw)(t.text),1)])))),256))])])),_:1})])],64))])])),_:1}))}}),h=a(97179);const b=(0,h.Z)(W,[["__scopeId","data-v-154e4ccb"]]);var k=b},60018:function(t,e,a){a.r(e),a.d(e,{default:function(){return P}});var n=a(49256),i=a(47919),s=a(37252),l=a(81507),o=a(23954),d=a(64701),u=a(30972),c=a(86187);const r={class:"name"},v={class:"product-info"},m={class:"total"},p={class:"owner"},f={class:"owner-name"};var w=(0,n.aZ)({__name:"opportunity-tile",props:{data:{}},setup(t){const e=t,a=()=>{(0,c.Z)("Click opportunity event")};return(t,s)=>((0,n.wg)(),(0,n.iD)("div",{class:"opportunity",onClick:s[0]||(s[0]=t=>a())},[(0,n._)("div",r,(0,d.zw)(e.data.name),1),(0,n._)("div",v,[(0,n.Uk)(" Products: "+(0,d.zw)(e.data.products)+", total: ",1),(0,n._)("span",m,(0,d.zw)((0,i.SU)(u.T4)(e.data.total,2)),1)]),(0,n._)("div",p,[(0,n.Uk)(" Owner: "),(0,n._)("span",f,(0,d.zw)(e.data.manager),1)])]))}}),g=a(97179);const _=(0,g.Z)(w,[["__scopeId","data-v-272325a1"]]);var y=_;const S=t=>((0,n.dD)("data-v-641862ee"),t=t(),(0,n.Cn)(),t),U={id:"card-opportunities"},W={class:"opportunities-block"},h=S((()=>(0,n._)("div",{class:"dx-form-group-caption"}," Active ",-1))),b={class:"opportunities-container"},k={class:"opportunities"},x={class:"opportunities-block"},D=S((()=>(0,n._)("div",{class:"dx-form-group-caption"}," Closed ",-1))),Z={class:"opportunities-container"},H={class:"opportunities"};var I=(0,n.aZ)({__name:"card-opportunities",props:{contactId:{default:void 0}},setup(t){const e=t,a=(0,i.iH)([]),d=(0,i.iH)([]),u=(0,i.iH)(!1);async function c(){if(!e.contactId)return;u.value=!0;const t=(0,o.mj)(e.contactId),n=(0,o.dY)(e.contactId);[a.value,d.value]=await Promise.all([t,n]),u.value=!1}return(0,n.bv)((()=>{c()})),(t,e)=>((0,n.wg)(),(0,n.iD)("div",U,[(0,n.Wm)((0,i.SU)(l.ZP),{visible:u.value,"show-pane":!1,width:"auto",container:"#card-opportunities",position:{of:"#card-opportunities"}},null,8,["visible"]),u.value?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[(0,n.Wm)((0,i.SU)(s.J),{text:"Add Opportunity",icon:"add",width:"300",height:"115","styling-mode":"outlined",type:"default",class:"add-tile"}),(0,n._)("div",null,[(0,n._)("div",W,[h,(0,n._)("div",b,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.value,(t=>((0,n.wg)(),(0,n.iD)("div",k,[(0,n.Wm)(y,{data:t},null,8,["data"])])))),256))])]),(0,n._)("div",x,[D,(0,n._)("div",Z,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(d.value,(t=>((0,n.wg)(),(0,n.iD)("div",H,[(0,n.Wm)(y,{data:t},null,8,["data"])])))),256))])])])],64))]))}});const C=(0,g.Z)(I,[["__scopeId","data-v-641862ee"]]);var P=C},98921:function(t,e,a){a.r(e),a.d(e,{default:function(){return r}});var n=a(49256),i=a(47919),s=a(31203),l=a(81507);const o={id:"card-tasks"};var d=(0,n.aZ)({__name:"card-tasks",props:{isLoading:{type:Boolean,default:!0},manager:{default:""},tasks:{default:()=>[]}},setup(t){const e=t,a=(0,i.iH)([]);(0,n.YP)((()=>e.tasks),(t=>{a.value=t}));const d=(0,n.Fl)((()=>a.value.filter((t=>!!t.status&&!!t.priority)))),u=t=>{const e=t.component.getVisibleRows(),n=a.value.indexOf(e[t.toIndex].data),i=a.value.indexOf(t.itemData);a.value.splice(i,1),a.value.splice(n,0,t.itemData)};return(t,a)=>((0,n.wg)(),(0,n.iD)("div",o,[(0,n.Wm)((0,i.SU)(l.ZP),{visible:e.isLoading,"show-pane":!1,width:"auto",container:"#card-tasks",position:{of:"#card-tasks"}},null,8,["visible"]),e.isLoading?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)((0,i.SU)(s.v4),{key:0,class:"grid-tasks","data-source":d.value,"column-auto-width":!0},{default:(0,n.w5)((()=>[(0,n.Wm)((0,i.SU)(s.DT),{"show-check-boxes-mode":"always",mode:"multiple"}),(0,n.Wm)((0,i.SU)(s.S1),{"allow-reordering":!0,"on-reorder":u,"show-drag-icons":!0}),(0,n.Wm)((0,i.SU)(s.yP),{"data-field":"text",caption:"Subject","hiding-priority":3}),(0,n.Wm)((0,i.SU)(s.yP),{"data-field":"date","data-type":"date",caption:"Due Date","hiding-priority":1}),(0,n.Wm)((0,i.SU)(s.yP),{caption:"Assigned To","data-field":"manager","hiding-priority":0})])),_:1},8,["data-source"]))]))}}),u=a(97179);const c=(0,u.Z)(d,[["__scopeId","data-v-ce99d0a0"]]);var r=c},49261:function(t,e,a){a.r(e),a.d(e,{default:function(){return d}});var n=a(49256);const i=["data-letters"];var s=(0,n.aZ)({__name:"user-avatar",props:{dataLetters:{default:()=>""}},setup(t){const e=t;return(t,a)=>((0,n.wg)(),(0,n.iD)("div",{class:"circle","data-letters":e.dataLetters},null,8,i))}}),l=a(97179);const o=(0,l.Z)(s,[["__scopeId","data-v-8b56f8ac"]]);var d=o},52170:function(t,e,a){a.r(e),a.d(e,{default:function(){return P}});var n=a(49256),i=a(47919),s=a(69067),l=a(37252),o=a(63261),d=a(9533),u=a(23954),c=a(56101),r=a(6881),v=a(95683),m=a(2671),p=a(81383),f=a(4256),w=a(98921),g=a(60018);const _={class:"dx-card details-card"};var y=(0,n.aZ)({__name:"contact-cards",props:{contactId:{default:null},isLoading:{type:Boolean,default:!0},contactName:{default:""},tasks:{default:()=>[]},activities:{default:()=>[]}},setup(t){const e=t,a=(0,i.iH)(!0),s=(0,i.iH)([]);async function l(){e.contactId&&(a.value=!0,s.value=await(0,u.vz)(e.contactId),a.value=!1)}return(0,n.bv)((()=>{l()})),(t,l)=>((0,n.wg)(),(0,n.iD)("div",_,[(0,n.Wm)((0,i.SU)(r.ms),{"focus-state-enabled":!1,"show-nav-buttons":!0},{default:(0,n.w5)((()=>[(0,n.Wm)((0,i.SU)(v.wy),{title:"Tasks"},{default:(0,n.w5)((()=>[(0,n.Wm)(w["default"],{tasks:e.tasks,"is-loading":e.isLoading,manager:e.contactName},null,8,["tasks","is-loading","manager"])])),_:1}),(0,n.Wm)((0,i.SU)(v.wy),{title:"Activities"},{default:(0,n.w5)((()=>[(0,n.Wm)(m["default"],{"is-loading":e.isLoading,items:e.activities,"show-by":!0},null,8,["is-loading","items"])])),_:1}),(0,n.Wm)((0,i.SU)(v.wy),{title:"Opportunities"},{default:(0,n.w5)((()=>[(0,n.Wm)(g["default"],{"contact-id":e.contactId},null,8,["contact-id"])])),_:1}),(0,n.Wm)((0,i.SU)(v.wy),{title:"Notes"},{default:(0,n.w5)((()=>[(0,n.Wm)(p["default"],{user:e.contactName,"contact-id":e.contactId},null,8,["user","contact-id"])])),_:1}),(0,n.Wm)((0,i.SU)(v.wy),{title:"Messages"},{default:(0,n.w5)((()=>[(0,n.Wm)(f["default"],{user:e.contactName,messages:s.value,"is-loading":a.value},null,8,["user","messages","is-loading"])])),_:1})])),_:1})]))}});const S=y;var U=S;const W=t=>((0,n.dD)("data-v-c899d140"),t=t(),(0,n.Cn)(),t),h={class:"view-wrapper"},b=W((()=>(0,n._)("div",null,[(0,n._)("div",{class:"separator"})],-1))),k={class:"panels"},x={class:"left"},D={class:"right"},Z=12;var H=(0,n.aZ)({__name:"crm-contact-details",setup(t){const e=(0,i.iH)(""),a=(0,i.iH)(),r=(0,i.iH)(!1);async function v(){r.value=!0;const t=await(0,u.vS)(Z);a.value=t,e.value=t.name,r.value=!1}const m=()=>{v()};(0,n.bv)((()=>{v()}));const p={text:"Copy",icon:"copy",stylingMode:"text"},f={text:"Refresh",icon:"refresh",onClick:m,stylingMode:"text"};return(t,u)=>((0,n.wg)(),(0,n.j4)((0,i.SU)(s.Z),{class:"view-wrapper-scroll"},{default:(0,n.w5)((()=>[(0,n._)("div",h,[(0,n.Wm)((0,i.SU)(d.sc),{class:"toolbar-details theme-dependent"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,i.SU)(d.wy),{location:"before"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,i.SU)(l.J),{icon:"arrowleft","styling-mode":"text"})])),_:1}),(0,n.Wm)((0,i.SU)(d.wy),{location:"before",text:e.value,class:"contact-name-toolbar-item"},null,8,["text"]),(0,n.Wm)((0,i.SU)(d.wy),{location:"after","locate-in-menu":"auto"},{default:(0,n.w5)((()=>[(0,n._)("div",null,[(0,n.Wm)((0,i.SU)(l.J),{text:"Terminate",type:"default","styling-mode":"contained"})])])),_:1}),(0,n.Wm)((0,i.SU)(d.wy),{location:"after"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,i.SU)(o.MH),{text:"Actions","drop-down-options":{width:"auto"},"styling-mode":"text"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,i.SU)(o.wy),{text:"Assign to Me"}),(0,n.Wm)((0,i.SU)(o.wy),{text:"Archive"})])),_:1})])),_:1}),(0,n.Wm)((0,i.SU)(d.wy),{location:"after","locate-in-menu":"auto"},{default:(0,n.w5)((()=>[b])),_:1}),(0,n.Wm)((0,i.SU)(d.wy),{location:"after","locate-in-menu":"auto",widget:"dxButton","show-text":"inMenu",options:p}),(0,n.Wm)((0,i.SU)(d.wy),{location:"after","locate-in-menu":"auto",widget:"dxButton","show-text":"inMenu",options:f})])),_:1}),(0,n._)("div",k,[(0,n._)("div",x,[(0,n.Wm)(c["default"],{"contact-data":a.value,"is-editing":!1,"is-loading":r.value},null,8,["contact-data","is-loading"])]),(0,n._)("div",D,[(0,n.Wm)(U,{"is-loading":r.value,"contact-name":a.value?.name,"contact-id":Z,tasks:a.value?.tasks,activities:a.value?.activities},null,8,["is-loading","contact-name","tasks","activities"])])])])])),_:1}))}}),I=a(97179);const C=(0,I.Z)(H,[["__scopeId","data-v-c899d140"]]);var P=C}}]);