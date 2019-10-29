(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar role=\"heading\" color=\"primary\" class=\"mat-elevation-z6 tbar\">\n  <mat-toolbar-row>\n    <button mat-icon-button>\n      <mat-icon (click)=\"sidenav.toggle()\">menu</mat-icon>\n    </button>\n    <h1>Open Hack Project</h1>\n    <div style=\"flex-grow: 1\"></div>\n    <i class=\"material-icons\">\n      business\n    </i>\n  </mat-toolbar-row>\n</mat-toolbar>\n<mat-sidenav-container>\n  <mat-sidenav #sidenav>\n    <mat-nav-list>\n      <a\n        mat-list-item\n        [routerLink]=\"'/bulkupload'\"\n        routerLinkActive=\"active_route\"\n        ><i class=\"material-icons\">\n          cloud_upload\n        </i>\n        <span style=\"padding-left:10px;font-weight:500\">Bulk Upload</span>\n      </a>\n    </mat-nav-list>\n    <mat-nav-list>\n      <a mat-list-item routerLinkActive=\"active_route\">\n        <i class=\"material-icons\">\n          insert_drive_file\n        </i>\n        <span style=\"padding-left:10px;font-weight:500\">Form 1</span>\n      </a>\n    </mat-nav-list>\n    <mat-nav-list>\n      <a mat-list-item routerLinkActive=\"active_route\">\n        <i class=\"material-icons\">\n          insert_drive_file\n        </i>\n        <span style=\"padding-left:10px;font-weight:500\">Form 2</span>\n      </a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <div style=\"height: 88vh;\">\n      <router-outlet></router-outlet>\n    </div>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bulkupload/bulkupload.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bulkupload/bulkupload.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div\n  class=\"container\"\n  fxLayout=\"row\"\n  fxLayoutAlign=\"space-around center\"\n  style=\"padding:10px;\"\n>\n  <mat-form-field>\n    <mat-label>Schema Type</mat-label>\n    <mat-select [(ngModel)]=\"schemaModalValue\" (selectionChange)=\"onSchemaChnage($event.value)\">\n      <mat-option\n        *ngFor=\"let schema of itrSchemaType\"\n        [required]=\"true\"\n        [(value)]=\"schema.value\"\n      >\n        {{ schema.viewValue }}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <button [disabled]=\"!schemaModalValue\"\n    mat-raised-button\n    color=\"primary\"\n    (click)=\"openUploadDialog()\"\n    class=\"buttonPosition\"\n  >\n    <mat-icon>add</mat-icon>\n    Choose Files\n  </button>\n\n  <button\n    [disabled]=\"dataSource.data.length === 0\"\n    mat-raised-button\n    color=\"primary\"\n    (click)=\"getValidatedFilesData('REFRESH')\"\n    class=\"buttonPosition\"\n  >\n    <mat-icon>refresh</mat-icon>\n    Refresh All\n  </button>\n\n  <button\n    [disabled]=\"dataSource.data.length === 0\"\n    mat-raised-button\n    color=\"primary\"\n    (click)=\"deleteAllValidateFielData()\"\n    class=\"buttonPosition\"\n  >\n    <mat-icon>delete</mat-icon>\n    Delete All\n  </button>\n</div>\n\n<div\n  class=\"container mat-elevation-z8\"\n  fxLayout=\"column\"\n  style=\"margin-left: 10px;margin-right: 10px;\"\n>\n  <table mat-table matSort [dataSource]=\"dataSource\">\n    <!--- Note that these columns can be defined in any order.\n        The actual rendered columns are set as a property on the row definition\" -->\n\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"position\">\n      <th mat-header-cell *matHeaderCellDef>No.</th>\n      <td mat-cell *matCellDef=\"let element; let i = index\">{{ i + 1 }}</td>\n    </ng-container>\n\n    <!-- File Name -->\n    <ng-container matColumnDef=\"fileName\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>File Name</th>\n      <td\n        mat-cell\n        (click)=\"showJsonViewer(element)\"\n        class=\"textDecor\"\n        *matCellDef=\"let element\"\n      >\n        {{ element.fileName }}\n      </td>\n    </ng-container>\n\n    <!-- Validation Status Column -->\n    <ng-container matColumnDef=\"validateStatus\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n        Validation Status\n      </th>\n      <td mat-cell *matCellDef=\"let element\">\n        <span *ngIf=\"showStatusIcon(element, 'SUBMITTED')\"\n          ><button mat-icon-button>\n            <i\n              class=\"material-icons statusIcon\"\n              matTooltip=\"File is SUBMITTED for validation.\"\n              [matTooltipPosition]=\"positionOptions[2]\"\n            >\n              av_timer\n            </i>\n          </button></span\n        >\n        <span *ngIf=\"showStatusIcon(element, 'SUCCESS')\"\n          ><button mat-icon-button class=\"green-icon\">\n            <i\n              class=\"material-icons statusIcon\"\n              color=\"green\"\n              matTooltip=\"File validation is SUCCESS.\"\n              [matTooltipPosition]=\"positionOptions[2]\"\n            >\n              done\n            </i>\n          </button></span\n        >\n        <span *ngIf=\"showStatusIcon(element, 'ERROR')\"\n          ><button\n            mat-icon-button\n            color=\"warn\"\n            (click)=\"getErrorDetails(element)\"\n          >\n            <i\n              class=\"material-icons statusIcon\"\n              matTooltip=\"File validation falied.Click to view the failed items.\"\n              [matTooltipPosition]=\"positionOptions[2]\"\n            >\n              warning\n            </i>\n          </button></span\n        >\n        <span>{{ element.validateStatus }}</span>\n      </td>\n    </ng-container>\n\n    <!-- Created Date Column -->\n    <ng-container matColumnDef=\"createdDate\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>\n        Created Date\n      </th>\n      <td mat-cell *matCellDef=\"let element\">\n        {{ element.createdDate | date: 'short' }}\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"update\">\n      <th mat-header-cell *matHeaderCellDef>Refresh</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button\n          mat-icon-button\n          color=\"primary\"\n          (click)=\"getUpdateDataById(element)\"\n        >\n          <i class=\"material-icons\">\n            refresh\n          </i>\n        </button>\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"delete\">\n      <th mat-header-cell *matHeaderCellDef>Delete</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button\n          mat-icon-button\n          color=\"primary\"\n          (click)=\"deleteValidateFileData(element)\"\n        >\n          <mat-icon class=\"mat-18\">delete</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n  </table>\n\n  <mat-paginator\n    [pageSizeOptions]=\"[5, 10, 20]\"\n    showFirstLastButtons\n  ></mat-paginator>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bulkupload/errorbar/errorbar.component.html": 
        /*!***************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bulkupload/errorbar/errorbar.component.html ***!
          \***************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <button mat-icon-button color=\"warn\">\n    <i class=\"material-icons\">\n      warning\n    </i>\n  </button>\n</div>\n<p>\n  <span style=\"color: white;\"\n    >Unexpected error occured while viewing JSON. Please wait for the validation\n    to complete.</span\n  >\n</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bulkupload/errordata/errordata.component.html": 
        /*!*****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bulkupload/errordata/errordata.component.html ***!
          \*****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>File Validator Error Data</h1>\n<div mat-dialog-content>\n  <table mat-table matSort [dataSource]=\"dataSource\">\n    <!--- Note that these columns can be defined in any order.\n        The actual rendered columns are set as a property on the row definition\" -->\n\n    <!-- Sl Column -->\n    <ng-container matColumnDef=\"position\">\n      <th mat-header-cell *matHeaderCellDef>No.</th>\n      <td mat-cell *matCellDef=\"let element; let i = index\">{{ i + 1 }}</td>\n    </ng-container>\n\n    <!-- Error Type -->\n    <ng-container matColumnDef=\"errorType\">\n      <th mat-header-cell *matHeaderCellDef>Error Type</th>\n      <td mat-cell *matCellDef=\"let element\">{{ element.errorType }}</td>\n    </ng-container>\n\n    <!-- Error Description -->\n    <ng-container matColumnDef=\"errorDescription\">\n      <th mat-header-cell *matHeaderCellDef>Error Description</th>\n      <td mat-cell *matCellDef=\"let element\">\n        {{ element.errorDescription }}\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n  </table>\n\n  <mat-paginator\n    [pageSizeOptions]=\"[5, 10, 20]\"\n    showFirstLastButtons\n  ></mat-paginator>\n</div>\n\n<div mat-dialog-actions align=\"end\">\n  <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>Close</button>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bulkupload/jsonview/jsonview.component.html": 
        /*!***************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bulkupload/jsonview/jsonview.component.html ***!
          \***************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Json Viewer</h1>\n<div mat-dialog-content>\n  <json-editor #editor [options]=\"editorOptions\" [data]=\"jsonData\"></json-editor>\n</div>\n<div mat-dialog-actions>\n  <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>Close</button>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bulkupload/upload/upload.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bulkupload/upload/upload.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar role=\"heading\" color=\"primary\" class=\"mat-elevation-z6 tbar\">\n  <mat-toolbar-row>\n    <h1>File Upload For Validation</h1>\n    <div style=\"flex-grow: 1\"></div>\n    <i class=\"material-icons\">\n      cloud_upload\n    </i>\n  </mat-toolbar-row>\n</mat-toolbar>\n<mat-dialog-content>\n  <div fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"padding-top: 10px;\">\n    <button mat-raised-button color=\"primary\" (click)=\"onClick($event)\">\n      <mat-icon>add</mat-icon>\n      Add Files\n    </button>\n    <input\n      #fileUpload\n      type=\"file\"\n      class=\"input_fileupload--hidden\"\n      (input)=\"onInput($event)\"\n      (change)=\"onFileSelected($event)\"\n      [(ngModel)]=\"inputFileName\"\n      [accept]=\"accept\"\n      [multiple]=\"multiple\"\n    />\n    <div style=\"flex-grow: 1\"></div>\n    <!-- <button\n      [disabled]=\"files.length === 0\"\n      mat-raised-button\n      color=\"primary\"\n      (click)=\"removeSelectedFiles(files)\"\n      class=\"buttonPosition\"\n    >\n      <mat-icon>delete</mat-icon>\n      Delete All\n    </button> -->\n  </div>\n\n  <mat-list>\n    <mat-list-item *ngFor=\"let file of files; let i = index\">\n      <span matLine style=\"display: flex;\"\n        ><span>{{ i + 1 }}. </span><span>{{ file.name }}</span>\n        <div style=\"flex-grow: 1\"></div>\n        <span\n          ><i\n            class=\"material-icons\"\n            style=\"cursor: pointer;\"\n            (click)=\"removeFile($event, file)\"\n          >\n            delete\n          </i></span\n        ></span\n      >\n    </mat-list-item>\n  </mat-list>\n</mat-dialog-content>\n<div mat-dialog-actions>\n  <button\n    color=\"warm\"\n    class=\"mat-raised-button\"\n    [disabled]=\"!files || files.length === 0\"\n    (click)=\"uploadFiles(files)\"\n  >\n    Upload Files\n  </button>\n  <button\n    style=\"margin-left:10px;\"\n    mat-button\n    [mat-dialog-close]=\"files\"\n    cdkFocusInitial\n  >\n    Close\n  </button>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/confirm/confirm.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/confirm/confirm.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-content>\n  {{ message }}\n</div>\n<div mat-dialog-actions>\n  <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>Yes</button>\n  <button mat-button (click)=\"onNoClick()\">No</button>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var bulkupload_component_1 = __webpack_require__(/*! ./bulkupload/bulkupload.component */ "./src/app/bulkupload/bulkupload.component.ts");
            var routes = [
                { path: 'bulkupload', component: bulkupload_component_1.BulkuploadComponent },
                { path: '',
                    redirectTo: '/bulkupload',
                    pathMatch: 'full'
                },
                { path: '**', component: bulkupload_component_1.BulkuploadComponent }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib_1.__decorate([
                core_1.NgModule({
                    imports: [router_1.RouterModule.forRoot(routes)],
                    exports: [router_1.RouterModule]
                })
            ], AppRoutingModule);
            exports.AppRoutingModule = AppRoutingModule;
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'Open Hack';
                }
                return AppComponent;
            }());
            AppComponent = tslib_1.__decorate([
                core_1.Component({
                    selector: 'app-root',
                    template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib_1.__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            exports.AppComponent = AppComponent;
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var app_routing_module_1 = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            var app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            var animations_1 = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var toolbar_1 = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
            var sidenav_1 = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
            var list_1 = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
            var bulkupload_component_1 = __webpack_require__(/*! ./bulkupload/bulkupload.component */ "./src/app/bulkupload/bulkupload.component.ts");
            var dialog_1 = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            var icon_1 = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
            var button_1 = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            var card_1 = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
            var core_2 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var flex_layout_1 = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            var table_1 = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
            var upload_component_1 = __webpack_require__(/*! ./bulkupload/upload/upload.component */ "./src/app/bulkupload/upload/upload.component.ts");
            var sort_1 = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
            var paginator_1 = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
            var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            var snack_bar_1 = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
            var confirm_component_1 = __webpack_require__(/*! ./confirm/confirm.component */ "./src/app/confirm/confirm.component.ts");
            var jsonview_component_1 = __webpack_require__(/*! ./bulkupload/jsonview/jsonview.component */ "./src/app/bulkupload/jsonview/jsonview.component.ts");
            var ang_jsoneditor_1 = __webpack_require__(/*! ang-jsoneditor */ "./node_modules/ang-jsoneditor/fesm2015/ang-jsoneditor.js");
            var errorbar_component_1 = __webpack_require__(/*! ./bulkupload/errorbar/errorbar.component */ "./src/app/bulkupload/errorbar/errorbar.component.ts");
            var tooltip_1 = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
            var errordata_component_1 = __webpack_require__(/*! ./bulkupload/errordata/errordata.component */ "./src/app/bulkupload/errordata/errordata.component.ts");
            var select_1 = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib_1.__decorate([
                core_1.NgModule({
                    declarations: [
                        app_component_1.AppComponent,
                        bulkupload_component_1.BulkuploadComponent,
                        upload_component_1.UploadComponent,
                        confirm_component_1.ConfirmComponent,
                        jsonview_component_1.JsonviewComponent,
                        errorbar_component_1.ErrorbarComponent,
                        errordata_component_1.ErrordataComponent
                    ],
                    imports: [
                        platform_browser_1.BrowserModule,
                        app_routing_module_1.AppRoutingModule,
                        animations_1.BrowserAnimationsModule,
                        toolbar_1.MatToolbarModule,
                        sidenav_1.MatSidenavModule,
                        list_1.MatListModule,
                        dialog_1.MatDialogModule,
                        icon_1.MatIconModule,
                        button_1.MatButtonModule,
                        card_1.MatCardModule,
                        http_1.HttpClientModule,
                        forms_1.FormsModule,
                        flex_layout_1.FlexLayoutModule,
                        table_1.MatTableModule,
                        sort_1.MatSortModule,
                        paginator_1.MatPaginatorModule,
                        snack_bar_1.MatSnackBarModule,
                        ang_jsoneditor_1.NgJsonEditorModule,
                        tooltip_1.MatTooltipModule,
                        select_1.MatSelectModule
                    ],
                    providers: [
                        {
                            provide: material_1.MAT_DIALOG_DEFAULT_OPTIONS,
                            useValue: { panelClass: 'mat-dialog-override' }
                        }
                    ],
                    schemas: [core_2.CUSTOM_ELEMENTS_SCHEMA],
                    bootstrap: [app_component_1.AppComponent],
                    entryComponents: [
                        upload_component_1.UploadComponent,
                        confirm_component_1.ConfirmComponent,
                        jsonview_component_1.JsonviewComponent,
                        errorbar_component_1.ErrorbarComponent,
                        errordata_component_1.ErrordataComponent
                    ]
                })
            ], AppModule);
            exports.AppModule = AppModule;
            /***/ 
        }),
        /***/ "./src/app/app.service.ts": 
        /*!********************************!*\
          !*** ./src/app/app.service.ts ***!
          \********************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var validation_service_1 = __webpack_require__(/*! ./bulkupload/validation.service */ "./src/app/bulkupload/validation.service.ts");
            var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var AppService = /** @class */ (function () {
                function AppService(http, validateService) {
                    this.http = http;
                    this.validateService = validateService;
                    this.apiUrl = 'http://localhost:8080';
                }
                AppService.prototype.getValidatedFilesData = function () {
                    return this.http.get(this.apiUrl + '/api/getAllFileValidateData');
                };
                AppService.prototype.getUpdateDataById = function (validateId) {
                    return this.http.get(this.apiUrl + '/api/getFileValidateDataById/' + validateId);
                };
                AppService.prototype.uploadFileData = function (selectedFilesData, errorData) {
                    var formData = new FormData();
                    formData.append('files', selectedFilesData);
                    formData.append('errors', JSON.stringify(errorData));
                    return this.http.post(this.apiUrl + '/api/uploadMultipleFiles', formData);
                };
                AppService.prototype.deleteValidateFileData = function (validateFileObj) {
                    var validateFileId = validateFileObj.id;
                    return this.http.delete(this.apiUrl + '/api/deleteValidateFielData/' + validateFileId);
                };
                AppService.prototype.deleteAllValidateFielData = function () {
                    return this.http.delete(this.apiUrl + '/api/deleteAllValidateFielData');
                };
                return AppService;
            }());
            AppService.ctorParameters = function () { return [
                { type: http_1.HttpClient },
                { type: validation_service_1.ValidationService }
            ]; };
            AppService = tslib_1.__decorate([
                core_1.Injectable({
                    providedIn: 'root'
                })
            ], AppService);
            exports.AppService = AppService;
            /***/ 
        }),
        /***/ "./src/app/bulkupload/bulkupload.component.css": 
        /*!*****************************************************!*\
          !*** ./src/app/bulkupload/bulkupload.component.css ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1bGt1cGxvYWQvYnVsa3VwbG9hZC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/bulkupload/bulkupload.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/bulkupload/bulkupload.component.ts ***!
          \****************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var errordata_component_1 = __webpack_require__(/*! ./errordata/errordata.component */ "./src/app/bulkupload/errordata/errordata.component.ts");
            var confirm_component_1 = __webpack_require__(/*! ./../confirm/confirm.component */ "./src/app/confirm/confirm.component.ts");
            var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var app_service_1 = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
            var dialog_1 = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            var upload_component_1 = __webpack_require__(/*! ./upload/upload.component */ "./src/app/bulkupload/upload/upload.component.ts");
            var sort_1 = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
            var table_1 = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
            var paginator_1 = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
            var snack_bar_1 = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
            var jsonview_component_1 = __webpack_require__(/*! ./jsonview/jsonview.component */ "./src/app/bulkupload/jsonview/jsonview.component.ts");
            var errorbar_component_1 = __webpack_require__(/*! ./errorbar/errorbar.component */ "./src/app/bulkupload/errorbar/errorbar.component.ts");
            var BulkuploadComponent = /** @class */ (function () {
                function BulkuploadComponent(appService, dialog, changeDetectorRefs, snackBar) {
                    this.appService = appService;
                    this.dialog = dialog;
                    this.changeDetectorRefs = changeDetectorRefs;
                    this.snackBar = snackBar;
                    this.isEmptyValidateList = true;
                    this.displayedColumns = [
                        'position',
                        'fileName',
                        'createdDate',
                        'validateStatus',
                        'update',
                        'delete'
                    ];
                    this.dataSource = new table_1.MatTableDataSource();
                    this.positionOptions = [
                        'after',
                        'before',
                        'above',
                        'below',
                        'left',
                        'right'
                    ];
                    this.itrSchemaType = [
                        { value: 'ITR_SCHEMA_2', viewValue: 'ITR2 Schema' },
                        { value: 'ITR_SCHEMA_3', viewValue: 'ITR3 Schema' }
                    ];
                }
                BulkuploadComponent.prototype.ngOnInit = function () {
                    this.getValidatedFilesData('INIT');
                };
                BulkuploadComponent.prototype.getValidatedFilesData = function (type) {
                    var _this = this;
                    this.appService.getValidatedFilesData().subscribe(function (response) {
                        _this.dataSource.data = response;
                        _this.dataSource.sortingDataAccessor = function (item, property) {
                            switch (property) {
                                case 'createdDate':
                                    return new Date(item.createdDate);
                                default:
                                    return item[property];
                            }
                        };
                        _this.dataSource.sort = _this.sort;
                        _this.dataSource.paginator = _this.paginator;
                        if (type === 'REFRESH') {
                            _this.snackBar.open(_this.dataSource.data.length + ' files data is refreshed.', 'Close', {
                                duration: 2000
                            });
                        }
                    }, function (error) { return console.log('error : ' + error); }, function () {
                        console.log('completed');
                    });
                };
                BulkuploadComponent.prototype.onSchemaChnage = function (selectedType) {
                    console.log('selectedType : ' + selectedType);
                };
                BulkuploadComponent.prototype.openUploadDialog = function () {
                    var _this = this;
                    var dialogConfig = new dialog_1.MatDialogConfig();
                    dialogConfig.disableClose = true;
                    dialogConfig.autoFocus = true;
                    dialogConfig.minHeight = '200px';
                    dialogConfig.minWidth = '500px';
                    dialogConfig.panelClass = 'mat-dialog-override';
                    dialogConfig.data = { schemaType: this.schemaModalValue };
                    var dialogRef = this.dialog.open(upload_component_1.UploadComponent, dialogConfig);
                    dialogRef.afterClosed().subscribe(function (data) {
                        console.log('Dialog output:', data);
                        if (data && data.length > 0) {
                            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                                var item = data_1[_i];
                                _this.dataSource.data.push(item);
                            }
                            _this.dataSource.data = _this.dataSource.data.slice();
                            _this.snackBar.open(data.length + ' files uploaded.', 'Close', {
                                duration: 2000
                            });
                        }
                    });
                };
                BulkuploadComponent.prototype.getUpdateDataById = function (currentElement) {
                    var _this = this;
                    var validateId = currentElement.id;
                    var responseData = {};
                    this.appService.getUpdateDataById(validateId).subscribe(function (data) {
                        if (data) {
                            responseData = data;
                            _this.dataSource.data[_this.getIndexfromdataSource(validateId)].validateStatus = responseData.validateStatus;
                            _this.dataSource.data = _this.dataSource.data.slice();
                            _this.snackBar.open(currentElement.fileName + ' data refreshed.', 'Close', {
                                duration: 2000
                            });
                        }
                        console.log('Id data' + data);
                    }, function (error) { return console.log('Error in getting data from ID'); });
                };
                BulkuploadComponent.prototype.deleteValidateFileData = function (validateFileObj) {
                    var _this = this;
                    this.appService.deleteValidateFileData(validateFileObj).subscribe(function (response) {
                        var tempList = [];
                        tempList = _this.dataSource.data.splice(_this.getIndexfromdataSource(validateFileObj.id), 1);
                        _this.dataSource.data = _this.dataSource.data.slice();
                        _this.snackBar.open(validateFileObj.fileName + ' is deleted.', 'Close', {
                            duration: 2000
                        });
                        console.log(response);
                    }, function (error) { return console.log(error); }, function () {
                        console.log('Delete completed');
                    });
                };
                BulkuploadComponent.prototype.deleteAllValidateFielData = function () {
                    var _this = this;
                    var dialogRef = this.dialog.open(confirm_component_1.ConfirmComponent, {
                        width: '350px',
                        data: 'Do you confirm the deletion?'
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                        if (result) {
                            _this.appService.deleteAllValidateFielData().subscribe(function (response) {
                                console.log('complete data deleted');
                                var dataSourceLength = _this.dataSource.data.length;
                                _this.dataSource.data = [];
                                _this.snackBar.open(dataSourceLength + ' items deleted.', 'Close', {
                                    duration: 2000
                                });
                            }, function (error) { return console.log('error in data deletion'); });
                        }
                    });
                };
                BulkuploadComponent.prototype.getIndexfromdataSource = function (validateFileId) {
                    var index = -1;
                    if (this.dataSource.data && this.dataSource.data.length > 0) {
                        index = this.dataSource.data.map(function (e) { return e.id; }).indexOf(validateFileId);
                    }
                    return index;
                };
                BulkuploadComponent.prototype.refresh = function () {
                    this.changeDetectorRefs.detectChanges();
                };
                BulkuploadComponent.prototype.showJsonViewer = function (currentElement) {
                    var dialogConfig = new dialog_1.MatDialogConfig();
                    dialogConfig.disableClose = true;
                    dialogConfig.autoFocus = true;
                    dialogConfig.panelClass = 'mat-dialog-override';
                    try {
                        dialogConfig.data = { jsonData: JSON.parse(currentElement.jsonData) };
                    }
                    catch (error) {
                        this.snackBar.openFromComponent(errorbar_component_1.ErrorbarComponent, {
                            duration: 5000
                        });
                        return;
                    }
                    var dialogRef = this.dialog.open(jsonview_component_1.JsonviewComponent, dialogConfig);
                    dialogRef.afterClosed().subscribe(function (result) {
                        console.log('The dialog was closed');
                    });
                };
                BulkuploadComponent.prototype.getErrorDetails = function (currentElement) {
                    var dialogConfig = new dialog_1.MatDialogConfig();
                    dialogConfig.disableClose = false;
                    dialogConfig.autoFocus = true;
                    dialogConfig.minHeight = '500px';
                    dialogConfig.minWidth = '800px';
                    dialogConfig.data = {
                        errorDataList: currentElement.errorDataList
                    };
                    var dialogRef = this.dialog.open(errordata_component_1.ErrordataComponent, dialogConfig);
                    dialogRef.afterClosed().subscribe(function (result) {
                        console.log('The dialog was closed');
                    });
                };
                BulkuploadComponent.prototype.showStatusIcon = function (currentElement, validStatus) {
                    var isValidStatus = false;
                    if (currentElement.validateStatus === validStatus) {
                        isValidStatus = true;
                    }
                    return isValidStatus;
                };
                return BulkuploadComponent;
            }());
            BulkuploadComponent.ctorParameters = function () { return [
                { type: app_service_1.AppService },
                { type: dialog_1.MatDialog },
                { type: core_1.ChangeDetectorRef },
                { type: snack_bar_1.MatSnackBar }
            ]; };
            tslib_1.__decorate([
                core_1.ViewChild(sort_1.MatSort, { static: true })
            ], BulkuploadComponent.prototype, "sort", void 0);
            tslib_1.__decorate([
                core_1.ViewChild(paginator_1.MatPaginator, { static: true })
            ], BulkuploadComponent.prototype, "paginator", void 0);
            BulkuploadComponent = tslib_1.__decorate([
                core_1.Component({
                    selector: 'app-bulkupload',
                    template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./bulkupload.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bulkupload/bulkupload.component.html")).default,
                    styles: [tslib_1.__importDefault(__webpack_require__(/*! ./bulkupload.component.css */ "./src/app/bulkupload/bulkupload.component.css")).default]
                })
            ], BulkuploadComponent);
            exports.BulkuploadComponent = BulkuploadComponent;
            /***/ 
        }),
        /***/ "./src/app/bulkupload/errorbar/errorbar.component.css": 
        /*!************************************************************!*\
          !*** ./src/app/bulkupload/errorbar/errorbar.component.css ***!
          \************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1bGt1cGxvYWQvZXJyb3JiYXIvZXJyb3JiYXIuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/bulkupload/errorbar/errorbar.component.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/bulkupload/errorbar/errorbar.component.ts ***!
          \***********************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ErrorbarComponent = /** @class */ (function () {
                function ErrorbarComponent() {
                }
                ErrorbarComponent.prototype.ngOnInit = function () { };
                return ErrorbarComponent;
            }());
            ErrorbarComponent = tslib_1.__decorate([
                core_1.Component({
                    selector: 'app-errorbar',
                    template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./errorbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bulkupload/errorbar/errorbar.component.html")).default,
                    styles: [tslib_1.__importDefault(__webpack_require__(/*! ./errorbar.component.css */ "./src/app/bulkupload/errorbar/errorbar.component.css")).default]
                })
            ], ErrorbarComponent);
            exports.ErrorbarComponent = ErrorbarComponent;
            /***/ 
        }),
        /***/ "./src/app/bulkupload/errordata/errordata.component.css": 
        /*!**************************************************************!*\
          !*** ./src/app/bulkupload/errordata/errordata.component.css ***!
          \**************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1bGt1cGxvYWQvZXJyb3JkYXRhL2Vycm9yZGF0YS5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/bulkupload/errordata/errordata.component.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/bulkupload/errordata/errordata.component.ts ***!
          \*************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var paginator_1 = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
            var sort_1 = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
            var table_1 = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
            var dialog_1 = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            var ErrordataComponent = /** @class */ (function () {
                function ErrordataComponent(dialogRef, data) {
                    this.dialogRef = dialogRef;
                    this.data = data;
                    this.dataSource = new table_1.MatTableDataSource();
                    this.displayedColumns = ['position', 'errorType', 'errorDescription'];
                }
                ErrordataComponent.prototype.ngOnInit = function () {
                    this.dataSource.data = this.data.errorDataList;
                    this.dataSource.sort = this.sort;
                    this.dataSource.paginator = this.paginator;
                };
                return ErrordataComponent;
            }());
            ErrordataComponent.ctorParameters = function () { return [
                { type: dialog_1.MatDialogRef },
                { type: undefined, decorators: [{ type: core_1.Inject, args: [dialog_1.MAT_DIALOG_DATA,] }] }
            ]; };
            tslib_1.__decorate([
                core_1.ViewChild(sort_1.MatSort, { static: true })
            ], ErrordataComponent.prototype, "sort", void 0);
            tslib_1.__decorate([
                core_1.ViewChild(paginator_1.MatPaginator, { static: true })
            ], ErrordataComponent.prototype, "paginator", void 0);
            ErrordataComponent = tslib_1.__decorate([
                core_1.Component({
                    selector: 'app-errordata',
                    template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./errordata.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bulkupload/errordata/errordata.component.html")).default,
                    styles: [tslib_1.__importDefault(__webpack_require__(/*! ./errordata.component.css */ "./src/app/bulkupload/errordata/errordata.component.css")).default]
                }),
                tslib_1.__param(1, core_1.Inject(dialog_1.MAT_DIALOG_DATA))
            ], ErrordataComponent);
            exports.ErrordataComponent = ErrordataComponent;
            /***/ 
        }),
        /***/ "./src/app/bulkupload/itrschema.service.ts": 
        /*!*************************************************!*\
          !*** ./src/app/bulkupload/itrschema.service.ts ***!
          \*************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ItrschemaService = /** @class */ (function () {
                function ItrschemaService() {
                }
                ItrschemaService.prototype.getITR2Schema = function () {
                    var itr2Schema = {
                        definitions: {},
                        $schema: 'http://json-schema.org/draft-07/schema#',
                        $id: 'http://example.com/root.json',
                        type: 'object',
                        title: 'The Root Schema',
                        required: ['ITR2'],
                        properties: {
                            ITR2: {
                                $id: '#/properties/ITR2',
                                type: 'object',
                                title: 'The Itr2 Schema',
                                required: ['CreationInfo', 'Form_ITR2', 'PartA_GEN1', 'PartB-TI'],
                                properties: {
                                    CreationInfo: {
                                        $id: '#/properties/ITR2/properties/CreationInfo',
                                        type: 'object',
                                        title: 'The Creationinfo Schema',
                                        required: ['XMLCreationDate'],
                                        properties: {
                                            XMLCreationDate: {
                                                $id: '#/properties/ITR2/properties/CreationInfo/properties/XMLCreationDate',
                                                type: 'string',
                                                minLength: 10,
                                                maxLength: 10,
                                                title: 'The Xmlcreationdate Schema',
                                                default: '',
                                                examples: ['2008-07-15'],
                                                pattern: '[0-9]{4}-[0-9]{2}-[0-9]{2}'
                                            }
                                        }
                                    },
                                    Form_ITR2: {
                                        $id: '#/properties/ITR2/properties/Form_ITR2',
                                        type: 'object',
                                        title: 'The Form_itr2 Schema',
                                        required: ['FormName', 'Description', 'AssessmentYear'],
                                        properties: {
                                            FormName: {
                                                $id: '#/properties/ITR2/properties/Form_ITR2/properties/FormName',
                                                type: 'string',
                                                minLength: 5,
                                                maxLength: 5,
                                                title: 'The Formname Schema',
                                                default: '',
                                                examples: ['ITR-2'],
                                                pattern: 'ITR-[1-9]{1}'
                                            },
                                            Description: {
                                                $id: '#/properties/ITR2/properties/Form_ITR2/properties/Description',
                                                type: 'string',
                                                minLength: 10,
                                                maxLength: 100,
                                                title: 'The Description Schema',
                                                default: '',
                                                examples: [
                                                    'For Indls and  HUFs not having Income from Business or Profession'
                                                ],
                                                pattern: '^(.*)$'
                                            },
                                            AssessmentYear: {
                                                $id: '#/properties/ITR2/properties/Form_ITR2/properties/AssessmentYear',
                                                type: 'integer',
                                                minimum: 2015,
                                                maximum: 2019,
                                                title: 'The Assessmentyear Schema',
                                                default: 0,
                                                examples: [2008]
                                            }
                                        }
                                    },
                                    PartA_GEN1: {
                                        $id: '#/properties/ITR2/properties/PartA_GEN1',
                                        type: 'object',
                                        title: 'The Parta_gen1 Schema',
                                        required: ['PersonalInfo', 'FilingStatus'],
                                        properties: {
                                            PersonalInfo: {
                                                $id: '#/properties/ITR2/properties/PartA_GEN1/properties/PersonalInfo',
                                                type: 'object',
                                                title: 'The Personalinfo Schema',
                                                required: ['AssesseeName', 'PAN', 'Address', 'DOB', 'Gender'],
                                                properties: {
                                                    AssesseeName: {
                                                        $id: '#/properties/ITR2/properties/PartA_GEN1/properties/PersonalInfo/properties/AssesseeName',
                                                        type: 'object',
                                                        title: 'The Assesseename Schema',
                                                        required: ['FirstName'],
                                                        properties: {
                                                            FirstName: {
                                                                $id: '#/properties/ITR2/properties/PartA_GEN1/properties/PersonalInfo/properties/AssesseeName/properties/FirstName',
                                                                type: 'string',
                                                                minLength: 2,
                                                                maxLength: 25,
                                                                title: 'The Firstname Schema',
                                                                default: '',
                                                                examples: ['AAAAAA'],
                                                                pattern: '^(.*)$'
                                                            }
                                                        }
                                                    },
                                                    PAN: {
                                                        $id: '#/properties/ITR2/properties/PartA_GEN1/properties/PersonalInfo/properties/PAN',
                                                        type: 'string',
                                                        minLength: 10,
                                                        maxLength: 10,
                                                        title: 'The Pan Schema',
                                                        default: '',
                                                        examples: ['AAAPA1111A'],
                                                        pattern: '[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}'
                                                    },
                                                    Address: {
                                                        $id: '#/properties/ITR2/properties/PartA_GEN1/properties/PersonalInfo/properties/Address',
                                                        type: 'object',
                                                        title: 'The Address Schema',
                                                        required: ['StateCode', 'PinCode'],
                                                        properties: {
                                                            StateCode: {
                                                                $id: '#/properties/ITR2/properties/PartA_GEN1/properties/PersonalInfo/properties/Address/properties/StateCode',
                                                                type: 'integer',
                                                                minimum: 0,
                                                                maximum: 99,
                                                                title: 'The Statecode Schema',
                                                                default: 0,
                                                                examples: [2]
                                                            },
                                                            PinCode: {
                                                                $id: '#/properties/ITR2/properties/PartA_GEN1/properties/PersonalInfo/properties/Address/properties/PinCode',
                                                                type: 'integer',
                                                                minimum: 100000,
                                                                maximum: 999999,
                                                                title: 'The Pincode Schema',
                                                                default: 0,
                                                                examples: [111111]
                                                            }
                                                        }
                                                    },
                                                    DOB: {
                                                        $id: '#/properties/ITR2/properties/PartA_GEN1/properties/PersonalInfo/properties/DOB',
                                                        type: 'string',
                                                        minLength: 10,
                                                        maxLength: 10,
                                                        title: 'The Dob Schema',
                                                        default: '',
                                                        examples: ['1900-01-01'],
                                                        pattern: '[0-9]{4}-[0-9]{2}-[0-9]{2}'
                                                    },
                                                    Gender: {
                                                        $id: '#/properties/ITR2/properties/PartA_GEN1/properties/PersonalInfo/properties/Gender',
                                                        type: 'string',
                                                        minLength: 1,
                                                        maxLength: 1,
                                                        title: 'The Gender Schema',
                                                        default: '',
                                                        examples: ['F'],
                                                        pattern: '[MFO]{1}'
                                                    }
                                                }
                                            },
                                            FilingStatus: {
                                                $id: '#/properties/ITR2/properties/PartA_GEN1/properties/FilingStatus',
                                                type: 'object',
                                                title: 'The Filingstatus Schema',
                                                required: ['FilingDateTime'],
                                                properties: {
                                                    FilingDateTime: {
                                                        $id: '#/properties/ITR2/properties/PartA_GEN1/properties/FilingStatus/properties/FilingDateTime',
                                                        type: 'string',
                                                        minLength: 25,
                                                        maxLength: 25,
                                                        title: 'The Filingdatetime Schema',
                                                        default: '',
                                                        examples: [''],
                                                        pattern: '^(.*)$'
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    'PartB-TI': {
                                        $id: '#/properties/ITR2/properties/PartB-TI',
                                        type: 'object',
                                        title: 'The Partb-ti Schema',
                                        required: ['IncFromOS', 'TotalTI'],
                                        properties: {
                                            IncFromOS: {
                                                $id: '#/properties/ITR2/properties/PartB-TI/properties/IncFromOS',
                                                type: 'object',
                                                title: 'The Incfromos Schema',
                                                required: ['IncFromOS1', 'IncFromOS2'],
                                                properties: {
                                                    IncFromOS1: {
                                                        $id: '#/properties/ITR2/properties/PartB-TI/properties/IncFromOS/properties/IncFromOS1',
                                                        type: 'integer',
                                                        minimum: 0,
                                                        maximum: 10000,
                                                        title: 'The Incfromos1 Schema',
                                                        default: 0,
                                                        examples: [1234]
                                                    },
                                                    IncFromOS2: {
                                                        $id: '#/properties/ITR2/properties/PartB-TI/properties/IncFromOS/properties/IncFromOS2',
                                                        type: 'integer',
                                                        minimum: 0,
                                                        maximum: 10000,
                                                        title: 'The Incfromos2 Schema',
                                                        default: 0,
                                                        examples: [2345]
                                                    }
                                                }
                                            },
                                            TotalTI: {
                                                $id: '#/properties/ITR2/properties/PartB-TI/properties/TotalTI',
                                                type: 'integer',
                                                minimum: 0,
                                                maximum: 10000,
                                                title: 'The Totalti Schema',
                                                default: 0,
                                                examples: [44354]
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    };
                    return itr2Schema;
                };
                ItrschemaService.prototype.getITR3Schema = function () {
                    var itr3Schema = {
                        definitions: {},
                        $schema: 'http://json-schema.org/draft-07/schema#',
                        $id: 'http://example.com/root.json',
                        type: 'object',
                        title: 'The Root Schema',
                        required: ['ITR3'],
                        properties: {
                            ITR3: {
                                $id: '#/properties/ITR3',
                                type: 'object',
                                title: 'The Itr3 Schema',
                                required: ['CreationInfo', 'Form_ITR3', 'PartA_GEN1'],
                                properties: {
                                    CreationInfo: {
                                        $id: '#/properties/ITR3/properties/CreationInfo',
                                        type: 'object',
                                        title: 'The Creationinfo Schema',
                                        required: ['XMLCreationDate'],
                                        properties: {
                                            XMLCreationDate: {
                                                $id: '#/properties/ITR3/properties/CreationInfo/properties/XMLCreationDate',
                                                type: 'string',
                                                title: 'The Xmlcreationdate Schema',
                                                default: '',
                                                examples: ['2008-07-15'],
                                                pattern: '^(.*)$'
                                            }
                                        }
                                    },
                                    Form_ITR3: {
                                        $id: '#/properties/ITR3/properties/Form_ITR3',
                                        type: 'object',
                                        title: 'The Form_itr3 Schema',
                                        required: ['FormName', 'Description', 'AssessmentYear'],
                                        properties: {
                                            FormName: {
                                                $id: '#/properties/ITR3/properties/Form_ITR3/properties/FormName',
                                                type: 'string',
                                                minLength: 5,
                                                maxLength: 5,
                                                title: 'The Formname Schema',
                                                default: '',
                                                examples: ['ITR-2'],
                                                pattern: 'ITR-[1-9]{1}'
                                            },
                                            Description: {
                                                $id: '#/properties/ITR3/properties/Form_ITR3/properties/Description',
                                                type: 'string',
                                                title: 'The Description Schema',
                                                default: '',
                                                examples: [
                                                    'For Indls and  HUFs not having Income from Business or Profession'
                                                ],
                                                pattern: '^(.*)$'
                                            },
                                            AssessmentYear: {
                                                $id: '#/properties/ITR3/properties/Form_ITR3/properties/AssessmentYear',
                                                type: 'integer',
                                                title: 'The Assessmentyear Schema',
                                                default: 0,
                                                examples: [2016]
                                            }
                                        }
                                    },
                                    PartA_GEN1: {
                                        $id: '#/properties/ITR3/properties/PartA_GEN1',
                                        type: 'object',
                                        title: 'The Parta_gen1 Schema',
                                        required: ['PersonalInfo', 'FilingStatus'],
                                        properties: {
                                            PersonalInfo: {
                                                $id: '#/properties/ITR3/properties/PartA_GEN1/properties/PersonalInfo',
                                                type: 'object',
                                                title: 'The Personalinfo Schema',
                                                required: ['AssesseeName', 'PAN', 'Address', 'DOB', 'Gender'],
                                                properties: {
                                                    AssesseeName: {
                                                        $id: '#/properties/ITR3/properties/PartA_GEN1/properties/PersonalInfo/properties/AssesseeName',
                                                        type: 'object',
                                                        title: 'The Assesseename Schema',
                                                        required: ['FirstName'],
                                                        properties: {
                                                            FirstName: {
                                                                $id: '#/properties/ITR3/properties/PartA_GEN1/properties/PersonalInfo/properties/AssesseeName/properties/FirstName',
                                                                type: 'string',
                                                                title: 'The Firstname Schema',
                                                                default: '',
                                                                examples: ['AAAAAA'],
                                                                pattern: '^(.*)$'
                                                            }
                                                        }
                                                    },
                                                    PAN: {
                                                        $id: '#/properties/ITR3/properties/PartA_GEN1/properties/PersonalInfo/properties/PAN',
                                                        type: 'string',
                                                        minLength: 10,
                                                        maxLength: 10,
                                                        title: 'The Pan Schema',
                                                        default: '',
                                                        examples: ['AAAPA1111A'],
                                                        pattern: '[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}'
                                                    },
                                                    Address: {
                                                        $id: '#/properties/ITR3/properties/PartA_GEN1/properties/PersonalInfo/properties/Address',
                                                        type: 'object',
                                                        title: 'The Address Schema',
                                                        required: ['StateCode', 'PinCode'],
                                                        properties: {
                                                            StateCode: {
                                                                $id: '#/properties/ITR3/properties/PartA_GEN1/properties/PersonalInfo/properties/Address/properties/StateCode',
                                                                type: 'integer',
                                                                title: 'The Statecode Schema',
                                                                default: 0,
                                                                examples: [2]
                                                            },
                                                            PinCode: {
                                                                $id: '#/properties/ITR3/properties/PartA_GEN1/properties/PersonalInfo/properties/Address/properties/PinCode',
                                                                type: 'integer',
                                                                title: 'The Pincode Schema',
                                                                default: 0,
                                                                examples: [111111]
                                                            }
                                                        }
                                                    },
                                                    DOB: {
                                                        $id: '#/properties/ITR3/properties/PartA_GEN1/properties/PersonalInfo/properties/DOB',
                                                        type: 'string',
                                                        title: 'The Dob Schema',
                                                        default: '',
                                                        examples: ['1900-01-01'],
                                                        pattern: '^(.*)$'
                                                    },
                                                    Gender: {
                                                        $id: '#/properties/ITR3/properties/PartA_GEN1/properties/PersonalInfo/properties/Gender',
                                                        type: 'string',
                                                        minLength: 1,
                                                        maxLength: 1,
                                                        title: 'The Gender Schema',
                                                        default: '',
                                                        examples: ['F'],
                                                        pattern: '[MFO]{1}'
                                                    }
                                                }
                                            },
                                            FilingStatus: {
                                                $id: '#/properties/ITR3/properties/PartA_GEN1/properties/FilingStatus',
                                                type: 'object',
                                                title: 'The Filingstatus Schema',
                                                required: ['FilingDateTime'],
                                                properties: {
                                                    FilingDateTime: {
                                                        $id: '#/properties/ITR3/properties/PartA_GEN1/properties/FilingStatus/properties/FilingDateTime',
                                                        type: 'string',
                                                        title: 'The Filingdatetime Schema',
                                                        default: '',
                                                        examples: ['2018-11-13T20:20:39+00:00'],
                                                        pattern: '^(.*)$'
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    };
                    return itr3Schema;
                };
                return ItrschemaService;
            }());
            ItrschemaService = tslib_1.__decorate([
                core_1.Injectable({
                    providedIn: 'root'
                })
            ], ItrschemaService);
            exports.ItrschemaService = ItrschemaService;
            /***/ 
        }),
        /***/ "./src/app/bulkupload/jsonview/jsonview.component.css": 
        /*!************************************************************!*\
          !*** ./src/app/bulkupload/jsonview/jsonview.component.css ***!
          \************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1bGt1cGxvYWQvanNvbnZpZXcvanNvbnZpZXcuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/bulkupload/jsonview/jsonview.component.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/bulkupload/jsonview/jsonview.component.ts ***!
          \***********************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var dialog_1 = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            var ang_jsoneditor_1 = __webpack_require__(/*! ang-jsoneditor */ "./node_modules/ang-jsoneditor/fesm2015/ang-jsoneditor.js");
            var JsonviewComponent = /** @class */ (function () {
                function JsonviewComponent(dialogRef, data) {
                    this.dialogRef = dialogRef;
                    this.data = data;
                    this.editorOptions = new ang_jsoneditor_1.JsonEditorOptions();
                    this.editorOptions.mode = 'tree'; // set all allowed modes
                    this.editorOptions.expandAll = true;
                    this.jsonData = this.data.jsonData;
                }
                JsonviewComponent.prototype.ngOnInit = function () { };
                return JsonviewComponent;
            }());
            JsonviewComponent.ctorParameters = function () { return [
                { type: dialog_1.MatDialogRef },
                { type: undefined, decorators: [{ type: core_1.Inject, args: [dialog_1.MAT_DIALOG_DATA,] }] }
            ]; };
            tslib_1.__decorate([
                core_1.ViewChild(ang_jsoneditor_1.JsonEditorComponent, { static: true })
            ], JsonviewComponent.prototype, "editor", void 0);
            JsonviewComponent = tslib_1.__decorate([
                core_1.Component({
                    selector: 'app-jsonview',
                    template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./jsonview.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bulkupload/jsonview/jsonview.component.html")).default,
                    styles: [tslib_1.__importDefault(__webpack_require__(/*! ./jsonview.component.css */ "./src/app/bulkupload/jsonview/jsonview.component.css")).default]
                }),
                tslib_1.__param(1, core_1.Inject(dialog_1.MAT_DIALOG_DATA))
            ], JsonviewComponent);
            exports.JsonviewComponent = JsonviewComponent;
            /***/ 
        }),
        /***/ "./src/app/bulkupload/upload/upload.component.css": 
        /*!********************************************************!*\
          !*** ./src/app/bulkupload/upload/upload.component.css ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1bGt1cGxvYWQvdXBsb2FkL3VwbG9hZC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/bulkupload/upload/upload.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/bulkupload/upload/upload.component.ts ***!
          \*******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var app_service_1 = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
            var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var dialog_1 = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            var validation_service_1 = __webpack_require__(/*! ../validation.service */ "./src/app/bulkupload/validation.service.ts");
            var UploadComponent = /** @class */ (function () {
                function UploadComponent(sanitizer, appService, dialogRef, validateService, data) {
                    this.sanitizer = sanitizer;
                    this.appService = appService;
                    this.dialogRef = dialogRef;
                    this.validateService = validateService;
                    this.data = data;
                    this.files = [];
                    this.multiple = false;
                    this.accept = 'application/JSON';
                }
                UploadComponent.prototype.ngOnInit = function () { };
                UploadComponent.prototype.onClick = function (event) {
                    if (this.fileUpload) {
                    }
                    this.fileUpload.nativeElement.click();
                };
                UploadComponent.prototype.onInput = function (event) { };
                UploadComponent.prototype.onFileSelected = function (event) {
                    var files = event.dataTransfer
                        ? event.dataTransfer.files
                        : event.target.files;
                    // tslint:disable-next-line: prefer-for-of
                    for (var i = 0; i < files.length; i++) {
                        var file = files[i];
                        // if(!this.isFileSelected(file)){
                        if (this.validate(file)) {
                            //      if(this.isImage(file)) {
                            file.objectURL = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(files[i]));
                            //      }
                            if (!this.isMultiple()) {
                                this.files = [];
                            }
                            this.files.push(files[i]);
                            //  }
                        }
                        // }
                    }
                };
                UploadComponent.prototype.removeFile = function (event, file) {
                    var ix;
                    // tslint:disable-next-line: no-conditional-assignment
                    if (this.files && -1 !== (ix = this.files.indexOf(file))) {
                        this.files.splice(ix, 1);
                        this.clearInputElement();
                    }
                };
                UploadComponent.prototype.removeSelectedFiles = function () {
                    this.fileUpload.nativeElement.value = '';
                    this.files = [];
                };
                UploadComponent.prototype.clearInputElement = function () {
                    this.fileUpload.nativeElement.value = '';
                };
                UploadComponent.prototype.validate = function (file) {
                    for (var _i = 0, _a = this.files; _i < _a.length; _i++) {
                        var f = _a[_i];
                        if (f.name === file.name &&
                            f.lastModified === file.lastModified &&
                            f.size === f.size &&
                            f.type === f.type) {
                            return false;
                        }
                    }
                    return true;
                };
                UploadComponent.prototype.isMultiple = function () {
                    return this.multiple;
                };
                UploadComponent.prototype.uploadFiles = function (filesData) {
                    var _this = this;
                    var errordata = [];
                    var _loop_1 = function (fileData) {
                        this_1.validateService.getFinalErrorMessage(fileData, this_1.data.schemaType).then(function (data) {
                            errordata = data;
                            _this.appService.uploadFileData(fileData, errordata).subscribe(function (response) {
                                console.log(response);
                                _this.dialogRef.close(response);
                            }, function (error) { return console.log(error); }, function () { return console.log('completed'); });
                        }, function (error) {
                            console.log('error in validating the json files');
                        });
                    };
                    var this_1 = this;
                    for (var _i = 0, filesData_1 = filesData; _i < filesData_1.length; _i++) {
                        var fileData = filesData_1[_i];
                        _loop_1(fileData);
                    }
                };
                return UploadComponent;
            }());
            UploadComponent.ctorParameters = function () { return [
                { type: platform_browser_1.DomSanitizer },
                { type: app_service_1.AppService },
                { type: dialog_1.MatDialogRef },
                { type: validation_service_1.ValidationService },
                { type: undefined, decorators: [{ type: core_1.Inject, args: [dialog_1.MAT_DIALOG_DATA,] }] }
            ]; };
            tslib_1.__decorate([
                core_1.ViewChild('fileUpload', { static: false })
            ], UploadComponent.prototype, "fileUpload", void 0);
            tslib_1.__decorate([
                core_1.Input()
            ], UploadComponent.prototype, "files", void 0);
            tslib_1.__decorate([
                core_1.Input()
            ], UploadComponent.prototype, "multiple", void 0);
            tslib_1.__decorate([
                core_1.Input()
            ], UploadComponent.prototype, "accept", void 0);
            UploadComponent = tslib_1.__decorate([
                core_1.Component({
                    selector: 'app-upload',
                    template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./upload.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bulkupload/upload/upload.component.html")).default,
                    styles: [tslib_1.__importDefault(__webpack_require__(/*! ./upload.component.css */ "./src/app/bulkupload/upload/upload.component.css")).default]
                }),
                tslib_1.__param(4, core_1.Inject(dialog_1.MAT_DIALOG_DATA))
            ], UploadComponent);
            exports.UploadComponent = UploadComponent;
            /***/ 
        }),
        /***/ "./src/app/bulkupload/validation.service.ts": 
        /*!**************************************************!*\
          !*** ./src/app/bulkupload/validation.service.ts ***!
          \**************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            __webpack_require__(/*! ajv */ "./node_modules/ajv/lib/ajv.js");
            var itrschema_service_1 = __webpack_require__(/*! ./itrschema.service */ "./src/app/bulkupload/itrschema.service.ts");
            var ajv = __webpack_require__(/*! ajv */ "./node_modules/ajv/lib/ajv.js");
            var Subject_1 = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
            var ValidationService = /** @class */ (function () {
                function ValidationService(itrSchema) {
                    this.itrSchema = itrSchema;
                    this.tempFileNames = [
                        'dataITR2-2-invalid.json',
                        'dataITR2-3-invalid.json',
                        'dataITR2-4-invalid.json',
                        'dataITR3-2-invalid.json',
                        'dataITR3-3-invalid.json',
                        'dataITR3-4-invalid.json'
                    ];
                    this.ajvValidation = ajv({ allErrors: true });
                }
                ValidationService.prototype.getFinalErrorMessage = function (uploadedFile, schemaType) {
                    var _this = this;
                    var reader = new FileReader();
                    var jsonString = '';
                    var schemaData = schemaType === 'ITR_SCHEMA_2'
                        ? this.itrSchema.getITR2Schema()
                        : this.itrSchema.getITR3Schema();
                    var errorObj = { errorDescription: '' };
                    var sub = new Subject_1.Subject();
                    var tempErrorDataObj = [];
                    return new Promise(function (resolve, reject) {
                        if (_this.tempFileNames.indexOf(uploadedFile.name) > -1) {
                            reader.onloadend = function (e) {
                                if (typeof reader.result === 'string') {
                                    jsonString = JSON.parse(reader.result);
                                }
                                var t0 = performance.now();
                                _this.ajvValidation.validate(schemaData, jsonString);
                                var t1 = performance.now();
                                console.log('Call to doSomething took ' + (t1 - t0) + ' milliseconds.');
                                var errorData = _this.ajvValidation.errors;
                                if (errorData) {
                                    if (errorData && errorData.length > 0) {
                                        for (var _i = 0, errorData_1 = errorData; _i < errorData_1.length; _i++) {
                                            var obj = errorData_1[_i];
                                            errorObj.errorDescription = obj.dataPath + ' , ' + obj.message;
                                            tempErrorDataObj.push(Object.assign({}, errorObj));
                                        }
                                    }
                                }
                                resolve(tempErrorDataObj);
                            };
                            reader.readAsText(uploadedFile);
                            // Make sure to handle error states
                            reader.onerror = function (e) {
                                reject(e);
                            };
                        }
                        else {
                            resolve(tempErrorDataObj);
                        }
                    });
                };
                return ValidationService;
            }());
            ValidationService.ctorParameters = function () { return [
                { type: itrschema_service_1.ItrschemaService }
            ]; };
            ValidationService = tslib_1.__decorate([
                core_1.Injectable({
                    providedIn: 'root'
                })
            ], ValidationService);
            exports.ValidationService = ValidationService;
            /***/ 
        }),
        /***/ "./src/app/confirm/confirm.component.css": 
        /*!***********************************************!*\
          !*** ./src/app/confirm/confirm.component.css ***!
          \***********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpcm0vY29uZmlybS5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/confirm/confirm.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/confirm/confirm.component.ts ***!
          \**********************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var dialog_1 = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            var ConfirmComponent = /** @class */ (function () {
                function ConfirmComponent(dialogRef, message) {
                    this.dialogRef = dialogRef;
                    this.message = message;
                }
                ConfirmComponent.prototype.ngOnInit = function () { };
                ConfirmComponent.prototype.onNoClick = function () {
                    this.dialogRef.close();
                };
                return ConfirmComponent;
            }());
            ConfirmComponent.ctorParameters = function () { return [
                { type: dialog_1.MatDialogRef },
                { type: String, decorators: [{ type: core_1.Inject, args: [dialog_1.MAT_DIALOG_DATA,] }] }
            ]; };
            ConfirmComponent = tslib_1.__decorate([
                core_1.Component({
                    selector: 'app-confirm',
                    template: tslib_1.__importDefault(__webpack_require__(/*! raw-loader!./confirm.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/confirm/confirm.component.html")).default,
                    styles: [tslib_1.__importDefault(__webpack_require__(/*! ./confirm.component.css */ "./src/app/confirm/confirm.component.css")).default]
                }),
                tslib_1.__param(1, core_1.Inject(dialog_1.MAT_DIALOG_DATA))
            ], ConfirmComponent);
            exports.ConfirmComponent = ConfirmComponent;
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            Object.defineProperty(exports, "__esModule", { value: true });
            var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            exports.environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", { value: true });
            var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            var app_module_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            var environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (environment_1.environment.production) {
                core_1.enableProdMode();
            }
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\CODE BASE\OPENHACK-DEVCODE-PACKAGE\OPENHACK-PORJECT\openhack-web\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map