(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{
 "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/projects/ProjectHome.vue?vue&type=script&lang=js&":
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n
 }),
 "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/projects/ProjectHome.vue?vue&type=style&index=0&lang=scss&":
 (function(module, exports, __webpack_require__) {
eval("exports = module.exports = __webpack_require__( \"./node_modules/css-loader/lib/css-base.js\")(false);\n
 }),
 "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/projects/ProjectHome.vue?vue&type=style&index=0&lang=scss&":
 (function(module, exports, __webpack_require__) {
eval("\nvar content = __webpack_require__( \"./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/projects/ProjectHome.vue?vue&type=style&index=0&lang=scss&\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__( \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}
 }),
 "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/projects/ProjectHome.vue?vue&type=template&id=278fd0cc&":
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    !_vm.loaded\n      ? _c(\"div\", [\n          _c(\"div\", {\n            staticClass: \"spinner-border text-secondary\",\n            attrs: { role: \"status\" }\n          })\n        ])\n      : _c(\n          \"div\",\n          [\n            _c(\"div\", { staticClass: \"row header\" }, [\n              _c(\"div\", { staticClass: \"col-8 col-sm-8\" }, [\n                _c(\n                  \"h3\",\n                  { staticClass: \"mb-4\" },\n                  [\n                    _vm._v(\n                      \"\\n          \\n          \" +\n                        _vm._s(_vm.$t(\"project\")) +\n                        \" / \" +\n                        _vm._s(_vm.title) +\n                        \"\\n\\n          \"\n                    ),\n                    _c(\n                      \"router-link\",\n                      {\n                        attrs: {\n                          to: {\n                            name: \"project.edit\",\n                            params: { id: _vm.project.id }\n                          }\n                        }\n                      },\n                      [\n                        _c(\"BIconPencilSquare\", {\n                          attrs: { variant: \"secondary\" }\n                        })\n                      ],\n                      1\n                    )\n                  ],\n                  1\n                )\n              ]),\n              _vm._v(\" \"),\n              _c(\n                \"div\",\n                { staticClass: \"col-4 col-sm-4 text-right menu-upright\" },\n                [\n                  _c(\n                    \"router-link\",\n                    {\n                      attrs: {\n                        to: {\n                          name: \"project.tasks\",\n                          params: { id: _vm.project.id }\n                        }\n                      }\n                    },\n                    [\n                      _c(\n                        \"h2\",\n                        [\n                          _c(\"BIconListTask\", {\n                            attrs: { variant: \"secondary\" }\n                          })\n                        ],\n                        1\n                      )\n                    ]\n                  ),\n                  _vm._v(\" \"),\n                  _c(\"router-link\", { attrs: { to: { name: \"projects\" } } }, [\n                    _c(\n                      \"h2\",\n                      [\n                        _c(\"BIconClockFill\", {\n                          attrs: { variant: \"secondary\" }\n                        })\n                      ],\n                      1\n                    )\n                  ]),\n                  _vm._v(\" \"),\n                  _c(\"router-link\", { attrs: { to: { name: \"projects\" } } }, [\n                    _c(\"h2\", [\n                      _c(\"img\", { attrs: { src: \"/img/ico-money-rise.svg\" } })\n                    ])\n                  ])\n                ],\n                1\n              )\n            ]),\n            _vm._v(\" \"),\n            _vm.project.type != \"free\"\n              ? _c(\"div\", { staticClass: \"row\" }, [\n                  _c(\n                    \"div\",\n                    { staticClass: \"col-12 col-sm-4\" },\n                    [\n                      _c(\"card\", { staticClass: \"data-box\" }, [\n                        _c(\"div\", [\n                          _c(\"img\", {\n                            attrs: { src: \"/img/ico-money-rise.svg\" }\n                          })\n                        ]),\n                        _vm._v(\" \"),\n                        _c(\"div\", [_vm._v(_vm._s(_vm.project.total))])\n                      ])\n                    ],\n                    1\n                  ),\n                  _vm._v(\" \"),\n                  _c(\n                    \"div\",\n                    { staticClass: \"col-12 col-sm-4\" },\n                    [\n                      _c(\"card\", { staticClass: \"data-box\" }, [\n                        _c(\"div\", [\n                          _c(\"img\", {\n                            attrs: { src: \"/img/ico-pricehour.svg\" }\n                          })\n                        ]),\n                        _vm._v(\" \"),\n                        _c(\"div\", [_vm._v(_vm._s(_vm.project.price_hour))])\n                      ])\n                    ],\n                    1\n                  ),\n                  _vm._v(\" \"),\n                  _c(\n                    \"div\",\n                    { staticClass: \"col-12 col-sm-4\" },\n                    [\n                      _c(\"card\", { staticClass: \"data-box\" }, [\n                        _c(\"div\", [\n                          _c(\"img\", {\n                            attrs: { src: \"/img/ico-timer-big.svg\" }\n                          })\n                        ]),\n                        _vm._v(\" \"),\n                        _c(\"div\", [_vm._v(_vm._s(_vm.project.hours))])\n                      ])\n                    ],\n                    1\n                  )\n                ])\n              : _vm._e(),\n            _vm._v(\" \"),\n            _vm.project.archived == 0\n              ? _c(\"BIconFolderPlus\", {\n                  directives: [\n                    {\n                      name: \"b-tooltip\",\n                      rawName: \"v-b-tooltip.hover\",\n                      modifiers: { hover: true }\n                    }\n                  ],\n                  staticClass: \"archive-icon pointer pull-right\",\n                  attrs: { title: _vm.$t(\"archive_project\") },\n                  on: {\n                    click: function($event) {\n                      return _vm.toggleArchive()\n                    }\n                  }\n                })\n              : _c(\"BIconFolderMinus\", {\n                  directives: [\n                    {\n                      name: \"b-tooltip\",\n                      rawName: \"v-b-tooltip.hover\",\n                      modifiers: { hover: true }\n                    }\n                  ],\n                  staticClass: \"archive-icon pointer pull-right\",\n                  attrs: { title: _vm.$t(\"unarchive_project\") },\n                  on: {\n                    click: function($event) {\n                      return _vm.toggleArchive()\n                    }\n                  }\n                })\n          ],\n          1\n        )\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n
 }),
 "./resources/js/pages/projects/ProjectHome.vue":
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n var _ProjectHome_vue_vue_type_template_id_278fd0cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( \"./resources/js/pages/projects/ProjectHome.vue?vue&type=template&id=278fd0cc&\");\n var _ProjectHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( \"./resources/js/pages/projects/ProjectHome.vue?vue&type=script&lang=js&\");\n var _ProjectHome_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( \"./resources/js/pages/projects/ProjectHome.vue?vue&type=style&index=0&lang=scss&\");\n var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _ProjectHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _ProjectHome_vue_vue_type_template_id_278fd0cc___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _ProjectHome_vue_vue_type_template_id_278fd0cc___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n\nif (false) { var api; }\ncomponent.options.__file = \"resources/js/pages/projects/ProjectHome.vue\"\n __webpack_exports__[\"default\"] = (component.exports);
 }),
 "./resources/js/pages/projects/ProjectHome.vue?vue&type=script&lang=js&":
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/projects/ProjectHome.vue?vue&type=script&lang=js&\");\n  __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); 
 }),
 "./resources/js/pages/projects/ProjectHome.vue?vue&type=style&index=0&lang=scss&":
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectHome_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( \"./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/projects/ProjectHome.vue?vue&type=style&index=0&lang=scss&\");\n var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectHome_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectHome_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);\n for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectHome_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectHome_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n  __webpack_exports__[\"default\"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectHome_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 
 }),
 "./resources/js/pages/projects/ProjectHome.vue?vue&type=template&id=278fd0cc&":
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectHome_vue_vue_type_template_id_278fd0cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/projects/ProjectHome.vue?vue&type=template&id=278fd0cc&\");\n __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectHome_vue_vue_type_template_id_278fd0cc___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectHome_vue_vue_type_template_id_278fd0cc___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n
 })
}]);
