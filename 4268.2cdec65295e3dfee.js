"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[4268],{9602:(m,d,r)=>{r.d(d,{y:()=>g});var s=r(1281),c=r(8288),t=r(4650),l=r(6895);function i(a,n){1&a&&(t.ynx(0),t.TgZ(1,"div",1),t.Hsn(2),t.qZA(),t.TgZ(3,"div",2),t.Hsn(4,1),t.qZA(),t.BQk())}function e(a,n){1&a&&(t.TgZ(0,"div",4),t.Hsn(1,3),t.qZA()),2&a&&t.Q6J("@expandCollapse",void 0)}function f(a,n){if(1&a&&(t.ynx(0),t.Hsn(1,2),t.YNc(2,e,2,1,"div",3),t.BQk()),2&a){const o=t.oxw();t.xp6(2),t.Q6J("ngIf",o.expanded)}}const x=[[["","fuseCardFront",""]],[["","fuseCardBack",""]],"*",[["","fuseCardExpansion",""]]],p=["[fuseCardFront]","[fuseCardBack]","*","[fuseCardExpansion]"];let g=(()=>{class a{constructor(){this.expanded=!1,this.face="front",this.flippable=!1}get classList(){return{"fuse-card-expanded":this.expanded,"fuse-card-face-back":this.flippable&&"back"===this.face,"fuse-card-face-front":this.flippable&&"front"===this.face,"fuse-card-flippable":this.flippable}}ngOnChanges(o){"expanded"in o&&(this.expanded=(0,s.Ig)(o.expanded.currentValue)),"flippable"in o&&(this.flippable=(0,s.Ig)(o.flippable.currentValue))}}return a.\u0275fac=function(o){return new(o||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["fuse-card"]],hostVars:2,hostBindings:function(o,u){2&o&&t.Tol(u.classList)},inputs:{expanded:"expanded",face:"face",flippable:"flippable"},exportAs:["fuseCard"],features:[t.TTD],ngContentSelectors:p,decls:2,vars:2,consts:[[4,"ngIf"],[1,"fuse-card-front"],[1,"fuse-card-back"],["class","fuse-card-expansion",4,"ngIf"],[1,"fuse-card-expansion"]],template:function(o,u){1&o&&(t.F$t(x),t.YNc(0,i,5,0,"ng-container",0),t.YNc(1,f,3,1,"ng-container",0)),2&o&&(t.Q6J("ngIf",u.flippable),t.xp6(1),t.Q6J("ngIf",!u.flippable))},dependencies:[l.O5],styles:["fuse-card{position:relative;display:flex;overflow:hidden;--tw-bg-opacity: 1;background-color:rgba(var(--fuse-bg-card-rgb),var(--tw-bg-opacity));border-radius:1rem;--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}fuse-card.fuse-card-flippable{border-radius:0;overflow:visible;transform-style:preserve-3d;transition:transform 1s;perspective:600px;background:transparent;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}fuse-card.fuse-card-flippable.fuse-card-face-back .fuse-card-front{visibility:hidden;opacity:0;transform:rotateY(180deg)}fuse-card.fuse-card-flippable.fuse-card-face-back .fuse-card-back{visibility:visible;opacity:1;transform:rotateY(360deg)}fuse-card.fuse-card-flippable .fuse-card-front,fuse-card.fuse-card-flippable .fuse-card-back{display:flex;flex-direction:column;flex:1 1 auto;z-index:10;transition:transform .5s ease-out 0s,visibility 0s ease-in .2s,opacity 0s ease-in .2s;-webkit-backface-visibility:hidden;backface-visibility:hidden;--tw-bg-opacity: 1;background-color:rgba(var(--fuse-bg-card-rgb),var(--tw-bg-opacity));border-radius:1rem;--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}fuse-card.fuse-card-flippable .fuse-card-front{position:relative;opacity:1;visibility:visible;transform:rotateY(0);overflow:hidden}fuse-card.fuse-card-flippable .fuse-card-back{position:absolute;inset:0;opacity:0;visibility:hidden;transform:rotateY(180deg);overflow:hidden auto}\n"],encapsulation:2,data:{animation:c.L}}),a})()},5804:(m,d,r)=>{r.d(d,{y:()=>s.y,J:()=>l});var s=r(9602),c=r(6895),t=r(4650);let l=(()=>{class i{}return i.\u0275fac=function(f){return new(f||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[c.ez]}),i})()},4268:(m,d,r)=>{r.r(d),r.d(d,{AuthConfirmationRequiredModule:()=>g});var s=r(9132),c=r(4859),t=r(5804),l=r(4466),i=r(8288),e=r(4650);const f=function(){return["/sign-in"]},p=[{path:"",component:(()=>{class a{constructor(){}}return a.\u0275fac=function(o){return new(o||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["auth-confirmation-required"]],decls:40,vars:2,consts:[[1,"flex","flex-col","sm:flex-row","items-center","md:items-start","sm:justify-center","md:justify-start","flex-auto","min-w-0"],[1,"md:flex","md:items-center","md:justify-end","w-full","sm:w-auto","md:h-full","md:w-1/2","py-8","px-4","sm:p-12","md:p-16","sm:rounded-2xl","md:rounded-none","sm:shadow","md:shadow-none","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-12"],["src","assets/images/logo/logo.svg"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight"],[1,"mt-4"],[1,"mt-8","text-md","font-medium","text-secondary"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],[1,"relative","hidden","md:flex","flex-auto","items-center","justify-center","w-1/2","h-full","p-16","lg:px-28","overflow-hidden","bg-gray-800","dark:border-l"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],["viewBox","0 0 220 192","width","220","height","192","fill","none",1,"absolute","-top-16","-right-16","text-gray-700"],["id","837c3e70-6c3a-44e6-8854-cc48c737b659","x","0","y","0","width","20","height","20","patternUnits","userSpaceOnUse"],["x","0","y","0","width","4","height","4","fill","currentColor"],["width","220","height","192","fill","url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"],[1,"z-10","relative","w-full","max-w-2xl"],[1,"text-7xl","font-bold","leading-none","text-gray-100"],[1,"mt-6","text-lg","tracking-tight","leading-6","text-gray-400"],[1,"flex","items-center","mt-8"],[1,"flex","flex-0","items-center","-space-x-1.5"],["src","assets/images/avatars/female-18.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/female-11.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-09.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-16.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],[1,"ml-4","font-medium","tracking-tight","text-gray-400"]],template:function(o,u){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e._UZ(4,"img",4),e.qZA(),e.TgZ(5,"div",5),e._uU(6,"Confirmation required"),e.qZA(),e.TgZ(7,"div",6),e._uU(8," A confirmation mail with instructions has been sent to your email address. Follow those instructions to confirm your email address and activate your account. "),e.qZA(),e.TgZ(9,"div",7)(10,"span"),e._uU(11,"Return to"),e.qZA(),e.TgZ(12,"a",8),e._uU(13,"sign in "),e.qZA()()()(),e.TgZ(14,"div",9),e.O4$(),e.TgZ(15,"svg",10)(16,"g",11),e._UZ(17,"circle",12)(18,"circle",13),e.qZA()(),e.TgZ(19,"svg",14)(20,"defs")(21,"pattern",15),e._UZ(22,"rect",16),e.qZA()(),e._UZ(23,"rect",17),e.qZA(),e.kcU(),e.TgZ(24,"div",18)(25,"div",19)(26,"div"),e._uU(27,"Welcome to"),e.qZA(),e.TgZ(28,"div"),e._uU(29,"our community"),e.qZA()(),e.TgZ(30,"div",20),e._uU(31," Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today. "),e.qZA(),e.TgZ(32,"div",21)(33,"div",22),e._UZ(34,"img",23)(35,"img",24)(36,"img",25)(37,"img",26),e.qZA(),e.TgZ(38,"div",27),e._uU(39,"More than 17k people joined us, it's your turn"),e.qZA()()()()()),2&o&&(e.xp6(12),e.Q6J("routerLink",e.DdM(1,f)))},dependencies:[s.yS],encapsulation:2,data:{animation:i.L}}),a})()}];let g=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[s.Bz.forChild(p),c.ot,t.J,l.m]}),a})()}}]);