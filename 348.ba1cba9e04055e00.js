"use strict";(self.webpackChunkbackoffice_frontend=self.webpackChunkbackoffice_frontend||[]).push([[348],{9348:(F,i,o)=>{o.r(i),o.d(i,{UsersModule:()=>T});var r=o(6895),c=o(1725),e=o(5062),a=o(2340),p=o(529);let l=(()=>{class s{constructor(t){this.http=t,this.url=`${a.N.end_point}/users`}getUsers(){return this.http.get(`${this.url}`)}}return s.\u0275fac=function(t){return new(t||s)(e.LFG(p.eN))},s.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})();var d=o(5493);function f(s,n){1&s&&(e.TgZ(0,"span",12),e._uU(1,"Activated"),e.qZA())}function m(s,n){1&s&&(e.TgZ(0,"span",12),e._uU(1,"Unactive"),e.qZA())}function g(s,n){if(1&s&&(e.TgZ(0,"tr",10)(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e.YNc(6,f,2,0,"span",11),e.YNc(7,m,2,0,"span",11),e.qZA(),e.TgZ(8,"td"),e._uU(9),e.ALo(10,"date"),e.qZA()()),2&s){const t=n.$implicit;e.xp6(2),e.Oqu(t.name),e.xp6(2),e.Oqu(t.email),e.xp6(2),e.Q6J("ngIf",t.isActive),e.xp6(1),e.Q6J("ngIf",!t.isActive),e.xp6(2),e.Oqu(e.xi3(10,5,t.createdAt,"MMM dd, YYYY HH:mm a"))}}function U(s,n){if(1&s&&(e.TgZ(0,"div",6)(1,"table",7)(2,"thead")(3,"tr")(4,"th",8),e._uU(5,"Name"),e.qZA(),e.TgZ(6,"th",8),e._uU(7,"Email"),e.qZA(),e.TgZ(8,"th",8),e._uU(9,"Is Active"),e.qZA(),e.TgZ(10,"th",8),e._uU(11,"Created At"),e.qZA()()(),e.TgZ(12,"tbody"),e.YNc(13,g,11,8,"tr",9),e.qZA()()()),2&s){const t=e.oxw();e.xp6(13),e.Q6J("ngForOf",t.users)}}function h(s,n){1&s&&e._UZ(0,"app-error-message",13),2&s&&e.Q6J("title","No Users Found")}const v=[{path:"",component:(()=>{class s{constructor(t){this.userSvc=t,this.users=[],this.isFound=!1}ngOnInit(){this.getUsers()}getUsers(){this.isFound=!1,this.userSvc.getUsers().subscribe(t=>{this.users=t.users,this.users&&this.users.length&&(this.isFound=!0),console.log(this.isFound)},t=>{this.isFound=!1})}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(l))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-users"]],decls:9,vars:2,consts:[[1,"container"],[1,"d-flex","justify-content-between","align-items-center","my-3"],[1,"title","d-flex","align-items-center"],[1,"material-icons","me-2"],["class","table-responsive",4,"ngIf"],[3,"title",4,"ngIf"],[1,"table-responsive"],[1,"table"],["scope","col"],["class","pointer",4,"ngFor","ngForOf"],[1,"pointer"],["class","badge bg-success",4,"ngIf"],[1,"badge","bg-success"],[3,"title"]],template:function(t,u){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"p",2)(3,"i",3),e._uU(4,"people"),e.qZA(),e._uU(5," Users"),e.qZA()(),e._UZ(6,"hr"),e.YNc(7,U,14,1,"div",4),e.YNc(8,h,1,1,"app-error-message",5),e.qZA()),2&t&&(e.xp6(7),e.Q6J("ngIf",u.isFound),e.xp6(1),e.Q6J("ngIf",!u.isFound))},dependencies:[r.sg,r.O5,d.H,r.uU]}),s})()}];let Z=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[c.Bz.forChild(v),c.Bz]}),s})();var A=o(6964);let T=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[r.ez,Z,A.m]}),s})()}}]);