(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{
 "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/tasks/SlotTask.vue?vue&type=script&lang=js&":
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n
 }),
 "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/tasks/SlotTask.vue?vue&type=template&id=35aa1c66&":
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return !_vm.loaded\n    ? _c(\"div\", [\n        _c(\"div\", {\n          staticClass: \"spinner-border text-secondary\",\n          attrs: { role: \"status\" }\n        })\n      ])\n    : _c(\"div\", { staticClass: \"row slot-task\" }, [\n        _c(\n          \"div\",\n          { staticClass: \"col-2 col-sm-1 text-center\" },\n          [\n            _vm.item.completed == 0\n              ? _c(\"BIconCircle\", {\n                  staticClass: \"pointer pull-right\",\n                  on: {\n                    click: function($event) {\n                      return _vm.toggleCompleted(_vm.index, _vm.item.id)\n                    }\n                  }\n                })\n              : _c(\"BIconCheckCircle\", {\n                  staticClass: \"pointer pull-right\",\n                  on: {\n                    click: function($event) {\n                      return _vm.toggleCompleted(_vm.index, _vm.item.id)\n                    }\n                  }\n                })\n          ],\n          1\n        ),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"col-8 col-sm-10\" }, [\n          _c(\"span\", { staticClass: \"task-name\" }, [\n            _vm._v(\"\\n        \" + _vm._s(_vm.item.name) + \"\\n      \")\n          ])\n        ]),\n        _vm._v(\" \"),\n        _c(\n          \"div\",\n          { staticClass: \"col-2 col-sm-1 text-left text-sm-right\" },\n          [\n            _vm.item.focus == 0\n              ? _c(\"BIconStar\", {\n                  staticClass: \"pointer pull-right\",\n                  on: {\n                    click: function($event) {\n                      return _vm.toggleFocus(_vm.index, _vm.item.id)\n                    }\n                  }\n                })\n              : _c(\"BIconStarFill\", {\n                  staticClass: \"pointer pull-right\",\n                  on: {\n                    click: function($event) {\n                      return _vm.toggleFocus(_vm.index, _vm.item.id)\n                    }\n                  }\n                })\n          ],\n          1\n        )\n      ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n
 }),
 "./resources/js/pages/tasks/SlotTask.vue":
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n var _SlotTask_vue_vue_type_template_id_35aa1c66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( \"./resources/js/pages/tasks/SlotTask.vue?vue&type=template&id=35aa1c66&\");\n var _SlotTask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( \"./resources/js/pages/tasks/SlotTask.vue?vue&type=script&lang=js&\");\n var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _SlotTask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _SlotTask_vue_vue_type_template_id_35aa1c66___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _SlotTask_vue_vue_type_template_id_35aa1c66___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n\nif (false) { var api; }\ncomponent.options.__file = \"resources/js/pages/tasks/SlotTask.vue\"\n __webpack_exports__[\"default\"] = (component.exports);
 }),
 "./resources/js/pages/tasks/SlotTask.vue?vue&type=script&lang=js&":
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SlotTask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/tasks/SlotTask.vue?vue&type=script&lang=js&\");\n  __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SlotTask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); 
 }),
 "./resources/js/pages/tasks/SlotTask.vue?vue&type=template&id=35aa1c66&":
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SlotTask_vue_vue_type_template_id_35aa1c66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/tasks/SlotTask.vue?vue&type=template&id=35aa1c66&\");\n __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SlotTask_vue_vue_type_template_id_35aa1c66___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SlotTask_vue_vue_type_template_id_35aa1c66___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n
 })
}]);
