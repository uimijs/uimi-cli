/*!
 * /*!
 *  * app/form/js/edit v1.0.0
 *  * Copyright (c) 2019-2020 undefined
 *  * Tue Dec 08 2020 16:11:17 GMT+0800 (GMT+08:00)
 *  * All rights reserved.
 *  * /
 */!function(e){var t={};function c(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=t,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c(c.s=18)}({0:function(e,t){e.exports=Vue},18:function(e,t,c){"use strict";c.r(t);c(8),c(9);var a=c(0);const n=Object(a.createVNode)("header",null,[Object(a.createVNode)("div",null,"单据设置页面测试")],-1),l={class:"d-flex"},o=Object(a.createVNode)("div",{class:"center col scrollbar"},[Object(a.createVNode)("div",{class:"page",contenteditable:"true"})],-1),r=Object(a.createVNode)("div",{class:"right scrollbar"},[Object(a.createVNode)("div",{class:"form-group mt-2"},[Object(a.createVNode)("div",{class:"input-group input-group-sm","data-toggle":"collapse","data-target":"#tree"},[Object(a.createVNode)("input",{type:"text",class:"form-control",id:"sub_items",child_data:"",readonly:""}),Object(a.createVNode)("div",{class:"input-group-append"},[Object(a.createVNode)("span",{class:"input-group-text"},[Object(a.createVNode)("i",{class:"fa fa-chevron-down"})])])])])],-1);const i={class:"elements-list"},d={class:"nav row-cols-2"};var s=[{name:"基础字段",data:{label:{name:"文本标签",icon:"fa fa-font",html:'<div class="el"><label>文本标签</label></div>',children:!0},input:{name:"单行输入框",icon:"fa fa-window-maximize",html:'<div class="el"><input type="text" class="form-control"></div>',children:!0},textarea:{name:"多行输入框",icon:"fa fa-wpforms",html:'<div class="el"><textarea class="form-control"></textarea></div>',children:!0},select:{name:"选择框",icon:"fa fa-list-ol",html:'<select class="form-control" ><option>1</option><option>2</option></select>'},radio:{name:"单选框",icon:"fa fa-dot-circle-o",html:'<div class="el"><input type="radio" class="form-check-input"></div>',children:!0},checkbox:{name:"复选框",icon:"fa fa-check-square-o",html:'<div class="el"><input type="checkbox" class="form-check-input"></div>',children:!0},table:{name:"表格",icon:"fa fa-table",html:'<div class="el"><table class="table table-bordered"><thead><tr><th></th><th></th><th></th><th></th></tr></thead><tbody><tr><td></td><td></td><td></td><td></td></tr></tbody></table></div>',children:!0}}},{name:"高级字段",data:{check:{name:"切换开关",icon:"fa fa-toggle-on",html:'<div class="el"><input type="checkbox" class="form-check-input"></div>',children:!0},slider:{name:"进度条",icon:"fa fa-sliders",html:'<div class="el"><input type="checkbox" class="form-check-input"></div>',children:!0}}},{name:"布局字段",data:{label:{name:"栅格布局",icon:"fa fa-columns",html:'<div class="el"><label>文本标签</label></div>',children:!0},line:{name:"分割线",icon:"fa fa-minus",html:'<div class="el"><label>文本标签</label></div>',children:!0}}}];var u={data:function(){return{elhtml:s}},beforeCreate:function(){},methods:{},created:function(){this.$nextTick((function(){}))},render:function(e,t,c,n,l,o){return Object(a.openBlock)(),Object(a.createBlock)("div",i,[(Object(a.openBlock)(!0),Object(a.createBlock)(a.Fragment,null,Object(a.renderList)(l.elhtml,t=>(Object(a.openBlock)(),Object(a.createBlock)("div",{key:t},[Object(a.createVNode)("div",{class:"elements-header",textContent:Object(a.toDisplayString)(t.name)},null,8,["textContent"]),Object(a.createVNode)("ul",d,[(Object(a.openBlock)(!0),Object(a.createBlock)(a.Fragment,null,Object(a.renderList)(t.data,(t,c)=>(Object(a.openBlock)(),Object(a.createBlock)("li",{key:c},[Object(a.createVNode)("a",{name:c,draggable:"true",ondragstart:e.drag},[Object(a.createVNode)("i",{class:t.icon},null,2),Object(a.createVNode)("span",{textContent:Object(a.toDisplayString)(t.name)},null,8,["textContent"])],8,["name","ondragstart"])]))),128))])]))),128))])}},b={components:{LeftMenu:u}};$(".page").sortable({}),b.render=function(e,t,c,i,d,s){const u=Object(a.resolveComponent)("left-menu");return Object(a.openBlock)(),Object(a.createBlock)("div",null,[n,Object(a.createVNode)("div",l,[Object(a.createCommentVNode)("left"),Object(a.createVNode)(u),o,r])])};var f=b;Object(a.createApp)(f).mount("#app")},8:function(e,t,c){},9:function(e,t,c){}});
//# sourceMappingURL=edit.js.map?v=463a60b1d1c4a5ba0e23