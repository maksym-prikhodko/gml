(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{22:function(t,r,i){var e=i(70);"string"==typeof e&&(e=[[t.i,e,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};i(12)(e,s);e.locals&&(t.exports=e.locals)},48:function(t,r,i){"use strict";i.r(r);var e={middleware:"auth",data:function(){return{loaded:!1,title:"...",id:null,project:Array}},mounted:function(){this.id=this.$route.params.id;var t=this;axios.all([axios.get("/api/projects/"+t.id)]).then(axios.spread((function(r){t.loaded=!0,t.project=r.data.data,t.title=r.data.data.name})))},methods:{toggleArchive:function(){var t=this,r=function(t,r,i){return r in t?Object.defineProperty(t,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[r]=i,t}({},"id",this.project.id);axios.post(["/api/update/project/archive"],r).then((function(r){1==t.project.archived?t.project.archived=0:t.project.archived=1})).catch((function(r){422===r.response.status&&(t.errors=r.response.data.errors||{},$.each(t.errors,(function(t,r){})))}))}}},s=(i(69),i(1)),a=Object(s.a)(e,(function(){var t=this,r=t.$createElement,i=t._self._c||r;return i("div",[t.loaded?i("div",[i("div",{staticClass:"row header"},[i("div",{staticClass:"col-12 col-sm-8"},[i("h3",{staticClass:"mb-4"},[t._v(t._s(t.$t("project"))+" / "+t._s(t.title))])]),t._v(" "),i("div",{staticClass:"col-12 col-sm-4 text-right menu-upright"},[i("router-link",{attrs:{to:{name:"project.tasks",params:{id:t.project.id}}}},[i("h2",[i("BIconListTask",{attrs:{variant:"secondary"}})],1)]),t._v(" "),i("router-link",{attrs:{to:{name:"projects"}}},[i("h2",[i("BIconClockFill",{attrs:{variant:"secondary"}})],1)]),t._v(" "),i("router-link",{attrs:{to:{name:"projects"}}},[i("h2",[i("img",{attrs:{src:"/img/ico-money-rise.svg"}})])])],1)]),t._v(" "),"free"!=t.project.type?i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-sm-4"},[i("card",{staticClass:"data-box"},[i("div",[i("img",{attrs:{src:"/img/ico-money-rise.svg"}})]),t._v(" "),i("div",[t._v(t._s(t.project.total))])])],1),t._v(" "),i("div",{staticClass:"col-12 col-sm-4"},[i("card",{staticClass:"data-box"},[i("div",[i("img",{attrs:{src:"/img/ico-pricehour.svg"}})]),t._v(" "),i("div",[t._v(t._s(t.project.price_hour))])])],1),t._v(" "),i("div",{staticClass:"col-12 col-sm-4"},[i("card",{staticClass:"data-box"},[i("div",[i("img",{attrs:{src:"/img/ico-timer-big.svg"}})]),t._v(" "),i("div",[t._v(t._s(t.project.hours))])])],1)]):t._e(),t._v(" "),0==t.project.archived?i("BIconFolderPlus",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"archive-icon pointer pull-right",attrs:{title:t.$t("archive_project")},on:{click:function(r){return t.toggleArchive()}}}):i("BIconFolderMinus",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"archive-icon pointer pull-right",attrs:{title:t.$t("unarchive_project")},on:{click:function(r){return t.toggleArchive()}}})],1):i("div",[i("div",{staticClass:"spinner-border text-secondary",attrs:{role:"status"}})])])}),[],!1,null,null,null);r.default=a.exports},69:function(t,r,i){"use strict";var e=i(22);i.n(e).a},70:function(t,r,i){(t.exports=i(11)(!1)).push([t.i,"",""])}}]);
