function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{eTLM:function(n,e,t){"use strict";t.d(e,"a",(function(){return m}));var c=t("ofXK"),a=t("tyNb"),i=t("wZkO"),r=t("NFeN"),o=t("Wp6s"),s=t("sHJK"),l=t("ZI6o"),f=t("dE5l"),u=t("fXoL"),m=function(){var n=function n(){_classCallCheck(this,n)};return n.\u0275mod=u.Rb({type:n}),n.\u0275inj=u.Qb({factory:function(e){return new(e||n)},providers:[],imports:[[c.c,a.f,r.b,o.e,i.f,l.a,s.a,f.a]]}),n}()},gNzS:function(n,e,t){"use strict";t.r(e);var c=t("ofXK"),a=t("tyNb"),i=t("d3UM"),r=t("NFeN"),o=t("/OM5"),s=t("eTLM"),l=t("Q3DV"),f=t("fXoL"),u=t("7RBA"),m=t("AzUz");function p(n,e){if(1&n&&(f.Yb(0,"span"),f.Qc(1),f.Xb()),2&n){var t=f.kc(3).$implicit;f.Fb(1),f.Sc("Min length value: ",t.minLength,"")}}function b(n,e){if(1&n&&(f.Yb(0,"span"),f.Qc(1),f.Xb()),2&n){var t=f.kc(3).$implicit;f.Fb(1),f.Sc("Max length value: ",t.minLength,"")}}function d(n,e){if(1&n&&(f.Yb(0,"span"),f.Qc(1,"\n          "),f.Oc(2,p,2,1,"span",3),f.Qc(3,"\n          "),f.Oc(4,b,2,1,"span",3),f.Qc(5,"\n        "),f.Xb()),2&n){var t=f.kc().control;f.Fb(2),f.qc("ngIf",t.hasError("minlength")),f.Fb(2),f.qc("ngIf",t.hasError("maxlength"))}}function h(n,e){if(1&n&&(f.Qc(0,"\n        "),f.Oc(1,d,6,2,"span",3),f.Qc(2,"\n    ")),2&n){var t=e.control;f.Fb(1),f.qc("ngIf",t.touched||!t.pristine)}}function y(n,e){if(1&n&&(f.Qc(0,"\n    "),f.Oc(1,h,3,1,"ng-template",2),f.Qc(2,"\n  ")),2&n){var t=e.$implicit;f.Fb(1),f.qc("tdDynamicFormsError",t.name)}}var g,v=((g=function n(){_classCallCheck(this,n),this.textElements=[{name:"input",hint:"this is an input hint",type:o.b.Input,required:!1,flex:50},{name:"required-input",label:"Input Label",type:o.b.Input,required:!0,flex:50},{name:"text-length",label:"Text Length",type:o.b.Input,minLength:4,maxLength:12,flex:50},{name:"text",type:o.c.Text,required:!1,default:"Default",flex:50,disabled:!0},{name:"textarea",hint:"this is a textarea hint",type:o.b.Textarea,required:!1},{name:"required-password",label:"Password Label",type:o.b.Password,required:!0}]}).\u0275fac=function(n){return new(n||g)},g.\u0275cmp=f.Nb({type:g,selectors:[["dynamic-forms-demo"]],decls:4,vars:2,consts:[[3,"elements"],["ngFor","",3,"ngForOf"],[3,"tdDynamicFormsError"],[4,"ngIf"]],template:function(n,e){1&n&&(f.Yb(0,"td-dynamic-forms",0),f.Qc(1,"\n  "),f.Oc(2,y,3,1,"ng-template",1),f.Qc(3,"\n"),f.Xb()),2&n&&(f.qc("elements",e.textElements),f.Fb(2),f.qc("ngForOf",e.textElements))},directives:[u.a,c.s,m.c,c.t],styles:[""]}),g);t.d(e,"DynamicFormsDemoModule",(function(){return F}));var x,w=Object(l.c)({overviewDemoComponent:v,id:"dynamic-forms"}),F=((x=function n(){_classCallCheck(this,n)}).\u0275mod=f.Rb({type:x}),x.\u0275inj=f.Qb({factory:function(n){return new(n||x)},providers:[],imports:[[c.c,i.b,r.b,o.a,s.a,a.f.forChild(w)]]}),x)}}]);