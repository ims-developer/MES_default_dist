"use strict";(self["webpackChunkvue_ui_teplate_gallery"]=self["webpackChunkvue_ui_teplate_gallery"]||[]).push([[462],{30972:function(e,t,n){n.d(t,{CN:function(){return c},T4:function(){return i},p6:function(){return r}});var a=n(88980);function c(e){return String(e).replace(/(\d{3})(\d{3})(\d{4})/,"+1($1)$2-$3")}function i(e,t){return(0,a.uf)(e,{type:"currency",precision:t||0,currency:"USD"})}function r(e){return(0,a.p6)(new Date(e),"MM/dd/yyyy")}},47387:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var a=n(49256),c=n(64701),i=n(47919),r=n(30972);const l={class:"ticker"},u={class:"middle"},s={class:"title"},o={class:"total"},d={class:"value"};var p=(0,a.aZ)({__name:"ticker-card",props:{icon:{},tone:{},title:{},data:{default:null},total:{default:null},percentage:{}},setup(e){const t=e,n=(0,a.Fl)((()=>(t.data||[]).reduce(((e,{value:t,total:n})=>e+(t||n||0)),0))),p=()=>t.tone||(t.percentage>0?"positive":"negative");return(e,v)=>((0,a.wg)(),(0,a.iD)("div",l,[(0,a._)("div",{class:(0,c.C_)(["icon-wrapper",p()])},[(0,a._)("i",{class:(0,c.C_)(`dx-icon dx-icon-${e.icon} `)},null,2)],2),(0,a._)("div",u,[(0,a._)("div",s,(0,c.zw)(e.title),1),(0,a._)("div",o,(0,c.zw)(null===e.total?(0,i.SU)(r.T4)(n.value):e.total),1)]),0!==t.percentage?((0,a.wg)(),(0,a.iD)("div",{key:0,class:(0,c.C_)(["percentage",e.percentage>0?"positive":"negative"])},[(0,a._)("div",{class:(0,c.C_)(["dx-icon-"+(e.percentage>0?"spinup":"spindown")])},null,2),(0,a._)("div",d,(0,c.zw)(Math.abs(e.percentage))+"% ",1)],2)):(0,a.kq)("",!0)]))}}),v=n(97179);const _=(0,v.Z)(p,[["__scopeId","data-v-78c3b0a8"]]);var f=_}}]);