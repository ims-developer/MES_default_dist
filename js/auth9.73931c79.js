"use strict";(self["webpackChunkvue_ui_teplate_gallery"]=self["webpackChunkvue_ui_teplate_gallery"]||[]).push([[8249],{74612:function(e,a,s){s.r(a),s.d(a,{default:function(){return f}});s(44936);var t=s(49256),o=s(28802),d=s(47919),r=s(45991),i=s(12841),l=s(86187),n=s(76107),u=s(84048);const w={class:"dx-button-text"},m={key:1};var p=(0,t.aZ)({__name:"change-password-form",setup(e){const a=(0,n.tv)(),s=(0,n.yj)(),p=(0,d.iH)(""),c=(0,d.iH)(!1),f=(0,d.qj)({password:""});async function v(){const{password:e}=f;c.value=!0;const s=await u.Y.changePassword(e,p.value);c.value=!1,s.isOk?a.push("/login"):(0,l.Z)(s.message,"error",2e3)}function g(e){return e.value===f.password}return p.value=s.params.recoveryCode,(e,a)=>((0,t.wg)(),(0,t.iD)("form",{onSubmit:(0,o.iM)(v,["prevent"])},[(0,t.Wm)((0,d.SU)(r.ZP),{"form-data":f,disabled:c.value},{changePassword:(0,t.w5)((()=>[(0,t._)("div",null,[(0,t._)("span",w,[c.value?((0,t.wg)(),(0,t.j4)((0,d.SU)(i.Z),{key:0,width:"24px",height:"24px",visible:!0})):(0,t.kq)("",!0),c.value?(0,t.kq)("",!0):((0,t.wg)(),(0,t.iD)("span",m,"Continue"))])])])),default:(0,t.w5)((()=>[(0,t.Wm)((0,d.SU)(r.wy),{"data-field":"password","editor-type":"dxTextBox","editor-options":{stylingMode:"filled",placeholder:"Password",mode:"password"}},{default:(0,t.w5)((()=>[(0,t.Wm)((0,d.SU)(r.VD),{message:"Password is required"}),(0,t.Wm)((0,d.SU)(r.kN),{visible:!1})])),_:1}),(0,t.Wm)((0,d.SU)(r.wy),{"data-field":"confirmedPassword","editor-type":"dxTextBox","editor-options":{stylingMode:"filled",placeholder:"Confirm Password",mode:"password"}},{default:(0,t.w5)((()=>[(0,t.Wm)((0,d.SU)(r.VD),{message:"Password is required"}),(0,t.Wm)((0,d.SU)(r.gu),{message:"Passwords do not match","validation-callback":g}),(0,t.Wm)((0,d.SU)(r.kN),{visible:!1})])),_:1}),(0,t.Wm)((0,d.SU)(r.sY),null,{default:(0,t.w5)((()=>[(0,t.Wm)((0,d.SU)(r.lU),{width:"100%",type:"default",template:"changePassword","use-submit-behavior":!0})])),_:1})])),_:1},8,["form-data","disabled"])],32))}});const c=p;var f=c}}]);