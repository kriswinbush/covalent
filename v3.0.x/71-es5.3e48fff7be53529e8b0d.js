function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{WJ7O:function(e,t,n){"use strict";n.r(t);var a=n("ofXK"),c=n("tyNb"),r=n("d3UM"),i=n("NFeN"),o=n("eTLM"),s=n("rDig"),l=n("dhly"),u=n("H9+E"),h=n("Qk+/"),m=n("NEPT"),d=n("sZfy"),f=n("mrSG"),b=n("MpVW"),p=n("fXoL"),v=n("kmnG"),y=n("cvES"),g=n("WKB1"),w=n("Y0Ja"),C=n("q5+X"),x=n("NEJn"),k=n("FKr1");function Q(e,t){if(1&e&&(p.Yb(0,"mat-option",10),p.Qc(1),p.Xb()),2&e){var n=t.$implicit;p.qc("value",n),p.Fb(1),p.Sc("\n        ",n,"\n      ")}}var T,F=function(){return{show:!0}},A=function(e){return{tooltip:e}},N=function(){return["Electronics","Toys","Grocery","Appliances","Automotive","Sports"]},_=function(){return[150,130,150,120,150,120]},O=function(){return[80,122,80,120,80,120]},X=((T=function(){function e(t,n){_classCallCheck(this,e),this._cdr=t,this.themeSelector=n,this.themes=Object(s.e)(),this.config={xAxis:[{data:["Electronics","Toys","Grocery","Appliances","Automotive","Sports"]}],yAxis:[{show:!0,type:"value",axisLabel:{inside:!1},min:0,max:300}],series:[{type:"bar",markPoint:{data:[{name:"Target",value:130,xAxis:1,yAxis:130}]},name:"Yesterday",data:[150,130,150,120,150,120]},{type:"line",markPoint:{data:[{name:"Target",value:100,xAxis:1,yAxis:121}],symbolRotate:180,label:{offset:[0,10]}},markLine:{data:[{name:"Average",value:30,xAxis:1,yAxis:30}],symbol:"circle"},name:"Today",data:[80,122,80,120,80,120]}],tooltip:{show:!0,trigger:"item",showContent:!0}}}return _createClass(e,[{key:"ngOnInit",value:function(){return Object(f.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.selectedTheme=this.themeSelector.selected,this._cdr.markForCheck();case 1:case"end":return e.stop()}}),e,this)})))}},{key:"selectChartTheme",value:function(e){this.themeSelector.select(e)}}]),e}()).\u0275fac=function(e){return new(e||T)(p.Tb(p.h),p.Tb(b.a))},T.\u0275cmp=p.Nb({type:T,selectors:[["types-combination"]],decls:26,vars:24,consts:[["layout","row","layout-align","start center"],["hide-xs","",1,"mat-subheading-2","pad-left","pad-right","push-bottom-none"],["floatLabel","never"],[3,"value","valueChange"],[3,"value",4,"ngFor","ngForOf"],[3,"themeName","config"],[3,"show","data"],[3,"show","type","min","max"],["td-bar","",3,"data","name"],["td-line","",3,"data","name"],[3,"value"]],template:function(e,t){1&e&&(p.Yb(0,"div",0),p.Qc(1,"\n  "),p.Yb(2,"div",1),p.Qc(3,"\n    Chart Theme:\n  "),p.Xb(),p.Qc(4,"\n  "),p.Yb(5,"mat-form-field",2),p.Qc(6,"\n    "),p.Yb(7,"mat-select",3),p.gc("valueChange",(function(e){return t.selectedTheme=e}))("valueChange",(function(e){return t.selectChartTheme(e)})),p.Qc(8,"\n      "),p.Oc(9,Q,2,2,"mat-option",4),p.Qc(10,"\n    "),p.Xb(),p.Qc(11,"\n  "),p.Xb(),p.Qc(12,"\n"),p.Xb(),p.Qc(13,"\n"),p.Yb(14,"td-chart",5),p.lc(15,"async"),p.Qc(16,"\n  "),p.Ub(17,"td-chart-x-axis",6),p.Qc(18,"\n  "),p.Ub(19,"td-chart-y-axis",7),p.Qc(20,"\n  "),p.Ub(21,"td-chart-series",8),p.Qc(22,"\n  "),p.Ub(23,"td-chart-series",9),p.Qc(24,"\n"),p.Xb(),p.Qc(25,"\n")),2&e&&(p.Fb(7),p.qc("value",t.selectedTheme),p.Fb(2),p.qc("ngForOf",t.themes),p.Fb(5),p.Nc("height",300,"px"),p.qc("themeName",p.mc(15,16,t.themeSelector.selected$))("config",p.uc(19,A,p.tc(18,F))),p.Fb(3),p.qc("show",!0)("data",p.tc(21,N)),p.Fb(2),p.qc("show",!0)("type","value")("min",0)("max",300),p.Fb(2),p.qc("data",p.tc(22,_))("name","Yesterday"),p.Fb(2),p.qc("data",p.tc(23,O))("name","Today"))},directives:[v.b,r.a,a.s,y.a,g.a,w.a,C.a,x.a,k.k],pipes:[a.b],styles:["[_nghost-%COMP%]{width:100%}"],changeDetection:0}),T),q=n("dE5l");n.d(t,"CombinationModule",(function(){return Y}));var E,S=Object(d.c)({overviewDemoComponent:X,id:"combination"}),Y=((E=function e(){_classCallCheck(this,e)}).\u0275mod=p.Rb({type:E}),E.\u0275inj=p.Qb({factory:function(e){return new(e||E)},providers:[],imports:[[a.c,r.b,i.b,s.a,l.a,u.a,h.a,m.a,o.a,q.a,c.f.forChild(S)]]}),E)},eTLM:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n("ofXK"),c=n("tyNb"),r=n("wZkO"),i=n("NFeN"),o=n("Wp6s"),s=n("sHJK"),l=n("ZI6o"),u=n("dE5l"),h=n("fXoL"),m=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=h.Rb({type:e}),e.\u0275inj=h.Qb({factory:function(t){return new(t||e)},providers:[],imports:[[a.c,c.f,i.b,o.e,r.f,l.a,s.a,u.a]]}),e}()}}]);