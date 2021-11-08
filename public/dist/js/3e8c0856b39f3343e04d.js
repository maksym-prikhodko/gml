(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{
 "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/projects/ProjectForm.vue?vue&type=script&lang=js&":
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n
 }),
 "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/projects/ProjectForm.vue?vue&type=template&id=60c66e31&":
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"row header\" }, [\n      _c(\"div\", { staticClass: \"col-10 col-sm-8\" }, [\n        _c(\"h3\", { staticClass: \"mb-4\" }, [\n          _vm._v(_vm._s(_vm.$t(\"projects\")) + \" / \" + _vm._s(_vm.$t(\"create\")))\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\n        \"div\",\n        { staticClass: \"col-2 col-sm-4 text-right\" },\n        [\n          _c(\"router-link\", { attrs: { to: { name: \"projects\" } } }, [\n            _c(\n              \"h2\",\n              [\n                _c(\"BIconArrowLeftCircleFill\", {\n                  attrs: { variant: \"secondary\" }\n                })\n              ],\n              1\n            )\n          ])\n        ],\n        1\n      )\n    ]),\n    _vm._v(\" \"),\n    !_vm.loaded\n      ? _c(\"div\", [\n          _c(\"div\", {\n            staticClass: \"spinner-border text-secondary\",\n            attrs: { role: \"status\" }\n          })\n        ])\n      : _c(\n          \"div\",\n          [\n            !_vm.finished\n              ? _c(\"card\", [\n                  Object.values(_vm.clients).length == 0\n                    ? _c(\"div\", [\n                        _c(\n                          \"div\",\n                          { staticClass: \"text-center mt-5 mb-5\" },\n                          [\n                            _c(\"h4\", [\n                              _vm._v(_vm._s(_vm.$t(\"onboarding_no_clients\")))\n                            ]),\n                            _vm._v(\" \"),\n                            _c(\"p\", [\n                              _vm._v(\n                                _vm._s(_vm.$t(\"onboarding_no_clients_text\"))\n                              )\n                            ]),\n                            _vm._v(\" \"),\n                            _c(\"p\", [\n                              _c(\"img\", {\n                                attrs: { src: \"/img/vector/clients.jpg\" }\n                              })\n                            ]),\n                            _vm._v(\" \"),\n                            _c(\n                              \"router-link\",\n                              { attrs: { to: { name: \"client.add\" } } },\n                              [\n                                _c(\n                                  \"button\",\n                                  { staticClass: \"btn btn-primary\" },\n                                  [\n                                    _vm._v(\n                                      \"\\n              \" +\n                                        _vm._s(\n                                          _vm.$t(\"onboarding_no_clients_add\")\n                                        ) +\n                                        \"\\n            \"\n                                    )\n                                  ]\n                                )\n                              ]\n                            )\n                          ],\n                          1\n                        )\n                      ])\n                    : _c(\n                        \"div\",\n                        [\n                          _vm.show\n                            ? _c(\n                                \"b-form\",\n                                {\n                                  staticClass: \"m-5\",\n                                  on: { submit: _vm.onSubmit }\n                                },\n                                [\n                                  _c(\n                                    \"b-form-group\",\n                                    {\n                                      staticClass: \"mb-4\",\n                                      attrs: { label: _vm.$t(\"project_name\") }\n                                    },\n                                    [\n                                      _c(\"b-form-input\", {\n                                        attrs: { size: \"lg\", required: \"\" },\n                                        model: {\n                                          value: _vm.form.name,\n                                          callback: function($$v) {\n                                            _vm.$set(_vm.form, \"name\", $$v)\n                                          },\n                                          expression: \"form.name\"\n                                        }\n                                      })\n                                    ],\n                                    1\n                                  ),\n                                  _vm._v(\" \"),\n                                  _c(\n                                    \"b-form-group\",\n                                    {\n                                      staticClass: \"mb-4\",\n                                      attrs: { label: _vm.$t(\"client\") }\n                                    },\n                                    [\n                                      _c(\"b-form-select\", {\n                                        attrs: {\n                                          size: \"lg\",\n                                          options: _vm.clients,\n                                          required: \"\"\n                                        },\n                                        model: {\n                                          value: _vm.form.client_id,\n                                          callback: function($$v) {\n                                            _vm.$set(_vm.form, \"client_id\", $$v)\n                                          },\n                                          expression: \"form.client_id\"\n                                        }\n                                      })\n                                    ],\n                                    1\n                                  ),\n                                  _vm._v(\" \"),\n                                  _c(\n                                    \"b-row\",\n                                    { staticClass: \"mb-4\" },\n                                    [\n                                      _c(\n                                        \"b-col\",\n                                        { attrs: { col: \"\", md: \"4\" } },\n                                        [\n                                          _c(\n                                            \"b-form-group\",\n                                            {\n                                              attrs: {\n                                                label: _vm.$t(\"project_type\")\n                                              }\n                                            },\n                                            [\n                                              _c(\"b-form-select\", {\n                                                attrs: {\n                                                  size: \"lg\",\n                                                  options: _vm.types,\n                                                  required: \"\"\n                                                },\n                                                model: {\n                                                  value: _vm.form.type,\n                                                  callback: function($$v) {\n                                                    _vm.$set(\n                                                      _vm.form,\n                                                      \"type\",\n                                                      $$v\n                                                    )\n                                                  },\n                                                  expression: \"form.type\"\n                                                }\n                                              })\n                                            ],\n                                            1\n                                          )\n                                        ],\n                                        1\n                                      ),\n                                      _vm._v(\" \"),\n                                      _vm.form.type != \"free\"\n                                        ? _c(\n                                            \"b-col\",\n                                            { attrs: { col: \"\", md: \"8\" } },\n                                            [\n                                              _vm.form.type == \"hours\"\n                                                ? _c(\n                                                    \"b-form-group\",\n                                                    {\n                                                      attrs: {\n                                                        label: _vm.$t(\n                                                          \"desired_price_hour\"\n                                                        )\n                                                      }\n                                                    },\n                                                    [\n                                                      _c(\n                                                        \"b-input-group\",\n                                                        {\n                                                          attrs: { append: \"€\" }\n                                                        },\n                                                        [\n                                                          _c(\"b-form-input\", {\n                                                            attrs: {\n                                                              size: \"lg\",\n                                                              required: \"\"\n                                                            },\n                                                            model: {\n                                                              value:\n                                                                _vm.form\n                                                                  .desired_price_hour,\n                                                              callback: function(\n                                                                $$v\n                                                              ) {\n                                                                _vm.$set(\n                                                                  _vm.form,\n                                                                  \"desired_price_hour\",\n                                                                  $$v\n                                                                )\n                                                              },\n                                                              expression:\n                                                                \"form.desired_price_hour\"\n                                                            }\n                                                          })\n                                                        ],\n                                                        1\n                                                      )\n                                                    ],\n                                                    1\n                                                  )\n                                                : _c(\n                                                    \"b-form-group\",\n                                                    {\n                                                      attrs: {\n                                                        label: _vm.$t(\n                                                          \"total_price\"\n                                                        )\n                                                      }\n                                                    },\n                                                    [\n                                                      _c(\n                                                        \"b-input-group\",\n                                                        {\n                                                          attrs: { append: \"€\" }\n                                                        },\n                                                        [\n                                                          _c(\"b-form-input\", {\n                                                            attrs: {\n                                                              size: \"lg\",\n                                                              required: \"\"\n                                                            },\n                                                            model: {\n                                                              value:\n                                                                _vm.form\n                                                                  .total_price,\n                                                              callback: function(\n                                                                $$v\n                                                              ) {\n                                                                _vm.$set(\n                                                                  _vm.form,\n                                                                  \"total_price\",\n                                                                  $$v\n                                                                )\n                                                              },\n                                                              expression:\n                                                                \"form.total_price\"\n                                                            }\n                                                          })\n                                                        ],\n                                                        1\n                                                      )\n                                                    ],\n                                                    1\n                                                  )\n                                            ],\n                                            1\n                                          )\n                                        : _vm._e(),\n                                      _vm._v(\" \"),\n                                      _c(\n                                        \"b-col\",\n                                        { attrs: { col: \"\", md: \"4\" } },\n                                        [\n                                          _c(\n                                            \"b-form-group\",\n                                            {\n                                              attrs: {\n                                                label: _vm.$t(\"hours_estimated\")\n                                              }\n                                            },\n                                            [\n                                              _c(\n                                                \"b-input-group\",\n                                                {\n                                                  attrs: {\n                                                    append: _vm.$t(\"hours\")\n                                                  }\n                                                },\n                                                [\n                                                  _c(\"b-form-input\", {\n                                                    attrs: {\n                                                      size: \"lg\",\n                                                      required: \"\"\n                                                    },\n                                                    model: {\n                                                      value:\n                                                        _vm.form\n                                                          .hours_estimated,\n                                                      callback: function($$v) {\n                                                        _vm.$set(\n                                                          _vm.form,\n                                                          \"hours_estimated\",\n                                                          $$v\n                                                        )\n                                                      },\n                                                      expression:\n                                                        \"form.hours_estimated\"\n                                                    }\n                                                  })\n                                                ],\n                                                1\n                                              )\n                                            ],\n                                            1\n                                          )\n                                        ],\n                                        1\n                                      )\n                                    ],\n                                    1\n                                  ),\n                                  _vm._v(\" \"),\n                                  _c(\n                                    \"b-button\",\n                                    {\n                                      attrs: {\n                                        type: \"submit\",\n                                        variant: \"primary\"\n                                      }\n                                    },\n                                    [_vm._v(_vm._s(_vm.$t(\"create\")))]\n                                  )\n                                ],\n                                1\n                              )\n                            : _vm._e()\n                        ],\n                        1\n                      )\n                ])\n              : _c(\n                  \"card\",\n                  { staticClass: \"text-center p-5\" },\n                  [\n                    _c(\"h3\", { staticClass: \"mb-4\" }, [\n                      _vm._v(_vm._s(_vm.$t(\"project_succesfully_added\")))\n                    ]),\n                    _vm._v(\" \"),\n                    _c(\n                      \"router-link\",\n                      { attrs: { to: { name: \"projects\" } } },\n                      [\n                        _c(\"b-button\", { attrs: { variant: \"success\" } }, [\n                          _vm._v(_vm._s(_vm.$t(\"back\")))\n                        ])\n                      ],\n                      1\n                    )\n                  ],\n                  1\n                )\n          ],\n          1\n        )\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n
 }),
 "./resources/js/pages/projects/ProjectForm.vue":
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n var _ProjectForm_vue_vue_type_template_id_60c66e31___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( \"./resources/js/pages/projects/ProjectForm.vue?vue&type=template&id=60c66e31&\");\n var _ProjectForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( \"./resources/js/pages/projects/ProjectForm.vue?vue&type=script&lang=js&\");\n var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _ProjectForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _ProjectForm_vue_vue_type_template_id_60c66e31___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _ProjectForm_vue_vue_type_template_id_60c66e31___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n\nif (false) { var api; }\ncomponent.options.__file = \"resources/js/pages/projects/ProjectForm.vue\"\n __webpack_exports__[\"default\"] = (component.exports);
 }),
 "./resources/js/pages/projects/ProjectForm.vue?vue&type=script&lang=js&":
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/projects/ProjectForm.vue?vue&type=script&lang=js&\");\n  __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); 
 }),
 "./resources/js/pages/projects/ProjectForm.vue?vue&type=template&id=60c66e31&":
 (function(module, __webpack_exports__, __webpack_require__) {
"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectForm_vue_vue_type_template_id_60c66e31___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/projects/ProjectForm.vue?vue&type=template&id=60c66e31&\");\n __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectForm_vue_vue_type_template_id_60c66e31___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectForm_vue_vue_type_template_id_60c66e31___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n
 })
}]);
