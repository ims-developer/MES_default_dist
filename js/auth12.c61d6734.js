"use strict";(self["webpackChunkvue_ui_teplate_gallery"]=self["webpackChunkvue_ui_teplate_gallery"]||[]).push([[9822],{86486:function(e,l,a){a.d(l,{T:function(){return t},m:function(){return n}});const t={"element-attr":{class:"form-editor"},"input-attr":{class:"form-editor-input"},"styling-mode":"filled","value-change-event":"keyup input change"},{"value-change-event":o,...n}=t},81640:function(e,l,a){a.d(l,{F:function(){return o},b:function(){return t}});const t=["Salaried","Commission","Terminated"],o={firstName:"",lastName:"",position:"",manager:"",company:"",phone:"",email:"",image:"",address:""}},25938:function(e,l,a){a.r(l),a.d(l,{default:function(){return V}});var t=a(49256),o=a(47919),n=a(28828),d=a(45991),i=a(81640),u=a(84211),m=a(64701),s=a(16568);const r=e=>((0,t.dD)("data-v-2716dd04"),e=e(),(0,t.Cn)(),e),c=r((()=>(0,t._)("span",null,"Drag and drop a photo here or click the area to select it from a folder",-1))),p=[c];var f=(0,t.aZ)({__name:"form-photo-uploader",setup(e){const l=(0,o.iH)(!1),a=(0,o.iH)(),n=e=>{e.dropZoneElement===a.value&&(l.value=!0)},d=e=>{e.dropZoneElement===a.value&&(l.value=!1)};return(e,i)=>((0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("div",{id:"dropzone",ref_key:"dropzone",ref:a,class:(0,m.C_)(l.value?"dx-theme-accent-as-border-color":"dx-theme-border-color")},p,2),(0,t.Wm)((0,o.SU)(s.c),{"drop-zone":a.value,"dialog-trigger":a.value,multiple:!1,"show-file-list":!1,visible:!1,accept:"image/*","upload-mode":"instantly",onDropZoneEnter:n,onDropZoneLeave:d},null,8,["drop-zone","dialog-trigger"])],64))}}),g=a(97179);const v=(0,g.Z)(f,[["__scopeId","data-v-2716dd04"]]);var w=v,y=(0,t.aZ)({__name:"contact-new-form",setup(e,{expose:l}){const a=(0,o.qj)({...i.F});let m={...i.F};return(0,t.YP)(a,(e=>{m={...e}})),l({getNewContactData:()=>m}),(e,l)=>((0,t.wg)(),(0,t.j4)((0,o.SU)(d.Iq),{class:"plain-styled-form","screen-by-width":(0,o.SU)(n.JW)},{default:(0,t.w5)((()=>[(0,t.Wm)((0,o.SU)(d.wy),{"item-type":"group"},{default:(0,t.w5)((()=>[(0,t.Wm)((0,o.SU)(d.Ci),{xs:1,sm:1,md:1,lg:1}),(0,t.Wm)((0,o.SU)(d.wy),{class:"uploader"},{default:(0,t.w5)((()=>[(0,t._)("div",null,[(0,t.Wm)(w)])])),_:1})])),_:1}),(0,t.Wm)((0,o.SU)(d.wy),{"item-type":"group"},{default:(0,t.w5)((()=>[(0,t.Wm)((0,o.SU)(d.Ci),{xs:1,sm:2,md:2,lg:2}),(0,t.Wm)((0,o.SU)(d.wy),null,{default:(0,t.w5)((()=>[(0,t.Wm)(u.Z,{label:"First Name",modelValue:a.firstName,"onUpdate:modelValue":l[0]||(l[0]=e=>a.firstName=e),"is-editing":!0},null,8,["modelValue"])])),_:1}),(0,t.Wm)((0,o.SU)(d.wy),{"css-class":"accent"},{default:(0,t.w5)((()=>[(0,t.Wm)(u.Z,{label:"Last Name",modelValue:a.lastName,"onUpdate:modelValue":l[1]||(l[1]=e=>a.lastName=e),"is-editing":!0},null,8,["modelValue"])])),_:1}),(0,t.Wm)((0,o.SU)(d.wy),{"css-class":"accent"},{default:(0,t.w5)((()=>[(0,t.Wm)(u.Z,{label:"Company",modelValue:a.company,"onUpdate:modelValue":l[2]||(l[2]=e=>a.company=e),"is-editing":!0},null,8,["modelValue"])])),_:1}),(0,t.Wm)((0,o.SU)(d.wy),null,{default:(0,t.w5)((()=>[(0,t.Wm)(u.Z,{label:"Position",modelValue:a.position,"onUpdate:modelValue":l[3]||(l[3]=e=>a.position=e),"is-editing":!0},null,8,["modelValue"])])),_:1})])),_:1}),(0,t.Wm)((0,o.SU)(d.wy),{"item-type":"group","css-class":"contact-fields-group"},{default:(0,t.w5)((()=>[(0,t.Wm)((0,o.SU)(d.Ci),{xs:1,sm:2,md:2,lg:2}),(0,t.Wm)((0,o.SU)(d.wy),{"css-class":"accent"},{default:(0,t.w5)((()=>[(0,t.Wm)(u.Z,{label:"Assigned to",modelValue:a.manager,"onUpdate:modelValue":l[4]||(l[4]=e=>a.manager=e),"is-editing":!0},null,8,["modelValue"])])),_:1}),(0,t.Wm)((0,o.SU)(d.wy),null,{default:(0,t.w5)((()=>[(0,t.Wm)(u.Z,{modelValue:a.phone,"onUpdate:modelValue":l[5]||(l[5]=e=>a.phone=e),"is-editing":!0,icon:"tel",label:"Phone",mask:"+1(000)000-0000"},null,8,["modelValue"])])),_:1}),(0,t.Wm)((0,o.SU)(d.wy),null,{default:(0,t.w5)((()=>[(0,t.Wm)(u.Z,{modelValue:a.email,"onUpdate:modelValue":l[6]||(l[6]=e=>a.email=e),"is-editing":!0,icon:"email",label:"Email",validators:[{type:"email"},{type:"required"}]},null,8,["modelValue"])])),_:1}),(0,t.Wm)((0,o.SU)(d.wy),null,{default:(0,t.w5)((()=>[(0,t.Wm)(u.Z,{modelValue:a.address,"onUpdate:modelValue":l[7]||(l[7]=e=>a.address=e),"is-editing":!0,icon:"home",label:"Address"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["screen-by-width"]))}});const _=y;var V=_},84211:function(e,l,a){a.d(l,{Z:function(){return r}});var t=a(49256),o=a(47919),n=a(47250),d=a(1122),i=a(86486),u=(0,t.aZ)({__name:"form-textbox",props:{modelValue:{default:null},isEditing:{type:Boolean,default:!1},label:{default:""},icon:{default:""},mask:{default:""},validationGroup:{default:""},validators:{default:()=>[{type:"required"}]}},emits:["update:modelValue"],setup(e,{emit:l}){const a=e,u=l,m=(0,t.Fl)({get(){return a.modelValue},set(e){u("update:modelValue",e)}});return(e,l)=>((0,t.wg)(),(0,t.j4)((0,o.SU)(n.ki),(0,t.dG)({label:e.label,modelValue:m.value,"onUpdate:modelValue":l[0]||(l[0]=e=>m.value=e),"read-only":!e.isEditing,mask:e.mask},(0,o.SU)(i.T)),{default:(0,t.w5)((()=>[(0,t.Wm)((0,o.SU)(d.rP),{"validation-rules":e.validators,"validation-group":e.validationGroup},null,8,["validation-rules","validation-group"]),e.icon?((0,t.wg)(),(0,t.j4)((0,o.SU)(n.JV),{key:0,options:{icon:e.icon,elementAttr:{class:"form-editor-icon"},stylingMode:"text"},name:"icon",location:"before"},null,8,["options"])):(0,t.kq)("",!0)])),_:1},16,["label","modelValue","read-only","mask"]))}}),m=a(97179);const s=(0,m.Z)(u,[["__scopeId","data-v-4268fcf6"]]);var r=s}}]);