(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{32:function(t,e,o){"use strict";var n=o(2),r=o.n(n);function i(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function s(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(Object(o),!0).forEach((function(e){a(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function a(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e,o,n,r,i,s){try{var a=t[i](s),c=a.value}catch(t){return void o(t)}a.done?e(c):Promise.resolve(c).then(n,r)}function l(t,e){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};"object"===c(t)&&(o=t,t=""),o=s({url:t,title:e,width:600,height:720},o);var n=void 0!==window.screenLeft?window.screenLeft:window.screen.left,r=void 0!==window.screenTop?window.screenTop:window.screen.top,i=window.innerWidth||document.documentElement.clientWidth||window.screen.width,a=window.innerHeight||document.documentElement.clientHeight||window.screen.height;o.left=i/2-o.width/2+n,o.top=a/2-o.height/2+r;var u=Object.keys(o).reduce((function(t,e){return t.push("".concat(e,"=").concat(o[e])),t}),[]).join(","),l=window.open(t,e,u);return window.focus&&l.focus(),l}var m={name:"LoginWithGithub",computed:{githubAuth:function(){return window.config.githubAuth},url:function(){return"/api/oauth/github"}},mounted:function(){window.addEventListener("message",this.onMessage,!1)},beforeDestroy:function(){window.removeEventListener("message",this.onMessage)},methods:{login:function(){var t,e=this;return(t=r.a.mark((function t(){var o,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=l("",e.$t("login")),t.next=3,e.$store.dispatch("auth/fetchOauthUrl",{provider:"github"});case 3:n=t.sent,o.location.href=n;case 5:case"end":return t.stop()}}),t)})),function(){var e=this,o=arguments;return new Promise((function(n,r){var i=t.apply(e,o);function s(t){u(i,n,r,s,a,"next",t)}function a(t){u(i,n,r,s,a,"throw",t)}s(void 0)}))})()},onMessage:function(t){t.origin===window.origin&&t.data.token&&(this.$store.dispatch("auth/saveToken",{token:t.data.token}),this.$router.push({name:"home"}))}}},d=o(1),f=Object(d.a)(m,(function(){var t=this.$createElement,e=this._self._c||t;return this.githubAuth?e("button",{staticClass:"btn btn-dark ml-auto",attrs:{type:"button"},on:{click:this.login}},[this._v("\n  "+this._s(this.$t("login_with"))+"\n  "),e("fa",{attrs:{icon:["fab","github"]}})],1):this._e()}),[],!1,null,null,null);e.a=f.exports},44:function(t,e,o){"use strict";o.r(e);var n=o(2),r=o.n(n),i=o(5),s=o.n(i);function a(t,e,o,n,r,i,s){try{var a=t[i](s),c=a.value}catch(t){return void o(t)}a.done?e(c):Promise.resolve(c).then(n,r)}var c={middleware:"guest",components:{LoginWithGithub:o(32).a},metaInfo:function(){return{title:this.$t("login")}},data:function(){return{form:new s.a({email:"",password:""}),remember:!1}},methods:{login:function(){var t,e=this;return(t=r.a.mark((function t(){var o,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.form.post("/api/login");case 2:return o=t.sent,n=o.data,e.$store.dispatch("auth/saveToken",{token:n.token,remember:e.remember}),t.next=7,e.$store.dispatch("auth/fetchUser");case 7:e.$router.push({name:"home"});case 8:case"end":return t.stop()}}),t)})),function(){var e=this,o=arguments;return new Promise((function(n,r){var i=t.apply(e,o);function s(t){a(i,n,r,s,c,"next",t)}function c(t){a(i,n,r,s,c,"throw",t)}s(void 0)}))})()}}},u=o(1),l=Object(u.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-8 m-auto"},[o("card",{attrs:{title:t.$t("login")}},[o("form",{on:{submit:function(e){return e.preventDefault(),t.login(e)},keydown:function(e){return t.form.onKeydown(e)}}},[o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("email")))]),t._v(" "),o("div",{staticClass:"col-md-7"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("email")},attrs:{type:"email",name:"email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t._v(" "),o("has-error",{attrs:{form:t.form,field:"email"}})],1)]),t._v(" "),o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("password")))]),t._v(" "),o("div",{staticClass:"col-md-7"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("password")},attrs:{type:"password",name:"password"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}}),t._v(" "),o("has-error",{attrs:{form:t.form,field:"password"}})],1)]),t._v(" "),o("div",{staticClass:"form-group row"},[o("div",{staticClass:"col-md-3"}),t._v(" "),o("div",{staticClass:"col-md-7 d-flex"},[o("checkbox",{attrs:{name:"remember"},model:{value:t.remember,callback:function(e){t.remember=e},expression:"remember"}},[t._v("\n              "+t._s(t.$t("remember_me"))+"\n            ")]),t._v(" "),o("router-link",{staticClass:"small ml-auto my-auto",attrs:{to:{name:"password.request"}}},[t._v("\n              "+t._s(t.$t("forgot_password"))+"\n            ")])],1)]),t._v(" "),o("div",{staticClass:"form-group row"},[o("div",{staticClass:"col-md-7 offset-md-3 d-flex"},[o("v-button",{attrs:{loading:t.form.busy}},[t._v("\n              "+t._s(t.$t("login"))+"\n            ")]),t._v(" "),o("login-with-github")],1)])])])],1)])}),[],!1,null,null,null);e.default=l.exports}}]);
