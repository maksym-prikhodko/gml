(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{
 "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/projects/ProjectList.vue?vue&type=script&lang=js&":
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n var vue_slicksort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( \"./node_modules/vue-slicksort/dist/vue-slicksort.umd.js\");\n var vue_slicksort__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(vue_slicksort__WEBPACK_IMPORTED_MODULE_0__);\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n
 }),
 "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/projects/ProjectList.vue?vue&type=style&index=0&lang=scss&":
 (function(module, exports, __webpack_require__) {
eval("exports = module.exports = __webpack_require__( \"./node_modules/css-loader/lib/css-base.js\")(false);\n
 }),
 "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/projects/ProjectList.vue?vue&type=style&index=0&lang=scss&":
 (function(module, exports, __webpack_require__) {
eval("\nvar content = __webpack_require__( \"./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/projects/ProjectList.vue?vue&type=style&index=0&lang=scss&\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__( \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}
 }),
 "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/projects/ProjectList.vue?vue&type=template&id=d680d5ea&":
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"row header\" }, [\n      _c(\"div\", { staticClass: \"col-10 col-sm-8\" }, [\n        _c(\"h3\", { staticClass: \"mb-4\" }, [_vm._v(_vm._s(_vm.$t(\"projects\")))])\n      ]),\n      _vm._v(\" \"),\n      _c(\n        \"div\",\n        { staticClass: \"col-2 col-sm-4 text-right\" },\n        [\n          _c(\"router-link\", { attrs: { to: { name: \"project.add\" } } }, [\n            _c(\"img\", { attrs: { src: \"/img/ico-add.svg\" } })\n          ])\n        ],\n        1\n      )\n    ]),\n    _vm._v(\" \"),\n    !_vm.loaded\n      ? _c(\"div\", [\n          _c(\"div\", {\n            staticClass: \"spinner-border text-secondary\",\n            attrs: { role: \"status\" }\n          })\n        ])\n      : _c(\n          \"div\",\n          [\n            _c(\"card\", { attrs: { id: \"project-list\" } }, [\n              _vm.items.length == 0\n                ? _c(\"div\", [\n                    _c(\n                      \"div\",\n                      { staticClass: \"text-center mt-5 mb-5\" },\n                      [\n                        _c(\"h4\", [\n                          _vm._v(_vm._s(_vm.$t(\"onboarding_no_projects\")))\n                        ]),\n                        _vm._v(\" \"),\n                        _c(\"p\", [\n                          _c(\"img\", {\n                            attrs: { src: \"/img/vector/start-nothing.jpg\" }\n                          })\n                        ]),\n                        _vm._v(\" \"),\n                        _c(\n                          \"router-link\",\n                          { attrs: { to: { name: \"project.add\" } } },\n                          [\n                            _c(\"button\", { staticClass: \"btn btn-primary\" }, [\n                              _vm._v(\n                                \"\\n              \" +\n                                  _vm._s(_vm.$t(\"onboarding_no_projects_add\")) +\n                                  \"\\n            \"\n                              )\n                            ])\n                          ]\n                        )\n                      ],\n                      1\n                    )\n                  ])\n                : _c(\n                    \"div\",\n                    [\n                      _c(\n                        \"SortableList\",\n                        {\n                          attrs: { lockAxis: \"y\", distance: 10 },\n                          on: {\n                            input: function($event) {\n                              return _vm.saveOrder()\n                            }\n                          },\n                          model: {\n                            value: _vm.items,\n                            callback: function($$v) {\n                              _vm.items = $$v\n                            },\n                            expression: \"items\"\n                          }\n                        },\n                        _vm._l(_vm.items, function(item, index) {\n                          return _c(\n                            \"SortableItem\",\n                            {\n                              key: parseInt(index),\n                              attrs: { index: parseInt(index), value: item }\n                            },\n                            [\n                              _c(\"div\", { staticClass: \"col-10 col-sm-6\" }, [\n                                _c(\"div\", { staticClass: \"row\" }, [\n                                  _c(\n                                    \"div\",\n                                    {\n                                      staticClass: \"col-sm-1 col-2 text-right\"\n                                    },\n                                    [\n                                      item.focus == 0\n                                        ? _c(\"BIconStar\", {\n                                            directives: [\n                                              {\n                                                name: \"b-tooltip\",\n                                                rawName: \"v-b-tooltip.hover\",\n                                                modifiers: { hover: true }\n                                              }\n                                            ],\n                                            staticClass: \"pointer pull-right\",\n                                            attrs: {\n                                              title: _vm.$t(\"mark_as_focus\")\n                                            },\n                                            on: {\n                                              click: function($event) {\n                                                return _vm.toggleFocus(\n                                                  index,\n                                                  item.id\n                                                )\n                                              }\n                                            }\n                                          })\n                                        : _c(\"BIconStarFill\", {\n                                            directives: [\n                                              {\n                                                name: \"b-tooltip\",\n                                                rawName: \"v-b-tooltip.hover\",\n                                                modifiers: { hover: true }\n                                              }\n                                            ],\n                                            staticClass: \"pointer pull-right\",\n                                            attrs: {\n                                              title: _vm.$t(\"unmark_as_focus\")\n                                            },\n                                            on: {\n                                              click: function($event) {\n                                                return _vm.toggleFocus(\n                                                  index,\n                                                  item.id\n                                                )\n                                              }\n                                            }\n                                          })\n                                    ],\n                                    1\n                                  ),\n                                  _vm._v(\" \"),\n                                  _c(\n                                    \"div\",\n                                    { staticClass: \"col-sm-11 col-10\" },\n                                    [\n                                      _c(\n                                        \"span\",\n                                        { staticClass: \"project-name\" },\n                                        [\n                                          _c(\n                                            \"router-link\",\n                                            {\n                                              attrs: {\n                                                to: {\n                                                  name: \"project.home\",\n                                                  params: { id: item.id }\n                                                }\n                                              }\n                                            },\n                                            [\n                                              _vm._v(\n                                                \"\\n                      \" +\n                                                  _vm._s(item.name) +\n                                                  \"\\n                    \"\n                                              )\n                                            ]\n                                          )\n                                        ],\n                                        1\n                                      ),\n                                      _vm._v(\" \"),\n                                      _c(\n                                        \"span\",\n                                        { staticClass: \"client-name\" },\n                                        [_vm._v(_vm._s(item.client))]\n                                      )\n                                    ]\n                                  )\n                                ])\n                              ]),\n                              _vm._v(\" \"),\n                              _c(\"div\", { staticClass: \"col-2 col-sm-1\" }, [\n                                item.tasks_count > 0\n                                  ? _c(\"span\", { staticClass: \"badge\" }, [\n                                      _vm._v(\n                                        \"\\n                \" +\n                                          _vm._s(item.tasks_count) +\n                                          \"\\n              \"\n                                      )\n                                    ])\n                                  : _vm._e()\n                              ]),\n                              _vm._v(\" \"),\n                              _c(\n                                \"div\",\n                                {\n                                  staticClass:\n                                    \"col-4 col-sm-1 text-left text-sm-right\"\n                                },\n                                [\n                                  _vm._v(\n                                    \"\\n              \" +\n                                      _vm._s(item.hours_estimated)\n                                  ),\n                                  _c(\"br\"),\n                                  _vm._v(\n                                    \"\\n              \" +\n                                      _vm._s(item.hours) +\n                                      \"\\n            \"\n                                  )\n                                ]\n                              ),\n                              _vm._v(\" \"),\n                              item.type != \"free\"\n                                ? _c(\n                                    \"div\",\n                                    {\n                                      staticClass:\n                                        \"col-4 col-sm-2 text-center text-sm-right\"\n                                    },\n                                    [\n                                      _vm._v(\n                                        \"\\n              \" +\n                                          _vm._s(item.desired_price_hour)\n                                      ),\n                                      _c(\"br\"),\n                                      _vm._v(\n                                        \"\\n              \" +\n                                          _vm._s(item.price_hour) +\n                                          \"\\n            \"\n                                      )\n                                    ]\n                                  )\n                                : _vm._e(),\n                              _vm._v(\" \"),\n                              item.type != \"free\"\n                                ? _c(\n                                    \"div\",\n                                    {\n                                      staticClass: \"col-4 col-sm-2 text-right\"\n                                    },\n                                    [\n                                      _vm._v(\n                                        \"\\n              \" + _vm._s(item.total)\n                                      ),\n                                      _c(\"br\"),\n                                      _vm._v(\n                                        \"\\n              \" +\n                                          _vm._s(item.balance) +\n                                          \"\\n            \"\n                                      )\n                                    ]\n                                  )\n                                : _vm._e(),\n                              _vm._v(\" \"),\n                              item.type == \"free\"\n                                ? _c(\n                                    \"div\",\n                                    { staticClass: \"col-4 text-center\" },\n                                    [_c(\"p\", [_vm._v(\"Free project\")])]\n                                  )\n                                : _vm._e()\n                            ]\n                          )\n                        }),\n                        1\n                      )\n                    ],\n                    1\n                  )\n            ])\n          ],\n          1\n        )\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n
 }),
 "./resources/js/pages/projects/ProjectList.vue":
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n var _ProjectList_vue_vue_type_template_id_d680d5ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( \"./resources/js/pages/projects/ProjectList.vue?vue&type=template&id=d680d5ea&\");\n var _ProjectList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( \"./resources/js/pages/projects/ProjectList.vue?vue&type=script&lang=js&\");\n var _ProjectList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( \"./resources/js/pages/projects/ProjectList.vue?vue&type=style&index=0&lang=scss&\");\n var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _ProjectList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _ProjectList_vue_vue_type_template_id_d680d5ea___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _ProjectList_vue_vue_type_template_id_d680d5ea___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n\nif (false) { var api; }\ncomponent.options.__file = \"resources/js/pages/projects/ProjectList.vue\"\n __webpack_exports__[\"default\"] = (component.exports);
 }),
 "./resources/js/pages/projects/ProjectList.vue?vue&type=script&lang=js&":
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/projects/ProjectList.vue?vue&type=script&lang=js&\");\n  __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); 
 }),
 "./resources/js/pages/projects/ProjectList.vue?vue&type=style&index=0&lang=scss&":
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( \"./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/projects/ProjectList.vue?vue&type=style&index=0&lang=scss&\");\n var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);\n for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n  __webpack_exports__[\"default\"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 
 }),
 "./resources/js/pages/projects/ProjectList.vue?vue&type=template&id=d680d5ea&":
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_template_id_d680d5ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/projects/ProjectList.vue?vue&type=template&id=d680d5ea&\");\n __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_template_id_d680d5ea___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectList_vue_vue_type_template_id_d680d5ea___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n
 })
}]);
