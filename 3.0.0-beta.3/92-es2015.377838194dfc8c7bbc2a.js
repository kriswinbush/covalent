(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{"6ut1":function(e,t,o){"use strict";o.r(t);var n=o("ofXK"),c=o("qeof"),r=o("tyNb"),a=o("fXoL"),i=o("MJ5V"),l=o("80CR"),s=o("bTqV");function d(e,t){1&e&&(a.Yb(0,"div"),a.Yb(1,"div",3),a.Qc(2," loading content... "),a.Xb(),a.Xb())}let b=(()=>{class e{constructor(e){this._loadingService=e,this.overlayStarSyntax=!1}toggleOverlayStarSyntax(){this.overlayStarSyntax=!this.overlayStarSyntax,this.overlayStarSyntax?this._loadingService.register("overlayStarSyntax"):this._loadingService.resolve("overlayStarSyntax")}}return e.\u0275fac=function(t){return new(t||e)(a.Tb(c.d))},e.\u0275cmp=a.Nb({type:e,selectors:[["loading-demo-basic"]],decls:4,vars:5,consts:[[4,"tdLoading","tdLoadingMode","tdLoadingType","tdLoadingStrategy","tdLoadingColor"],["layout","row"],["mat-raised-button","","color","primary",1,"text-upper",3,"click"],[1,"pad","text-center"]],template:function(e,t){1&e&&(a.Oc(0,d,3,0,"div",0),a.Yb(1,"div",1),a.Yb(2,"button",2),a.gc("click",(function(e){return t.toggleOverlayStarSyntax()})),a.Qc(3,"Toggle Loader"),a.Xb(),a.Xb()),2&e&&a.qc("tdLoading","overlayStarSyntax")("tdLoadingMode","indeterminate")("tdLoadingType","circle")("tdLoadingStrategy","overlay")("tdLoadingColor","accent")},directives:[l.a,s.b],styles:[""]}),e})();function u(e,t){1&e&&(a.Yb(0,"div",3),a.Qc(1," loading content... "),a.Xb())}let g=(()=>{class e{constructor(){this.loading=!1}toggle(){this.loading=!this.loading}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Nb({type:e,selectors:[["loading-demo-replace"]],decls:4,vars:1,consts:[["tdLoading","",3,"tdLoadingUntil"],["layout","row"],["mat-raised-button","","color","primary",1,"text-upper",3,"click"],[1,"pad","text-center"]],template:function(e,t){1&e&&(a.Oc(0,u,2,0,"ng-template",0),a.Yb(1,"div",1),a.Yb(2,"button",2),a.gc("click",(function(e){return t.toggle()})),a.Qc(3,"Toggle Loader"),a.Xb(),a.Xb()),2&e&&a.qc("tdLoadingUntil",!t.loading)},directives:[l.a,s.b],styles:[""]}),e})();var m=o("2Vo4");function p(e,t){if(1&e&&(a.Yb(0,"div"),a.Yb(1,"div",3),a.Qc(2),a.Xb(),a.Xb()),2&e){const e=t.$implicit;a.Fb(2),a.Sc(" ",e.name," ")}}let v=(()=>{class e{constructor(){this._subject=new m.a({name:"I am here!"}),this.observable$=this._subject.asObservable()}toggle(){this._subject=new m.a(void 0),this.observable$=this._subject.asObservable(),setTimeout(()=>{this._subject.next({name:"I am here!"})},1e3)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Nb({type:e,selectors:[["loading-demo-observable"]],decls:5,vars:3,consts:[[4,"tdLoading","tdLoadingUntil"],["layout","row"],["mat-raised-button","","color","primary",1,"text-upper",3,"click"],[1,"pad","text-center"]],template:function(e,t){1&e&&(a.Oc(0,p,3,1,"div",0),a.lc(1,"async"),a.Yb(2,"div",1),a.Yb(3,"button",2),a.gc("click",(function(e){return t.toggle()})),a.Qc(4,"Toggle Loader"),a.Xb(),a.Xb()),2&e&&a.qc("tdLoadingUntil",a.mc(1,1,t.observable$))},directives:[l.a,s.b],pipes:[n.b],styles:[""]}),e})(),y=(()=>{class e{constructor(e){this._loadingService=e,this._loadingService.create({name:"customFullscreenDemo",mode:c.b.Indeterminate,type:c.c.Linear,color:"accent"})}toggleDefaultFullscreenDemo(){this._loadingService.register(),setTimeout(()=>this._loadingService.resolve(),1500)}toggleCustomFullscreenDemo(){this._loadingService.register("customFullscreenDemo"),setTimeout(()=>this._loadingService.resolve("customFullscreenDemo"),1500)}}return e.\u0275fac=function(t){return new(t||e)(a.Tb(c.d))},e.\u0275cmp=a.Nb({type:e,selectors:[["loading-demo-fullscreen"]],decls:4,vars:0,consts:[["mat-raised-button","","color","primary",1,"text-upper",3,"click"]],template:function(e,t){1&e&&(a.Yb(0,"button",0),a.gc("click",(function(e){return t.toggleDefaultFullscreenDemo()})),a.Qc(1,"Toggle default fullscreen Loader"),a.Xb(),a.Yb(2,"button",0),a.gc("click",(function(e){return t.toggleCustomFullscreenDemo()})),a.Qc(3,"Toggle custom Fullscreen Loader"),a.Xb())},directives:[s.b],styles:["button[_ngcontent-%COMP%]{margin-right:1em}"]}),e})();const f=[{path:"",component:(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Nb({type:e,selectors:[["loading-demo"]],decls:8,vars:4,consts:[[3,"demoId"]],template:function(e,t){1&e&&(a.Yb(0,"demo-component",0),a.Ub(1,"loading-demo-basic"),a.Xb(),a.Yb(2,"demo-component",0),a.Ub(3,"loading-demo-replace"),a.Xb(),a.Yb(4,"demo-component",0),a.Ub(5,"loading-demo-observable"),a.Xb(),a.Yb(6,"demo-component",0),a.Ub(7,"loading-demo-fullscreen"),a.Xb()),2&e&&(a.qc("demoId","loading-demo-basic"),a.Fb(2),a.qc("demoId","loading-demo-replace"),a.Fb(2),a.qc("demoId","loading-demo-observable"),a.Fb(2),a.qc("demoId","loading-demo-fullscreen"))},directives:[i.a,b,g,v,y],styles:[""]}),e})()}];let S=(()=>{class e{}return e.\u0275mod=a.Rb({type:e}),e.\u0275inj=a.Qb({factory:function(t){return new(t||e)},imports:[[r.f.forChild(f)],r.f]}),e})();var h=o("Krbs");o.d(t,"LoadingDemoModule",(function(){return L}));let L=(()=>{class e{}return e.\u0275mod=a.Rb({type:e}),e.\u0275inj=a.Qb({factory:function(t){return new(t||e)},imports:[[h.a,S,c.a,n.c,s.c]]}),e})()}}]);