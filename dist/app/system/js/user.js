/*!
 * /*!
 *  * app/system/js/user v1.0.0
 *  * Copyright (c) 2019-2020 undefined
 *  * Tue Dec 08 2020 16:11:17 GMT+0800 (GMT+08:00)
 *  * All rights reserved.
 *  * /
 */!function(e){var t={};function c(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=t,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(a,r,function(t){return e[t]}.bind(null,r));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c(c.s=23)}({0:function(e,t){e.exports=Vue},13:function(e,t,c){"use strict";c(4)},23:function(e,t,c){"use strict";c.r(t);var a=c(0);const r={class:"container-fluid"},o={class:"row"},n={class:"d-flex col",style:{"max-width":"20rem"}},l={class:"flex-fill w-100 card",style:{"overflow-y":"scroll",height:"calc(100vh - 3rem)"}},i={class:"card-header"},d=Object(a.createVNode)("div",{class:"card-actions float-right"},[Object(a.createVNode)("div",{class:"dropdown"},[Object(a.createVNode)("a",{"aria-haspopup":"true",class:"","aria-expanded":"false"},[Object(a.createVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[Object(a.createVNode)("circle",{cx:"12",cy:"12",r:"1"}),Object(a.createVNode)("circle",{cx:"19",cy:"12",r:"1"}),Object(a.createVNode)("circle",{cx:"5",cy:"12",r:"1"})])]),Object(a.createVNode)("div",{tabindex:"-1",role:"menu","aria-hidden":"true",class:"dropdown-menu dropdown-menu-right"},[Object(a.createVNode)("button",{type:"button",tabindex:"0",role:"menuitem",class:"dropdown-item"}," Action "),Object(a.createVNode)("button",{type:"button",tabindex:"0",role:"menuitem",class:"dropdown-item"}," Another Action "),Object(a.createVNode)("button",{type:"button",tabindex:"0",role:"menuitem",class:"dropdown-item"}," Something else here ")])])],-1),s={class:"card-body py-0"},u=Object(a.createVNode)("input",{type:"text",class:"form-control mb-3",placeholder:"搜索"},null,-1),b={class:"d-flex col"},p={class:"flex-fill w-100 card"},j=Object(a.createVNode)("div",{class:"card-header"},[Object(a.createVNode)("div",{class:"card-actions float-right"},[Object(a.createVNode)("div",{class:"dropdown"},[Object(a.createVNode)("a",{"aria-haspopup":"true",class:"","aria-expanded":"false"},[Object(a.createVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[Object(a.createVNode)("circle",{cx:"12",cy:"12",r:"1"}),Object(a.createVNode)("circle",{cx:"19",cy:"12",r:"1"}),Object(a.createVNode)("circle",{cx:"5",cy:"12",r:"1"})])]),Object(a.createVNode)("div",{tabindex:"-1",role:"menu","aria-hidden":"true",class:"dropdown-menu dropdown-menu-right"},[Object(a.createVNode)("button",{type:"button",tabindex:"0",role:"menuitem",class:"dropdown-item"}," Action "),Object(a.createVNode)("button",{type:"button",tabindex:"0",role:"menuitem",class:"dropdown-item"}," Another Action "),Object(a.createVNode)("button",{type:"button",tabindex:"0",role:"menuitem",class:"dropdown-item"}," Something else here ")])])]),Object(a.createVNode)("h5",{class:"mb-0 card-title"},"部门用户")],-1),O={class:"card-body py-0"},m={class:"table-responsive"},f={class:"table table-hover"},h=Object(a.createVNode)("thead",null,[Object(a.createVNode)("tr",null,[Object(a.createVNode)("th",{colspan:"2"},"姓名"),Object(a.createVNode)("th",null,"职位"),Object(a.createVNode)("th",null,"工号"),Object(a.createVNode)("th",null,"手机"),Object(a.createVNode)("th",null,"邮箱")])],-1),V=Object(a.createStaticVNode)('<div class="d-flex justify-content-center"><ul class="pagination"><li class="page-item"><a class="page-link" href="#"><i class="fa fa-angle-left"></i></a></li><li class="page-item"><a class="page-link" href="#">1</a></li><li class="page-item active"><a class="page-link" href="#">2</a></li><li class="page-item"><a class="page-link" href="#">3</a></li><li class="page-item"><a class="page-link" href="#">•••</a></li><li class="page-item"><a class="page-link" href="#">100</a></li><li class="page-item"><a class="page-link" href="#"><i class="fa fa-angle-right"></i></a></li></ul></div>',1);var N={data:function(){return{corpname:"",appMenu:{},depid:-1,users:{}}},beforeCreate:function(){var e=this;console.log(this),yunxi.base.http({url:"/main/department/list",data:{token:yunxi.base.token},success:function(t){if(0===t.errcode){for(var c=t.data,a={},r=c.length,o=0;o<r;o++){var n=c[o].parentid||"0";a.hasOwnProperty(n)||(a[n]=[]),a[n].push(c[o])}e.appMenu=a,e.corpname=c[0].name}}})},methods:{getUsers:function(e){var t=this;console.log(this.depid),this.depid!=e.id&&(this.depid=e.id,yunxi.base.http({url:"/main/department/user",data:{token:yunxi.base.token,id:e.id},success:function(e){0===e.errcode&&(t.users=e.data)}}))}}};c(13);N.render=function(e,t,c,N,g,v){const x=Object(a.resolveComponent)("ui-tree"),y=Object(a.resolveComponent)("ui-avatar");return Object(a.openBlock)(),Object(a.createBlock)("div",r,[Object(a.createVNode)("div",o,[Object(a.createVNode)("div",n,[Object(a.createVNode)("div",l,[Object(a.createVNode)("div",i,[d,Object(a.createCommentVNode)("公司名称"),Object(a.createVNode)("h5",{class:"mb-0 card-title",textContent:Object(a.toDisplayString)(g.corpname)},null,8,["textContent"])]),Object(a.createVNode)("div",s,[u,Object(a.createCommentVNode)("组织结构"),Object(a.createVNode)(x,{data:g.appMenu,pidKey:"parentid",clickMenu:v.getUsers},null,8,["data","clickMenu"])])])]),Object(a.createVNode)("div",b,[Object(a.createVNode)("div",p,[j,Object(a.createVNode)("div",O,[Object(a.createVNode)("div",m,[Object(a.createVNode)("table",f,[h,Object(a.createVNode)("tbody",null,[(Object(a.openBlock)(!0),Object(a.createBlock)(a.Fragment,null,Object(a.renderList)(g.users,(e,t)=>(Object(a.openBlock)(),Object(a.createBlock)("tr",{key:t},[Object(a.createVNode)("td",null,[Object(a.createVNode)(y,{src:e.avatar,name:e.name},null,8,["src","name"])]),Object(a.createVNode)("td",{textContent:Object(a.toDisplayString)(e.name)},null,8,["textContent"]),Object(a.createVNode)("td",{textContent:Object(a.toDisplayString)(e.position)},null,8,["textContent"]),Object(a.createVNode)("td",{textContent:Object(a.toDisplayString)(e.jobnumber)},null,8,["textContent"]),Object(a.createVNode)("td",{textContent:Object(a.toDisplayString)(e.mobile)},null,8,["textContent"]),Object(a.createVNode)("td",{textContent:Object(a.toDisplayString)(e.email)},null,8,["textContent"])]))),128))])])]),V])])])])])};var g=N;Object(a.createApp)(g).use(meui).mount("#app")},4:function(e,t,c){}});
//# sourceMappingURL=user.js.map?v=463a60b1d1c4a5ba0e23