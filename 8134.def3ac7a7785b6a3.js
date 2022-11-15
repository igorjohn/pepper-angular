"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[8134],{8134:(k,u,r)=>{r.r(u),r.d(u,{AuthResetPasswordModule:()=>q});var c=r(9132),f=r(4859),l=r(9549),p=r(7392),g=r(284),h=r(1572),w=r(5804),x=r(7775),y=r(4466),m=r(4006),v=r(8746),Z=r(8288);class A{static isEmptyInputValue(s){return null==s||0===s.length}static mustMatch(s,o){return n=>{const i=n.get(s),a=n.get(o);if(!i||!a||(a.hasError("mustMatch")&&(delete a.errors.mustMatch,a.updateValueAndValidity()),this.isEmptyInputValue(a.value)||i.value===a.value))return null;const d={mustMatch:!0};return a.setErrors(d),d}}}var t=r(4650),P=r(8951),C=r(8214),T=r(6895);const R=["resetPasswordNgForm"];function U(e,s){if(1&e&&(t.TgZ(0,"fuse-alert",41),t._uU(1),t.qZA()),2&e){const o=t.oxw();t.Q6J("appearance","outline")("showIcon",!1)("type",o.alert.type)("@shake","error"===o.alert.type),t.xp6(1),t.hij(" ",o.alert.message," ")}}function I(e,s){1&e&&t._UZ(0,"mat-icon",42),2&e&&t.Q6J("svgIcon","heroicons_solid:eye")}function J(e,s){1&e&&t._UZ(0,"mat-icon",42),2&e&&t.Q6J("svgIcon","heroicons_solid:eye-off")}function b(e,s){1&e&&t._UZ(0,"mat-icon",42),2&e&&t.Q6J("svgIcon","heroicons_solid:eye")}function F(e,s){1&e&&t._UZ(0,"mat-icon",42),2&e&&t.Q6J("svgIcon","heroicons_solid:eye-off")}function Q(e,s){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Password confirmation is required "),t.qZA())}function N(e,s){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Passwords must match "),t.qZA())}function _(e,s){1&e&&(t.TgZ(0,"span"),t._uU(1," Reset your password "),t.qZA())}function M(e,s){1&e&&t._UZ(0,"mat-progress-spinner",43),2&e&&t.Q6J("diameter",24)("mode","indeterminate")}const j=function(){return["/sign-in"]},Y=[{path:"",component:(()=>{class e{constructor(o,n){this._authService=o,this._formBuilder=n,this.alert={type:"success",message:""},this.showAlert=!1}ngOnInit(){this.resetPasswordForm=this._formBuilder.group({password:["",m.kI.required],passwordConfirm:["",m.kI.required]},{validators:A.mustMatch("password","passwordConfirm")})}resetPassword(){this.resetPasswordForm.invalid||(this.resetPasswordForm.disable(),this.showAlert=!1,this._authService.resetPassword(this.resetPasswordForm.get("password").value).pipe((0,v.x)(()=>{this.resetPasswordForm.enable(),this.resetPasswordNgForm.resetForm(),this.showAlert=!0})).subscribe(o=>{this.alert={type:"success",message:"Your password has been reset."}},o=>{this.alert={type:"error",message:"Something went wrong, please try again."}}))}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(P.e),t.Y36(m.QS))},e.\u0275cmp=t.Xpm({type:e,selectors:[["auth-reset-password"]],viewQuery:function(o,n){if(1&o&&t.Gf(R,5),2&o){let i;t.iGM(i=t.CRH())&&(n.resetPasswordNgForm=i.first)}},decls:66,vars:16,consts:[[1,"flex","flex-col","sm:flex-row","items-center","md:items-start","sm:justify-center","md:justify-start","flex-auto","min-w-0"],[1,"md:flex","md:items-center","md:justify-end","w-full","sm:w-auto","md:h-full","md:w-1/2","py-8","px-4","sm:p-12","md:p-16","sm:rounded-2xl","md:rounded-none","sm:shadow","md:shadow-none","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-12"],["src","assets/images/logo/logo.svg"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight"],[1,"mt-0.5","font-medium"],["class","mt-8 -mb-4",3,"appearance","showIcon","type",4,"ngIf"],[1,"mt-8",3,"formGroup"],["resetPasswordNgForm","ngForm"],[1,"w-full"],["id","password","matInput","","type","password",3,"formControlName"],["passwordField",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],["id","password-confirm","matInput","","type","password",3,"formControlName"],["passwordConfirmField",""],[4,"ngIf"],["mat-flat-button","",1,"fuse-mat-button-large","w-full","mt-3",3,"color","disabled","click"],[3,"diameter","mode",4,"ngIf"],[1,"mt-8","text-md","font-medium","text-secondary"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],[1,"relative","hidden","md:flex","flex-auto","items-center","justify-center","w-1/2","h-full","p-16","lg:px-28","overflow-hidden","bg-gray-800","dark:border-l"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],["viewBox","0 0 220 192","width","220","height","192","fill","none",1,"absolute","-top-16","-right-16","text-gray-700"],["id","837c3e70-6c3a-44e6-8854-cc48c737b659","x","0","y","0","width","20","height","20","patternUnits","userSpaceOnUse"],["x","0","y","0","width","4","height","4","fill","currentColor"],["width","220","height","192","fill","url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"],[1,"z-10","relative","w-full","max-w-2xl"],[1,"text-7xl","font-bold","leading-none","text-gray-100"],[1,"mt-6","text-lg","tracking-tight","leading-6","text-gray-400"],[1,"flex","items-center","mt-8"],[1,"flex","flex-0","items-center","-space-x-1.5"],["src","assets/images/avatars/female-18.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/female-11.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-09.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-16.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],[1,"ml-4","font-medium","tracking-tight","text-gray-400"],[1,"mt-8","-mb-4",3,"appearance","showIcon","type"],[1,"icon-size-5",3,"svgIcon"],[3,"diameter","mode"]],template:function(o,n){if(1&o){const i=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"div",5),t._uU(6,"Reset your password"),t.qZA(),t.TgZ(7,"div",6),t._uU(8,"Create a new password for your account"),t.qZA(),t.YNc(9,U,2,5,"fuse-alert",7),t.TgZ(10,"form",8,9)(12,"mat-form-field",10)(13,"mat-label"),t._uU(14,"Password"),t.qZA(),t._UZ(15,"input",11,12),t.TgZ(17,"button",13),t.NdJ("click",function(){t.CHM(i);const d=t.MAs(16);return t.KtG(d.type="password"===d.type?"text":"password")}),t.YNc(18,I,1,1,"mat-icon",14),t.YNc(19,J,1,1,"mat-icon",14),t.qZA(),t.TgZ(20,"mat-error"),t._uU(21," Password is required "),t.qZA()(),t.TgZ(22,"mat-form-field",10)(23,"mat-label"),t._uU(24,"Password (Confirm)"),t.qZA(),t._UZ(25,"input",15,16),t.TgZ(27,"button",13),t.NdJ("click",function(){t.CHM(i);const d=t.MAs(26);return t.KtG(d.type="password"===d.type?"text":"password")}),t.YNc(28,b,1,1,"mat-icon",14),t.YNc(29,F,1,1,"mat-icon",14),t.qZA(),t.YNc(30,Q,2,0,"mat-error",17),t.YNc(31,N,2,0,"mat-error",17),t.qZA(),t.TgZ(32,"button",18),t.NdJ("click",function(){return n.resetPassword()}),t.YNc(33,_,2,0,"span",17),t.YNc(34,M,1,2,"mat-progress-spinner",19),t.qZA(),t.TgZ(35,"div",20)(36,"span"),t._uU(37,"Return to"),t.qZA(),t.TgZ(38,"a",21),t._uU(39,"sign in "),t.qZA()()()()(),t.TgZ(40,"div",22),t.O4$(),t.TgZ(41,"svg",23)(42,"g",24),t._UZ(43,"circle",25)(44,"circle",26),t.qZA()(),t.TgZ(45,"svg",27)(46,"defs")(47,"pattern",28),t._UZ(48,"rect",29),t.qZA()(),t._UZ(49,"rect",30),t.qZA(),t.kcU(),t.TgZ(50,"div",31)(51,"div",32)(52,"div"),t._uU(53,"Welcome to"),t.qZA(),t.TgZ(54,"div"),t._uU(55,"our community"),t.qZA()(),t.TgZ(56,"div",33),t._uU(57," Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today. "),t.qZA(),t.TgZ(58,"div",34)(59,"div",35),t._UZ(60,"img",36)(61,"img",37)(62,"img",38)(63,"img",39),t.qZA(),t.TgZ(64,"div",40),t._uU(65,"More than 17k people joined us, it's your turn"),t.qZA()()()()()}if(2&o){const i=t.MAs(16),a=t.MAs(26);t.xp6(9),t.Q6J("ngIf",n.showAlert),t.xp6(1),t.Q6J("formGroup",n.resetPasswordForm),t.xp6(5),t.Q6J("formControlName","password"),t.xp6(3),t.Q6J("ngIf","password"===i.type),t.xp6(1),t.Q6J("ngIf","text"===i.type),t.xp6(6),t.Q6J("formControlName","passwordConfirm"),t.xp6(3),t.Q6J("ngIf","password"===a.type),t.xp6(1),t.Q6J("ngIf","text"===a.type),t.xp6(1),t.Q6J("ngIf",n.resetPasswordForm.get("passwordConfirm").hasError("required")),t.xp6(1),t.Q6J("ngIf",n.resetPasswordForm.get("passwordConfirm").hasError("mustMatch")),t.xp6(1),t.Q6J("color","primary")("disabled",n.resetPasswordForm.disabled),t.xp6(1),t.Q6J("ngIf",!n.resetPasswordForm.disabled),t.xp6(1),t.Q6J("ngIf",n.resetPasswordForm.disabled),t.xp6(4),t.Q6J("routerLink",t.DdM(15,j))}},dependencies:[c.yS,f.lW,l.TO,l.KE,l.hX,l.R9,p.Hw,g.Nt,h.Ou,C.W,T.O5,m._Y,m.Fj,m.JJ,m.JL,m.sg,m.u],encapsulation:2,data:{animation:Z.L}}),e})()}];let q=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.Bz.forChild(Y),f.ot,l.lN,p.Ps,g.c,h.Cq,w.J,x.fC,y.m]}),e})()}}]);