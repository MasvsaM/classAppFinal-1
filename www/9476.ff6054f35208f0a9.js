"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9476],{9476:(J,g,i)=>{i.r(g),i.d(g,{MainPageModule:()=>I});var s=i(6814),p=i(95),r=i(9004),u=i(4934),h=i(5861),n=i(5879),f=i(9992),M=i(5386),v=i(74);function P(o,a){if(1&o&&n._UZ(0,"img",11),2&o){const e=n.oxw();let t;n.Q6J("src",null==(t=e.user())?null:t.image,n.LSH)}}function O(o,a){1&o&&n._UZ(0,"ion-icon",12)}const C=function(o){return{active:o}};function x(o,a){if(1&o&&(n.TgZ(0,"ion-menu-toggle",7)(1,"ion-item",13),n._UZ(2,"ion-icon",14),n.TgZ(3,"ion-label"),n._uU(4),n.qZA()()()),2&o){const e=a.$implicit,t=n.oxw();n.xp6(1),n.Q6J("ngClass",n.VKq(4,C,t.currentPath===e.url))("routerLink",e.url),n.xp6(1),n.Q6J("name",e.icon),n.xp6(2),n.Oqu(e.title)}}let Z=(()=>{var o;class a{constructor(){this.pages=[{title:"Inicio",url:"/main/home",icon:"home-outline"},{title:"Perfil",url:"/main/profile",icon:"person-outline"}],this.router=(0,n.f3M)(u.F0),this.firebaseauthSvc=(0,n.f3M)(f.s),this.utilsSvc=(0,n.f3M)(M.F),this.currentPath=""}ngOnInit(){this.router.events.subscribe(t=>{null!=t&&t.url&&(this.currentPath=t.url)})}user(){return this.utilsSvc.getFromlocalStorage("user")}signOut(){var t=this;return(0,h.Z)(function*(){const l=yield t.utilsSvc.loading();yield l.present();try{yield t.firebaseauthSvc.signOut(),t.utilsSvc.presentToast({message:"Sesi\xf3n finalizada con \xe9xito",duration:1500,color:"success",position:"middle",icon:"checkmark-circle-outline"}),l.dismiss()}catch(c){console.error("Error al cerrar la sesi\xf3n",c)}})()}}return(o=a).\u0275fac=function(t){return new(t||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-main"]],decls:16,vars:4,consts:[["contentId","menu-content","menuId","menu-content","side","start"],["title","Men\xfa"],[1,"ion-text-center"],[3,"src",4,"ngIf"],["class","empty-icon","name","person-circle-outline",4,"ngIf"],["auto-hide","false",4,"ngFor","ngForOf"],[1,"ion-no-boder","safe-p-bottom"],["auto-hide","false"],["lines","none",3,"click"],["slot","start","name","log-out-outline"],["id","menu-content","main",""],[3,"src"],["name","person-circle-outline",1,"empty-icon"],["routerDirection","root","detail","",3,"ngClass","routerLink"],["slot","start",3,"name"]],template:function(t,l){if(1&t&&(n.TgZ(0,"ion-menu",0),n._UZ(1,"app-header",1),n.TgZ(2,"ion-content",2)(3,"ion-avatar"),n.YNc(4,P,1,1,"img",3),n.YNc(5,O,1,0,"ion-icon",4),n.qZA(),n.TgZ(6,"h4"),n._uU(7),n.qZA(),n.YNc(8,x,5,6,"ion-menu-toggle",5),n.qZA(),n.TgZ(9,"ion-footer",6)(10,"ion-menu-toggle",7)(11,"ion-item",8),n.NdJ("click",function(){return l.signOut()}),n._UZ(12,"ion-icon",9),n.TgZ(13,"ion-label"),n._uU(14,"Cerrar sesi\xf3n"),n.qZA()()()()(),n._UZ(15,"ion-router-outlet",10)),2&t){let c,m,d;n.xp6(4),n.Q6J("ngIf",null==(c=l.user())?null:c.image),n.xp6(1),n.Q6J("ngIf",!(null!=(m=l.user())&&m.image)),n.xp6(2),n.Oqu(null==(d=l.user())?null:d.name),n.xp6(1),n.Q6J("ngForOf",l.pages)}},dependencies:[s.mk,s.sg,s.O5,r.BJ,r.W2,r.fr,r.gu,r.Ie,r.Q$,r.z0,r.zc,r.jP,r.YI,u.rH,v.G],styles:["ion-content[_ngcontent-%COMP%]{--background: var(--ion-color-primary);--color: var(--ion-color-contrast);--pading-top: 20px}ion-item[_ngcontent-%COMP%]{font-size:14px;color:var(--ion-color-light);--background: var(--ion-color-primary)}ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--ion-color-light)}ion-item.active[_ngcontent-%COMP%]{color:var(--ion-color-warning)}ion-item.active[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--ion-color-warning)}h4[_ngcontent-%COMP%]{margin-top:5px;font-weight:700}ion-avatar[_ngcontent-%COMP%]{width:120px;height:120px;margin:10px auto}.empty-icon[_ngcontent-%COMP%]{font-size:100px}ion-menu[_ngcontent-%COMP%]{--width: 254px;--min-width: 254px;outline:none}ion-footer[_ngcontent-%COMP%]{background:var(--ion-color-primary)}"]}),a})();const T=[{path:"set-cursos",component:i(6602).j},{path:"",component:Z,children:[{path:"home",loadChildren:()=>i.e(6051).then(i.bind(i,6051)).then(o=>o.HomePageModule)},{path:"profile",loadChildren:()=>i.e(3080).then(i.bind(i,3080)).then(o=>o.ProfilePageModule)}]}];let F=(()=>{var o;class a{}return(o=a).\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[u.Bz.forChild(T),u.Bz]}),a})();var S=i(8554);let I=(()=>{var o;class a{}return(o=a).\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[s.ez,p.u5,r.Pc,F,S.m]}),a})()}}]);