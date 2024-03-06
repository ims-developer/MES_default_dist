"use strict";(self["webpackChunkvue_ui_teplate_gallery"]=self["webpackChunkvue_ui_teplate_gallery"]||[]).push([[243],{86486:function(e,a,t){t.d(a,{T:function(){return l},m:function(){return n}});const l={"element-attr":{class:"form-editor"},"input-attr":{class:"form-editor-input"},"styling-mode":"filled","value-change-event":"keyup input change"},{"value-change-event":i,...n}=l},30972:function(e,a,t){t.d(a,{CN:function(){return i},T4:function(){return n},p6:function(){return o}});var l=t(88980);function i(e){return String(e).replace(/(\d{3})(\d{3})(\d{4})/,"+1($1)$2-$3")}function n(e,a){return(0,l.uf)(e,{type:"currency",precision:a||0,currency:"USD"})}function o(e){return(0,l.p6)(new Date(e),"MM/dd/yyyy")}},2671:function(e,a,t){t.r(a),t.d(a,{default:function(){return w}});var l=t(49256),i=t(64701),n=t(47919),o=t(10437),s=t(30972),u=t(81507),d=t(49358);const c={class:"activity"},r={class:"name"},m={key:0};var p=(0,l.aZ)({__name:"card-activities",props:{isLoading:{type:Boolean,default:!0},showBy:{type:Boolean,default:!1},items:{default:void 0}},setup(e){const a=e,t=[{text:"View details"},{text:"Delete"}];return(e,p)=>((0,l.wg)(),(0,l.iD)("div",{id:"activities-list",class:(0,i.C_)({load:a.items})},[(0,l.Wm)((0,n.SU)(u.ZP),{visible:a.isLoading,"show-pane":!1,width:"auto",container:"#activities-list",position:{of:"#activities-list"}},null,8,["visible"]),a.items?((0,l.wg)(),(0,l.j4)((0,n.SU)(o._p),{key:0,class:"activities-list",items:a.items,"scrolling-enabled":!1},{item:(0,l.w5)((({data:e})=>[(0,l._)("div",null,[(0,l._)("div",c,[(0,l._)("div",r,(0,i.zw)(e.name),1),(0,l._)("div",{class:(0,i.C_)(["date",{by:a.showBy}])},[(0,l._)("span",null,(0,i.zw)((0,n.SU)(s.p6)(new Date(e.date))),1),a.showBy?((0,l.wg)(),(0,l.iD)("span",m,"by")):(0,l.kq)("",!0),(0,l._)("span",null,(0,i.zw)(e.manager),1)],2),(0,l.Wm)(d["default"],{class:"overflow-menu",items:t})])])])),_:1},8,["items"])):(0,l.kq)("",!0)],2))}}),v=t(97179);const f=(0,v.Z)(p,[["__scopeId","data-v-1d020838"]]);var w=f},49358:function(e,a,t){t.r(a),t.d(a,{default:function(){return u}});var l=t(49256),i=t(47919),n=t(63261),o=(0,l.aZ)({__name:"card-menu",props:{items:{},visible:{type:Boolean,default:!0}},setup(e){const a=e;return(e,t)=>((0,l.wg)(),(0,l.j4)((0,i.SU)(n.ZP),{items:a.items,visible:a.visible,icon:"overflow","show-arrow-icon":!1,"styling-mode":"text","drop-down-options":{width:"auto"}},null,8,["items","visible"]))}});const s=o;var u=s},20243:function(e,a,t){t.r(a),t.d(a,{default:function(){return M}});t(44936);var l=t(49256),i=t(64701),n=t(47919),o=t(34067),s=t(23954),u=t(50254),d=t(37252),c=t(45991),r=t(69067),m=t(9533),p=t(67699),v=t(99462),f=t(24935),w=t(28828),_=t(30972),g=t(2671),y=t(81507),b=t(84211);const U=e=>((0,l.dD)("data-v-9c36e5f4"),e=e(),(0,l.Cn)(),e),S={class:"data-wrapper"},k={class:"contact-name"},W={class:"data-part border"},h={class:"data-part data-part-toolbar border"},x={class:"data-part"},Z={class:"accordion-title"},C={class:"value"},V=U((()=>(0,l._)("br",null,null,-1))),D={class:"value black small"},B=U((()=>(0,l._)("br",null,null,-1)));var z=(0,l.aZ)({__name:"contact-panel",props:{isPanelOpened:{type:Boolean,default:!1},contactId:{default:null}},emits:["close","pinChanged"],setup(e,{emit:a}){const t=(0,n.iH)(!1),U=(0,n.iH)(!1),z=(0,n.iH)(!1),P=(0,n.iH)(w.Br.value.isLarge||w.Br.value.isMedium),H=(0,n.iH)(null),M=e,I=()=>{t.value=!t.value},q=a,j=[{name:"phone",mask:"+1(000)000-0000",icon:"tel"},{name:"email",icon:"email"},{name:"address",icon:"home"}];(0,l.YP)(w.Br,(e=>{P.value=e.isLarge||e.isMedium,!1===P.value&&(z.value=!1)}));const T=async e=>{U.value=!0,H.value=await(0,s.vS)(e),U.value=!1};function Y({validationGroup:e}){e.validate().isValid&&(t.value=!1)}function G(){z.value=!1,q("close")}(0,l.YP)((()=>M.contactId),(e=>{null!==e&&T(e)})),(0,l.YP)([z,()=>M.isPanelOpened],(()=>{q("pinChanged")}),{flush:"post"});const J=()=>{o.N.push("/crm-contact-details")};return(e,a)=>((0,l.wg)(),(0,l.iD)("div",{id:"contact-panel",class:(0,i.C_)(["panel",{pin:z.value,open:M.isPanelOpened}])},[(0,l._)("div",S,[(0,l.Wm)((0,n.SU)(y.ZP),{visible:U.value,"show-pane":!1,width:300,container:"#contact-panel",position:{of:"#contact-panel"}},null,8,["visible"]),H.value?((0,l.wg)(),(0,l.iD)(l.HY,{key:0},[(0,l.Wm)((0,n.SU)(m.sc),{class:"panel-toolbar"},{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(m.wy),{location:"before"},{default:(0,l.w5)((()=>[(0,l._)("div",k,(0,i.zw)(H.value?.name),1)])),_:1}),(0,l.Wm)((0,n.SU)(m.wy),{location:"before"},{default:(0,l.w5)((()=>[(0,l.Wm)(f.Z,{value:H.value?.status},null,8,["value"])])),_:1}),(0,l.Wm)((0,n.SU)(m.wy),{location:"after",widget:"dxButton",visible:P.value,options:{icon:z.value?"pin":"unpin",stylingMode:"text",onClick:()=>z.value=!z.value}},null,8,["visible","options"]),(0,l.Wm)((0,n.SU)(m.wy),{location:"after",widget:"dxButton",options:{icon:"close",stylingMode:"text",onClick:G}},null,8,["options"])])),_:1}),(0,l.Wm)((0,n.SU)(r.Z),{class:"panel-scroll"},{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(p.G),null,{default:(0,l.w5)((()=>[(0,l._)("div",W,[(0,l.Wm)((0,n.SU)(c.Iq),{class:(0,i.C_)({"view-mode":!t.value,"plain-styled-form dx-form":!0})},{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(c.dZ),{"col-count":2,"css-class":"photo-row"},{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(c.Ci),{xs:2}),(0,l.Wm)((0,n.SU)(c.wy),{"css-class":"photo-box"},{default:(0,l.w5)((()=>[(0,l.Wm)(v.Z,{link:H.value.image},null,8,["link"])])),_:1}),(0,l.Wm)((0,n.SU)(c.dZ),null,{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(c.wy),{"css-class":"accent"},{default:(0,l.w5)((()=>[(0,l.Wm)(b.Z,{label:"Company",modelValue:H.value["company"],"onUpdate:modelValue":a[0]||(a[0]=e=>H.value["company"]=e),"is-editing":t.value},null,8,["modelValue","is-editing"])])),_:1}),(0,l.Wm)((0,n.SU)(c.wy),null,{default:(0,l.w5)((()=>[(0,l.Wm)(b.Z,{modelValue:H.value["position"],"onUpdate:modelValue":a[1]||(a[1]=e=>H.value["position"]=e),label:"Position","is-editing":t.value},null,8,["modelValue","is-editing"])])),_:1}),(0,l.Wm)((0,n.SU)(c.wy),{"css-class":"accent"},{default:(0,l.w5)((()=>[(0,l.Wm)(b.Z,{label:"Assigned to",modelValue:H.value["manager"],"onUpdate:modelValue":a[2]||(a[2]=e=>H.value["manager"]=e),"is-editing":t.value},null,8,["modelValue","is-editing"])])),_:1})])),_:1})])),_:1}),(0,l.Wm)((0,n.SU)(c.dZ),{"css-class":"contact-fields-group"},{default:(0,l.w5)((()=>[((0,l.wg)(),(0,l.iD)(l.HY,null,(0,l.Ko)(j,((e,a)=>(0,l.Wm)((0,n.SU)(c.wy),{key:a},{default:(0,l.w5)((()=>[(0,l.Wm)(b.Z,{icon:e.icon,modelValue:H.value[e.name],"onUpdate:modelValue":a=>H.value[e.name]=a,"is-editing":t.value,mask:e.mask},null,8,["icon","modelValue","onUpdate:modelValue","is-editing","mask"])])),_:2},1024))),64))])),_:1})])),_:1},8,["class"])]),(0,l._)("div",h,[(0,l.Wm)((0,n.SU)(m.sc),null,{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(m.wy),{location:"after",visible:!t.value},{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(d.J),{text:"Edit",icon:"edit","styling-mode":"contained",type:"default",onClick:a[3]||(a[3]=e=>I())})])),_:1},8,["visible"]),(0,l.Wm)((0,n.SU)(m.wy),{location:"after",visible:!t.value},{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(d.J),{text:"Details","styling-mode":"outlined",type:"normal",onClick:a[4]||(a[4]=e=>J())})])),_:1},8,["visible"]),(0,l.Wm)((0,n.SU)(m.wy),{location:"after","locate-in-menu":"before",visible:t.value},{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(d.J),{text:"Save",icon:"save","styling-mode":"contained",type:"default",onClick:Y})])),_:1},8,["visible"]),(0,l.Wm)((0,n.SU)(m.wy),{location:"after","locate-in-menu":"before",visible:t.value},{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(d.J),{text:"Cancel",onClick:a[5]||(a[5]=e=>I()),"styling-mode":"outlined",type:"normal"})])),_:1},8,["visible"]),(0,l.Wm)((0,n.SU)(m.wy),{location:"before",widget:"dxDropDownButton",options:{text:"Actions",dropDownOptions:{width:"auto"},stylingMode:"text",items:["Call","Send Fax","Send Email","Make a Meeting"]}})])),_:1})])])),_:1}),(0,l._)("div",x,[(0,l.Wm)((0,n.SU)(u.f7),{multiple:!0,collapsible:!0},{title:(0,l.w5)((({data:e})=>[(0,l._)("div",Z,[(0,l._)("span",null,(0,i.zw)(e.title),1)])])),default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(u.wy),{title:"Opportunities"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(H.value.opportunities,((e,a)=>((0,l.wg)(),(0,l.iD)("div",{key:a,class:"opportunities"},[(0,l._)("span",C,(0,i.zw)(e.name),1),V,(0,l._)("span",D,(0,i.zw)((0,n.SU)(_.T4)(e.price)),1),B])))),128))])),_:1}),(0,l.Wm)((0,n.SU)(m.wy),{title:"Activities"},{default:(0,l.w5)((()=>[(0,l.Wm)(g["default"],{items:H.value.activities,"is-loading":!1},null,8,["items"])])),_:1})])),_:1})])])),_:1})],64)):(0,l.kq)("",!0)])],2))}}),P=t(97179);const H=(0,P.Z)(z,[["__scopeId","data-v-9c36e5f4"]]);var M=H},24935:function(e,a,t){t.d(a,{Z:function(){return u}});var l=t(49256),i=t(64701),n=(0,l.aZ)({__name:"contact-status",props:{value:{},showText:{type:Boolean,default:!0}},setup(e){const a=e;return(e,t)=>((0,l.wg)(),(0,l.iD)("span",{class:(0,i.C_)("status contact-status status-"+a.value?.toLowerCase())},(0,i.zw)(a.showText?a.value:""),3))}}),o=t(97179);const s=(0,o.Z)(n,[["__scopeId","data-v-3568e1f6"]]);var u=s},99462:function(e,a,t){t.d(a,{Z:function(){return r}});var l=t(49256),i=t(64701),n=t(47919),o=t(16568);const s={key:0,class:"edit-icon dx-icon-photooutline"};var u=(0,l.aZ)({__name:"form-photo",props:{link:{default:""},size:{default:124},editable:{type:Boolean,default:!1}},setup(e){const a=(0,n.iH)(null),t=e;return(e,u)=>((0,l.wg)(),(0,l.iD)("div",{ref_key:"hostRef",ref:a,class:"host"},[(0,l._)("div",{style:(0,i.j5)({width:t.size+"px",height:t.size+"px",maxHeight:t.size+"px",backgroundImage:`url('data:image/png;base64,${t.link}')`}),class:(0,i.C_)(["photo",["photo",e.editable?" editable":""]])},[e.editable?((0,l.wg)(),(0,l.iD)("i",s)):(0,l.kq)("",!0)],6),e.editable?((0,l.wg)(),(0,l.j4)((0,n.SU)(o.c),{key:0,"dialog-trigger":a.value,visible:!1,accept:"image/*"},null,8,["dialog-trigger"])):(0,l.kq)("",!0)],512))}}),d=t(97179);const c=(0,d.Z)(u,[["__scopeId","data-v-0848bed0"]]);var r=c},84211:function(e,a,t){t.d(a,{Z:function(){return r}});var l=t(49256),i=t(47919),n=t(47250),o=t(1122),s=t(86486),u=(0,l.aZ)({__name:"form-textbox",props:{modelValue:{default:null},isEditing:{type:Boolean,default:!1},label:{default:""},icon:{default:""},mask:{default:""},validationGroup:{default:""},validators:{default:()=>[{type:"required"}]}},emits:["update:modelValue"],setup(e,{emit:a}){const t=e,u=a,d=(0,l.Fl)({get(){return t.modelValue},set(e){u("update:modelValue",e)}});return(e,a)=>((0,l.wg)(),(0,l.j4)((0,i.SU)(n.ki),(0,l.dG)({label:e.label,modelValue:d.value,"onUpdate:modelValue":a[0]||(a[0]=e=>d.value=e),"read-only":!e.isEditing,mask:e.mask},(0,i.SU)(s.T)),{default:(0,l.w5)((()=>[(0,l.Wm)((0,i.SU)(o.rP),{"validation-rules":e.validators,"validation-group":e.validationGroup},null,8,["validation-rules","validation-group"]),e.icon?((0,l.wg)(),(0,l.j4)((0,i.SU)(n.JV),{key:0,options:{icon:e.icon,elementAttr:{class:"form-editor-icon"},stylingMode:"text"},name:"icon",location:"before"},null,8,["options"])):(0,l.kq)("",!0)])),_:1},16,["label","modelValue","read-only","mask"]))}}),d=t(97179);const c=(0,d.Z)(u,[["__scopeId","data-v-4268fcf6"]]);var r=c}}]);