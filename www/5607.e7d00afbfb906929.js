"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5607],{5607:(Q,m,n)=>{n.r(m),n.d(m,{AuthPageModule:()=>M});var f=n(6814),l=n(95),u=n(9004),c=n(4934),g=n(5861),o=n(5879),p=n(9992),v=n(5386),h=n(74),A=n(5890),P=n(140);function y(t,i){1&t&&(o.TgZ(0,"div"),o._uU(1,"El correo es requerido"),o.qZA())}function T(t,i){1&t&&(o.TgZ(0,"div"),o._uU(1,"Ingrese un correo v\xe1lido"),o.qZA())}function Z(t,i){if(1&t&&(o.TgZ(0,"div",9),o.YNc(1,y,2,0,"div",10),o.YNc(2,T,2,0,"div",10),o.qZA()),2&t){const r=o.oxw();o.xp6(1),o.Q6J("ngIf",null==r.form.controls.email.errors?null:r.form.controls.email.errors.required),o.xp6(1),o.Q6J("ngIf",null==r.form.controls.email.errors?null:r.form.controls.email.errors.email)}}function I(t,i){1&t&&(o.TgZ(0,"div"),o._uU(1,"La contrase\xf1a es requerida"),o.qZA())}function S(t,i){if(1&t&&(o.TgZ(0,"div",9),o.YNc(1,I,2,0,"div",10),o.qZA()),2&t){const r=o.oxw();o.xp6(1),o.Q6J("ngIf",null==r.form.controls.password.errors?null:r.form.controls.password.errors.required)}}const J=[{path:"",component:(()=>{var t;class i{constructor(){this.form=new l.cw({email:new l.NI("",[l.kI.required,l.kI.email]),password:new l.NI("",[l.kI.required])}),this.firebaseauthSvc=(0,o.f3M)(p.s),this.utilsSvc=(0,o.f3M)(v.F)}ngOnInit(){}submit(){var s=this;return(0,g.Z)(function*(){if(s.form.valid){const e=yield s.utilsSvc.loading();yield e.present(),s.firebaseauthSvc.signIn(s.form.value).then(a=>{s.getUserInfo(a.user.uid)}).catch(a=>{console.log(a),s.utilsSvc.presentToast({message:a.message,duration:2500,color:"primary",position:"middle",icon:"alert-circle-outline"})}).finally(()=>{e.dismiss()})}})()}getUserInfo(s){var e=this;return(0,g.Z)(function*(){if(e.form.valid){const a=yield e.utilsSvc.loading();yield a.present(),e.firebaseauthSvc.getDocument(`users/${s}`).then(d=>{e.utilsSvc.saveInlocalStorage("user",d),e.utilsSvc.routerlink("/main/home"),e.form.reset(),e.utilsSvc.presentToast({message:`Te damos la bienvenida ${d.name}`,duration:2e3,color:"primary",position:"middle",icon:"person-circle-outline"})}).catch(d=>{console.log(d),e.utilsSvc.presentToast({message:d.message,duration:2500,color:"primary",position:"middle",icon:"alert-circle-outline"})}).finally(()=>{a.dismiss()})}})()}}return(t=i).\u0275fac=function(s){return new(s||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-auth"]],decls:14,vars:6,consts:[["title","Login"],[1,"d-flex-center"],[1,"auth-form",3,"formGroup","ngSubmit","keypress.enter"],["autocomplete","email","icon","mail-outline","type","email","label","Correo",3,"control"],["class","validators",4,"ngIf"],["icon","lock-closed-outline","type","password","label","Contrase\xf1a",3,"control"],["routerLink","forgot-password",1,"ion-text-end"],["expand","block","mode","ios","type","submit",1,"submit",3,"disabled"],["slot","end","name","log-in-outline"],[1,"validators"],[4,"ngIf"]],template:function(s,e){1&s&&(o._UZ(0,"app-header",0),o.TgZ(1,"ion-content")(2,"div",1)(3,"form",2),o.NdJ("ngSubmit",function(){return e.submit()})("keypress.enter",function(){return e.submit()}),o._UZ(4,"app-logo")(5,"app-custom-input",3),o.YNc(6,Z,3,2,"div",4),o._UZ(7,"app-custom-input",5),o.YNc(8,S,2,1,"div",4),o.TgZ(9,"p",6),o._uU(10,"\xbfOlvidaste tu contrase\xf1a?"),o.qZA(),o.TgZ(11,"ion-button",7),o._uU(12," Ingresar "),o._UZ(13,"ion-icon",8),o.qZA()()()()),2&s&&(o.xp6(3),o.Q6J("formGroup",e.form),o.xp6(2),o.Q6J("control",e.form.controls.email),o.xp6(1),o.Q6J("ngIf",e.form.controls.email.errors&&e.form.controls.email.touched),o.xp6(1),o.Q6J("control",e.form.controls.password),o.xp6(1),o.Q6J("ngIf",e.form.controls.password.errors&&e.form.controls.password.touched),o.xp6(3),o.Q6J("disabled",e.form.invalid))},dependencies:[f.O5,l._Y,l.JL,u.YG,u.W2,u.gu,u.YI,c.rH,h.G,A.O,l.sg,P.R]}),i})()},{path:"forgot-password",loadChildren:()=>n.e(4159).then(n.bind(n,4159)).then(t=>t.ForgotPasswordPageModule)},{path:"sign-up",loadChildren:()=>n.e(8592).then(n.bind(n,3053)).then(t=>t.SignUpPageModule)}];let U=(()=>{var t;class i{}return(t=i).\u0275fac=function(s){return new(s||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[c.Bz.forChild(J),c.Bz]}),i})();var x=n(8554);let M=(()=>{var t;class i{}return(t=i).\u0275fac=function(s){return new(s||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[f.ez,l.u5,u.Pc,U,x.m]}),i})()}}]);