(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{
 "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/dashboard/Week.vue?vue&type=script&lang=js&":
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n var vue_slicksort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( \"./node_modules/vue-slicksort/dist/vue-slicksort.umd.js\");\n var vue_slicksort__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(vue_slicksort__WEBPACK_IMPORTED_MODULE_0__);\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n
 }),
 "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/dashboard/Week.vue?vue&type=style&index=0&lang=scss&":
 (function(module, exports, __webpack_require__) {
eval("exports = module.exports = __webpack_require__( \"./node_modules/css-loader/lib/css-base.js\")(false);\n
 }),
 "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/dashboard/Week.vue?vue&type=style&index=0&lang=scss&":
 (function(module, exports, __webpack_require__) {
eval("\nvar content = __webpack_require__( \"./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/dashboard/Week.vue?vue&type=style&index=0&lang=scss&\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__( \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}
 }),
 "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/dashboard/Week.vue?vue&type=template&id=d3584650&":
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return !_vm.loaded\n    ? _c(\"div\", [\n        _c(\"div\", {\n          staticClass: \"spinner-border text-secondary\",\n          attrs: { role: \"status\" }\n        })\n      ])\n    : _c(\n        \"div\",\n        [\n          _c(\n            \"card\",\n            { attrs: { id: \"mits\" } },\n            [\n              _c(\"div\", { staticClass: \"card-header\" }, [\n                _c(\"div\", { staticClass: \"row\" }, [\n                  _c(\n                    \"div\",\n                    { staticClass: \"col-1\" },\n                    [\n                      this.which == \"this\"\n                        ? _c(\"BIconArrowLeftSquare\", {\n                            on: {\n                              click: function($event) {\n                                return _vm.previousWeek()\n                              }\n                            }\n                          })\n                        : this.which == \"next\"\n                        ? _c(\"BIconArrowLeftSquare\", {\n                            on: {\n                              click: function($event) {\n                                return _vm.thisWeek()\n                              }\n                            }\n                          })\n                        : _vm._e()\n                    ],\n                    1\n                  ),\n                  _vm._v(\" \"),\n                  _c(\"div\", { staticClass: \"col-10\" }, [\n                    _c(\"h3\", [\n                      _vm._v(\n                        _vm._s(_vm.$t(\"week_view\")) + \": \" + _vm._s(_vm.title)\n                      )\n                    ])\n                  ]),\n                  _vm._v(\" \"),\n                  _c(\n                    \"div\",\n                    { staticClass: \"col-1\" },\n                    [\n                      this.which == \"this\"\n                        ? _c(\"BIconArrowRightSquare\", {\n                            on: {\n                              click: function($event) {\n                                return _vm.nextWeek()\n                              }\n                            }\n                          })\n                        : this.which == \"previous\"\n                        ? _c(\"BIconArrowRightSquare\", {\n                            on: {\n                              click: function($event) {\n                                return _vm.thisWeek()\n                              }\n                            }\n                          })\n                        : _vm._e()\n                    ],\n                    1\n                  )\n                ])\n              ]),\n              _vm._v(\" \"),\n              _c(\"div\", { staticClass: \"card-body\" }, [\n                _c(\n                  \"div\",\n                  { staticClass: \"row\" },\n                  _vm._l(_vm.items, function(column, indexColumn) {\n                    return _c(\n                      \"div\",\n                      {\n                        key: parseInt(indexColumn),\n                        staticClass: \"col-12 col-md-2\",\n                        attrs: { index: parseInt(indexColumn), value: column }\n                      },\n                      [\n                        _c(\"h5\", { staticClass: \"mb-4 text-center\" }, [\n                          _vm._v(_vm._s(column.name))\n                        ]),\n                        _vm._v(\" \"),\n                        _c(\n                          \"SortableList\",\n                          {\n                            attrs: { lockAxis: \"y\", distance: 10 },\n                            on: {\n                              input: function($event) {\n                                return _vm.saveOrder()\n                              }\n                            },\n                            model: {\n                              value: column.mits,\n                              callback: function($$v) {\n                                _vm.$set(column, \"mits\", $$v)\n                              },\n                              expression: \"column.mits\"\n                            }\n                          },\n                          [\n                            _vm._l(column.mits, function(item, index) {\n                              return _c(\n                                \"SortableItem\",\n                                {\n                                  key: parseInt(index),\n                                  class: { completed: item.completed },\n                                  attrs: { index: parseInt(index), value: item }\n                                },\n                                [\n                                  _c(\n                                    \"div\",\n                                    {\n                                      staticClass:\n                                        \"col-1 col-sm-1 text-center icon-smaller\"\n                                    },\n                                    [\n                                      item.completed == 0\n                                        ? _c(\"BIconCircle\", {\n                                            staticClass: \"pointer pull-right\",\n                                            on: {\n                                              click: function($event) {\n                                                return _vm.toggleCompleted(\n                                                  indexColumn,\n                                                  index,\n                                                  item.id\n                                                )\n                                              }\n                                            }\n                                          })\n                                        : _c(\"BIconCheckCircle\", {\n                                            staticClass: \"pointer pull-right\",\n                                            on: {\n                                              click: function($event) {\n                                                return _vm.toggleCompleted(\n                                                  indexColumn,\n                                                  index,\n                                                  item.id\n                                                )\n                                              }\n                                            }\n                                          }),\n                                      _vm._v(\" \"),\n                                      item.completed == 1\n                                        ? _c(\"BIconTrash\", {\n                                            staticClass: \"pointer pull-right\",\n                                            on: {\n                                              click: function($event) {\n                                                return _vm.trashItem(\n                                                  indexColumn,\n                                                  index,\n                                                  item.id\n                                                )\n                                              }\n                                            }\n                                          })\n                                        : _vm._e()\n                                    ],\n                                    1\n                                  ),\n                                  _vm._v(\" \"),\n                                  _c(\n                                    \"div\",\n                                    { staticClass: \"col-10 col-sm-10\" },\n                                    [\n                                      _c(\"span\", { staticClass: \"task-name\" }, [\n                                        _vm._v(\n                                          \"\\n                  \" +\n                                            _vm._s(item.name) +\n                                            \"\\n                \"\n                                        )\n                                      ])\n                                    ]\n                                  )\n                                ]\n                              )\n                            }),\n                            _vm._v(\" \"),\n                            column.adding\n                              ? _c(\"b-spinner\", {\n                                  attrs: { small: \"\", type: \"grow\" }\n                                })\n                              : _vm._e()\n                          ],\n                          2\n                        )\n                      ],\n                      1\n                    )\n                  }),\n                  0\n                )\n              ]),\n              _vm._v(\" \"),\n              _c(\"b-form\", { on: { submit: _vm.onSubmit } }, [\n                _c(\"div\", { staticClass: \"row\" }, [\n                  _c(\n                    \"div\",\n                    { staticClass: \"col-12 col-md-6\" },\n                    [\n                      _c(\"b-form-input\", {\n                        staticClass: \"w-100\",\n                        attrs: {\n                          required: \"\",\n                          placeholder: _vm.$t(\"task_title_here\")\n                        },\n                        model: {\n                          value: _vm.form.name,\n                          callback: function($$v) {\n                            _vm.$set(_vm.form, \"name\", $$v)\n                          },\n                          expression: \"form.name\"\n                        }\n                      })\n                    ],\n                    1\n                  ),\n                  _vm._v(\" \"),\n                  _c(\n                    \"div\",\n                    { staticClass: \"col-12 col-md-4\" },\n                    [\n                      _c(\n                        \"b-form-select\",\n                        {\n                          staticClass: \"mb-3\",\n                          model: {\n                            value: _vm.form.day,\n                            callback: function($$v) {\n                              _vm.$set(_vm.form, \"day\", $$v)\n                            },\n                            expression: \"form.day\"\n                          }\n                        },\n                        [\n                          _c(\n                            \"b-form-select-option\",\n                            {\n                              attrs: { value: _vm.items[0].day, selected: \"\" }\n                            },\n                            [_vm._v(_vm._s(_vm.$t(\"monday\")))]\n                          ),\n                          _vm._v(\" \"),\n                          _c(\n                            \"b-form-select-option\",\n                            { attrs: { value: _vm.items[1].day } },\n                            [_vm._v(_vm._s(_vm.$t(\"tuesday\")))]\n                          ),\n                          _vm._v(\" \"),\n                          _c(\n                            \"b-form-select-option\",\n                            { attrs: { value: _vm.items[2].day } },\n                            [_vm._v(_vm._s(_vm.$t(\"wednesday\")))]\n                          ),\n                          _vm._v(\" \"),\n                          _c(\n                            \"b-form-select-option\",\n                            { attrs: { value: _vm.items[3].day } },\n                            [_vm._v(_vm._s(_vm.$t(\"thursday\")))]\n                          ),\n                          _vm._v(\" \"),\n                          _c(\n                            \"b-form-select-option\",\n                            { attrs: { value: _vm.items[4].day } },\n                            [_vm._v(_vm._s(_vm.$t(\"friday\")))]\n                          ),\n                          _vm._v(\" \"),\n                          _c(\n                            \"b-form-select-option\",\n                            { attrs: { value: _vm.items[5].day } },\n                            [_vm._v(_vm._s(_vm.$t(\"weekend\")))]\n                          )\n                        ],\n                        1\n                      )\n                    ],\n                    1\n                  ),\n                  _vm._v(\" \"),\n                  _c(\n                    \"div\",\n                    { staticClass: \"col-12 col-md-2\" },\n                    [\n                      _c(\n                        \"b-button\",\n                        {\n                          staticClass: \"w-100\",\n                          attrs: { type: \"submit\", variant: \"primary\" }\n                        },\n                        [_vm._v(_vm._s(_vm.$t(\"add_task\")))]\n                      )\n                    ],\n                    1\n                  )\n                ])\n              ])\n            ],\n            1\n          )\n        ],\n        1\n      )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n
 }),
 "./resources/js/pages/dashboard/Week.vue":
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n var _Week_vue_vue_type_template_id_d3584650___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( \"./resources/js/pages/dashboard/Week.vue?vue&type=template&id=d3584650&\");\n var _Week_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( \"./resources/js/pages/dashboard/Week.vue?vue&type=script&lang=js&\");\n var _Week_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( \"./resources/js/pages/dashboard/Week.vue?vue&type=style&index=0&lang=scss&\");\n var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _Week_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Week_vue_vue_type_template_id_d3584650___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Week_vue_vue_type_template_id_d3584650___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n\nif (false) { var api; }\ncomponent.options.__file = \"resources/js/pages/dashboard/Week.vue\"\n __webpack_exports__[\"default\"] = (component.exports);
 }),
 "./resources/js/pages/dashboard/Week.vue?vue&type=script&lang=js&":
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Week_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/dashboard/Week.vue?vue&type=script&lang=js&\");\n  __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Week_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); 
 }),
 "./resources/js/pages/dashboard/Week.vue?vue&type=style&index=0&lang=scss&":
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Week_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( \"./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/dashboard/Week.vue?vue&type=style&index=0&lang=scss&\");\n var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Week_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Week_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);\n for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Week_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Week_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n  __webpack_exports__[\"default\"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Week_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 
 }),
 "./resources/js/pages/dashboard/Week.vue?vue&type=template&id=d3584650&":
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Week_vue_vue_type_template_id_d3584650___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/dashboard/Week.vue?vue&type=template&id=d3584650&\");\n __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Week_vue_vue_type_template_id_d3584650___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Week_vue_vue_type_template_id_d3584650___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n
 })
}]);
