(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{38:function(t,e,r){"use strict";r.r(e);var s={middleware:"auth",data:function(){return{loaded:!1,loadId:0,form:{id:"",name:"",client_id:"",type:"fixed",hours_estimated:20,desired_price_hour:35,total_price:0},types:[{value:"fixed",text:"Fixed price"},{value:"hours",text:"Per hours"},{value:"free",text:"Free"}],show:!0,project:[],clients:[]}},mounted:function(){this.$route.params.id&&(this.loadId=this.$route.params.id);var t=this;axios.all([axios.post(["/api/project/raw"],{id:t.loadId}),axios.get("/api/fetch/select/clients")]).then(axios.spread((function(e,r){t.project=e.data.data,t.clients=r.data.data,t.loadId>0&&t.loadProjectData(),t.loaded=!0})))},methods:{loadProjectData:function(){this.form.id=this.project.id,this.form.name=this.project.name,this.form.client_id=this.project.client_id,this.form.type=this.project.type,this.form.hours_estimated=this.project.hours_estimated,this.form.desired_price_hour=this.project.desired_price_hour,this.form.total_price=this.project.total_price},onSubmit:function(t){var e=this;t.preventDefault(),this.loadId>0?axios.put(["/api/projects/"+this.loadId],this.form).then((function(t){e.$router.push({name:"project.home",params:{id:e.loadId}})})).catch((function(t){422===t.response.status&&(e.errors=t.response.data.errors||{},$.each(e.errors,(function(t,e){})))})):axios.post("/api/projects",this.form).then((function(t){e.$router.push({name:"projects"})})).catch((function(t){422===t.response.status&&(e.errors=t.response.data.errors||{},$.each(e.errors,(function(t,e){})))}))}}},o=r(1),i=Object(o.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"row header"},[r("div",{staticClass:"col-10 col-sm-8"},[r("h3",{staticClass:"mb-4"},[t._v(t._s(t.$t("projects"))+" / "+t._s(t.$t("create")))])]),t._v(" "),r("div",{staticClass:"col-2 col-sm-4 text-right"},[r("router-link",{attrs:{to:{name:"projects"}}},[r("h2",[r("BIconArrowLeftCircleFill",{attrs:{variant:"secondary"}})],1)])],1)]),t._v(" "),t.loaded?r("div",[r("card",[0==Object.values(t.clients).length?r("div",[r("div",{staticClass:"text-center mt-5 mb-5"},[r("h4",[t._v(t._s(t.$t("onboarding_no_clients")))]),t._v(" "),r("p",[t._v(t._s(t.$t("onboarding_no_clients_text")))]),t._v(" "),r("p",[r("img",{attrs:{src:"/img/vector/clients.jpg"}})]),t._v(" "),r("router-link",{attrs:{to:{name:"client.add"}}},[r("button",{staticClass:"btn btn-primary"},[t._v("\n              "+t._s(t.$t("onboarding_no_clients_add"))+"\n            ")])])],1)]):r("div",[t.show?r("b-form",{staticClass:"m-5",on:{submit:t.onSubmit}},[r("b-form-group",{staticClass:"mb-4",attrs:{label:t.$t("project_name")}},[r("b-form-input",{attrs:{size:"lg",required:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),r("b-form-group",{staticClass:"mb-4",attrs:{label:t.$t("client")}},[r("b-form-select",{attrs:{size:"lg",options:t.clients,required:""},model:{value:t.form.client_id,callback:function(e){t.$set(t.form,"client_id",e)},expression:"form.client_id"}})],1),t._v(" "),r("div",{staticClass:"row mb-4"},[r("div",{staticClass:"col-12 col-md-4"},[r("b-form-group",{attrs:{label:t.$t("project_type")}},[r("b-form-select",{attrs:{size:"lg",options:t.types,required:""},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}})],1)],1),t._v(" "),"free"!=t.form.type?r("div",{staticClass:"col-12 col-md-4"},["hours"==t.form.type?r("b-form-group",{attrs:{label:t.$t("desired_price_hour")}},[r("b-input-group",{attrs:{append:"€"}},[r("b-form-input",{attrs:{size:"lg",required:""},model:{value:t.form.desired_price_hour,callback:function(e){t.$set(t.form,"desired_price_hour",e)},expression:"form.desired_price_hour"}})],1)],1):r("b-form-group",{attrs:{label:t.$t("total_price")}},[r("b-input-group",{attrs:{append:"€"}},[r("b-form-input",{attrs:{size:"lg",required:""},model:{value:t.form.total_price,callback:function(e){t.$set(t.form,"total_price",e)},expression:"form.total_price"}})],1)],1)],1):t._e(),t._v(" "),r("div",{staticClass:"col-12 col-md-4"},[r("b-form-group",{attrs:{label:t.$t("hours_estimated")}},[r("b-input-group",{attrs:{append:t.$t("hours")}},[r("b-form-input",{attrs:{size:"lg",required:""},model:{value:t.form.hours_estimated,callback:function(e){t.$set(t.form,"hours_estimated",e)},expression:"form.hours_estimated"}})],1)],1)],1)]),t._v(" "),r("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v(t._s(t.$t("create")))])],1):t._e()],1)])],1):r("div",[r("div",{staticClass:"spinner-border text-secondary",attrs:{role:"status"}})])])}),[],!1,null,null,null);e.default=i.exports}}]);