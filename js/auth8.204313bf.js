"use strict";(self["webpackChunkvue_ui_teplate_gallery"]=self["webpackChunkvue_ui_teplate_gallery"]||[]).push([[4745],{98921:function(a,e,t){t.r(e),t.d(e,{default:function(){return c}});var i=t(49256),s=t(47919),o=t(31203),d=t(81507);const n={id:"card-tasks"};var l=(0,i.aZ)({__name:"card-tasks",props:{isLoading:{type:Boolean,default:!0},manager:{default:""},tasks:{default:()=>[]}},setup(a){const e=a,t=(0,s.iH)([]);(0,i.YP)((()=>e.tasks),(a=>{t.value=a}));const l=(0,i.Fl)((()=>t.value.filter((a=>!!a.status&&!!a.priority)))),r=a=>{const e=a.component.getVisibleRows(),i=t.value.indexOf(e[a.toIndex].data),s=t.value.indexOf(a.itemData);t.value.splice(s,1),t.value.splice(i,0,a.itemData)};return(a,t)=>((0,i.wg)(),(0,i.iD)("div",n,[(0,i.Wm)((0,s.SU)(d.ZP),{visible:e.isLoading,"show-pane":!1,width:"auto",container:"#card-tasks",position:{of:"#card-tasks"}},null,8,["visible"]),e.isLoading?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)((0,s.SU)(o.v4),{key:0,class:"grid-tasks","data-source":l.value,"column-auto-width":!0},{default:(0,i.w5)((()=>[(0,i.Wm)((0,s.SU)(o.DT),{"show-check-boxes-mode":"always",mode:"multiple"}),(0,i.Wm)((0,s.SU)(o.S1),{"allow-reordering":!0,"on-reorder":r,"show-drag-icons":!0}),(0,i.Wm)((0,s.SU)(o.yP),{"data-field":"text",caption:"Subject","hiding-priority":3}),(0,i.Wm)((0,s.SU)(o.yP),{"data-field":"date","data-type":"date",caption:"Due Date","hiding-priority":1}),(0,i.Wm)((0,s.SU)(o.yP),{caption:"Assigned To","data-field":"manager","hiding-priority":0})])),_:1},8,["data-source"]))]))}}),r=t(97179);const u=(0,r.Z)(l,[["__scopeId","data-v-ce99d0a0"]]);var c=u}}]);