(window.webpackJsonp=window.webpackJsonp||[]).push([[2,4],{19:function(t,e,s){"use strict";s.r(e);var i=s(6);var o={mixins:[i.ContainerMixin],template:"<div><slot /></div>"},a={mixins:[i.ElementMixin],props:["item"],template:'<div class="row slot-mit"><slot /></div>'},n={middleware:"auth",components:{ContainerMixin:i.ContainerMixin,ElementMixin:i.ElementMixin,SortableItem:a,SortableList:o},data:function(){return{loaded:!1,which:"this",title:"Esta semana",week:Array,items:Array,form:{name:"",day:0},langDatePicker:{formatLocale:{firstDayOfWeek:1},monthBeforeYear:!1}}},mounted:function(){this.loadWeek("this")},methods:{prepareDrag:function(){this.items=Object.values(this.week),this.title=this.items[0].week_title},previousWeek:function(){this.which="previous",this.loadWeek()},thisWeek:function(){this.which="this",this.loadWeek()},nextWeek:function(){this.which="next",this.loadWeek()},loadWeek:function(){var t=this,e=function(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}({},"which",this.which);axios.all([axios.post(["/api/dashboard/week"],e)]).then(axios.spread((function(e){t.week=e.data.data,t.prepareDrag(),t.loaded=!0})))},saveOrder:function(){var t=[];this.items.forEach((function(e){e.mits.forEach((function(e){var s=[{id:e.id}];t.push(s)}))})),axios.post(["/api/mits/order"],t).then((function(t){})).catch((function(t){}))},toggleCompleted:function(t,e,s){var i=this;axios.post(["/api/update/mit/completed"],{id:s}).then((function(s){1==i.items[t].mits[e].completed?i.items[t].mits[e].completed=0:i.items[t].mits[e].completed=1})).catch((function(t){422===t.response.status&&(i.errors=t.response.data.errors||{},$.each(i.errors,(function(t,e){})))}))},trashItem:function(t,e,s){var i=this;axios.delete(["/api/mits/"+s]).then((function(s){i.items[t].mits.splice(e,1)})).catch((function(t){422===t.response.status&&(i.errors=t.response.data.errors||{},$.each(i.errors,(function(t,e){})))}))},onSubmit:function(t){var e=this;t.preventDefault();var s=this;this.items.forEach((function(t,e,i){t.day==s.form.day&&(t.adding=!0)}));this.form.name,this.form.day;axios.post(["/api/mits"],this.form).then((function(t){e.form.name=null,e.loadWeek()})).catch((function(t){422===t.response.status&&(e.errors=t.response.data.errors||{},$.each(e.errors,(function(t,e){})))}))}}},r=(s(66),s(1)),c=Object(r.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.loaded?s("div",[s("card",{attrs:{id:"mits"}},[s("div",{staticClass:"card-header"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-1"},["this"==this.which?s("BIconArrowLeftSquare",{on:{click:function(e){return t.previousWeek()}}}):"next"==this.which?s("BIconArrowLeftSquare",{on:{click:function(e){return t.thisWeek()}}}):t._e()],1),t._v(" "),s("div",{staticClass:"col-10"},[s("h3",[t._v(t._s(t.$t("week_view"))+": "+t._s(t.title))])]),t._v(" "),s("div",{staticClass:"col-1"},["this"==this.which?s("BIconArrowRightSquare",{on:{click:function(e){return t.nextWeek()}}}):"previous"==this.which?s("BIconArrowRightSquare",{on:{click:function(e){return t.thisWeek()}}}):t._e()],1)])]),t._v(" "),s("div",{staticClass:"card-body"},[s("div",{staticClass:"row"},t._l(t.items,(function(e,i){return s("div",{key:parseInt(i),staticClass:"col-12 col-md-2",attrs:{index:parseInt(i),value:e}},[s("h5",{staticClass:"mb-4 text-center"},[t._v(t._s(e.name))]),t._v(" "),s("SortableList",{attrs:{lockAxis:"y",distance:10},on:{input:function(e){return t.saveOrder()}},model:{value:e.mits,callback:function(s){t.$set(e,"mits",s)},expression:"column.mits"}},[t._l(e.mits,(function(e,o){return s("SortableItem",{key:parseInt(o),class:{completed:e.completed},attrs:{index:parseInt(o),value:e}},[s("div",{staticClass:"col-1 col-sm-1 text-center icon-smaller"},[0==e.completed?s("BIconCircle",{staticClass:"pointer pull-right",on:{click:function(s){return t.toggleCompleted(i,o,e.id)}}}):s("BIconCheckCircle",{staticClass:"pointer pull-right",on:{click:function(s){return t.toggleCompleted(i,o,e.id)}}}),t._v(" "),1==e.completed?s("BIconTrash",{staticClass:"pointer pull-right",on:{click:function(s){return t.trashItem(i,o,e.id)}}}):t._e()],1),t._v(" "),s("div",{staticClass:"col-10 col-sm-10"},[s("span",{staticClass:"task-name"},[t._v("\n                  "+t._s(e.name)+"\n                ")])])])})),t._v(" "),e.adding?s("b-spinner",{attrs:{small:"",type:"grow"}}):t._e()],2)],1)})),0)]),t._v(" "),s("b-form",{on:{submit:t.onSubmit}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-md-6"},[s("b-form-input",{staticClass:"w-100",attrs:{required:"",placeholder:t.$t("task_title_here")},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),s("div",{staticClass:"col-12 col-md-4"},[s("b-form-select",{staticClass:"mb-3",model:{value:t.form.day,callback:function(e){t.$set(t.form,"day",e)},expression:"form.day"}},[s("b-form-select-option",{attrs:{value:t.items[0].day}},[t._v(t._s(t.$t("monday")))]),t._v(" "),s("b-form-select-option",{attrs:{value:t.items[1].day}},[t._v(t._s(t.$t("tuesday")))]),t._v(" "),s("b-form-select-option",{attrs:{value:t.items[2].day}},[t._v(t._s(t.$t("wednesday")))]),t._v(" "),s("b-form-select-option",{attrs:{value:t.items[3].day}},[t._v(t._s(t.$t("thursday")))]),t._v(" "),s("b-form-select-option",{attrs:{value:t.items[4].day}},[t._v(t._s(t.$t("friday")))]),t._v(" "),s("b-form-select-option",{attrs:{value:t.items[5].day}},[t._v(t._s(t.$t("weekend")))])],1)],1),t._v(" "),s("div",{staticClass:"col-12 col-md-2"},[s("b-button",{staticClass:"w-100",attrs:{type:"submit",variant:"primary"}},[t._v(t._s(t.$t("create")))])],1)])])],1)],1):s("div",[s("div",{staticClass:"spinner-border text-secondary",attrs:{role:"status"}})])}),[],!1,null,null,null);e.default=c.exports},21:function(t,e,s){var i=s(67);"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};s(11)(i,o);i.locals&&(t.exports=i.locals)},23:function(t,e,s){var i=s(71);"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};s(11)(i,o);i.locals&&(t.exports=i.locals)},39:function(t,e,s){"use strict";s.r(e);var i={middleware:"auth",components:{Week:s(19).default},data:function(){return{loaded:!1,projects:Array,items:Array}},mounted:function(){var t=this;axios.all([axios.get("/api/fetch/projects")]).then(axios.spread((function(e){t.loaded=!0,t.projects=e.data.data,t.prepareDrag()})))},methods:{prepareDrag:function(){this.items=this.projects},toggleFocus:function(t,e){var s=this,i=function(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}({},"id",e);axios.post(["/api/update/project/focus"],i,this.headers).then((function(e){1==s.items[t].focus?s.items[t].focus=0:s.items[t].focus=1})).catch((function(t){422===t.response.status&&(s.errors=t.response.data.errors||{},$.each(s.errors,(function(t,e){})))}))}}},o=(s(70),s(1)),a=Object(o.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"row header"},[e("div",{staticClass:"col-12 col-sm-8"},[e("h3",{staticClass:"mb-4"},[this._v(this._s(this.$t("dashboard")))])]),this._v(" "),e("div",{staticClass:"col-12 col-sm-4 text-right"})]),this._v(" "),this.loaded?e("div",[e("Week")],1):e("div",[e("div",{staticClass:"spinner-border text-secondary",attrs:{role:"status"}})])])}),[],!1,null,null,null);e.default=a.exports},66:function(t,e,s){"use strict";var i=s(21);s.n(i).a},67:function(t,e,s){(t.exports=s(10)(!1)).push([t.i,".slot-mit {\n  margin-bottom: 1em;\n}\n.slot-mit .icon-smaller {\n  font-size: 12px;\n}\n.new-mits {\n  display: block;\n}\n.new-mits:hover {\n  display: block;\n}",""])},70:function(t,e,s){"use strict";var i=s(23);s.n(i).a},71:function(t,e,s){(t.exports=s(10)(!1)).push([t.i,"#dashboard .slot-project {\n  margin-bottom: 1em;\n  border-bottom: 1px solid #f0f0f0;\n  padding-bottom: 1em;\n}\n#dashboard .slot-project .project-name {\n  font-weight: bold;\n  display: block;\n}\n#dashboard .slot-project .client-name {\n  font-style: italic;\n  display: block;\n}\n#dashboard .pointer {\n  cursor: pointer;\n}\n#dashboard .slot-project:last-child {\n  border: none;\n  margin-bottom: 0;\n}",""])}}]);