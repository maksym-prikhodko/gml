(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{
 "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/projects/ProjectTasks.vue?vue&type=script&lang=js&":
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n var vue_slicksort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( \"./node_modules/vue-slicksort/dist/vue-slicksort.umd.js\");\n var vue_slicksort__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(vue_slicksort__WEBPACK_IMPORTED_MODULE_0__);\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n
 }),
 "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/projects/ProjectTasks.vue?vue&type=style&index=0&lang=scss&":
 (function(module, exports, __webpack_require__) {
eval("exports = module.exports = __webpack_require__( \"./node_modules/css-loader/lib/css-base.js\")(false);\n
 }),
 "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/projects/ProjectTasks.vue?vue&type=style&index=0&lang=scss&":
 (function(module, exports, __webpack_require__) {
eval("\nvar content = __webpack_require__( \"./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/projects/ProjectTasks.vue?vue&type=style&index=0&lang=scss&\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__( \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}
 }),
 "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/projects/ProjectTasks.vue?vue&type=template&id=5a9d20f1&":
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    !_vm.loaded\n      ? _c(\"div\", [\n          _c(\"div\", {\n            staticClass: \"spinner-border text-secondary\",\n            attrs: { role: \"status\" }\n          })\n        ])\n      : _c(\n          \"div\",\n          [\n            _c(\"div\", { staticClass: \"row header\" }, [\n              _c(\"div\", { staticClass: \"col-10 col-sm-8\" }, [\n                _c(\"h3\", { staticClass: \"mb-4\" }, [\n                  _vm._v(_vm._s(_vm.$t(\"tasks\")))\n                ])\n              ]),\n              _vm._v(\" \"),\n              _c(\"div\", { staticClass: \"col-2 col-sm-4 text-right\" }, [\n                _vm.newTaskOpen\n                  ? _c(\n                      \"h2\",\n                      [\n                        _c(\"BIconArrowLeftCircle\", {\n                          attrs: { variant: \"secondary\" },\n                          on: {\n                            click: function($event) {\n                              return _vm.toggleNewTask()\n                            }\n                          }\n                        })\n                      ],\n                      1\n                    )\n                  : _c(\n                      \"h2\",\n                      [\n                        _c(\"BIconPlusCircleFill\", {\n                          attrs: { variant: \"secondary\" },\n                          on: {\n                            click: function($event) {\n                              return _vm.toggleNewTask()\n                            }\n                          }\n                        })\n                      ],\n                      1\n                    )\n              ])\n            ]),\n            _vm._v(\" \"),\n            _c(\n              \"div\",\n              {\n                staticClass: \"row new-task\",\n                class: { newTaskOpened: _vm.newTaskOpen }\n              },\n              [\n                _c(\"div\", { staticClass: \"col-10 col-sm-11\" }, [\n                  _c(\n                    \"span\",\n                    { staticClass: \"task-name\" },\n                    [\n                      _c(\n                        \"b-form\",\n                        { on: { submit: _vm.onSubmit } },\n                        [\n                          _c(\n                            \"b-input-group\",\n                            [\n                              _c(\"b-form-input\", {\n                                attrs: {\n                                  required: \"\",\n                                  placeholder: _vm.$t(\"task_title_here\")\n                                },\n                                model: {\n                                  value: _vm.form.name,\n                                  callback: function($$v) {\n                                    _vm.$set(_vm.form, \"name\", $$v)\n                                  },\n                                  expression: \"form.name\"\n                                }\n                              }),\n                              _vm._v(\" \"),\n                              _c(\n                                \"b-input-group-append\",\n                                [\n                                  _c(\n                                    \"b-button\",\n                                    {\n                                      staticClass: \"w-100\",\n                                      attrs: {\n                                        type: \"submit\",\n                                        variant: \"primary\"\n                                      }\n                                    },\n                                    [_vm._v(_vm._s(_vm.$t(\"create\")))]\n                                  )\n                                ],\n                                1\n                              )\n                            ],\n                            1\n                          )\n                        ],\n                        1\n                      )\n                    ],\n                    1\n                  )\n                ]),\n                _vm._v(\" \"),\n                _c(\"div\", {\n                  staticClass: \"col-2 col-sm-1 text-left text-sm-right\"\n                })\n              ]\n            ),\n            _vm._v(\" \"),\n            _c(\n              \"card\",\n              { attrs: { id: \"tasks\" } },\n              [\n                _vm.items.length == 0\n                  ? _c(\"div\", { staticClass: \"text-center mt-5 mb-5\" }, [\n                      _c(\"h1\", [_c(\"BIconFolder\")], 1),\n                      _vm._v(\" \"),\n                      _c(\"p\", [_vm._v(_vm._s(_vm.$t(\"add_your_first_task\")))])\n                    ])\n                  : _vm._e(),\n                _vm._v(\" \"),\n                _c(\n                  \"SortableList\",\n                  {\n                    attrs: { lockAxis: \"y\", distance: 10 },\n                    on: {\n                      input: function($event) {\n                        return _vm.saveOrder()\n                      }\n                    },\n                    model: {\n                      value: _vm.items,\n                      callback: function($$v) {\n                        _vm.items = $$v\n                      },\n                      expression: \"items\"\n                    }\n                  },\n                  _vm._l(_vm.items, function(item, index) {\n                    return _c(\n                      \"SortableItem\",\n                      {\n                        key: parseInt(index),\n                        class: { completed: item.completed },\n                        attrs: { index: parseInt(index), value: item }\n                      },\n                      [\n                        _c(\n                          \"div\",\n                          { staticClass: \"col-2 col-sm-1 text-center\" },\n                          [\n                            item.completed == 0\n                              ? _c(\"BIconCircle\", {\n                                  directives: [\n                                    {\n                                      name: \"b-tooltip\",\n                                      rawName: \"v-b-tooltip.hover\",\n                                      modifiers: { hover: true }\n                                    }\n                                  ],\n                                  staticClass: \"pointer pull-right\",\n                                  attrs: { title: _vm.$t(\"mark_as_focus\") },\n                                  on: {\n                                    click: function($event) {\n                                      return _vm.toggleCompleted(index, item.id)\n                                    }\n                                  }\n                                })\n                              : _c(\"BIconCheckCircle\", {\n                                  directives: [\n                                    {\n                                      name: \"b-tooltip\",\n                                      rawName: \"v-b-tooltip.hover\",\n                                      modifiers: { hover: true }\n                                    }\n                                  ],\n                                  staticClass: \"pointer pull-right\",\n                                  attrs: { title: _vm.$t(\"unmark_as_focus\") },\n                                  on: {\n                                    click: function($event) {\n                                      return _vm.toggleCompleted(index, item.id)\n                                    }\n                                  }\n                                })\n                          ],\n                          1\n                        ),\n                        _vm._v(\" \"),\n                        _c(\"div\", { staticClass: \"col-8 col-sm-10\" }, [\n                          _c(\"span\", { staticClass: \"task-name\" }, [\n                            _vm._v(\n                              \"\\n              \" +\n                                _vm._s(item.name) +\n                                \"\\n            \"\n                            )\n                          ])\n                        ]),\n                        _vm._v(\" \"),\n                        _c(\n                          \"div\",\n                          {\n                            staticClass:\n                              \"col-2 col-sm-1 text-left text-sm-right\"\n                          },\n                          [\n                            item.focus == 0\n                              ? _c(\"BIconStar\", {\n                                  directives: [\n                                    {\n                                      name: \"b-tooltip\",\n                                      rawName: \"v-b-tooltip.hover\",\n                                      modifiers: { hover: true }\n                                    }\n                                  ],\n                                  staticClass: \"pointer pull-right\",\n                                  attrs: { title: _vm.$t(\"mark_as_focus\") },\n                                  on: {\n                                    click: function($event) {\n                                      return _vm.toggleFocus(index, item.id)\n                                    }\n                                  }\n                                })\n                              : _c(\"BIconStarFill\", {\n                                  directives: [\n                                    {\n                                      name: \"b-tooltip\",\n                                      rawName: \"v-b-tooltip.hover\",\n                                      modifiers: { hover: true }\n                                    }\n                                  ],\n                                  staticClass: \"pointer pull-right\",\n                                  attrs: { title: _vm.$t(\"unmark_as_focus\") },\n                                  on: {\n                                    click: function($event) {\n                                      return _vm.toggleFocus(index, item.id)\n                                    }\n                                  }\n                                })\n                          ],\n                          1\n                        )\n                      ]\n                    )\n                  }),\n                  1\n                )\n              ],\n              1\n            )\n          ],\n          1\n        )\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n
 }),
 "./resources/js/pages/projects/ProjectTasks.vue":
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n var _ProjectTasks_vue_vue_type_template_id_5a9d20f1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( \"./resources/js/pages/projects/ProjectTasks.vue?vue&type=template&id=5a9d20f1&\");\n var _ProjectTasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( \"./resources/js/pages/projects/ProjectTasks.vue?vue&type=script&lang=js&\");\n var _ProjectTasks_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( \"./resources/js/pages/projects/ProjectTasks.vue?vue&type=style&index=0&lang=scss&\");\n var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _ProjectTasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _ProjectTasks_vue_vue_type_template_id_5a9d20f1___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _ProjectTasks_vue_vue_type_template_id_5a9d20f1___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n\nif (false) { var api; }\ncomponent.options.__file = \"resources/js/pages/projects/ProjectTasks.vue\"\n __webpack_exports__[\"default\"] = (component.exports);
 }),
 "./resources/js/pages/projects/ProjectTasks.vue?vue&type=script&lang=js&":
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectTasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/projects/ProjectTasks.vue?vue&type=script&lang=js&\");\n  __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectTasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); 
 }),
 "./resources/js/pages/projects/ProjectTasks.vue?vue&type=style&index=0&lang=scss&":
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectTasks_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( \"./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/projects/ProjectTasks.vue?vue&type=style&index=0&lang=scss&\");\n var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectTasks_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectTasks_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);\n for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectTasks_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectTasks_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n  __webpack_exports__[\"default\"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectTasks_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 
 }),
 "./resources/js/pages/projects/ProjectTasks.vue?vue&type=template&id=5a9d20f1&":
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectTasks_vue_vue_type_template_id_5a9d20f1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/projects/ProjectTasks.vue?vue&type=template&id=5a9d20f1&\");\n __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectTasks_vue_vue_type_template_id_5a9d20f1___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectTasks_vue_vue_type_template_id_5a9d20f1___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n
 })
}]);
