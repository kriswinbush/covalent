function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{THbC:function(e,t,n){"use strict";n.r(t);var o,i,c,s=n("ofXK"),r=n("bTqV"),a=n("PWEM"),l=n("tyNb"),u=n("fXoL"),f=n("MJ5V"),p=((o=function(){function e(t){_classCallCheck(this,e),this._dialogService=t}return _createClass(e,[{key:"openAlert",value:function(){this._dialogService.openAlert({title:"Alert",disableClose:!0,message:"This is how simple it is to create an alert with this wrapper service."})}}]),e}()).\u0275fac=function(e){return new(e||o)(u.Tb(a.c))},o.\u0275cmp=u.Nb({type:o,selectors:[["dialogs-demo-basic"]],decls:2,vars:0,consts:[["mat-raised-button","","color","primary",1,"text-upper",3,"click"]],template:function(e,t){1&e&&(u.Yb(0,"button",0),u.gc("click",(function(e){return t.openAlert()})),u.Qc(1,"Open Alert"),u.Xb())},directives:[r.b],styles:[""]}),o),d=[{path:"",component:(i=function e(){_classCallCheck(this,e)},i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=u.Nb({type:i,selectors:[["dialogs-demo"]],decls:2,vars:1,consts:[[3,"demoId"]],template:function(e,t){1&e&&(u.Yb(0,"demo-component",0),u.Ub(1,"dialogs-demo-basic"),u.Xb()),2&e&&u.qc("demoId","dialogs-demo-basic")},directives:[f.a,p],styles:[""]}),i)}],b=((c=function e(){_classCallCheck(this,e)}).\u0275mod=u.Rb({type:c}),c.\u0275inj=u.Qb({factory:function(e){return new(e||c)},imports:[[l.f.forChild(d)],l.f]}),c),m=n("Krbs");n.d(t,"DialogsDemoModule",(function(){return w}));var h,w=((h=function e(){_classCallCheck(this,e)}).\u0275mod=u.Rb({type:h}),h.\u0275inj=u.Qb({factory:function(e){return new(e||h)},imports:[[m.a,b,a.a,s.c,r.c]]}),h)}}]);