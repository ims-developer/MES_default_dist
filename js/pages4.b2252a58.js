"use strict";(self["webpackChunkvue_ui_teplate_gallery"]=self["webpackChunkvue_ui_teplate_gallery"]||[]).push([[9222,3520],{81640:function(e,t,a){a.d(t,{F:function(){return o},b:function(){return l}});const l=["Salaried","Commission","Terminated"],o={firstName:"",lastName:"",position:"",manager:"",company:"",phone:"",email:"",image:"",address:""}},25938:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var l=a(49256),o=a(47919),n=a(28828),i=a(45991),d=a(81640),s=a(84211),u=a(64701),m=a(16568);const r=e=>((0,l.dD)("data-v-2716dd04"),e=e(),(0,l.Cn)(),e),c=r((()=>(0,l._)("span",null,"Drag and drop a photo here or click the area to select it from a folder",-1))),p=[c];var f=(0,l.aZ)({__name:"form-photo-uploader",setup(e){const t=(0,o.iH)(!1),a=(0,o.iH)(),n=e=>{e.dropZoneElement===a.value&&(t.value=!0)},i=e=>{e.dropZoneElement===a.value&&(t.value=!1)};return(e,d)=>((0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",{id:"dropzone",ref_key:"dropzone",ref:a,class:(0,u.C_)(t.value?"dx-theme-accent-as-border-color":"dx-theme-border-color")},p,2),(0,l.Wm)((0,o.SU)(m.c),{"drop-zone":a.value,"dialog-trigger":a.value,multiple:!1,"show-file-list":!1,visible:!1,accept:"image/*","upload-mode":"instantly",onDropZoneEnter:n,onDropZoneLeave:i},null,8,["drop-zone","dialog-trigger"])],64))}}),w=a(97179);const v=(0,w.Z)(f,[["__scopeId","data-v-2716dd04"]]);var y=v,W=(0,l.aZ)({__name:"contact-new-form",setup(e,{expose:t}){const a=(0,o.qj)({...d.F});let u={...d.F};return(0,l.YP)(a,(e=>{u={...e}})),t({getNewContactData:()=>u}),(e,t)=>((0,l.wg)(),(0,l.j4)((0,o.SU)(i.Iq),{class:"plain-styled-form","screen-by-width":(0,o.SU)(n.JW)},{default:(0,l.w5)((()=>[(0,l.Wm)((0,o.SU)(i.wy),{"item-type":"group"},{default:(0,l.w5)((()=>[(0,l.Wm)((0,o.SU)(i.Ci),{xs:1,sm:1,md:1,lg:1}),(0,l.Wm)((0,o.SU)(i.wy),{class:"uploader"},{default:(0,l.w5)((()=>[(0,l._)("div",null,[(0,l.Wm)(y)])])),_:1})])),_:1}),(0,l.Wm)((0,o.SU)(i.wy),{"item-type":"group"},{default:(0,l.w5)((()=>[(0,l.Wm)((0,o.SU)(i.Ci),{xs:1,sm:2,md:2,lg:2}),(0,l.Wm)((0,o.SU)(i.wy),null,{default:(0,l.w5)((()=>[(0,l.Wm)(s.Z,{label:"First Name",modelValue:a.firstName,"onUpdate:modelValue":t[0]||(t[0]=e=>a.firstName=e),"is-editing":!0},null,8,["modelValue"])])),_:1}),(0,l.Wm)((0,o.SU)(i.wy),{"css-class":"accent"},{default:(0,l.w5)((()=>[(0,l.Wm)(s.Z,{label:"Last Name",modelValue:a.lastName,"onUpdate:modelValue":t[1]||(t[1]=e=>a.lastName=e),"is-editing":!0},null,8,["modelValue"])])),_:1}),(0,l.Wm)((0,o.SU)(i.wy),{"css-class":"accent"},{default:(0,l.w5)((()=>[(0,l.Wm)(s.Z,{label:"Company",modelValue:a.company,"onUpdate:modelValue":t[2]||(t[2]=e=>a.company=e),"is-editing":!0},null,8,["modelValue"])])),_:1}),(0,l.Wm)((0,o.SU)(i.wy),null,{default:(0,l.w5)((()=>[(0,l.Wm)(s.Z,{label:"Position",modelValue:a.position,"onUpdate:modelValue":t[3]||(t[3]=e=>a.position=e),"is-editing":!0},null,8,["modelValue"])])),_:1})])),_:1}),(0,l.Wm)((0,o.SU)(i.wy),{"item-type":"group","css-class":"contact-fields-group"},{default:(0,l.w5)((()=>[(0,l.Wm)((0,o.SU)(i.Ci),{xs:1,sm:2,md:2,lg:2}),(0,l.Wm)((0,o.SU)(i.wy),{"css-class":"accent"},{default:(0,l.w5)((()=>[(0,l.Wm)(s.Z,{label:"Assigned to",modelValue:a.manager,"onUpdate:modelValue":t[4]||(t[4]=e=>a.manager=e),"is-editing":!0},null,8,["modelValue"])])),_:1}),(0,l.Wm)((0,o.SU)(i.wy),null,{default:(0,l.w5)((()=>[(0,l.Wm)(s.Z,{modelValue:a.phone,"onUpdate:modelValue":t[5]||(t[5]=e=>a.phone=e),"is-editing":!0,icon:"tel",label:"Phone",mask:"+1(000)000-0000"},null,8,["modelValue"])])),_:1}),(0,l.Wm)((0,o.SU)(i.wy),null,{default:(0,l.w5)((()=>[(0,l.Wm)(s.Z,{modelValue:a.email,"onUpdate:modelValue":t[6]||(t[6]=e=>a.email=e),"is-editing":!0,icon:"email",label:"Email",validators:[{type:"email"},{type:"required"}]},null,8,["modelValue"])])),_:1}),(0,l.Wm)((0,o.SU)(i.wy),null,{default:(0,l.w5)((()=>[(0,l.Wm)(s.Z,{modelValue:a.address,"onUpdate:modelValue":t[7]||(t[7]=e=>a.address=e),"is-editing":!0,icon:"home",label:"Address"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["screen-by-width"]))}});const _=W;var g=_},65017:function(e,t,a){a.d(t,{Z:function(){return p}});var l=a(49256),o=a(47919),n=a(64701),i=a(74197),d=a(37252),s=a(28828),u=a(67699),m=(0,l.aZ)({__name:"form-popup",props:{isSaveDisabled:{type:Boolean,default:!1},title:{},visible:{type:Boolean,default:!1},width:{default:480},height:{default:"auto"},wrapperAttr:{default:()=>({})}},emits:["save","update:visible"],setup(e,{expose:t,emit:a}){const m=e,r=(0,o.iH)(),c=a,p=(0,o.iH)(m.visible);function f(e){const t={class:"",...e};return t.class+=" form-popup",t}const w=(0,o.iH)(f(m.wrapperAttr)),v=(0,o.iH)();(0,l.YP)((()=>m.visible),(e=>{p.value=e})),(0,l.YP)((()=>m.wrapperAttr),(e=>{w.value=f(e)}));const y=()=>{p.value=!1,r.value?.instance.reset(),c("update:visible",!1)},W=()=>{r.value?.instance.validate().isValid&&(y(),c("save"))},_=()=>{y()};function g(){r.value?.instance.reset(),y()}function h(){return r.value?.instance.validate().isValid}return t({isValid:h}),(e,t)=>((0,l.wg)(),(0,l.j4)((0,o.SU)(i.fB),{ref_key:"popup",ref:v,title:m.title,visible:p.value,"full-screen":(0,o.SU)(s.Br).isXSmall,width:e.width,"wrapper-attr":w.value,height:e.height,onHidden:t[2]||(t[2]=e=>g()),onOptionChanged:t[3]||(t[3]=()=>v.value?.instance?.repaint())},{default:(0,l.w5)((()=>[(0,l.Wm)((0,o.SU)(i.DW),{toolbar:"bottom",location:"center"},{default:(0,l.w5)((()=>[(0,l._)("div",{class:(0,n.C_)({"form-popup-buttons-container":!0,"flex-buttons":e.width<=360})},[(0,l.Wm)((0,o.SU)(d.J),{text:"Cancel","styling-mode":"outlined",type:"normal",onClick:t[0]||(t[0]=e=>_())}),(0,l.Wm)((0,o.SU)(d.J),{text:"Save",disabled:e.isSaveDisabled,"styling-mode":"contained",type:"default",onClick:t[1]||(t[1]=e=>W())},null,8,["disabled"])],2)])),_:1}),(0,l.Wm)((0,o.SU)(u.G),{ref_key:"validationGroup",ref:r},{default:(0,l.w5)((()=>[(0,l.WI)(e.$slots,"default")])),_:3},512)])),_:3},8,["title","visible","full-screen","width","wrapper-attr","height"]))}}),r=a(97179);const c=(0,r.Z)(m,[["__scopeId","data-v-0a86a163"]]);var p=c},3010:function(e,t,a){a.r(t),a.d(t,{default:function(){return H}});var l=a(49256),o=a(47919),n=a(64701),i=a(63261),d=a(37252),s=a(31203),u=a(23954),m=a(31800),r=a(14985),c=a(88606),p=a(81640),f=a(22840),w=a(17629),v=a(61431),y=a(86187),W=a(30972),_=a(24935),g=a(65017),h=a(25938),S=a(20243);const U=e=>((0,l.dD)("data-v-4322e151"),e=e(),(0,l.Cn)(),e),b={class:"view-wrapper list-page view-wrapper-contact-list"},C=U((()=>(0,l._)("div",{class:"grid-header"}," Contacts ",-1))),V=U((()=>(0,l._)("div",null,[(0,l._)("div",{class:"separator"})],-1))),x=U((()=>(0,l._)("div",null,[(0,l._)("div",{class:"separator"})],-1))),k={class:"name-template"},Z={class:"position"};var D=(0,l.aZ)({__name:"crm-contact-list",setup(e){const t=["All",...p.b],a=(0,o.iH)(),U=(0,o.iH)(null),D=(0,o.iH)(!1),P=(0,o.iH)(null),N=(0,o.iH)(!1),H=(0,o.iH)(null),A=new f.Z({key:"id",load:()=>(0,u.K2)()}),B=e=>{e.data.id&&(U.value=e.data,D.value=!0,H.value=e.data.id)},F=()=>{N.value=!0},z=e=>{const{item:t}=e;"All"===t?P.value?.instance.clearFilter():P.value?.instance.filter(["status","=",t])},E=e=>{if("pdf"===e.format){const t=new c.jsPDF;(0,w.d3)({jsPDFDocument:t,component:e.component}).then((()=>{t.save("Contacts.pdf")}))}else{const t=new r.Workbook,a=t.addWorksheet("Contacts");(0,v.d)({component:e.component,worksheet:a,autoFilterEnabled:!0}).then((()=>{t.xlsx.writeBuffer().then((e=>{(0,m.p)(new Blob([e],{type:"application/octet-stream"}),"Contacts.xlsx")}))})),e.cancel=!0}},T=()=>{P.value?.instance.updateDimensions()},j=()=>{A.reload()},I=e=>{const{value:t}=e;if(t)return(0,W.CN)(t.toString())},J=()=>{const{firstName:e,lastName:t}=a.value.getNewContactData();(0,y.Z)({message:`New contact "${e} ${t}" saved`,position:{at:"bottom center",my:"bottom center"}},"success"),N.value=!1},Y=()=>{D.value=!1,H.value=null},G={text:"Refresh",icon:"refresh",onClick:j,stylingMode:"text"};return(e,u)=>((0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",b,[(0,l.Wm)((0,o.SU)(s.ZP),{ref_key:"dataGrid",ref:P,"data-source":(0,o.SU)(A),"allow-column-reordering":!0,"focused-row-enabled":!0,"focused-row-key":H.value,"show-borders":!0,height:"100%",class:"grid theme-dependent",onRowClick:B,onExporting:E},{nameCellTemplate:(0,l.w5)((({data:e})=>[(0,l._)("div",k,[(0,l._)("div",null,(0,n.zw)(e.data.name),1),(0,l._)("div",Z,(0,n.zw)(e.data.position),1)])])),statusCellTemplate:(0,l.w5)((({data:e})=>[(0,l.Wm)(_.Z,{value:e.data?.status},null,8,["value"])])),default:(0,l.w5)((()=>[(0,l.Wm)((0,o.SU)(s.yx),{mode:"virtual"}),(0,l.Wm)((0,o.SU)(s.h2),{enabled:!0}),(0,l.Wm)((0,o.SU)(s.b),{mode:"multiple"}),(0,l.Wm)((0,o.SU)(s.wh),{visible:!0}),(0,l.Wm)((0,o.SU)(s.Gr),{"show-pane":!1}),(0,l.Wm)((0,o.SU)(s.DT),{"select-all-mode":"allPages","show-check-boxes-mode":"always",mode:"multiple"}),(0,l.Wm)((0,o.SU)(s.SS),{visible:!0,placeholder:"Contact Search"}),(0,l.Wm)((0,o.SU)(s.wJ),{enabled:!0,"allow-export-selected-data":!0,formats:["xlsx","pdf"]}),(0,l.Wm)((0,o.SU)(s.zv),null,{default:(0,l.w5)((()=>[(0,l.Wm)((0,o.SU)(s.wy),{location:"before"},{default:(0,l.w5)((()=>[C])),_:1}),(0,l.Wm)((0,o.SU)(s.wy),{location:"before","locate-in-menu":"auto"},{default:(0,l.w5)((()=>[(0,l.Wm)((0,o.SU)(i.ZP),{"styling-mode":"text","use-select-mode":!0,items:t,"selected-item-key":t[0],"drop-down-options":{width:"auto"},onSelectionChanged:z},null,8,["selected-item-key"])])),_:1}),(0,l.Wm)((0,o.SU)(s.wy),{location:"after","locate-in-menu":"auto"},{default:(0,l.w5)((()=>[(0,l._)("div",null,[(0,l.Wm)((0,o.SU)(d.J),{text:"Add Contact",icon:"plus",type:"default","styling-mode":"contained",onClick:F})])])),_:1}),(0,l.Wm)((0,o.SU)(s.wy),{location:"after","locate-in-menu":"auto","show-text":"inMenu",widget:"dxButton",options:G}),(0,l.Wm)((0,o.SU)(s.wy),{location:"after","locate-in-menu":"auto"},{default:(0,l.w5)((()=>[V])),_:1}),(0,l.Wm)((0,o.SU)(s.wy),{name:"exportButton"}),(0,l.Wm)((0,o.SU)(s.wy),{location:"after","locate-in-menu":"auto"},{default:(0,l.w5)((()=>[x])),_:1}),(0,l.Wm)((0,o.SU)(s.wy),{name:"columnChooserButton","locate-in-menu":"auto"}),(0,l.Wm)((0,o.SU)(s.wy),{name:"searchPanel","locate-in-menu":"auto"})])),_:1}),(0,l.Wm)((0,o.SU)(s.yP),{"data-field":"name",caption:"Name","sort-order":"asc","cell-template":"nameCellTemplate","hiding-priority":5,"min-width":150},{default:(0,l.w5)((()=>[(0,l.Wm)((0,o.SU)(s.VD))])),_:1}),(0,l.Wm)((0,o.SU)(s.yP),{"data-field":"company",caption:"Company","hiding-priority":5,"min-width":150}),(0,l.Wm)((0,o.SU)(s.yP),{"data-field":"status",caption:"Status","data-type":"string","cell-template":"statusCellTemplate","hiding-priority":3,"min-width":100}),(0,l.Wm)((0,o.SU)(s.yP),{"data-field":"assignedTo",caption:"Assigned to","hiding-priority":4}),(0,l.Wm)((0,o.SU)(s.yP),{"data-field":"phone",caption:"Phone","hiding-priority":2,"customize-text":I},{default:(0,l.w5)((()=>[(0,l.Wm)((0,o.SU)(s.VD))])),_:1}),(0,l.Wm)((0,o.SU)(s.yP),{"data-field":"email",caption:"Email","hiding-priority":1},{default:(0,l.w5)((()=>[(0,l.Wm)((0,o.SU)(s.VD))])),_:1})])),_:1},8,["data-source","focused-row-key"]),(0,l.Wm)(S["default"],{"contact-id":U.value?.id,"is-panel-opened":D.value,onClose:Y,onPinChanged:T},null,8,["contact-id","is-panel-opened"])]),(0,l.Wm)(g.Z,{title:"New Contact",visible:N.value,"onUpdate:visible":u[0]||(u[0]=e=>N.value=e),onSave:J},{default:(0,l.w5)((()=>[(0,l.Wm)(h["default"],{ref_key:"contactNewFormCmp",ref:a},null,512)])),_:1},8,["visible"])],64))}}),P=a(97179);const N=(0,P.Z)(D,[["__scopeId","data-v-4322e151"]]);var H=N}}]);