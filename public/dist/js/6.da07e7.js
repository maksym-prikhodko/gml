(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{24:function(t,s,e){var a=e(74);"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(12)(a,i);a.locals&&(t.exports=a.locals)},46:function(t,s,e){"use strict";e.r(s);var a=e(13);function i(t,s,e){return s in t?Object.defineProperty(t,s,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[s]=e,t}var o={mixins:[a.ContainerMixin],template:"<div><slot /></div>"},n={mixins:[a.ElementMixin],props:["item"],template:'<div class="row slot-task"><slot /></div>'},r={middleware:"auth",components:{ContainerMixin:a.ContainerMixin,ElementMixin:a.ElementMixin,SortableItem:n,SortableList:o},data:function(){return{loaded:!1,project:Array,tasks:Array,items:Array,newTaskOpen:!1,form:{name:"",project_id:null}}},mounted:function(){this.id=this.$route.params.id,this.loadTasks()},methods:{loadTasks:function(){var t=this;axios.all([axios.get("/api/projects/"+t.id),axios.post(["/api/fetch/projects/tasks"],{projectId:t.id})]).then(axios.spread((function(s,e){t.loaded=!0,t.project=s.data.data,t.tasks=e.data.data,t.form.project_id=s.data.data.id,t.prepareDrag()})))},prepareDrag:function(){this.items=Object.values(this.tasks),0==this.items.length&&(this.newTaskOpen=!0)},toggleFocus:function(t,s){var e=this,a=i({},"id",s);axios.post(["/api/update/task/focus"],a,this.headers).then((function(s){1==e.items[t].focus?e.items[t].focus=0:e.items[t].focus=1})).catch((function(t){422===t.response.status&&(e.errors=t.response.data.errors||{},$.each(e.errors,(function(t,s){})))}))},toggleCompleted:function(t,s){var e=this,a=i({},"id",s);axios.post(["/api/update/task/completed"],a,this.headers).then((function(s){1==e.items[t].completed?e.items[t].completed=0:e.items[t].completed=1})).catch((function(t){422===t.response.status&&(e.errors=t.response.data.errors||{},$.each(e.errors,(function(t,s){})))}))},toggleNewTask:function(){this.newTaskOpen=!this.newTaskOpen},saveOrder:function(){var t=[];this.items.forEach((function(s){var e=[{id:s.id}];t.push(e)})),axios.post(["/api/order/tasks"],t).then((function(t){})).catch((function(t){}))},onSubmit:function(t){var s=this;t.preventDefault();var e={id:0,name:this.form.name,desc:null,focus:0,completed:0};this.items.push(e),axios.post(["/api/tasks"],this.form).then((function(t){s.form.name=null,s.loadTasks()})).catch((function(t){422===t.response.status&&(s.errors=t.response.data.errors||{},$.each(s.errors,(function(t,s){})))}))}}},c=(e(73),e(1)),l=Object(c.a)(r,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[t.loaded?e("div",[e("div",{staticClass:"row header"},[e("div",{staticClass:"col-12 col-sm-8"},[e("h3",{staticClass:"mb-4"},[t._v(t._s(t.$t("projects"))+" / "+t._s(t.project.name)+" / "+t._s(t.$t("tasks")))])]),t._v(" "),e("div",{staticClass:"col-12 col-sm-4 text-right"},[e("router-link",{attrs:{to:{name:"project.home",params:{id:t.project.id}}}},[e("h2",[e("BIconArrowLeftCircleFill",{attrs:{variant:"secondary"}})],1)])],1)]),t._v(" "),e("card",{attrs:{id:"tasks"}},[0==t.items.length?e("div",{staticClass:"text-center mt-5 mb-5"},[e("h1",[e("BIconFolder")],1),t._v(" "),e("p",[t._v(t._s(t.$t("add_your_first_task")))])]):t._e(),t._v(" "),e("SortableList",{attrs:{lockAxis:"y",distance:10},on:{input:function(s){return t.saveOrder()}},model:{value:t.items,callback:function(s){t.items=s},expression:"items"}},t._l(t.items,(function(s,a){return e("SortableItem",{key:parseInt(a),class:{completed:s.completed},attrs:{index:parseInt(a),value:s}},[e("div",{staticClass:"col-2 col-sm-1 text-center"},[0==s.completed?e("BIconCircle",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"pointer pull-right",attrs:{title:t.$t("mark_as_focus")},on:{click:function(e){return t.toggleCompleted(a,s.id)}}}):e("BIconCheckCircle",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"pointer pull-right",attrs:{title:t.$t("unmark_as_focus")},on:{click:function(e){return t.toggleCompleted(a,s.id)}}})],1),t._v(" "),e("div",{staticClass:"col-8 col-sm-10"},[e("span",{staticClass:"task-name"},[t._v("\n              "+t._s(s.name)+"\n            ")])]),t._v(" "),e("div",{staticClass:"col-2 col-sm-1 text-left text-sm-right"},[0==s.focus?e("BIconStar",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"pointer pull-right",attrs:{title:t.$t("mark_as_focus")},on:{click:function(e){return t.toggleFocus(a,s.id)}}}):e("BIconStarFill",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"pointer pull-right",attrs:{title:t.$t("unmark_as_focus")},on:{click:function(e){return t.toggleFocus(a,s.id)}}})],1)])})),1),t._v(" "),e("div",{staticClass:"row slot-task new-task",class:{newTaskOpened:t.newTaskOpen}},[e("div",{staticClass:"col-2 col-sm-1 text-left"}),t._v(" "),e("div",{staticClass:"col-8 col-sm-10"},[e("span",{staticClass:"task-name"},[e("b-form",{on:{submit:t.onSubmit}},[e("b-input-group",{staticClass:"mt-3"},[e("b-form-input",{attrs:{required:"",placeholder:t.$t("task_title_here")},model:{value:t.form.name,callback:function(s){t.$set(t.form,"name",s)},expression:"form.name"}}),t._v(" "),e("b-input-group-append",[e("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v(t._s(t.$t("create")))])],1)],1)],1)],1)]),t._v(" "),e("div",{staticClass:"col-2 col-sm-1 text-left text-sm-right"})])],1),t._v(" "),e("div",{staticClass:"row mt-4"},[e("div",{staticClass:"col-12 text-right"},[t.newTaskOpen?e("h2",[e("BIconArrowLeftCircle",{attrs:{variant:"secondary"},on:{click:function(s){return t.toggleNewTask()}}})],1):e("h2",[e("BIconPlusCircleFill",{attrs:{variant:"secondary"},on:{click:function(s){return t.toggleNewTask()}}})],1)])])],1):e("div",[e("div",{staticClass:"spinner-border text-secondary",attrs:{role:"status"}})])])}),[],!1,null,null,null);s.default=l.exports},73:function(t,s,e){"use strict";var a=e(24);e.n(a).a},74:function(t,s,e){(t.exports=e(11)(!1)).push([t.i,"#tasks .slot-task {\n  margin-bottom: 1em;\n  border-bottom: 1px solid #f0f0f0;\n  padding-bottom: 1em;\n}\n#tasks .slot-task .task-name {\n  display: block;\n}\n#tasks .completed {\n  opacity: 0.3;\n  text-decoration: line-through;\n}\n#tasks .slot-task:last-child {\n  border: none;\n  margin-bottom: 0;\n}\n#tasks .new-task {\n  opacity: 0;\n  height: 0px;\n  margin-top: 0;\n  padding-top: 0;\n  transition: 0.3s;\n}\n#tasks .new-task.newTaskOpened {\n  opacity: 1;\n  margin-top: 1em;\n  padding-top: 1em;\n  height: inherit;\n}",""])}}]);
